import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const CookieIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.875 10.125C9.875 10.9534 9.20343 11.625 8.375 11.625C7.54657 11.625 6.875 10.9534 6.875 10.125C6.875 9.29657 7.54657 8.625 8.375 8.625C9.20343 8.625 9.875 9.29657 9.875 10.125Z"
        fill={iconColor}
      />
      <Path
        d="M9.125 16.875C9.95343 16.875 10.625 16.2034 10.625 15.375C10.625 14.5466 9.95343 13.875 9.125 13.875C8.29657 13.875 7.625 14.5466 7.625 15.375C7.625 16.2034 8.29657 16.875 9.125 16.875Z"
        fill={iconColor}
      />
      <Path
        d="M15.125 17.625C15.9534 17.625 16.625 16.9534 16.625 16.125C16.625 15.2966 15.9534 14.625 15.125 14.625C14.2966 14.625 13.625 15.2966 13.625 16.125C13.625 16.9534 14.2966 17.625 15.125 17.625Z"
        fill={iconColor}
      />
      <Path
        d="M12.875 13.125C13.7034 13.125 14.375 12.4534 14.375 11.625C14.375 10.7966 13.7034 10.125 12.875 10.125C12.0466 10.125 11.375 10.7966 11.375 11.625C11.375 12.4534 12.0466 13.125 12.875 13.125Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2C10.5222 2 8.58879 2.58649 6.9443 3.6853C5.29981 4.78412 4.01809 6.3459 3.26121 8.17317C2.50433 10.0004 2.3063 12.0111 2.69215 13.9509C3.078 15.8907 4.03041 17.6725 5.42894 19.0711C6.82746 20.4696 8.60929 21.422 10.5491 21.8079C12.4889 22.1937 14.4996 21.9957 16.3268 21.2388C18.1541 20.4819 19.7159 19.2002 20.8147 17.5557C21.9135 15.9112 22.5 13.9778 22.5 12C22.5 11.7348 22.3946 11.4804 22.2071 11.2929C22.0196 11.1054 21.7652 11 21.5 11C20.5717 11 19.6815 10.6313 19.0251 9.97487C18.3688 9.3185 18 8.42826 18 7.5C18 6.94772 17.5523 6.5 17 6.5C16.0717 6.5 15.1815 6.13125 14.5251 5.47487C13.8688 4.8185 13.5 3.92826 13.5 3C13.5 2.44772 13.0523 2 12.5 2ZM8.05544 5.34824C9.1205 4.6366 10.337 4.19357 11.6013 4.05064C11.809 5.11827 12.3307 6.10883 13.1109 6.88909C13.9224 7.70056 14.9613 8.23227 16.0778 8.42217C16.2677 9.53869 16.7994 10.5776 17.6109 11.3891C18.3912 12.1693 19.3817 12.691 20.4494 12.8987C20.3064 14.163 19.8634 15.3795 19.1518 16.4446C18.2727 17.7602 17.0233 18.7855 15.5615 19.391C14.0997 19.9965 12.4911 20.155 10.9393 19.8463C9.38743 19.5376 7.96197 18.7757 6.84315 17.6569C5.72433 16.538 4.9624 15.1126 4.65372 13.5607C4.34504 12.0089 4.50347 10.4003 5.10897 8.93853C5.71447 7.47672 6.73985 6.22729 8.05544 5.34824Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default CookieIcon;