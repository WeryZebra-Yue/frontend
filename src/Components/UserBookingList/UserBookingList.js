import React from "react";

import Styles from "./UserBookingList.module.css";
import UserBookingCard from "./UserBookingCard";

const title = "Your Bookings";

function UserBookingList({
  bookings = Array(12)
    .fill({})
    .map((item, index) => ({
      id: index,
      station: `Lorem Ipsum Electric Vehicle Charging Station`,
      date: new Date(),
      address: `${index} Opp Virwani Ind Est Jay Bharat Indl Est 2nd Flr, 44, Goregaon (east), Surat`,
      pointNo: Math.floor(Math.random() * 6),
      slots: [12, 13, 14],
      charges: Math.floor(Math.random() * 100),
      status: index < 2 ? "pending" : "success",
    })),
  openBookingSlide,
}) {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Title}>{title}</div>
      <div className={Styles.ListWrapper}>
        {bookings.map((item, index) => (
          <div
            key={item.id}
            className={Styles.ItemWrapper}
            onClick={() => {
              if (openBookingSlide) {
                openBookingSlide(item.id, index);
              }
            }}
          >
            <UserBookingCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBookingList;