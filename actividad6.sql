-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-08-2024 a las 05:35:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `actividad6`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cards`
--

INSERT INTO `cards` (`id`, `name`, `status`, `image`) VALUES
(1, 'Antonio', 'muerto', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'),
(2, 'Antonio', 'muerto', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'),
(3, 'Antonio', 'muerto', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'),
(4, 'Beth Smith', 'Alive', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'),
(5, 'Jerry Smith', 'Alive', 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'),
(6, 'Abadango Cluster Princess', 'Alive', 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'),
(7, 'Abradolf Lincler', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'),
(8, 'Adjudicator Rick', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/8.jpeg'),
(9, 'Agency Director', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/9.jpeg'),
(10, 'Alan Rails', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/10.jpeg'),
(11, 'Albert Einstein', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/11.jpeg'),
(12, 'Alexander', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/12.jpeg'),
(13, 'Alien Googah', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/13.jpeg'),
(14, 'Alien Morty', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/14.jpeg'),
(15, 'Alien Rick', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/15.jpeg'),
(16, 'Amish Cyborg', 'Dead', 'https://rickandmortyapi.com/api/character/avatar/16.jpeg'),
(17, 'Annie', 'Alive', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'),
(18, 'Antenna Morty', 'Alive', 'https://rickandmortyapi.com/api/character/avatar/18.jpeg'),
(19, 'Antenna Rick', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'),
(20, 'Ants in my Eyes Johnson', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/20.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
