import React from 'react'

const page = () => {
  return <div></div>
}

export const getStaticPage = ({ locale } : {locale: string}) => {
  return {
    props: {
      locale,
    },
  }
}

export default page;