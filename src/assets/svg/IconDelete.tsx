import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconDelete = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="url(#pattern0_174_2)" />
    <Defs>
      <Pattern
        id="pattern0_174_2"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_174_2" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_174_2"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR4nO2aS27UUBBFDwz4bYDvfqIM2AkwJWwCiZ9gRSBGYRcwIqAI6IweeoqJgpX+2P3iqrjPka7Ug/Zr+ai6/OwyiIiIiIiIyMbcAl4C34AyMF+7Y+sasobXIwT382rdj+w614CjBqJ/dGvNhjvAu+7EykxzBLwFbkeK/pBARJko9VxDuA78TiCgTJRf3TkrmpmK3rXW8Z5A6gXiTaOdQkma792WM/RiKCIiIjI9ZaZJR7SQomjCZVnRxIu0dZAj6YgWUhRNuCwrmniRtg5yJB3RQoqiCZdlRRMv0tZBjqQjWkhRNOGyrGhOJZwAz4F7XernxQhBiwvWqWsrmlMJVUif/YGyF90xfQ4UzZmkWn0XsQf82UBUrdrHS9a4q2jWit5E9irJlQeK5kxW/XuvYlkbWdYuzvNC0QwS1pc95pgxSce226iTNS3gfBsZ8l23d4xrBfsTVfJsK7oMqOwpKnn2ossWsltLnr3oMkL2ZUjeCdFlgOzLkqzoHoq2dbTHi+FERO84/uH2jvWSvWHZgCkqec9b8O0kL3yoFDdhafWY1AkL0zz4d8LCNKMsJyysnrC0Gs46YeH/iqyy73c52OJ1g/46vm7A1Ug6ooUURRMuy4omXqStgxxJR7SQomjCZVnRxIu0dZAj6ThOIKU0zk8S8jmBmNI4n0jIswRiSuM8ISE3gS8J5JRGOQRukJRHM5F9CDwkObWyn3b97SpdII+Bj127SFvJIiIiIiIiIiIk4C+afpdItrgk2wAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default IconDelete;
