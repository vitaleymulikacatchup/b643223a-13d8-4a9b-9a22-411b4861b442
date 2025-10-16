"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "heroImg", url: "https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Crop anonymous female in latex gloves making fluid for perfume among glass jars on wooden table" },
  { id: "aboutImg", url: "https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two men in an office discussing and reviewing a tech prototype." },
  { id: "contactImg", url: "https://images.pexels.com/photos/34295762/pexels-photo-34295762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "office communication - Photo by Zulfugar Karimov" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Garant Snus"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Authentic Snus Experience"
            description="Explore the finest snus crafted with tradition and passion."
            imageSrc="https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Shop Now", href: "products" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Explore Our Snus Varieties"
            products={[
              { id: "1", brand: "Garant", name: "Classic Blend", price: "$4.99", rating: 5, reviewCount: "123", imageSrc: "/product/classic.jpg" },
              { id: "2", brand: "Garant", name: "Mint Fresh", price: "$5.49", rating: 4.5, reviewCount: "98", imageSrc: "/product/mint.jpg" },
              { id: "3", brand: "Garant", name: "Berry Mix", price: "$5.99", rating: 4.7, reviewCount: "76", imageSrc: "/product/berry.jpg" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Heritage", description: "Established in 1887, Garant Snus has been a staple in the tobacco market." },
              { title: "Quality", description: "We ensure each product meets the highest standards." }
            ]}
            imageSrc="https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Join Our Community"
            description="Subscribe to get the latest updates on our products."
            imageSrc="https://images.pexels.com/photos/34295762/pexels-photo-34295762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{ items: [{ label: "Privacy Policy", href: "privacy-policy" }, { label: "Terms & Conditions", href: "terms" }] }]} 
            logoText="Garant Snus"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}