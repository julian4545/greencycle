-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 03-10-2023 a las 02:08:58
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `software`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am_contactos`
--

CREATE TABLE `am_contactos` (
  `id_contacto` int(11) NOT NULL,
  `persona_contacto` int(11) NOT NULL,
  `contacto_contacto` varchar(120) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_contacto` int(11) NOT NULL,
  `vigencia_contacto` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `am_contactos`
--

INSERT INTO `am_contactos` (`id_contacto`, `persona_contacto`, `contacto_contacto`, `tipo_contacto`, `vigencia_contacto`) VALUES
(1, 1, '86 26 383', 55, 1),
(2, 2, '62 96 814', 55, 1),
(3, 3, '74 13 518', 55, 1),
(4, 4, '86 46 635', 55, 1),
(5, 5, '60 32 053', 55, 1),
(6, 6, '86 73 588', 55, 1),
(7, 7, '86 30 528', 55, 1),
(8, 8, '81 09 361', 55, 1),
(9, 9, '86 35 741', 55, 1),
(10, 10, '86 34 475', 55, 1),
(11, 11, '86 32 944', 55, 1),
(12, 12, '86 25 822', 55, 1),
(13, 13, '460 26 52', 55, 1),
(14, 14, '62 46 272', 55, 1),
(15, 15, '311 237 00 57', 55, 1),
(16, 16, '86 31 726', 55, 1),
(17, 17, '86 31 576', 55, 1),
(18, 18, '86 37 245', 55, 1),
(19, 19, '62 53 551', 55, 1),
(20, 13, '87 45 287', 55, 1),
(21, 6, '85 72 302', 55, 1),
(22, 8, '61 33 683', 55, 1),
(23, 11, '67 32 436', 55, 1),
(24, 14, '25 93 990', 55, 1),
(25, 4, '21 40 387', 55, 1),
(26, 14, '310 629 84 10', 56, 1),
(27, 19, '313 258 46 32', 56, 1),
(28, 18, '311 242 14 77', 56, 1),
(29, 2, '321 312 88 93', 56, 1),
(30, 5, '315 899 32 44', 56, 1),
(31, 1, '310 323 71 15', 56, 1),
(32, 2, '301 220 23 63', 56, 1),
(33, 3, '314 229 10 39', 56, 1),
(34, 4, '310 261 21 47', 56, 1),
(35, 5, '315 857 20 95', 56, 1),
(36, 6, '315 604 55 89', 56, 1),
(37, 7, '310 869 60 60', 56, 1),
(38, 8, '311 253 68 64', 56, 1),
(39, 9, '310 807 13 94', 56, 1),
(40, 10, '315 349 47 87', 56, 1),
(41, 11, '311 491 40 12', 56, 1),
(42, 12, '313 453 23 21', 56, 1),
(43, 13, '310 868 02 34', 56, 1),
(44, 14, '311 811 77 05', 56, 1),
(45, 15, '313 386 33 40', 56, 1),
(46, 16, '310 866 98 84', 56, 1),
(47, 17, '310 319 26 62', 56, 1),
(48, 18, '314 438 07 36', 56, 1),
(49, 19, '301 697 02 17', 56, 1),
(50, 1, '315 328 95 84', 56, 1),
(51, 5, '310 755 57 99', 56, 1),
(52, 3, '313 416 46 62', 56, 1),
(53, 7, '300 811 89 73', 56, 1),
(54, 18, '311 521 64 45', 56, 1),
(55, 11, '310 304 47 26', 56, 1),
(56, 12, '311 849 93 49', 56, 1),
(57, 7, '304 353 28 24', 56, 1),
(58, 6, '314 286 37 02', 56, 1),
(59, 5, 'lmperezo@salnet.net', 57, 1),
(60, 6, 'ccfernandezc@hotmail.com', 57, 1),
(61, 7, 'dhjimenezg@gmail.com', 57, 1),
(62, 8, 'lajimenezr@gmail.com', 57, 1),
(63, 9, 'ccfernandezc@udistrital.edu.co', 57, 1),
(64, 10, 'ljvalderramat@hotmail.com', 57, 1),
(65, 11, 'nmpabonn@hotmail.com', 57, 1),
(66, 12, 'maospinac@tutopia.com', 57, 1),
(67, 13, 'aadíasg@yahoo.es', 57, 1),
(68, 14, 'helombardig@yahoo.com', 57, 1),
(69, 15, 'gamuñozj@hotmail.com', 57, 1),
(70, 16, 'imdamazcam@gmail.com', 57, 1),
(71, 17, 'kttellezt@yahoo.es', 57, 1),
(72, 18, 'pjcadstroc@yahoo.com', 57, 1),
(73, 19, 'pegonzalesg@gmail.com', 57, 1),
(74, 11, 'nmpabonn@gmail.com', 57, 1),
(75, 12, 'maospinac@yahoo.es', 57, 1),
(76, 17, 'kttellezt@gmail.com', 57, 1),
(77, 4, 'ccfernandezc@hotmail.com', 57, 1),
(78, 5, 'Carrera 57 # 125b - 43 int 8 apt 201', 59, 1),
(79, 6, 'Calle 103 #23A 57', 59, 1),
(80, 7, 'Call 146 7b 81 ap 105 edi Los Ciruelos', 59, 1),
(81, 8, 'Tr 15 # 119-89', 59, 1),
(82, 9, 'Car 118 # 89B 51 Int 8 Ap 101', 59, 1),
(83, 10, 'Call 7ª No 5 - 53 chía', 59, 1),
(84, 11, 'Car 68D # 67a 25', 59, 1),
(85, 12, 'Car 10A No 3 - 50 piso 2 Santa Lucia', 59, 1),
(86, 13, 'Calle 127 A #7B 13 ap 401', 59, 1),
(87, 14, 'Call 71 # 1 03 ', 59, 1),
(88, 15, 'car 9ª A # 96-76 Apt 602', 59, 1),
(89, 16, 'Carr 21 #40 91 ap 401', 59, 1),
(90, 17, 'Call 112 # 0 80 Est Ap 902', 59, 1),
(91, 18, 'Call 86 # 8 53 Ap 603', 59, 1),
(92, 19, 'Call 101A # 35 32', 59, 1),
(93, 11, 'Car 16 # 85 52 Ap 301', 59, 1),
(94, 12, 'Car 16 # 96 30 Ap 404', 59, 1),
(95, 2, 'DG 25G # 95A 55', 59, 1),
(96, 4, 'Ca ll e 1 44 # 15-12 apt 301', 59, 1),
(97, 9, 'Quintas de Chambaú', 59, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asociacion`
--

CREATE TABLE `asociacion` (
  `Nombre` text NOT NULL,
  `departamentodeoperacion` text NOT NULL,
  `rut` int(11) NOT NULL,
  `cantidadDeReciclador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asociacion`
--

INSERT INTO `asociacion` (`Nombre`, `departamentodeoperacion`, `rut`, `cantidadDeReciclador`) VALUES
('Recliclarsalva', 'cundinamarca', 10032300, 50),
('Recliclarsalva', 'cundinamarca', 10032300, 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo_universal`
--

CREATE TABLE `catalogo_universal` (
  `id_universal` int(11) NOT NULL,
  `denominacion_universal` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `catalogo_universal` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `llaveforanea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `catalogo_universal`
--

INSERT INTO `catalogo_universal` (`id_universal`, `denominacion_universal`, `catalogo_universal`, `llaveforanea`) VALUES
(1, 'catalogo', 'catalogo', 1),
(2, 'color', 'catalogo', 1),
(3, 'tipovehiculo', 'catalogo', 1),
(4, 'marca', 'catalogo', 1),
(5, 'tipdoc', 'catalogo', 1),
(6, 'eps', 'catalogo', 1),
(7, 'prefsexual', 'catalogo', 1),
(8, 'tipocontacto', 'catalogo', 1),
(9, 'rojo', 'color', 2),
(10, 'verde', 'color', 2),
(11, 'negro', 'color', 2),
(12, 'blanco', 'color', 2),
(13, 'azul', 'color', 2),
(14, 'amarillo', 'color', 2),
(15, 'morado', 'color', 2),
(16, 'rosado', 'color', 2),
(17, 'Carmelito', 'color', 2),
(18, 'automovil', 'tipovehiculo', 3),
(19, 'camioneta', 'tipovehiculo', 3),
(20, 'jeep', 'tipovehiculo', 3),
(21, 'van', 'tipovehiculo', 3),
(22, 'picap', 'tipovehiculo', 3),
(23, 'camión', 'tipovehiculo', 3),
(24, 'volqueta', 'tipovehiculo', 3),
(25, 'Mercedes Benz', 'marca', 4),
(26, 'Honda', 'marca', 4),
(27, 'Chevrolet', 'marca', 4),
(28, 'Renault', 'marca', 4),
(29, 'Mazda', 'marca', 4),
(30, 'Toyota', 'marca', 4),
(31, 'Dodge', 'marca', 4),
(32, 'Cedula Ciudadanía', 'tipdoc', 5),
(33, 'Cedula Extranjería', 'tipdoc', 5),
(34, 'Pasaporte', 'tipdoc', 5),
(35, 'Tarjeta Identidad', 'tipdoc', 5),
(36, 'Café Salud', 'eps', 6),
(37, 'Nueva EPS', 'eps', 6),
(38, 'Compensar', 'eps', 6),
(39, 'Famisanar', 'eps', 6),
(40, 'Sanitas', 'eps', 6),
(41, 'Hetero Sexual', 'prefsexual', 7),
(42, 'Homo Sexual', 'prefsexual', 7),
(43, 'Lesbiana', 'prefsexual', 7),
(44, 'Asexual', 'prefsexual', 7),
(45, 'Binario', 'prefsexual', 7),
(46, 'bisexual', 'prefsexual', 7),
(47, 'Inter Sexual', 'prefsexual', 7),
(48, 'Zapote', 'color', 2),
(49, 'Anaranjado', 'color', 2),
(50, 'Salud Total', 'eps', 6),
(51, 'Cama Baja 30', 'tipovehiculo', 3),
(52, 'DUCATI', 'marca', 4),
(53, 'ciudad', 'catalogo', 1),
(54, 'Negro fosforecente', 'Colores', 2),
(55, 'Teléfono', 'tipocontacto', 8),
(56, 'Celular', 'tipocontacto', 8),
(57, 'Email', 'tipocontacto', 8),
(58, 'Red Social', 'tipocontacto', 8),
(59, 'Dirección', 'tipocontacto', 8),
(60, 'Fax', 'tipocontacto', 8),
(61, 'Verde Avispon', 'Color', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reciclador`
--

CREATE TABLE `reciclador` (
  `Nombre` text NOT NULL,
  `Apellido` text NOT NULL,
  `CC` int(11) NOT NULL,
  `Departamento` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reciclador`
--

INSERT INTO `reciclador` (`Nombre`, `Apellido`, `CC`, `Departamento`, `id`) VALUES
('julian', 'alvarado', 0, 'cundinamarca', 0),
('gabriel', 'lopez', 10000, 'cundinamarca', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutasrecoleccion`
--

CREATE TABLE `rutasrecoleccion` (
  `nombreruta` text NOT NULL,
  `kmruta` int(11) NOT NULL,
  `departamento` text NOT NULL,
  `cuidad` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rutasrecoleccion`
--

INSERT INTO `rutasrecoleccion` (`nombreruta`, `kmruta`, `departamento`, `cuidad`) VALUES
('ruta_fontibon', 4, 'bogota', 'bogota'),
('ruta_fontibon', 4, 'bogota', 'bogota');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_personas`
--

CREATE TABLE `tb_personas` (
  `Id_persona` int(11) NOT NULL,
  `tip_doc_persona` int(11) NOT NULL,
  `num_doc_persona` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `nom1_persona` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `nom2_persona` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `apell1_persona` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `apell2_persona` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `prefer_sexual_persona` int(11) NOT NULL,
  `eps_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tb_personas`
--

INSERT INTO `tb_personas` (`Id_persona`, `tip_doc_persona`, `num_doc_persona`, `nom1_persona`, `nom2_persona`, `apell1_persona`, `apell2_persona`, `prefer_sexual_persona`, `eps_persona`) VALUES
(1, 32, '55879', 'María', 'Lola', 'Drones', 'Buenos', 41, 40),
(2, 33, '456895', 'Luis', 'Eduardo', 'Corredor', 'Lozano', 46, 37),
(3, 32, '159634722', 'María', 'Magdalena', 'Mejiaaa', 'Balmorales', 41, 38),
(4, 32, '55566', 'Cristian', 'Camio', 'Fernandez', 'Castro', 41, 50),
(5, 33, '2336554', 'Laura', 'Marcela', 'Perez', 'Ossa', 41, 38),
(6, 32, '55566', 'Cristian', 'Camio', 'Fernandez', 'Castro', 41, 50),
(7, 32, '44448888', 'Danilo', 'Hernando', 'JimeneZ', 'Gonzalez', 42, 36),
(8, 33, '7233256', 'Leonel', 'Antonio', 'Jimenez', 'Ruiz', 46, 39),
(9, 32, '55566', 'Cristian', 'Camio', 'Fernandez', 'Castro', 41, 50),
(10, 33, '7777777', 'Leonelito', 'José', 'Valderrama', 'Truque', 46, 39),
(11, 33, '33333333', 'Nathalia', 'María', 'Pabon', 'Nuñes', 46, 39),
(12, 35, '999999', 'Mateo', 'Alejandro', 'Ospina', 'Castro', 41, 40),
(13, 35, '22222', 'abel', 'antonio', 'Días', 'Garzon', 47, 37),
(14, 32, '787878787', 'Hugo', 'Ernesto', 'Lombardi', 'Gil', 44, 38),
(15, 33, '346782415', 'Gerardo', 'Antonio', 'Muñoz', 'Jaramillo', 44, 37),
(16, 33, '1245369976', 'Isabella', 'Martinaa', 'Damazca', 'Muñoz', 41, 38),
(17, 32, '122544588', 'Katia', 'Tania', 'Tellez', 'Trujillo', 41, 40),
(18, 34, 'avtta4567', 'Pepito', 'José', 'Cadstro', 'Chavez', 44, 39),
(19, 32, '8545697', 'Pedro', 'Emilio', 'Gonzales', 'Garcia', 46, 39);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_vehiculos`
--

CREATE TABLE `tb_vehiculos` (
  `id_vehiculo` int(11) NOT NULL,
  `placa_vehiculo` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `conductor_vehiculo` int(11) NOT NULL,
  `color_vehiculo` int(11) NOT NULL,
  `marca_vehiculo` int(11) NOT NULL,
  `tipo_vehiculo` int(11) NOT NULL,
  `modelo_vehiculo` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `num_pasajeros_vehiculo` smallint(6) DEFAULT NULL,
  `num_ruedas_vehiculo` smallint(6) DEFAULT NULL,
  `anno_vehiculo` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tb_vehiculos`
--

INSERT INTO `tb_vehiculos` (`id_vehiculo`, `placa_vehiculo`, `conductor_vehiculo`, `color_vehiculo`, `marca_vehiculo`, `tipo_vehiculo`, `modelo_vehiculo`, `num_pasajeros_vehiculo`, `num_ruedas_vehiculo`, `anno_vehiculo`) VALUES
(1, 'VGT236', 8, 13, 29, 22, '2021', 3, 4, '0000-00-00'),
(2, 'RES456', 16, 17, 27, 18, 'Sailor', 5, 4, '0000-00-00'),
(3, 'HBT647', 7, 54, 31, 23, 'R100', 2, 6, '0000-00-00'),
(4, 'FTM705', 3, 9, 25, 20, 'MXE360', 8, 4, '0000-00-00'),
(5, 'FDV896', 5, 13, 30, 20, 'Fortuner', 10, 4, '0000-00-00'),
(6, 'YRW369', 5, 11, 26, 19, 'HDVC', 8, 4, '0000-00-00'),
(7, 'kpk050', 6, 13, 52, 22, 'R340', 4, 4, '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `FK_tb_catalogo_universal_llaveforanea2` (`tipo_contacto`),
  ADD KEY `FK_tb_persona_persona_contacto` (`persona_contacto`);

--
-- Indices de la tabla `catalogo_universal`
--
ALTER TABLE `catalogo_universal`
  ADD PRIMARY KEY (`id_universal`),
  ADD KEY `FK_tb_catalogo_universal_llaveforanea` (`llaveforanea`);

--
-- Indices de la tabla `tb_personas`
--
ALTER TABLE `tb_personas`
  ADD PRIMARY KEY (`Id_persona`),
  ADD KEY `FK_tb_personas_eps2` (`eps_persona`),
  ADD KEY `FK_tb_personas_pref_sexual` (`prefer_sexual_persona`),
  ADD KEY `FK_tb_personas_tipos_documento_02` (`tip_doc_persona`);

--
-- Indices de la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  ADD PRIMARY KEY (`id_vehiculo`),
  ADD KEY `FK_tb_vehiculos_color2` (`color_vehiculo`),
  ADD KEY `FK_tb_vehiculos_marca` (`marca_vehiculo`),
  ADD KEY `FK_tb_vehiculos_tb_personas_02` (`conductor_vehiculo`),
  ADD KEY `FK_tb_vehiculos_tipos_vehiculo` (`tipo_vehiculo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT de la tabla `catalogo_universal`
--
ALTER TABLE `catalogo_universal`
  MODIFY `id_universal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `tb_personas`
--
ALTER TABLE `tb_personas`
  MODIFY `Id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  MODIFY `id_vehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  ADD CONSTRAINT `FK_tb_catalogo_universal_llaveforanea2` FOREIGN KEY (`tipo_contacto`) REFERENCES `catalogo_universal` (`id_universal`),
  ADD CONSTRAINT `FK_tb_persona_persona_contacto` FOREIGN KEY (`persona_contacto`) REFERENCES `tb_personas` (`Id_persona`);

--
-- Filtros para la tabla `catalogo_universal`
--
ALTER TABLE `catalogo_universal`
  ADD CONSTRAINT `FK_tb_catalogo_universal_llaveforanea` FOREIGN KEY (`llaveforanea`) REFERENCES `catalogo_universal` (`id_universal`);

--
-- Filtros para la tabla `tb_personas`
--
ALTER TABLE `tb_personas`
  ADD CONSTRAINT `FK_tb_personas_eps2` FOREIGN KEY (`eps_persona`) REFERENCES `catalogo_universal` (`id_universal`),
  ADD CONSTRAINT `FK_tb_personas_pref_sexual` FOREIGN KEY (`prefer_sexual_persona`) REFERENCES `catalogo_universal` (`id_universal`),
  ADD CONSTRAINT `FK_tb_personas_tipos_documento_02` FOREIGN KEY (`tip_doc_persona`) REFERENCES `catalogo_universal` (`id_universal`);

--
-- Filtros para la tabla `tb_vehiculos`
--
ALTER TABLE `tb_vehiculos`
  ADD CONSTRAINT `FK_tb_vehiculos_color2` FOREIGN KEY (`color_vehiculo`) REFERENCES `catalogo_universal` (`id_universal`),
  ADD CONSTRAINT `FK_tb_vehiculos_marca` FOREIGN KEY (`marca_vehiculo`) REFERENCES `catalogo_universal` (`id_universal`),
  ADD CONSTRAINT `FK_tb_vehiculos_tb_personas_02` FOREIGN KEY (`conductor_vehiculo`) REFERENCES `tb_personas` (`Id_persona`),
  ADD CONSTRAINT `FK_tb_vehiculos_tipos_vehiculo` FOREIGN KEY (`tipo_vehiculo`) REFERENCES `catalogo_universal` (`id_universal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
