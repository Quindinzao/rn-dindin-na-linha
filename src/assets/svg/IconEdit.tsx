import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconEdit = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_11_104)" />
    <Defs>
      <Pattern
        id="pattern0_11_104"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_11_104" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_11_104"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2cPWtUQRSGX7RJFWInllYBRYS0lim18h/YphC0sAlkGyG/In51AbVwObMRJY1/wT9gYloFRUwMvLKbFG4+1rt7557Jved9YMpl5z6cPXPO7MwFhBBCCCGEEEJcXNjHbSa8ouErDQdM2GXCc27hZum5dQYO8JgJh0zgqWH4w4SV0nNsPUzonSn49FgtPdcIkinZfpIl21GyZE8DDU9qilbOropktyuFDIdKPxfZR3X2jUpfFh3Wl/2s9DPEkG34guDiek6y9xERjgvzkL2DaPBsUU3LfoFIcLKgpmQf0nALUWA1MU3IfoQocLqf+nq2dt2whihwtsWrvmxJRvOyJRnTRvYsOXuqz7Qa5tkMmimyw8C8kiXbUbJkO0qWbEfJsWXTV3JM2SwjWXUyJVmR3DqodCHJnYCKZEnuBFQkS3InoCJZkjsBFcmS3AmoSJbkTqBIdkCSHZBkByTZAUl2QJKdYB/XmfCQCZ/0R6oTw7t3THjTsPCe1/NcaDjAXR0JcIB9XNW5Cydo2NPhFgdoeKcTRG0q+SzQxZxiC6JJcvMLokly9aju4woNd0bNjOElEz5LshN8j2s03JvQ1KgZySp8gEWli/PkbGEpq+w0lkoUySMpa7h0/ILU9ewloGnh+1fKcu7o49EGlCJ5TIphI/TFGg+4jTkmfAt/i6lpOMB9XRlzgIbX/2k0lEbqQsM8E35V6Ogkuw40PKjYNu/lrrNDwYQPE+R+P65GlrmJy6Xn2mpo+HFC8O/RPsVwgdzGXOn5dQYantLwkwkfR2nkLRZKz0kIIYQQQgghBPLwF1c2MzDNfGmFAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default IconEdit;
