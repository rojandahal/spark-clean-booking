import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import styles from "./Book.module.css";
import emailjs from "@emailjs/browser";

import { Spinner } from "@chakra-ui/react";
// import Spinnerstyle from './Spinner.module.css'
import { IconContext } from "react-icons";
import { BsFillCreditCard2FrontFill, BsFillHousesFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { GiRedCarpet, GiCycle, GiBrickWall } from "react-icons/gi";
import { ImMoveDown } from "react-icons/im";
import { FaThumbsUp, FaHandsHelping } from "react-icons/fa";
import { LuMicrowave } from "react-icons/lu";
import {
  MdOutlineWindow,
  MdOutlineSensorWindow,
  MdBlinds,
  MdBalcony,
  MdDeck,
  MdBathroom,
  MdOutlineBathroom,
} from "react-icons/md";
import { PiTreeEvergreenFill, PiClockCountdownFill } from "react-icons/pi";
import { RiFridgeFill, RiVisaFill } from "react-icons/ri";
import { BiSolidBed } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";

import CardImage from "../images/card.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Book = ({ setAlert }) => {
  // let initialPrice = "119";
  // eslint-disable-next-line
  let initialPrice = "0";
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [Price, setPrice] = useState("0");
  const [cardNumber, setCardNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [Discount, setDiscount] = useState("One Time Cleaning");
  const [afterDiscount, setAfterDiscount] = useState("0");
  const [AfterBed, setAfterBed] = useState(0);
  const [serviceSelected, setserviceSelected] = useState("Flat Rate");
  const [typeOfCleaningSelected, settypeOfCleaningSelected] =
    useState("Standard Cleaning");
  // Type of Service
  const handleChangeService = event => {
    const selectedService = event.target.value;
    setserviceSelected(selectedService);
  };

  // No.of Beds
  const [bedSelected, setBedSelected] = useState("");
  const handleBedonChange = event => {
    const selectedBed = event.target.value;
    setBedSelected(selectedBed);
  };
  // No. of Hours
  const [hoursSelected, setHoursSelected] = useState("");
  const handleHoursonChange = event => {
    const selectedValue = event.target.value;
    setHoursSelected(selectedValue);
  };

  const handleTypeOfCleaning = event => {
    const selectedTypeOfCleaning = event.target.value;
    settypeOfCleaningSelected(selectedTypeOfCleaning);
    setserviceSelected("Flat Rate");
    setBedSelected("");
    setHoursSelected("");
    resetValues();
  };

  const resetValues = () => {
    setValue1(0);
    setValue2(0);
    setValue3(0);
    setValue4(0);
    setValue5(0);
    setValue6(0);
    setValue7(0);
    setValue8(0);
    setValue9("No");
    setValue10("No");
    setValue11("No");
    setValue12(0);
    setValue13(0);
    setValue14(0);
    setValue15(0);
    setValue16(0);
    setValue17(0);
    setValue18(0);
    setShowInput1(false);
    setShowInput2(false);
    setShowInput3(false);
    setShowInput4(false);
    setShowInput5(false);
    setShowInput6(false);
    setShowInput7(false);
    setShowInput8(false);
    setShowInput12(false);
    setShowInput13(false);
    setShowInput14(false);
    setShowInput15(false);
    setShowInput16(false);
    setShowInput17(false);
    setShowInput18(false);
  };

  useEffect(() => {
    if (serviceSelected === "Flat Rate") {
      setHoursSelected("");
    } else {
      setBedSelected("");
    }
  }, [serviceSelected]);

  useEffect(() => {
    let bedPrice = 0;
    if (typeOfCleaningSelected === "Standard Cleaning") {
      switch (bedSelected) {
        case "1 Bed 1 Bath":
          bedPrice = 150;
          break;
        case "2 Bed 1 Bath":
          bedPrice = 162;
          break;
        case "3 Bed 1 Bath":
          bedPrice = 199;
          break;
        case "4 Bed 1 Bath":
          bedPrice = 242;
          break;
        case "5 Bed 1 Bath":
          bedPrice = 265;
          break;
        case "6 Bed 1 Bath":
          bedPrice = 320;
          break;
        default:
          break;
      }
    } else if (typeOfCleaningSelected === "Move In/Out Clean") {
      switch (bedSelected) {
        case "1 Bed 1 Bath":
          bedPrice = 385;
          break;
        case "2 Bed 1 Bath":
          bedPrice = 445;
          break;
        case "3 Bed 1 Bath":
          bedPrice = 545;
          break;
        case "4 Bed 1 Bath":
          bedPrice = 660;
          break;
        case "5 Bed 1 Bath":
          bedPrice = 900;
          break;
        case "6 Bed 1 Bath":
          bedPrice = 1040;
          break;
        case "7 Bed 1 Bath":
          bedPrice = 1350;
          break;
        default:
          break;
      }
    } else if (typeOfCleaningSelected === "Deep Cleaning") {
      switch (bedSelected) {
        case "1 Bed 1 Bath":
          bedPrice = 222;
          break;
        case "2 Bed 1 Bath":
          bedPrice = 230;
          break;
        case "3 Bed 1 Bath":
          bedPrice = 268;
          break;
        case "4 Bed 1 Bath":
          bedPrice = 346;
          break;
        case "5 Bed 1 Bath":
          bedPrice = 396;
          break;
        case "6 Bed 1 Bath":
          bedPrice = 450;
          break;
        case "7 Bed 1 Bath":
          bedPrice = 515;
          break;
        default:
          break;
      }
    }
    setAfterBed(bedPrice);
    setAfterDiscount(bedPrice);
    setPrice(bedPrice);
  }, [bedSelected, typeOfCleaningSelected]);

  useEffect(() => {
    let hourPrice = 0;
    if (typeOfCleaningSelected === "Standard Cleaning") {
      if (hoursSelected === "1.5") {
        hourPrice = 58;
      } else if (hoursSelected === "3") {
        hourPrice = 165;
      } else {
        hourPrice = hoursSelected * 58;
      }
    }
    setAfterBed(hourPrice);
    setAfterDiscount(hourPrice);
    setPrice(hourPrice);
  }, [hoursSelected, typeOfCleaningSelected]);

  // Extras

  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);
  const [showInput5, setShowInput5] = useState(false);
  const [showInput6, setShowInput6] = useState(false);
  const [showInput7, setShowInput7] = useState(false);
  const [showInput8, setShowInput8] = useState(false);
  const [showInput12, setShowInput12] = useState(false);
  const [showInput13, setShowInput13] = useState(false);
  const [showInput14, setShowInput14] = useState(false);
  const [showInput15, setShowInput15] = useState(false);
  const [showInput16, setShowInput16] = useState(false);
  const [showInput17, setShowInput17] = useState(false);
  const [showInput18, setShowInput18] = useState(false);

  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState("No");
  const [value10, setValue10] = useState("No");
  const [value11, setValue11] = useState("No");
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState(0);
  const [value14, setValue14] = useState(0);
  const [value15, setValue15] = useState(0);
  const [value16, setValue16] = useState(0);
  const [value17, setValue17] = useState(0);
  const [value18, setValue18] = useState(0);

  // eslint-disable-next-line
  const [valueTime, setValueTime] = useState("8AM - 5PM");

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);

  const handleInputChange1 = e => {
    setValue1(parseInt(e.target.value));
    if (e.target.value > 6) {
      alert("Please enter a number between 0 and 6.");
      setValue1(0);
    }
  };
  const handleInputChange2 = e => {
    setValue2(parseInt(e.target.value));
    if (e.target.value > 6) {
      alert("Please enter a number between 0 and 6.");
      setValue2(0);
    }
  };
  const handleInputChange3 = e => {
    setValue3(e.target.value);
    if (e.target.value > 6) {
      alert("Please enter a number between 0 and 6.");
      setValue3(0);
    }
  };
  const handleInputChange4 = e => {
    setValue4(e.target.value);
    if (e.target.value > 6) {
      alert("Please enter a number between 0 and 6.");
      setValue4(0);
    }
  };
  const handleInputChange5 = e => {
    setValue5(e.target.value);
  };
  const handleInputChange6 = e => {
    setValue6(e.target.value);
  };
  const handleInputChange7 = e => {
    setValue7(e.target.value);
  };
  const handleInputChange8 = e => {
    setValue8(e.target.value);
  };
  const handleInputChange9 = e => {
    if (e.target.value) {
      setValue9("yes");
    } else {
      setValue9("no");
    }
  };
  const handleInputChange10 = e => {
    if (e.target.value) {
      setValue10("yes");
    } else {
      setValue10("no");
    }
  };
  const handleInputChange11 = e => {
    if (e.target.value) {
      setValue11("yes");
    } else {
      setValue11("no");
    }
  };
  const handleInputChange12 = e => {
    setValue12(e.target.value);
  };
  const handleInputChange13 = e => {
    setValue13(e.target.value);
  };
  const handleInputChange14 = e => {
    setValue14(e.target.value);
  };
  const handleInputChange15 = e => {
    setValue15(e.target.value);
  };
  const handleInputChange16 = e => {
    setValue16(e.target.value);
  };
  const handleInputChange17 = e => {
    setValue17(e.target.value);
  };
  const handleInputChange18 = e => {
    setValue18(e.target.value);
  };

  const handleIconsClick = iconIndex => {
    if (
      (serviceSelected === "Flat Rate" && bedSelected) ||
      (serviceSelected === "Hourly Service" && hoursSelected)
    ) {
      setShowInput1(iconIndex === 1);
      setShowInput2(iconIndex === 2);
      setShowInput3(iconIndex === 3);
      setShowInput4(iconIndex === 4);
      setShowInput5(iconIndex === 5);
      setShowInput6(iconIndex === 6);
      setShowInput7(iconIndex === 7);
      setShowInput8(iconIndex === 8);
      setShowInput12(iconIndex === 12);
      setShowInput13(iconIndex === 13);
      setShowInput14(iconIndex === 14);
      setShowInput15(iconIndex === 15);
      setShowInput16(iconIndex === 16);
      setShowInput17(iconIndex === 17);
      setShowInput18(iconIndex === 18);
      if (iconIndex === 9) {
        setValue9(value9 === "yes" ? "no" : "yes");
      }
      if (iconIndex === 10) {
        setValue10(value10 === "yes" ? "no" : "yes");
      }
      if (iconIndex === 11) {
        setValue11(value11 === "yes" ? "no" : "yes");
      }
    } else {
      alert("Select the Service Hours or No. of Beds First");
    }
  };
  // eslint-disable-next-line
  const [ExtraPrice, setExtraPrice] = useState(0);
  useEffect(() => {
    let updatedExtraPrice = 0;
    //Disinfectant
    if (
      (serviceSelected === "Flat Rate" && bedSelected) ||
      (serviceSelected === "Hourly Service" && hoursSelected)
    ) {
      // CLEAN REFRIGERATOR
      if (value1 > 0) {
        updatedExtraPrice += value1 * 45;
      }

      //OVEN CLEANING
      if (value2 > 0) {
        updatedExtraPrice += value2 * 45;
      }

      //SMALL BALCONY
      if (value3 > 0) {
        updatedExtraPrice += value3 * 32;
      }

      //LARGE BALCONY
      if (value4 > 0) {
        updatedExtraPrice += value4 * 63;
      }

      //INTERIOR WINDOWS
      if (value5 > 0) {
        updatedExtraPrice += value5 * 20;
      }

      //CARPET CLEANING
      if (value6 > 0) {
        updatedExtraPrice += value6 * 90;
      }

      //SPOT CLEAN WALLS
      if (value7 > 0) {
        updatedExtraPrice += value7 * 35;
      }

      //CEILING TO FLOOR GLASS WINDOW
      if (value8 > 0) {
        updatedExtraPrice += value8 * 18;
      }

      //DECK CLEANING
      if (value9 === "yes") {
        updatedExtraPrice += 33;
      }

      //PATIO CLEANING
      if (value10 === "yes") {
        updatedExtraPrice += 33;
      }

      //EXTRA DIRTY
      if (value11 === "yes") {
        updatedExtraPrice += 80;
      }

      //ADDITIONAL FULL BATHROOM - $22
      if (value12 > 0) {
        if (typeOfCleaningSelected === "Standard Cleaning") {
          updatedExtraPrice += value12 * 22;
        } else {
          updatedExtraPrice += value12 * 25;
        }
      }

      //ADDITONAL HALF BATHROOM - $15
      if (value13 > 0) {
        updatedExtraPrice += value13 * 15;
      }

      //EXTERIOR WINDOW
      if (value14 > 0) {
        updatedExtraPrice += value14 * 15;
      }

      //INSIDE CUPBOARD
      if (value15 > 0) {
        updatedExtraPrice += value15 * 55;
      }

      //CHANGE BEDSHEET
      if (value16 > 0) {
        updatedExtraPrice += value16 * 15;
      }

      //WET WIPE BLINDS
      if (value17 > 0) {
        updatedExtraPrice += value17 * 33;
      }

      //EXTRA STOREY
      if (value18 > 0) {
        if (typeOfCleaningSelected === "Standard Cleaning") {
          updatedExtraPrice += value18 * 40;
        }
        if (typeOfCleaningSelected === "Move In/Out Clean") {
          updatedExtraPrice += value18 * 50;
        }
      }
    }
    setExtraPrice(updatedExtraPrice);
    setPrice(AfterBed + updatedExtraPrice);
    setAfterDiscount(AfterBed + updatedExtraPrice);
  }, [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
    value17,
    value18,
    ExtraPrice,
    AfterBed,
    afterDiscount,
    bedSelected,
    hoursSelected,
    serviceSelected,
    typeOfCleaningSelected,
  ]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const today = new Date();
  const minDate = today;
  // Discount
  // eslint-disable-next-line
  const handleDiscountClick = discount => {
    setDiscount(discount);
  };
  // const handleDiscountClick = useCallback((discount) => {
  //     setDiscount(discount);
  // }, []);

  // Card
  const handleChange = e => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 16);
    const spacedInput = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(spacedInput);
  };

  const [phone, setPhone] = useState("");

  const handleChangePhone = e => {
    const inputPhone = e.target.value;
    // Remove any non-digit characters from the input
    const sanitizedPhone = inputPhone.replace(/\D/g, "");

    // Limit the phone number to 10 digits
    if (sanitizedPhone.length <= 10) {
      setPhone(sanitizedPhone);
    }
  };
  // initialPrice = useMemo(() => Price, [Price]);
  // Memoized computation for CCFEE
  const CCFEE = useMemo(
    () => Math.ceil(parseInt(Price, 10) * 0.0125 * 100) / 100,
    [Price]
  );
  //
  const FirstService = Price + CCFEE;

  // eslint-disable-next-line
  initialPrice = Price;

  // const FirstService = useMemo(() => Price + CCFEE, [Price, CCFEE]);

  // initialPrice = Price;
  // setPrice(FirstService);
  // eslint-disable-next-line
  const handleDiscountChange = useCallback(() => {
    // setPrice(FirstService)
    setAfterDiscount(FirstService);
    // setAfterDiscount()
    switch (Discount) {
      case "One Time Cleaning":
        // Code for 'One Time Cleaning' discount
        // setAfterDiscount(Price);
        break;
      case "Weekly - 15% Off":
        // setAfterDiscount(FirstService * 0.9);

        setAfterDiscount(prevAfterDiscount => prevAfterDiscount * 0.85);
        break;
      case "Fortnightly - 10% Off":
        setAfterDiscount(prevAfterDiscount => prevAfterDiscount * 0.9);
        break;
      case "Monthly - 5% Off":
        setAfterDiscount(prevAfterDiscount => prevAfterDiscount * 0.95);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [Discount, Price]);

  // Invoke the handleDiscountChange callback when the Discount changes
  React.useEffect(() => {
    handleDiscountChange();
  }, [handleDiscountChange, handleDiscountClick]);

  const total = useMemo(
    () => {
      if (Discount === "One Time Cleaning") {
        const numericAfterDiscount = parseFloat(Price + CCFEE);
        return isNaN(numericAfterDiscount)
          ? 0
          : Number(numericAfterDiscount.toFixed(2));
      } else {
        const numericAfterDiscount = parseFloat(afterDiscount);
        return isNaN(numericAfterDiscount)
          ? 0
          : Number(numericAfterDiscount.toFixed(2));
      }
    },
    // eslint-disable-next-line
    [afterDiscount, Price, Discount]
  );

  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yw86jks",
        "template_1t1nk7w",
        form.current,
        "bV-QdQuVmmX6e7Rv6"
      )
      .then(
        result => {
          console.log(result.text);
          console.log("EMAIL SENT TO ADMIN");
          setAlert(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  const sendEmailClient = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yw86jks",
        "template_s08w5ud",
        form.current,
        "bV-QdQuVmmX6e7Rv6"
      )
      .then(
        result => {
          console.log(result.text);
          console.log("EMAIL SENT TO CLIENT");
        },
        error => {
          console.log(error.text);
        }
      );
  };
  const handleSubmitEmail = e => {
    e.preventDefault(); // Prevents the default form submission behavior

    setLoading(true);
    sendEmail(e);
    sendEmailClient(e);

    //Set loading and alert false after email
    setTimeout(() => {
      setLoading(false);
      setAlert(false);
    }, 5000);

    form.current.reset();
  };
  return (
    <>
      <div className={styles.outerSection}>
        <div className={styles.LeftSection}>
          <div className={styles.TopTextsection}>
            <h1>Accepting Booking Requests</h1>
            <p>
              We are currently open and have limited space for new customers!
              Book now to avoid missing out.
            </p>
            <p>
              Please note - Our services are available from 8am - 5pm. We will
              contact you for specific time slot after booking.
            </p>
            <p>
              All the fields marked * have to be filled for booking
              confirmation.{" "}
            </p>
            <p>
              If you encounter any problems in the form below, please call us on
              0493 922 822.
            </p>
            {/* <p>
              COVID-Safe Plan All members of our team will strictly follow
              government COVID regulations current at the time of your booking.
            </p> */}
          </div>
          <form
            ref={form}
            onSubmit={e => handleSubmitEmail(e)}
          >
            <div className={styles.Step}>
              <h2>STEP 1: Who You Are</h2>
              <p>
                This information will be used to contact you about your service
              </p>
              <div className={styles.PersonalDiv}>
                <div className={styles.griditem}>
                  <input
                    type='text'
                    name='Fname'
                    placeholder='First Name*'
                    required
                  />
                </div>
                <div className={styles.griditem}>
                  <input
                    type='text'
                    name='Lname'
                    placeholder='Last Name*'
                    required
                  />
                </div>
                <div className={styles.griditem}>
                  <input
                    type='email'
                    name='Email'
                    placeholder='Email*'
                    required
                  />
                </div>
                <div className={styles.griditem}>
                  <input
                    type='tel' // Use type="tel" for phone numbers
                    name='Phone'
                    placeholder='Phone*'
                    pattern='\d{10}'
                    title='Phone number must be exactly 10 digits'
                    value={phone}
                    onChange={handleChangePhone}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.Step}>
              <h2>STEP 2: Your Address</h2>
              <p>Where would you like us to clean?</p>
              <div className={styles.HomeDiv}>
                <div className={`${styles.griditem} ${styles.span3}`}>
                  <input
                    type='text'
                    name='Address'
                    placeholder='Address*'
                    required
                  />
                </div>
                <div className={styles.griditem}>
                  <input
                    type='number'
                    name='Apt_UnitNo'
                    placeholder='Apt/UnitNo.'
                    required
                  />
                </div>
                <div className={`${styles.griditem} ${styles.span2}`}>
                  <input
                    type='text'
                    name='Suburb'
                    placeholder='Suburb*'
                    required
                  />
                </div>
                <div className={styles.griditem}>
                  <select
                    id='State'
                    name='State'
                  >
                    <option
                      value=''
                      disabled
                      selected
                    >
                      State*
                    </option>
                    <option value='saab'>ACT</option>
                    <option value='fiat'>NSW</option>
                    <option value='audi'>NT</option>
                    <option value='audi'>QLD</option>
                    <option value='audi'>SA</option>
                    <option value='audi'>TAS</option>
                    <option value='audi'>VIC</option>
                    <option value='audi'>WA</option>
                  </select>
                </div>
                <div className={styles.griditem}>
                  <input
                    type='text'
                    name='Post_Code'
                    placeholder='Post Code*'
                    pattern='[0-9]+'
                    title='Post Code must contain only numeric characters (0-9)'
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.Step}>
              <h2>STEP 3: Choose Your Service</h2>

              <div className={styles.ServiceDiv}>
                <div className={`${styles.griditem} ${styles.span2}`}>
                  <p style={{ marginBottom: "10px" }}>
                    Pick the type of Service you want.
                  </p>
                  <select
                    id='TypeOfCleaning'
                    name='TypeOfCleaning'
                    onChange={handleTypeOfCleaning}
                    value={typeOfCleaningSelected}
                    required
                  >
                    <option
                      value=''
                      disabled
                      hidden
                    >
                      Select Type of Cleaning
                    </option>
                    <option value='Standard Cleaning'>Standard Cleaning</option>
                    <option value='Move In/Out Clean'>Move In/Out Clean</option>
                    <option value='Deep Cleaning'>Deep Cleaning</option>
                  </select>
                </div>

                {/* IF HOURLY SERVICE SELECTED */}

                {typeOfCleaningSelected === "Standard Cleaning" ? (
                  <>
                    <div className={`${styles.griditem} ${styles.span2}`}>
                      <p style={{ marginBottom: "10px" }}>
                        Do you want a Hourly Service or Flat Rates . Choose Here
                      </p>
                      <select
                        id='ServiceType'
                        name='ServiceType'
                        onChange={handleChangeService}
                        value={serviceSelected}
                        required
                      >
                        <option
                          value=''
                          disabled
                          hidden
                        >
                          Select your Service
                        </option>
                        <option value='Flat Rate'>Flat Rate</option>

                        <option value='Hourly Service'>
                          Hourly Service - $58/h
                        </option>
                      </select>
                    </div>
                    <div
                      className={
                        serviceSelected === "Hourly Service"
                          ? styles.griditem
                          : `${styles.griditem} ${styles.noneDisplay}`
                      }
                    >
                      <select
                        id='BedsTime'
                        name='Hours'
                        onChange={handleHoursonChange}
                        value={hoursSelected}
                        disabled={serviceSelected !== "Hourly Service"}
                      >
                        <option
                          value=''
                          disabled
                          hidden
                        >
                          Select No. of Hours
                        </option>
                        <option value='1.5'>1.5 Hour</option>
                        <option value='2'>2 Hours</option>
                        <option value='2.5'>2.5 Hours</option>
                        <option value='3'>3 Hours</option>
                        <option value='3.5'>3.5 Hours</option>
                        <option value='4'>4 Hours</option>
                        <option value='4.5'>4.5 Hours</option>
                        <option value='5'>5 Hours</option>
                        <option value='5.5'>5.5 Hours</option>
                        <option value='6'>6 Hours</option>
                        <option value='6.5'>6.5 Hours</option>
                        <option value='7'>7 Hours</option>
                        <option value='7.5'>7.5 Hours</option>
                        <option value='8'>8 Hours</option>
                        <option value='8.5'>8.5 Hours</option>
                        <option value='9'>9 Hours</option>
                        <option value='9.5'>9.5 Hours</option>
                        <option value='10'>10 Hours</option>
                        <option value='10.5'>10.5 Hours</option>
                        <option value='11'>11 Hours</option>
                        <option value='11.5'>11.5 Hours</option>
                        <option value='12'>12 Hours</option>
                        <option value='12.5'>12.5 Hours</option>
                        <option value='13'>13 Hours</option>
                        <option value='13.5'>13.5 Hours</option>
                        <option value='14'>14 Hours</option>
                        <option value='14.5'>14.5 Hours</option>
                        <option value='15'>15 Hours</option>
                        <option value='15.5'>15.5 Hours</option>
                        <option value='16'>16 Hours</option>
                        <option value='16.5'>16.5 Hours</option>
                        <option value='17'>17 Hours</option>
                        <option value='17.5'>17.5 Hours</option>
                        <option value='18'>18 Hours</option>
                        <option value='18.5'>18.5 Hours</option>
                        <option value='19'>19 Hours</option>
                        <option value='19.5'>19.5 Hours</option>
                        <option value='20'>20 Hours</option>
                      </select>
                    </div>
                  </>
                ) : (
                  /* IF OTHER CLEANING IS SELECTED */
                  <div className={`${styles.griditem} ${styles.span2}`}>
                    <p style={{ marginBottom: "10px" }}>
                      Do you want a Hourly Service or Flat Rates . Choose Here
                    </p>
                    <select
                      id='ServiceType'
                      name='ServiceType'
                      onChange={handleChangeService}
                      value={"Flat Rate"}
                      required
                    >
                      <option
                        value=''
                        disabled
                        hidden
                      >
                        Select your Service
                      </option>
                      <option value='Flat Rate'>Flat Rate</option>
                      {/* {typeOfCleaningSelected === "Standard Cleaning" && (
                          <option value='Hourly Service'>
                            Hourly Service - $58/h
                          </option>
                        )} */}
                    </select>
                  </div>
                )}
                {/* FLAT RATE */}
                <div
                  className={
                    serviceSelected === "Flat Rate"
                      ? styles.griditem
                      : `${styles.griditem} ${styles.noneDisplay}`
                  }
                >
                  <select
                    id='Beds'
                    name='No_of_Bed'
                    onChange={handleBedonChange}
                    value={bedSelected}
                    disabled={serviceSelected !== "Flat Rate"}
                  >
                    <option
                      value=''
                      disabled
                      hidden
                    >
                      Select No. of Beds
                    </option>
                    <option value='1 Bed 1 Bath'>1 Bed 1 Bath</option>
                    <option value='2 Bed 1 Bath'>2 Bed 1 Bath </option>
                    <option value='3 Bed 1 Bath'>3 Bed 1 Bath</option>
                    <option value='4 Bed 1 Bath'>4 Bed 1 Bath</option>
                    <option value='5 Bed 1 Bath'>5 Bed 1 Bath</option>
                    <option value='6 Bed 1 Bath'>6 Bed 1 Bath</option>
                    {typeOfCleaningSelected !== "Standard Cleaning" && (
                      <option value='7 Bed 1 Bath'>7 Bed 1 Bath</option>
                    )}
                  </select>
                </div>
              </div>
            </div>

            {typeOfCleaningSelected !== "Deep Cleaning" &&
            serviceSelected === "Flat Rate" ? (
              <div className={styles.Step}>
                <h2>STEP 4-1: Select Extras</h2>
                <strong>
                  Please note for move-out/in cleans - inside oven and inside
                  cabinets are included as standard. Other extras need to be
                  booked.
                </strong>
                <p>
                  For flat rates we strongly recommend the "Spring Clean" extra
                  or when your house has not been fully cleaned for more then
                  4-6f weeks to allow us extra time to remove built up
                  dust/dirt/grime.
                </p>
                <div className={styles.ExtraDiv}>
                  <IconContext.Provider value={{ size: "70%" }}>
                    {/* ADDITIONAL FULL BATHROOM CLEAN */}
                    {typeOfCleaningSelected === "Standard Cleaning" ||
                    typeOfCleaningSelected === "Move In/Out Clean" ? (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput12
                              ? value12 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(12)}
                        >
                          <MdBathroom />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput12
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange12}
                          min='0'
                          max='6'
                          name='FullBathroom'
                          value={value12}
                        />
                        <p>
                          Additional Full Bathrom -{" "}
                          {typeOfCleaningSelected === "Standard Cleaning"
                            ? "$22 per"
                            : "$25 per"}{" "}
                          ({value12})
                        </p>
                        <span className={styles.tooltiptext}>
                          No more dreaded blind-cleaning – we've got your back!
                          🙌 We'll delicately wipe down your blinds with care.
                          However, if they're super thin metallic venetian
                          blinds, we may not be able to clean them without
                          risking damage. Don't worry, we'll chat with you on
                          the day if needed to figure it out! 😊
                        </span>
                      </div>
                    ) : null}

                    {/* ADDITIONAL HALF BATHROOM CLEAN */}

                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput13
                              ? value13 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(13)}
                        >
                          <MdOutlineBathroom />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput13
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange13}
                          min='0'
                          max='6'
                          name='HalfBathroom'
                          value={value13}
                        />
                        <p>Additional Half Bathroom - $15 ({value13})</p>
                        <span className={styles.tooltiptext}>
                          Cleaning walls isn't part of our flat rates or spring
                          cleans. For move-out cleans, if your walls have more
                          than just a couple of pesky scuff marks, make sure to
                          choose this extra for each wall that needs some TLC.
                          Let's get those walls looking fab again! 🌟
                        </span>
                      </div>
                    )}

                    {/* CLEAN REFRIGERATOR */}
                    <div
                      className={
                        typeOfCleaningSelected === "Standard Cleaning"
                          ? `${styles.griditem} ${styles.tooltip}`
                          : styles.noneDisplay
                      }
                    >
                      <div
                        className={
                          !showInput1
                            ? value1 > 0
                              ? `${styles.icons} ${styles.clicked}`
                              : styles.icons
                            : styles.noneDisplay
                        }
                        onClick={() => handleIconsClick(1)}
                      >
                        <RiFridgeFill />
                      </div>
                      <input
                        type='number'
                        className={
                          showInput1 ? styles.spinnerinput : styles.noneDisplay
                        }
                        onChange={handleInputChange1}
                        min='0'
                        max='6'
                        name='CleanRefrigerator'
                        value={value1}
                        id='1'
                      />
                      <p>Clean Refrigerator - $45 ({value1})</p>
                      <span className={styles.tooltiptext}>
                        Our cleaning teams are all set to battle germs with
                        anti-viral and disinfectant-grade products! 🦠💥 Just
                        give us a heads-up if you have any sensitive surfaces,
                        like marble, so we can take extra care to keep your home
                        safe and squeaky clean!"
                      </span>
                    </div>

                    {/* OVEN CLEANING */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput2
                              ? value2 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(2)}
                        >
                          <LuMicrowave />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput2
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange2}
                          min='0'
                          max='6'
                          name='OvenCleaning'
                          value={value2}
                        />
                        <p>Oven Cleaning - $45 ({value2})</p>
                        <span className={styles.tooltiptext}>
                          For flat rates we strongly recommend the "Spring
                          Clean" extra for when your house has not been fully
                          cleaned for more then 4-6 weeks to allow us extra time
                          to remove built up dust/dirt/grime
                        </span>
                      </div>
                    )}

                    {/* SMALL BALCONY */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput3
                              ? value3 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(3)}
                        >
                          <MdBalcony />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput3
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange3}
                          min='0'
                          max='6'
                          name='SmallBalcony'
                          value={value3}
                        />
                        <p>Small Balcony - $32 ({value3})</p>
                        <span className={styles.tooltiptext}>
                          Seamless Move In/Out cleaning, even with a full house!
                          🧹 Our meticulous team handles every detail, leaving
                          no mess unaddressed. Bid farewell to dust, grime, and
                          stress! 😊 Enjoy a fresh and welcoming home, ready for
                          a smooth transition! ✨
                        </span>
                      </div>
                    )}

                    {/* LARGE BALCONY */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput4
                              ? value4 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(4)}
                        >
                          <MdBalcony />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput4
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange4}
                          min='0'
                          max='6'
                          name='LargeBalcony'
                          value={value4}
                        />
                        <p>Large Balcony - $63 ({value4})</p>
                        <span className={styles.tooltiptext}>
                          Seamless Move In/Out cleaning, even with a full house!
                          🧹 Our meticulous team handles every detail, leaving
                          no mess unaddressed. Bid farewell to dust, grime, and
                          stress! 😊 Enjoy a fresh and welcoming home, ready for
                          a smooth transition! ✨
                        </span>
                      </div>
                    )}

                    {/* INTERIOR WINDOW */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput5
                              ? value5 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(5)}
                        >
                          <MdOutlineWindow />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput5
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange5}
                          min='0'
                          max='6'
                          name='InteriorWindow'
                          value={value5}
                        />
                        <p>Interior Window ($20/room)({value5})</p>
                        <span className={styles.tooltiptext}>
                          Price for 1-2 Bedroom : $99, 3-4 Bedroom : $129, 5-6
                          Bedroom : $169 Please note we can not move heavy
                          furniture (without assistance)
                        </span>
                      </div>
                    )}

                    {/* CARPET STEAM CLEAN */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput6
                              ? value6 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(6)}
                        >
                          <GiRedCarpet />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput6
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange6}
                          min='0'
                          max='6'
                          name='CarpetSteamClean'
                          value={value6}
                        />

                        <p>Carpet Steam Clean - $90 ({value6})</p>
                        <span className={styles.tooltiptext}>
                          Ready for some oven cleaning magic? 🧙‍♂️✨ Our team will
                          wave their magic wands (a.k.a. spray bottles) and
                          scrub away the grime, making your oven sparkle again!
                          🌟 Note: No disassembly and older ovens might have
                          sparkle limits.
                        </span>
                      </div>
                    )}

                    {/* CEILING TO FLOOR GLASS WINDOW */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput8
                              ? value8 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(8)}
                        >
                          <ImMoveDown />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput8
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange8}
                          min='0'
                          max='10'
                          name='CeilingFloor'
                          value={value8}
                        />

                        <p>
                          Ceiling to Floor Glass Window ($18/glass) ({value8})
                        </p>
                        <span className={styles.tooltiptext}>
                          Ready for some oven cleaning magic? 🧙‍♂️✨ Our team will
                          wave their magic wands (a.k.a. spray bottles) and
                          scrub away the grime, making your oven sparkle again!
                          🌟 Note: No disassembly and older ovens might have
                          sparkle limits.
                        </span>
                      </div>
                    )}

                    {/* DECK CLEANING */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            value9 === "yes"
                              ? `${styles.icons} ${styles.clicked}`
                              : styles.icons
                          }
                          onClick={() => handleIconsClick(9)}
                        >
                          <MdDeck />
                        </div>
                        <input
                          type='text'
                          className={styles.spinnerinput}
                          onChange={handleInputChange9}
                          min='0'
                          name='Deck'
                          value={value9}
                          style={{ display: "none" }}
                        />
                        <p>Deck Cleaning - $33</p>
                        <span className={styles.tooltiptext}>
                          Experience the transformation of all your drawers and
                          cabinets with our professional cleaning service! 🧽
                          Say goodbye to hidden dirt and grime! 😌 Enjoy clean
                          and organized storage spaces that are ready to
                          accommodate your belongings effortlessly! ✨
                        </span>
                      </div>
                    )}

                    {/* EXTRA DIRTY */}
                    {typeOfCleaningSelected === "Move In/Out Clean" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            value11 === "yes"
                              ? `${styles.icons} ${styles.clicked}`
                              : styles.icons
                          }
                          onClick={() => handleIconsClick(11)}
                        >
                          <MdOutlineWindow />
                        </div>
                        <input
                          type='text'
                          className={styles.spinnerinput}
                          onChange={handleInputChange11}
                          min='0'
                          name='ExtraDirty'
                          value={value11}
                          style={{ display: "none" }}
                        />
                        <p>Extra Dirty - $80</p>
                        <span className={styles.tooltiptext}>
                          Bring the sunshine back into your home! 😎☀️ Just a
                          heads-up: please remove fly-screens or any other
                          obstacles before our visit, as we avoid handling them
                          to prevent damage. With a clear path, we'll make your
                          windows sparkle! ✨
                        </span>
                      </div>
                    )}

                    {/* EXTRA STOREY */}
                    {typeOfCleaningSelected === "Standard Cleaning" ||
                    typeOfCleaningSelected === "Move In/Out Clean" ? (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput18
                              ? value18 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(18)}
                        >
                          <GiFamilyHouse />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput18
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange18}
                          min='0'
                          max='6'
                          name='ExtraStorey'
                          value={value18}
                        />
                        <p>
                          Extra Storey
                          {typeOfCleaningSelected === "Standard Cleaning"
                            ? "($40/storey)"
                            : "($50/storey)"}
                          ({value18})
                        </p>
                        <span className={styles.tooltiptext}>
                          Restore the sunshine to your house! Just so you know,
                          before our visit, please take down any fly-screens or
                          other barriers because we try to avoid handling them
                          to prevent Our team will make your windows with a
                          clear path. sparkle! ✨
                        </span>
                      </div>
                    ) : null}

                    {/* EXTERIOR WINDOW */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput14
                              ? value14 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(14)}
                        >
                          <MdOutlineSensorWindow />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput14
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange14}
                          min='0'
                          max='10'
                          name='ExteriorWindow'
                          value={value14}
                        />
                        <p>Exterior Window ($15/window) ({value14})</p>
                        <span className={styles.tooltiptext}>
                          We'll give your balcony a spiffy sweep, tidy, and mop!
                          Please note this doesn't cover glass balustrades or
                          exterior glass of the balcony doors. Need those
                          cleaned too? Add inside windows on top of the balcony
                          extra or give our office a call for a chat 🧹🙂
                        </span>
                      </div>
                    )}

                    {/* INSIDE CUPBOARD */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput15
                              ? value15 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(15)}
                        >
                          <RiFridgeFill />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput15
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange15}
                          min='0'
                          max='6'
                          name='InsideCupboard'
                          value={value15}
                        />

                        <p>Inside Cupboard - $55 (Must be Empty) ({value15})</p>
                        <span className={styles.tooltiptext}>
                          Chill out while we freshen up your fridge! 🥶 Our team
                          will carefully remove and clean the shelves, drawers,
                          and compartments, leaving your fridge spotless and
                          hygienic. Say goodbye to hidden spills and funky
                          smells! 😇
                        </span>
                      </div>
                    )}

                    {/* CHANGE BEDSHEET */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput16
                              ? value16 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(16)}
                        >
                          <BiSolidBed />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput16
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange16}
                          min='0'
                          max='10'
                          name='ChangeBedsheet'
                          value={value16}
                        />

                        <p>Change Bedsheet ({value16})</p>
                        <span className={styles.tooltiptext}>
                          Chill out while we freshen up your fridge! 🥶 Our team
                          will carefully remove and clean the shelves, drawers,
                          and compartments, leaving your fridge spotless and
                          hygienic. Say goodbye to hidden spills and funky
                          smells! 😇
                        </span>
                      </div>
                    )}

                    {/* WET WIPE BLINDS */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput17
                              ? value17 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(17)}
                        >
                          <MdBlinds />
                        </div>
                        <input
                          type='number'
                          className={
                            showInput17
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange17}
                          min='0'
                          max='10'
                          name='WetWipeBlinds'
                          value={value17}
                        />
                        <p>Wet Wipe Blinds - $33/fixture ({value17})</p>
                        <span className={styles.tooltiptext}>
                          Transform your bed with fresh linens for just $10/bed!
                          🛏️ Slip into a world of comfort as we swap out your
                          old sheets for new ones, making bedtime even more
                          dreamy. Sweet dreams are just a linen change away!
                        </span>
                      </div>
                    )}

                    {/* SPOT CLEAN WALLS */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            !showInput7
                              ? value7 > 0
                                ? `${styles.icons} ${styles.clicked}`
                                : styles.icons
                              : styles.noneDisplay
                          }
                          onClick={() => handleIconsClick(7)}
                        >
                          <GiBrickWall />
                        </div>

                        <input
                          type='number'
                          className={
                            showInput7
                              ? styles.spinnerinput
                              : styles.noneDisplay
                          }
                          onChange={handleInputChange7}
                          min='0'
                          max='6'
                          name='SpotCleanWalls'
                          value={value7}
                        />

                        <p>Spot Clean Walls ($35/room) ({value7})</p>
                        <span className={styles.tooltiptext}>
                          Ready for some oven cleaning magic? 🧙‍♂️✨ Our team will
                          wave their magic wands (a.k.a. spray bottles) and
                          scrub away the grime, making your oven sparkle again!
                          🌟 Note: No disassembly and older ovens might have
                          sparkle limits.
                        </span>
                      </div>
                    )}

                    {/* PATIO */}
                    {typeOfCleaningSelected === "Standard Cleaning" && (
                      <div className={`${styles.griditem} ${styles.tooltip}`}>
                        <div
                          className={
                            value10 === "yes"
                              ? `${styles.icons} ${styles.clicked}`
                              : styles.icons
                          }
                          onClick={() => handleIconsClick(10)}
                        >
                          <PiTreeEvergreenFill />
                        </div>
                        <input
                          type='text'
                          className={styles.spinnerinput}
                          onChange={handleInputChange10}
                          name='Patio'
                          value={value10}
                          style={{ display: "none" }}
                        />
                        <p>Patio - $33</p>
                        <span className={styles.tooltiptext}>
                          Need a last-minute cleaning hero? 🦸‍♂️ No worries! For a
                          $20 Same Day Booking Fee, we'll swoop in and save the
                          day, getting your space spick and span in no time! To
                          make a booking on the same day, you will actually need
                          to call our friendly office team on 0403582550 📞
                        </span>
                      </div>
                    )}
                  </IconContext.Provider>
                </div>
              </div>
            ) : null}

            {/* TIME SELECTION */}
            <div className={styles.Step}>
              <h2>
                {typeOfCleaningSelected !== "Deep Cleaning" &&
                serviceSelected === "Flat Rate"
                  ? "STEP 4-2: "
                  : "STEP 4-1: "}
                When would you like us to arrive?
              </h2>
              <p>
                Note: Full address must be entered above for booking spots to
                populate.
              </p>
              <p>
                The cleaners will arrive between the time's allocated. If you
                are able to provide remote access (e.g. a key) please select the
                larger window of time to help us plan.
              </p>{" "}
              <p>
                If you require an exact arrival time, please make a note in the
                comments below.
              </p>
              {/* <p>
                We may be in touch to request a different date/time before
                confirming your service.
              </p> */}
              <div className={styles.PersonalDiv}>
                <div className={styles.griditem}>
                  {/* <input type='text' name="Fname" placeholder='Click to Choose a Date' required /> */}
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText='Choose your date'
                    className={styles.DatePicker}
                    minDate={minDate}
                    name='Date'
                    value={selectedDate}
                    required
                  />
                  <p
                    id={styles.dateDiv}
                    style={{ fontSize: "15px" }}
                  >
                    MM / DD / YYYY
                  </p>
                </div>
                <div className={styles.griditem}>
                  {/* <select id="Time" name="Time" >
                                        {/* <option value="" disabled hidden>Select a time</option> */}
                  {/* {selectedDate && ( */}
                  {/* <>
                                            <option value="8am-7pm">8am - 7pm</option>
                                        </> */}

                  {/* </select> */}
                  <input
                    type='text'
                    name='Time'
                    placeholder='Time'
                    value={valueTime}
                    disabled
                  />
                  <p style={{ fontSize: "15px" }}>
                    We will get back to you shortly for time confirmation.
                  </p>
                </div>
              </div>
            </div>

            {/* TIME SELECTION */}
            <div className={styles.Step}>
              <h2>STEP 5: How often?</h2>
              <p>
                It's all about matching you with the perfect clean for your
                home. Scheduling is flexible. Cancel or reschedule anytime.
              </p>
              <strong>
                **Please note discounts occur after first service**
              </strong>
              <div className={styles.DiscountDiv}>
                <div className={styles.griditem}>
                  <div
                    className={
                      Discount === "One Time Cleaning"
                        ? ` ${styles.ColorDiv}`
                        : styles.Discountbtn
                    }
                    onClick={() => handleDiscountClick("One Time Cleaning")}
                  >
                    One Time Cleaning
                  </div>
                </div>
                <div className={styles.griditem}>
                  <div
                    className={
                      Discount === "Weekly - 15% Off"
                        ? ` ${styles.ColorDiv}`
                        : styles.Discountbtn
                    }
                    onClick={() => handleDiscountClick("Weekly - 15% Off")}
                  >
                    Weekly Clean - 15% Off
                  </div>
                </div>
                <div className={styles.griditem}>
                  <div
                    className={
                      Discount === "Fortnightly - 10% Off"
                        ? ` ${styles.ColorDiv}`
                        : styles.Discountbtn
                    }
                    onClick={() => handleDiscountClick("Fortnightly - 10% Off")}
                  >
                    Fortnightly Clean - 10% Off
                  </div>
                </div>
                <div className={styles.griditem}>
                  <div
                    className={
                      Discount === "Monthly - 5% Off"
                        ? ` ${styles.ColorDiv}`
                        : styles.Discountbtn
                    }
                    onClick={() => handleDiscountClick("Monthly - 5% Off")}
                  >
                    Monthly Clean - 5% Off
                  </div>
                </div>
                <input
                  hidden
                  name='Discount'
                  value={Discount}
                />
              </div>
            </div>
            <div className={`${styles.Step} ${styles.ExtraStep}`}>
              <h2>Important Extra Information</h2>
              <p>
                Some of our cleaning teams have allergies or other reasons why
                they can't attend homes withs pets.
              </p>
              <div className={styles.ExtraInfoDiv}>
                <div className={styles.griditem}>
                  <label>Do you have pets? *</label>

                  <select
                    id='Pets'
                    name='Pets'
                  >
                    <option value=''></option>

                    <option value='Dog'>Yes - Dogs</option>
                    <option value='Cat'>Yes - Cats</option>
                    <option value='No'>No Pets</option>
                    <option value='Dog&Cat'>Yes - Dogs & Cats</option>
                    <option value='Others'>Yes - Others</option>
                  </select>
                </div>
                <p>
                  If you have time, please let us know as much of the below as
                  possible. If not, our team may need to get in touch with you
                  prior to confirming your service.
                </p>
                <div className={styles.griditem}>
                  <label>How will we get inside your home?</label>
                  <select
                    id='Howto'
                    name='How_to_get_inside_home'
                  >
                    <option value=''></option>

                    <option value='I will be home'>I will be home</option>
                    <option value='I will leave a key'>
                      I will leave a key
                    </option>
                    <option value='I will provide a lock box/access key'>
                      I will provide a lock box/access key
                    </option>
                    <option value='Other - Please Explain Below'>
                      Other - Please Explain Below
                    </option>
                  </select>
                </div>
                <div className={styles.griditem}>
                  <label>Where can we park?</label>
                  <select
                    id='Parking'
                    name='Parking'
                  >
                    <option value=''></option>

                    <option value='I will provide parking on-site'>
                      I will provide parking on-site
                    </option>
                    <option value='Free Street Parking'>
                      Free Street Parking
                    </option>
                    <option value='Paid Street Parking'>
                      Paid Street Parking
                    </option>
                    <option value='Other - Please Explain Below'>
                      Other - Please Explain Below
                    </option>
                  </select>
                </div>
                <div className={styles.griditem}>
                  <label>Is your date/time flexible?</label>
                  <select
                    id='State'
                    name='DateTimeFlexibility'
                  >
                    <option value=''></option>

                    <option value='Yes - Date and Time'>
                      Yes - Date and Time
                    </option>
                    <option value='Yes - Date but not Time'>
                      Yes - Date but not Time
                    </option>
                    <option value='Yes - Time but not Date'>
                      Yes - Time but not Date
                    </option>
                    <option value='No - Not Flexible'>No - Not Flexible</option>
                    <option value='Yes - See notes'>Yes - See notes</option>
                  </select>
                </div>
                <div className={styles.griditem}>
                  <label>
                    For regular services, if your Standard Cleaning team is not
                    available, how would you like us to proceed with your
                    service?
                  </label>
                  <select
                    id='RegularService'
                    name='RegularService'
                  >
                    <option value=''></option>

                    <option value='Arrange a cleaner to cover and do not bother you'>
                      Arrange a cleaner to cover and do not bother you
                    </option>
                    <option value='Arrange a cleaner to cover and give you the heads up'>
                      Arrange a cleaner to cover and give you the heads up
                    </option>
                    <option value='Contact you to discuss options'>
                      Contact you to discuss options
                    </option>
                  </select>
                </div>
                <div className={styles.griditem}>
                  <label>
                    When was your house last fully or professionally cleaned?
                  </label>
                  <select
                    id='LastCleaned'
                    name='LastCleaned'
                  >
                    <option value=''></option>
                    <option value='Within 1-2 weeks'>Within 1-2 weeks</option>
                    <option value='Within 2-4 weeks'>Within 2-4 weeks</option>
                    <option value='Within 1-4 months'>Within 1-4 months</option>
                    <option value='Over 4 months ago'>Over 4 months ago</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.Step}>
              <p style={{ fontSize: "18px" }}>General Comments</p>
              <textarea
                type='text'
                name='Comments'
                rows='5'
                placeholder='If there is anything else we should know, please pop it in here. For hourly rates - please let us know your list of priorities so we focus on what us important :-)'
              />
            </div>
            <div className={styles.Step}>
              <h2>STEP 6: Select Payment</h2>
              <p>
                Don't worry - you will{" "}
                <strong>not be charged until after your service</strong>, once
                we have confirmed your are happy :-)
              </p>
              <div className={styles.griditem}>
                <IconContext.Provider value={{ color: "grey", size: "20px" }}>
                  <div className={styles.CardDetailsdiv}>
                    <div className={styles.IconInput}>
                      <div className={styles.cardLeft}>
                        <BsFillCreditCard2FrontFill id='cardIcon' />
                        <input
                          type='text'
                          name='CardNo'
                          value={cardNumber}
                          onChange={handleChange}
                          placeholder='Card number'
                          pattern='\d{4}( \d{4}){3}'
                          maxLength='19'
                          required
                        />
                      </div>
                      <div className={styles.cardRight}>
                        <input
                          type='text'
                          name='MM/YY'
                          // value={MMYY}
                          // onChange={handleChangeMY}
                          placeholder='MM / YY'
                          pattern='(0[1-9]|1[0-2])\/[0-9]{2}'
                          title='Please enter a valid MM/YY format (e.g., 06/24)'
                          maxLength='7'
                          required
                        />
                        <input
                          type='text'
                          name='CVC'
                          // value={MMYY}
                          // onChange={handleChangeMY}
                          placeholder='CVC'
                          pattern='[0-9]{3}'
                          title='Please enter a valid 3-digit numeric CVC'
                          maxLength='3'
                          required
                        />
                      </div>
                    </div>
                    {/* <div className={styles.cardText}>
                                          
                                        </div> */}
                  </div>
                  <img
                    src={CardImage}
                    alt='CardImg'
                  />
                </IconContext.Provider>
              </div>
              <p className={styles.greyp}>
                I authorize Spark Clean to charge my credit card above for
                agreed upon purchases. I understand that my information will be
                saved to file for further transactions on my account.
              </p>
            </div>
            <div className={`${styles.Step} ${styles.BookingDiv}`}>
              <div className={styles.RightFixedSection}>
                <div className={styles.cardheader}>BOOKING SUMMARY</div>
                <div className={styles.cardbody}>
                  <IconContext.Provider
                    value={{ color: "#1239ac", size: "3%" }}
                  >
                    <div className={styles.logospan}>
                      <BsFillHousesFill />
                      <span>{typeOfCleaningSelected}</span>
                    </div>
                    <div className={styles.logospan}>
                      <BsFillHousesFill />
                      <span>{serviceSelected}</span>
                    </div>
                    <div className={styles.logospan}>
                      <SlCalender />
                      <span>
                        {selectedDate
                          ? selectedDate.toLocaleDateString()
                          : "Choose service date..."}
                      </span>
                    </div>
                    <div className={styles.logospan}>
                      <GiCycle />
                      <span>{Discount}....</span>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.griditem}>
                    <p>SUB-TOTAL</p>
                  </div>
                  <div className={styles.griditem}>
                    <p className={styles.right}>${Price}</p>
                    <input
                      hidden
                      name='Price'
                      value={Price}
                    />
                  </div>
                  <div className={styles.griditem}>
                    <p>1.25% CC FEE</p>
                  </div>
                  <div className={styles.griditem}>
                    <p className={styles.right}>${CCFEE}</p>
                    <input
                      hidden
                      name='CCFEE'
                      value={CCFEE}
                    />
                  </div>
                  <div
                    className={
                      Discount === "One Time Cleaning"
                        ? `${styles.griditem} ${styles.noneDisplay}`
                        : styles.griditem
                    }
                  >
                    <h4>FIRST SERVICE</h4>
                  </div>
                  <div
                    className={
                      Discount === "One Time Cleaning"
                        ? `${styles.griditem} ${styles.noneDisplay}`
                        : styles.griditem
                    }
                  >
                    <h1 className={styles.right}>${FirstService}</h1>
                    <input
                      hidden
                      name='FirstService'
                      value={FirstService}
                    />
                  </div>

                  <div className={styles.griditem}>
                    {Discount === "One Time Cleaning" ? (
                      <h4>TOTAL</h4>
                    ) : (
                      <h4>ONGOING SERVICE</h4>
                    )}
                  </div>
                  <div className={styles.griditem}>
                    <h1 className={styles.right}>${total}</h1>

                    <input
                      hidden
                      name='total'
                      value={total}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Step}>
              <h4>Cancellation Policy</h4>
              <p className={styles.greyp}>
                Please note we have a 24-hour cancellation policy and any
                changes/cancellations within this time period will result in up
                to a 50% fee.
              </p>
              <p className={styles.greyp}>
                Remember - we don't charge a cent until after your service has
                taken place and we know you are happy!
              </p>
              <p className={styles.greyp}>
                Please remember all bookings via the website are requests and
                will be confirmed by our Team after checking availability.
              </p>
              <p className={styles.greyp}>
                By clicking the Book Now button you are agreeing to our Terms of
                Service and Privacy Policy.
              </p>
              <button
                className={styles.BookNow}
                type='submit'
                disabled={loading}
              >
                {loading ? <Spinner /> : "Book Now"}
              </button>
            </div>
          </form>
        </div>

        <div className={styles.RightSection}>
          <div className={styles.RightTopSection}>
            <IconContext.Provider value={{ color: "#1239ac", size: "18%" }}>
              <div className={styles.features}>
                <PiClockCountdownFill />
                <h4>SAVES YOU TIME</h4>
                <p>
                  Spark Clean's booking system helps you live smarter, giving
                  you time to focus on what's most important.
                </p>
              </div>
              <div className={styles.features}>
                <AiFillSafetyCertificate />
                <h4>SAFETY FIRST</h4>
                <p>
                  We rigorously vet all of our Cleaners, who undergo police
                  checks as well as in-person interviews.
                </p>
              </div>
              <div className={styles.features}>
                <FaThumbsUp />
                <h4>ONLY THE BEST QUALITY</h4>
                <p>
                  Our skilled professionals go above and beyond on every job.
                  Cleaners are rated and reviewed after each task.
                </p>
              </div>
              <div className={styles.features}>
                <FaHandsHelping />
                <h4>EASY TO GET HELP</h4>
                <p>
                  Select your post code, number of hours and beds, date and
                  relax while we take care of your home.
                </p>
              </div>
              <div className={styles.features}>
                <IoMdChatboxes />
                <h4>SEAMLESS COMMUNICATION</h4>
                <p>
                  Online communication makes it easy for you to stay in touch
                  with your Cleaners.
                </p>
              </div>
              <div className={styles.features}>
                <RiVisaFill />
                <h4>FLEXIBLE PAYMENT OPTIONS</h4>
                <p>Pay securely online only when the cleaning is complete.</p>
              </div>
            </IconContext.Provider>
          </div>
          <div className={styles.RightFixedSection}>
            <div className={styles.cardheader}>BOOKING SUMMARY</div>
            <div className={styles.cardbody}>
              <IconContext.Provider value={{ color: "#1239ac", size: "10%" }}>
                <div className={styles.logospan}>
                  <BsFillHousesFill />
                  <span>{typeOfCleaningSelected}</span>
                </div>
                <div className={styles.logospan}>
                  <SlCalender />
                  <span>
                    {selectedDate
                      ? selectedDate.toLocaleDateString()
                      : "Choose service date..."}
                  </span>
                </div>
                <div className={styles.logospan}>
                  <GiCycle />
                  <span>{Discount}....</span>
                </div>
              </IconContext.Provider>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.griditem}>
                <p>SUB-TOTAL</p>
              </div>
              <div className={styles.griditem}>
                <p className={styles.right}>${Price}</p>
              </div>
              <div className={styles.griditem}>
                <p>1.25% CC FEE</p>
              </div>
              <div className={styles.griditem}>
                <p className={styles.right}>${CCFEE}</p>
              </div>
              <div
                className={
                  Discount === "One Time Cleaning"
                    ? `${styles.griditem} ${styles.noneDisplay}`
                    : styles.griditem
                }
              >
                <h4>FIRST SERVICE</h4>
              </div>
              <div
                className={
                  Discount === "One Time Cleaning"
                    ? `${styles.griditem} ${styles.noneDisplay}`
                    : styles.griditem
                }
              >
                <h1 className={styles.right}>${FirstService}</h1>
              </div>

              <div className={styles.griditem}>
                {Discount === "One Time Cleaning" ? (
                  <h4>TOTAL</h4>
                ) : (
                  <h4>ONGOING SERVICE</h4>
                )}
              </div>
              <div className={styles.griditem}>
                <h1 className={styles.right}>${total}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
