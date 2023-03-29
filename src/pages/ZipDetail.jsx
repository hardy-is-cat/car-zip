import React, { useEffect, useState } from 'react';
import Header from '../components/ZipDetail/Header';
import InfoZip from '../components/ZipDetail/InfoZip';
import RecentUpdate from '../components/ZipDetail/RecentUpdate';
import InfoMore from '../components/ZipDetail/InfoMore';
import { SearchRTDB } from '../components/getDB/ReadDB';

export default function ZipDetail() {
  const [parkingInfo, setParkingInfo] = useState({});
  const [parkingDatail, setParkingDatail] = useState({});
  const [latestUpdate, setLatestUpdate] = useState({});
  // const prkplceNo = props.prkplceNo

  useEffect(() => {
    SearchRTDB('prkplceNo', '221-1-000008').then((res) => {
      const data = res[0];
      setParkingInfo({
        name: data.prkplceNm,
        type: data.prkplceSe,
        chargeInfo: data.parkingchrgeInfo,
        count: data.prkcmprt,
        where: data.prkplceType,
        address: data.rdnmadr || data.lnmadr,
        basicTime: data.basicTime,
        basicCharge: data.basicCharge,
        addUnitTime: data.addUnitTime,
        addUnitCharge: data.addUnitCharge,
        phoneNumber: data.phoneNumber,
        latitude: data.latitude,
        longitude: data.longitude,
        parkingNo: data.prkplceNo,
      });
      setParkingDatail({
        basicTime: data.basicTime,
        basicCharge: data.basicCharge,
        addUnitTime: data.addUnitTime,
        addUnitCharge: data.addUnitCharge,
        dayCharge: data.dayCmmtkt,
        monthCharge: data.monthCmmtkt,
        weekdayOpenHhmm: data.weekdayOperOpenHhmm,
        weekdayColseHhmm: data.weekdayOperColseHhmm,
        satOpenHhmm: data.satOperOperOpenHhmm,
        satCloseHhmm: data.satOperCloseHhmm,
        holidayOpenHhmm: data.holidayOperOpenHhmm,
        holidayCloseHhmm: data.holidayCloseOpenHhmm,
        spcmnt: data.spcmnt,
      });
      setLatestUpdate({
        latestUpdate: data.referenceDate,
      });
    });
  }, []);

  return (
    <div>
      <Header title="주차장 상세보기" />
      <InfoZip info={parkingInfo} />
      {/* <Review zipcode={parkingInfo.parkingNo} zipname={parkingInfo.name} /> */}
      <InfoMore info={parkingDatail} />
      <RecentUpdate info={latestUpdate} />
    </div>
  );
}
