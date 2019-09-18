import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import StandardLayout from '@/components/layouts/Standard'
import SetupPanel from '@/components/forms/SetupPanel'
import Loader from '@/components/blocks/global/Loader'
import ErrorParagraph from '@/components/blocks/global/ErrorParagraph'
import { getServiceUrl } from '@/utils/services'
import { YANDEX } from '@/constants'

class SetupPage extends Component {
  state = {
    isScriptLoadedWithError: false,
  }

  handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const [scriptTag] = scriptTags
      scriptTag.onload = this.handleScriptLoad
      scriptTag.onerror = this.handleScriptLoadError
    }
  }

  handleScriptLoad = () => {
    this.props.setLocationParams()
  }

  handleScriptLoadError = () => {
    this.setState({ isScriptLoadedWithError: true })
  }

  render () {
    let content

    if (this.state.isScriptLoadedWithError || this.props.isErrorInLoad) {
      const message = 'Something went wrong.'
      content = <ErrorParagraph message={message} />
    } else {
      content = this.props.city ? <SetupPanel /> : <Loader />
    }

    return (
      <>
        <Helmet onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
          <script src={getServiceUrl(YANDEX)} />
        </Helmet>
        <StandardLayout>{content}</StandardLayout>
      </>
    )
  }
}

SetupPage.propTypes = {
  isErrorInLoad: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  setLocationParams: PropTypes.func.isRequired,
}

export default SetupPage
