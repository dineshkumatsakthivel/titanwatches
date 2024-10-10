import React, { useState } from 'react';
import './Watches.css';
import { IoFilter, IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Watches = () => {
  const navigate = useNavigate();
  const [DAtas, setDAtas] = useState([
    { img: './watchimg/1639SM02_1.webp', dis: "Titan Men's Multifunction Karishma", gen: "Men's Watch", prc: "$ 35365", strp: "mettal" },
    { img: "./watchimg/1648SM01_1.webp", dis: "Titan Women's Multifunction Karishma", gen: "Women's Watch", prc: "$ 12365", strp: "mettal" },
    { img: "./watchimg/1713BM02_1.jpg", dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch", gen: "Women's Watch", prc: "$ 3565", strp:"mettal" },
    { img: "./watchimg/1733KL03_1.webp", dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch", gen: "Men's Watch", prc: "$ 15365", strp:"silicon" },
     
  {
    img: "./watchimg/1713BM02_1.jpg",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Women's Watch",
    prc: "$ 3565",
    strp:"mettal"
},
{
    img: "./watchimg/1733KL03_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 15365",
    strp:"silicon"
},
{
    img: "./watchimg/1802NL02_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 55454",
    strp:"mettal"

},
{
    img: "./watchimg/1805QM04_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Unisex Watch",
    prc: "$ 45365",
    strp:"blackmettal"
},
{
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365",
    strp:"blackmettal"

}, {
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Women's Watch",
    prc: "$ 24255",
    strp:"blackmettal"

}, {
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Unisex Watch",
    prc: "$ 4422",
    strp:"mettal"

}, {
    img: "./watchimg/1824BM03_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 5322",
    strp:"mettal"

}, {
    img: "./watchimg/1825SM11_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 12343",
    strp:"mettal"

}, {
    img: "./watchimg/2606WM08_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365",
    strp:"mettal"

},
{
    img: "./watchimg/2608QM02_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365",
    strp:"mettal"

},
{
    img: "./watchimg/2725WM01_1.webp",
    dis: "Titan Men's Timeless Style Watch: Refined Black Dial and Metal Strape",
    gen: "Women's Watch",
    prc: "$ 35365",
    strp:"mettal"

},
// -----------------------------
{
  img: './watchimg/1639SM02_1.webp',
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 35365",
  strp:"mettal"

},
{
  img: "./watchimg/1648SM01_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Women's Watch",
  prc: "$ 12365",
  strp:"mettal"

},
{
  img: "./watchimg/1648SM01_1.webp"  ,      
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 5465",
  strp:"mettal"

},
{
  img: "./watchimg/1713BM02_1.jpg",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Women's Watch",
  prc: "$ 3565",
  strp:"silicon"



},
{
  img: "./watchimg/1733KL03_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 15365",
  strp:"silicon"

},
{
  img: "./watchimg/1802NL02_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 55454"
},
{
  img: "./watchimg/1805QM04_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Unisex Watch",
  prc: "$ 45365",
  strp:"mettal"

},
{
  img: "./watchimg/1806NM01_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 35365",
  strp:"blackmettal"

}, {
  img: "./watchimg/1806NM01_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Women's Watch",
  prc: "$ 24255",
  strp:"blackmettal"

}, {
  img: "./watchimg/1806NM01_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Unisex Watch",
  prc: "$ 4422",
  strp:"blackmettal"

}, {
  img: "./watchimg/1824BM03_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 5322",
  strp:"mettal"


}, {
  img: "./watchimg/1825SM11_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 12343",
  strp:"mettal"

}, {
  img: "./watchimg/2606WM08_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 35365",
  strp:"mettal"

},
{
  img: "./watchimg/2608QM02_1.webp",
  dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
  gen: "Men's Watch",
  prc: "$ 35365",
  strp:"mettal"

},
{
  img: "./watchimg/2725WM01_1.webp",
  dis: "Titan Men's Timeless Style Watch: Refined Black Dial and Metal Strape",
  gen: "Women's Watch",
  prc: "$ 35365",
  strp:"mettal"

},

  ]);

  const [priceRange, setPriceRange] = useState([5000, 500000]);
  const [watchlist, setWatchlist] = useState([]);
  const [zoomer, setZoomer] = useState("hidebox1");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({ men: false, women: false, unisex: false, couples: false });
  const [selectedStrip, setSelectedStrip] = useState({ mettal: false, blackmettal: false, silicon: false });

  // Handle price range change
  const handlePriceChange = (event) => {
    setPriceRange([5000, parseInt(event.target.value)]);
  };

  // Toggle Watchlist
  const toggleWatchlist = (watch) => {
    setWatchlist((prev) => prev.includes(watch) ? prev.filter(item => item !== watch) : [...prev, watch]);
  };

  // Navigate to Wishlist Page
  const goToWishlist = () => {
    localStorage.setItem('wishlist', JSON.stringify(watchlist));
    navigate('/Whislist');
  };

  // Toggle Gender Filter
  const toggleGenderFilter = (gender) => {
    setSelectedFilters((prev) => ({ ...prev, [gender]: !prev[gender] }));
  };

  // Toggle Strap Filter
  const toggleStripFilter = (strap) => {
    setSelectedStrip((prev) => ({ ...prev, [strap]: !prev[strap] }));
  };

  // Filter logic for gender, strap type, and price
  let filteredData = DAtas.filter(item => {
    const price = parseInt(item.prc.replace('$', '').replace(',', ''));
    const matchesSearch = item.dis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = (selectedFilters.men && item.gen.includes("Men")) ||
                          (selectedFilters.women && item.gen.includes("Women")) ||
                          (selectedFilters.unisex && item.gen.includes("Unisex"));
    const matchesStrap = (selectedStrip.mettal && item.strp === "mettal") ||
                         (selectedStrip.blackmettal && item.strp === "blackmettal") ||
                         (selectedStrip.silicon && item.strp === "silicon");
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesSearch && (Object.values(selectedFilters).some(Boolean) ? matchesGender : true)
                         && (Object.values(selectedStrip).some(Boolean) ? matchesStrap : true)
                         && matchesPrice;
  });

  return (
    <>
      <div className='stickdiv'>
        <div className='row'>
          <div className='col-3 col-lg-1'>Filter By GENDER</div>
          <div className='col-2 col-lg-1'><button onClick={() => toggleGenderFilter('men')}>Men</button></div>
          <div className='col-2 col-lg-1'><button onClick={() => toggleGenderFilter('women')}>Women</button></div>
          <div className='col-2 col-lg-1'><button onClick={() => toggleGenderFilter('unisex')}>Unisex</button></div>
          <div className='col-12 col-lg-3'>
            <button><FaSearch /></button>
            <input onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder='Search products' />
          </div>
          <div className='ofmed col-lg-2' onClick={() => setZoomer("hidebox1 hidebox2")}>
            <button><IoFilter /> Show Filter</button>
          </div>
        </div>
      </div>

      <section className='divededbox container-fluid'>
        <div className={zoomer}>
          <div>
            <div><IoClose className='closerd' onClick={() => setZoomer("hidebox1")} /></div>
            <div className='colorbox'>
              <h2>GENDER</h2>
              <input type="checkbox" onChange={() => toggleGenderFilter('men')} checked={selectedFilters.men} /><label>Men</label><br />
              <input type="checkbox" onChange={() => toggleGenderFilter('women')} checked={selectedFilters.women} /><label>Women</label><br />
              <input type="checkbox" onChange={() => toggleGenderFilter('unisex')} checked={selectedFilters.unisex} /><label>Unisex</label><br />
              <h2>Strip type</h2>
              <input type="checkbox" onChange={() => toggleStripFilter('mettal')} checked={selectedStrip.mettal} /><label>Mettal</label><br />
              <input type="checkbox" onChange={() => toggleStripFilter('blackmettal')} checked={selectedStrip.blackmettal} /><label>Black Mettal</label><br />
              <input type="checkbox" onChange={() => toggleStripFilter('silicon')} checked={selectedStrip.silicon} /><label>Silicon</label><br />
            </div>
            <h2>Price Range</h2>
            <input type="range" min="5000" max="500000" value={priceRange[1]} onChange={handlePriceChange} />
            <p>Max Price: ${priceRange[1]}</p>
          </div>
        </div>

        <div className='mainbox1'>
          {filteredData.length > 0 ? (
            filteredData.map((v, index) => (
              <div key={index} className='gridbox d-grid'>
                <span onClick={() => toggleWatchlist(v.dis)} className={`iconha ${watchlist.includes(v.dis) ? 'added' : ''}`}>
                  <button className='wishlist-btn' onClick={goToWishlist}><CiHeart /></button>
                </span>
                <div className='imgbox1'><img className='vimg' src={require(`${v.img}`)} alt="" /></div>
                <div className='dis'>{v.dis}</div>
                <div className='gen'>{v.gen}</div>
                <div className='prc'>{v.prc}</div>
              </div>
            ))
          ) : (
            <div className='no-data'>No products found. Please try a different search or filter.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Watches;
