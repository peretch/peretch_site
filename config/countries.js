const countries = [
  { name: 'Afganistan' },
  { name: 'Albania' },
  { name: 'Alemania' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Antartida' },
  { name: 'Antigua y Barbuda' },
  { name: 'Arabia Saudi' },
  { name: 'Argelia' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaiyan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belgica' },
  { name: 'Belice' },
  { name: 'Benin' },
  { name: 'Bermudas' },
  { name: 'Bielorrusia' },
  { name: 'Birmania Myanmar' },
  { name: 'Bolivia' },
  { name: 'Bosnia y Herzegovina' },
  { name: 'Botswana' },
  { name: 'Brasil' },
  { name: 'Brunei' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Butan' },
  { name: 'Cabo Verde' },
  { name: 'Camboya' },
  { name: 'Camerun' },
  { name: 'Canada' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Chipre' },
  { name: 'Colombia' },
  { name: 'Comores' },
  { name: 'Congo' },
  { name: 'Corea del Norte' },
  { name: 'Corea del Sur' },
  { name: 'Costa de Marfil' },
  { name: 'Costa Rica' },
  { name: 'Croacia' },
  { name: 'Cuba' },
  { name: 'Dinamarca' },
  { name: 'Dominica' },
  { name: 'Ecuador' },
  { name: 'Egipto' },
  { name: 'El Salvador' },
  { name: 'El Vaticano' },
  { name: 'Emiratos arabes Unidos' },
  { name: 'Eritrea' },
  { name: 'Eslovaquia' },
  { name: 'Eslovenia' },
  { name: 'España' },
  { name: 'Estados Unidos' },
  { name: 'Estonia' },
  { name: 'Etiopia' },
  { name: 'Filipinas' },
  { name: 'Finlandia' },
  { name: 'Fiji' },
  { name: 'Francia' },
  { name: 'Gabon' },
  { name: 'Gambia' },
  { name: 'Georgia' },
  { name: 'Ghana' },
  { name: 'Gibraltar' },
  { name: 'Granada' },
  { name: 'Grecia' },
  { name: 'Guam' },
  { name: 'Guatemala' },
  { name: 'Guinea' },
  { name: 'Guinea Ecuatorial' },
  { name: 'Guinea Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Honduras' },
  { name: 'Hungria' },
  { name: 'India' },
  { name: 'Indian Ocean' },
  { name: 'Indonesia' },
  { name: 'Iran' },
  { name: 'Iraq' },
  { name: 'Irlanda' },
  { name: 'Islandia' },
  { name: 'Israel' },
  { name: 'Italia' },
  { name: 'Jamaica' },
  { name: 'Japon' },
  { name: 'Jersey' },
  { name: 'Jordania' },
  { name: 'Kazajstan' },
  { name: 'Kenia' },
  { name: 'Kirguistan' },
  { name: 'Kiribati' },
  { name: 'Kuwait' },
  { name: 'Laos' },
  { name: 'Lesoto' },
  { name: 'Letonia' },
  { name: 'Libano' },
  { name: 'Liberia' },
  { name: 'Libia' },
  { name: 'Liechtenstein' },
  { name: 'Lituania' },
  { name: 'Luxemburgo' },
  { name: 'Macedonia' },
  { name: 'Madagascar' },
  { name: 'Malasia' },
  { name: 'Malawi' },
  { name: 'Maldivas' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marruecos' },
  { name: 'Mauricio' },
  { name: 'Mauritania' },
  { name: 'Mexico' },
  { name: 'Micronesia' },
  { name: 'Moldavia' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montserrat' },
  { name: 'Mozambique' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'Noruega' },
  { name: 'Nueva Zelanda' },
  { name: 'Oman' },
  { name: 'Paises Bajos' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Panama' },
  { name: 'Papua Nueva Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Polonia' },
  { name: 'Portugal' },
  { name: 'Puerto Rico' },
  { name: 'Qatar' },
  { name: 'Reino Unido' },
  { name: 'Republica Centroafricana' },
  { name: 'Republica Checa' },
  { name: 'Republica Democratica del Congo' },
  { name: 'Republica Dominicana' },
  { name: 'Ruanda' },
  { name: 'Rumania' },
  { name: 'Rusia' },
  { name: 'Sahara Occidental' },
  { name: 'Samoa' },
  { name: 'San Cristobal y Nevis' },
  { name: 'San Marino' },
  { name: 'San Vicente y las Granadinas' },
  { name: 'Santa Lucia' },
  { name: 'Santo Tome y Principe' },
  { name: 'Senegal' },
  { name: 'Seychelles' },
  { name: 'Sierra Leona' },
  { name: 'Singapur' },
  { name: 'Siria' },
  { name: 'Somalia' },
  { name: 'Southern Ocean' },
  { name: 'Sri Lanka' },
  { name: 'Swazilandia' },
  { name: 'Sudafrica' },
  { name: 'Sudan' },
  { name: 'Suecia' },
  { name: 'Suiza' },
  { name: 'Surinam' },
  { name: 'Tailandia' },
  { name: 'Taiwan' },
  { name: 'Tanzania' },
  { name: 'Tayikistan' },
  { name: 'Togo' },
  { name: 'Tokelau' },
  { name: 'Tonga' },
  { name: 'Trinidad y Tobago' },
  { name: 'Tunez' },
  { name: 'Turkmekistan' },
  { name: 'Turquia' },
  { name: 'Tuvalu' },
  { name: 'Ucrania' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Yemen' },
  { name: 'Djibouti' },
  { name: 'Zambia' },
  { name: 'Zimbabue' },
];

module.exports = {
  countries,
};
