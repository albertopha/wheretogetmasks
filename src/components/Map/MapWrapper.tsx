
import React, { useState, useEffect } from 'react';
import Map from './components/Map';

declare global {
  interface Window {
      kakao:any;
  }
};

type Options = {
  center: object,
  level: number
};

export default function MapWrapper() {
  const [ search, setSearch ] = useState('');
  const [ location, setLocation ] = useState({ lat: 33.450701, lon: 126.570667 });
  const [ level, setLevel ] = useState(3);

  // useEffect(() => {
  // }, [search]);

  useEffect(() => {
      const container : Object | null = document.getElementById('map') || null; //지도를 담을 영역의 DOM 레퍼런스
      const options : Options = { //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(location.lat, location.lon), //지도의 중심좌표.
          level: level //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [location, level]);

  return (
    <Map />
  );
}