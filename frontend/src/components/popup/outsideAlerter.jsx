import React, { useRef, useEffect } from "react";



/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MODIFIED FROM HERE !!!!!!!!!!!!!!!!!!!
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */


/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick(); // call parent callback instead of alert
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

function OutsideAlerter({ children, onOutsideClick }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onOutsideClick);

  return (
    <div id="outside-click" ref={wrapperRef}>
      {children}
    </div>
  );
}

export default OutsideAlerter;
