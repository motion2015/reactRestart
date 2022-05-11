import { useEffect, useRef, useState } from "react"

export const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () =>  {
    if(element.current) {
      element.current.requestFullscreen() ;
      if(callback && typeof callback === 'function') {
        callback(true)
      }
    }

  }
  const exitFull = () => {
    if(callback && typeof callback === 'function') {
      callback(false)
    }
    return document.exitFullscreen
  }
  return {element, triggerFull, exitFull};
}