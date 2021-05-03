import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Logistica from '../png/reverse.png'
import Recicla from '../png/recicla.png'
import Plano from '../png/residuos.png'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Combinando diferentes estratégias
          </h1>
          <p className="mt-4 text-gray-600">Alcançamos a melhor gestão</p>
          {/*<p className="text-xl lg:text-2xl mt-6 font-light">
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>*/}
          <p className="mt-8 md:mt-12">
            <Button size="lg">Conheça mais</Button>
          </p>
          
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Como funciona</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                Os resíduos resultantes das mais diversas atividades podem não ter utilidade para quem os gera..
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                Porém podem ser reincorporados em outros processos produtivos como matéria-prima secundária..
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Ordem de prioridade</p>
              <p className="mt-4">
                Não geração, redução, reutilização, reciclagem, tratamento dos resíduos sólidos e disposição
                final ambientalmente adequada dos rejeitos
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Logística reversa</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          É a área da logística com foco no retorno de materiais já utilizados para o processo produtivo, visando o reaproveitamento ou descarte apropriado de materiais, além da preservação ambiental.
          </p>
        </div>
      }
      //secondarySlot={<SvgCharts />}
      secondarySlot={<img src={Logistica} alt="Logistica Reversa" style={{ width: "50%", margin: "30px" }} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Recicla Match
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Plataforma que disponibiliza uma lista de programas, cooperativas e empresas que buscam se associar à outras organizações de coleta e reciclagem de materiais.
          </p>
        </div>
      }
      //secondarySlot={<SvgCharts />}
      secondarySlot={<img src={Recicla} alt="Recicla Match" style={{ width: "50%", margin: "30px" }} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Plano de resíduos
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          O Plano Estadual de Resíduos Sólidos é o instrumento de gestão estadual que objetiva promover
           mudanças de atitude e hábitos, abordando desde a geração até a destinação final ambientalmente adequada dos resíduos sólidos
          </p>
        </div>
      }
      //secondarySlot={<SvgCharts />}
      secondarySlot={<img src={Plano} alt="Plano de resíduos" style={{ width: "50%", margin: "30px" }} />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Alguns de nossos números</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
