import { useState,useRef, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, Heart,ChevronDown,Phone,Mail, Youtube,
  Facebook,Instagram,Twitter, } from "lucide-react";

import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = ()=>{
   const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const [desktopShopOpen, setDesktopShopOpen] = useState(false);
  //shop menüsü dışında olan tıklamaları dinlemek için kullanacağız.
  const shopRef = useRef(null);
  // başka route a geçildiğinde shop menüsüne bağlı stateleri başlangıç haline yani false a çekmek için 
  const location = useLocation();
    useEffect(() => {
    setDesktopShopOpen(false);
    setMenuOpen(false); // mobil hamburger da kapanır
    }, [location.pathname]);

  //dışarı tıklama efecti için fonksiyonu oluşturuyoruz
   useEffect(()=>{
    const handleClickOutside= (event)=>{
        if(shopRef.current && !shopRef.current.contains(event.target)){
            setDesktopShopOpen(false)
        }
    };

    document.addEventListener("mousedown",handleClickOutside);
    return()=>{
        document.removeEventListener("mousedown",handleClickOutside)
    }
  },[])

  return (
    <header className="w-full border-b bg-white ">
        {/* Top Contact Bar (Desktop only) */}
        <div className="hidden md:flex items-center justify-between px-8 py-2 bg-slate-800 text-white text-sm">
        {/* Left */}
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(225) 555-0118</span>
            </div>

            <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>michelle.rivera@example.com</span>
            </div>
            <span>Follow Us and get a chance to win 80% off</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
            <span>Follow Us :</span>

            <div className="flex items-center gap-3">
            <Instagram className="w-4 h-4 cursor-pointer" />
            <Youtube className="w-4 h-4 cursor-pointer" />
            <Facebook className="w-4 h-4 cursor-pointer" />
            <Twitter className="w-4 h-4 cursor-pointer" />
            </div>
        </div>
        </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <span className="text-2xl font-bold">Bandage</span>

        {/* Desktop Menu */}
        <nav className="hidden  px-3 md:flex items-center gap-8">
          <Link to="/" className="text-gray-600">Home</Link>

          {/* Shop (click dropdown) ayrıca dışarı tıklama effecti için shoprefi buraya verdik */}
          <div  ref={shopRef} className="relative">
            <button
                onClick={() => setDesktopShopOpen(!desktopShopOpen)}
                className="flex items-center gap-1 cursor-pointer text-gray-600"
            >
                Shop
                <ChevronDown className="w-4 h-4" />
            </button>

            {desktopShopOpen && (
                <div className="absolute  z-100 left-0 top-full mt-2 flex flex-col bg-white border w-32">
                <Link to="/shop1" className="px-4 py-2 hover:bg-gray-100">
                    Shop 1
                </Link>
                <Link to="/shop2" className="px-4 py-2 hover:bg-gray-100">
                    Shop 2
                </Link>
                <Link to="/shop3" className="px-4 py-2 hover:bg-gray-100">
                    Shop 3
                </Link>
                </div>
            )}
            </div>

          <Link to="/" className="text-gray-600">Product</Link>
          <Link to="/" className="text-gray-600">Pricing</Link>
          <Link to="/contact" className="text-gray-600">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Login/Register */}
          <div className="hidden md:flex items-center gap-2 text-base text-blue-600">
            <Link to="/login">Login</Link>
            <span>/</span>
            <Link to="/register">Register</Link>
          </div>

          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <Menu className="w-7 h-7 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <HamburgerMenu
        shopOpen={shopOpen}
        setShopOpen={setShopOpen}
        menuOpen={menuOpen}
      />
    </header>
  );
}