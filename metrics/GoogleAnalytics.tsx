import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

const GoogleAnalyticsComp = () => {
  return (
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
  )
}

export default GoogleAnalyticsComp