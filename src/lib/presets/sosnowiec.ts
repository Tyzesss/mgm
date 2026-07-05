import type { SitePreset } from "./types";

const CLIENT_BASE = "http://www.ogrzewaniemgm.pl";

export const sosnowiecPreset: SitePreset = {
  id: "sosnowiec",
  label: "Sosnowiec",
  siteName: "Centrum Techniki Grzewczej M.G.M.",
  companyLegalName: "Przedsiębiorstwo Usługowo-Handlowe M.G.M. Glanowski Michał",
  siteCity: "Sosnowiec i okolice",
  cityLocative: "w Sosnowcu",
  siteDefaultUrl: "https://ogrzewaniemgm.pl",
  email: "biuro@ogrzewaniemgm.pl",
  phoneDisplay: "507 422 288",
  phoneE164: "+48507422288",
  address: "ul. Jagiellońska 11B, 41-200 Sosnowiec",
  addressStreet: "ul. Jagiellońska 11B",
  addressCity: "Sosnowiec",
  addressPostal: "41-200",
  mapsQuery: "Centrum Techniki Grzewczej M.G.M., ul. Jagiellońska 11B, Sosnowiec",
  mapsUrl: "https://maps.app.goo.gl/JdAw76JeNw9BXdmJ7",
  hours: "Pn - Sob: 8:00 - 18:00",
  nip: "644-280-95-75",
  regon: "276905129",
  siteTitle:
    "Instalacje grzewcze Sosnowiec – montaż i serwis | Centrum Techniki Grzewczej M.G.M.",
  siteDescription:
    "Montaż kotłów, pomp ciepła i instalacji C.O. w Sosnowcu i okolicach. Autoryzowany partner Viessmann, darmowa wycena z dojazdem. Zadzwoń: 507 422 288.",
  siteKeywords:
    "instalacje grzewcze Sosnowiec, kotły gazowe, pompy ciepła, kolektory słoneczne, rekuperacja, Viessmann, montaż C.O.",
  ogImage: `${CLIENT_BASE}/images/content/slider1.jpg`,
  heroImage: `${CLIENT_BASE}/images/content/slider1.jpg`,
  logoUrl: `${CLIENT_BASE}/images/logo.png`,
  footerTagline: "Technika Grzewcza i Serwis",
  googleRating: 5.0,
  googleReviewCount: 1,
  googleReviewsUrl: "https://maps.app.goo.gl/JdAw76JeNw9BXdmJ7",
  gallery: [
    {
      image: `${CLIENT_BASE}/images/gallery/galeria1.jpg`,
      alt: "Realizacja instalacji grzewczej — Centrum Techniki Grzewczej M.G.M.",
      caption: "Instalacja grzewcza",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria2.jpg`,
      alt: "Montaż kotła grzewczego Viessmann — realizacja MGM",
      caption: "Kocioł grzewczy",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria3.jpg`,
      alt: "Kotłownia gazowa — montaż instalacji C.O.",
      caption: "Kotłownia",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria4.jpg`,
      alt: "Instalacja centralnego ogrzewania w domu jednorodzinnym",
      caption: "C.O. · dom",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria5.jpg`,
      alt: "Montaż pompy ciepła — realizacja na Śląsku",
      caption: "Pompa ciepła",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria6.jpg`,
      alt: "Kolektory słoneczne na dachu budynku",
      caption: "Kolektory słoneczne",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria7.jpg`,
      alt: "Instalacja wodno-kanalizacyjna i grzewcza",
      caption: "Wod-kan · C.O.",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria8.jpg`,
      alt: "System wentylacji mechanicznej z rekuperacją",
      caption: "Rekuperacja",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria9.jpg`,
      alt: "Modernizacja kotłowni — wymiana urządzeń grzewczych",
      caption: "Modernizacja",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria10.jpg`,
      alt: "Montaż instalacji grzewczej w budynku mieszkalnym",
      caption: "Budownictwo mieszkaniowe",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria11.jpg`,
      alt: "Kotły kondensacyjne Viessmann — montaż MGM",
      caption: "Kotły kondensacyjne",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria12.jpg`,
      alt: "Instalacja solarnego wspomagania ogrzewania",
      caption: "Solar · C.O.",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria13.jpg`,
      alt: "Rozprowadzenie instalacji grzewczej w pomieszczeniach",
      caption: "Instalacja wewnętrzna",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria14.jpg`,
      alt: "Stacja uzdatniania wody — montaż i podłączenie",
      caption: "Uzdatnianie wody",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria15.jpg`,
      alt: "Kompleksowa instalacja grzewcza w nowym budynku",
      caption: "Nowa inwestycja",
    },
    {
      image: `${CLIENT_BASE}/images/gallery/galeria16.jpg`,
      alt: "Realizacja techniki grzewczej — Centrum Techniki Grzewczej M.G.M.",
      caption: "Realizacja MGM",
    },
  ],
  reviews: [
    {
      name: "Paweł",
      text: "POLECAM usługi pana Michała !!! Jako jeden z nielicznych fachowców, którzy przewinęli się przez całą moją budowę służył fachową radą i doświadczeniem. Z czystym sumieniem mogę polecić go jako fachowca od rekuperacji, wod-kanu oraz do systemów ogrzewania. Zna się na swojej robocie, jest dokładny w tym co robi!",
      source: "google",
      rating: 5,
    },
  ],
};
