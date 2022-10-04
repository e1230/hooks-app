import { memo } from "react";

export const Small = memo(({value}) => {
    console.log("Me dibuje unu");
  return (
    <small>{value}</small>
  )
})
