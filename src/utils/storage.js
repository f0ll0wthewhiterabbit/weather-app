export const isCacheingTimeElapsed = date => {
  const cacheingTimeMilliseconds = Number(process.env.REACT_APP_CHACHEING_TIME_MINUTES) * 60 * 1000

  return Date.now() - date > cacheingTimeMilliseconds
}
