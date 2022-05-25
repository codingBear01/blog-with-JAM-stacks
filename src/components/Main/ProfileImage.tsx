import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://coresos-phinf.pstatic.net/a/32208c/e_dd4Ud018svc1iftvo2y4y3z6_2jc8mf.jpg?type=cover_a640'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
