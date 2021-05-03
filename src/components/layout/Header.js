import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Logo from '../../png/logo.png'
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          {/*<LogoIcon />*/}
          <img src={Logo} alt="Logo" />
        </div>
        Resíduos MS
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Como funciona
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Projetos
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Estatísticas
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Resultados
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Entrar</Button>
      </div>
    </div>
  </header>
);

export default Header;
