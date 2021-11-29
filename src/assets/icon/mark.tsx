import React from "react";
// type
import { IconProps } from "types/components/Icon";

// -----------------------------------------------
const MarkIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 32, y: 21 },
}) => {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.0068 10.3569C29.8716 12.7199 27.8186 14.8681 25.0328 16.6077C22.247 18.3472 18.8162 19.6234 15.0498 20.321L0.950439 11.4573C2.05995 9.08935 4.08982 6.93231 6.8569 5.18081C9.62398 3.42932 13.0412 2.13849 16.8002 1.4248L31.0084 10.3569H31.0068ZM18.7506 8.06353L11.5506 12.5899C11.436 12.6596 11.3446 12.7428 11.2818 12.8349C11.219 12.9269 11.186 13.0259 11.1847 13.1261C11.1833 13.2263 11.2138 13.3256 11.2742 13.4183C11.3346 13.511 11.4238 13.5952 11.5365 13.666C11.6492 13.7368 11.7832 13.7928 11.9307 13.8307C12.0782 13.8686 12.2363 13.8876 12.3956 13.8867C12.555 13.8858 12.7124 13.8649 12.8588 13.8253C13.0052 13.7857 13.1375 13.7282 13.2482 13.6561L20.4482 9.12975C20.5661 9.06068 20.6607 8.97739 20.7263 8.88485C20.7919 8.79232 20.8272 8.69242 20.83 8.59113C20.8328 8.48983 20.8032 8.38922 20.7428 8.29528C20.6825 8.20134 20.5927 8.11601 20.4787 8.04438C20.3648 7.97274 20.229 7.91627 20.0796 7.87832C19.9302 7.84038 19.7701 7.82175 19.609 7.82353C19.4479 7.82532 19.289 7.84749 19.1418 7.88873C18.9946 7.92996 18.8621 7.98941 18.7522 8.06353H18.7506Z"
        fill={iColor}
      />
      <path
        d="M0.320003 13.1934L12.2881 20.7172C11.0241 20.85 9.7249 20.9184 8.40009 20.9184H6.80007C4.99658 20.9184 3.26696 20.468 1.9917 19.6663C0.716434 18.8646 0 17.7773 0 16.6435V15.6376C0 14.8048 0.108801 13.988 0.320003 13.1934Z"
        fill={iColor}
      />
      <path
        d="M19.5469 1.01954L31.6526 8.62993C31.8814 7.8021 31.9998 6.95013 31.9998 6.08207V5.0762C31.9998 3.94242 31.2834 2.85507 30.0081 2.05337C28.7328 1.25166 27.0032 0.80127 25.1997 0.80127H23.5997C22.2173 0.80127 20.8637 0.875704 19.5469 1.01954Z"
        fill={iColor}
      />
    </svg>
  );
};
export default MarkIcon;