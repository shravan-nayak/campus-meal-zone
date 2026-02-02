-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 08:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `barcode_number` varchar(25) DEFAULT NULL,
  `serving_time` time DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `booking_status` varchar(15) DEFAULT NULL,
  `booking_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) DEFAULT NULL,
  `category_image` varchar(25) DEFAULT NULL,
  `category_date_create` timestamp NULL DEFAULT NULL,
  `category_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_image`, `category_date_create`, `category_status`) VALUES
(1, 'Beverages', 'uploads\\1741875267525.png', NULL, 'active'),
(2, 'Pizza', 'uploads\\1741874372534.png', NULL, 'active'),
(7, 'Desserts', 'uploads\\1741874514057.png', NULL, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `item_name` varchar(50) DEFAULT NULL,
  `item_image` varchar(25) DEFAULT NULL,
  `item_date_create` timestamp NULL DEFAULT NULL,
  `item_status` varchar(10) DEFAULT NULL,
  `item_price` int(11) DEFAULT NULL,
  `item_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `category_id`, `item_name`, `item_image`, `item_date_create`, `item_status`, `item_price`, `item_description`) VALUES
(1, 1, 'Tea', 'uploads\\1741890921392.png', NULL, 'active', 25, 'Ginger'),
(4, 7, 'cofee', 'uploads\\1741891832787.png', NULL, 'active', 25, 'jaggery');

-- --------------------------------------------------------

--
-- Table structure for table `login_master`
--

CREATE TABLE `login_master` (
  `login_id` int(11) NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `user_type` varchar(10) DEFAULT NULL,
  `user_password` varchar(25) DEFAULT NULL,
  `login_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_master`
--

INSERT INTO `login_master` (`login_id`, `user_name`, `user_type`, `user_password`, `login_date`) VALUES
(1, 'Admin', 'admin', 'admin', NULL),
(2, 'Joel', 'student', 'joel', NULL),
(20, 'Chuti', 'staff', 'chuti', NULL),
(21, 'Rohan', 'user', 'rohan', NULL),
(22, 'Anand', 'student', 'anand', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `staff_name` varchar(50) DEFAULT NULL,
  `staff_email_id` varchar(75) DEFAULT NULL,
  `staff_phone_number` varchar(10) DEFAULT NULL,
  `staff_status` varchar(10) DEFAULT NULL,
  `staff_date_create` timestamp NULL DEFAULT NULL,
  `staff_login` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_name`, `staff_email_id`, `staff_phone_number`, `staff_status`, `staff_date_create`, `staff_login`) VALUES
(1, 'Chuti', 'chuti@gmail.com', '7658089798', 'active', NULL, NULL),
(3, 'Sumi', 'sumi@gmail.com', '8765908765', 'active', NULL, NULL),
(4, 'Joe', 'joe@gmail.com', '9898989898', 'active', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(50) DEFAULT NULL,
  `student_register_number` varchar(25) DEFAULT NULL,
  `student_address` text DEFAULT NULL,
  `student_phone_number` varchar(10) DEFAULT NULL,
  `student_email_address` varchar(75) DEFAULT NULL,
  `student_image` varchar(25) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `student_status` varchar(10) DEFAULT NULL,
  `student_date_create` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_name`, `student_register_number`, `student_address`, `student_phone_number`, `student_email_address`, `student_image`, `balance`, `student_status`, `student_date_create`) VALUES
(1, 'Joel A', 'U05VB22S0003', 'Gopadi', '8296771219', 'akashlobo0311@gmail.com', 'uploads\\1741936792318.png', 2000, 'active', NULL),
(3, 'Chuti', 'U05VB22S0009', 'Halady', '82397942', 'chuti@gmail.com', 'uploads\\1741936913505.png', 100, 'active', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `temp_id` int(11) NOT NULL,
  `token_number` varchar(25) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `login_master`
--
ALTER TABLE `login_master`
  ADD PRIMARY KEY (`login_id`),
  ADD UNIQUE KEY `unique_user_name` (`user_name`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `temp`
--
ALTER TABLE `temp`
  ADD PRIMARY KEY (`temp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login_master`
--
ALTER TABLE `login_master`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `temp`
--
ALTER TABLE `temp`
  MODIFY `temp_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
