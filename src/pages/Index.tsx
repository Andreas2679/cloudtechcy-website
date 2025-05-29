
import PageLayout from '@/components/PageLayout';
import CloudHero from '@/components/CloudHero';
import CloudServices from '@/components/CloudServices';
import CloudFeatures from '@/components/CloudFeatures';
import CloudStats from '@/components/CloudStats';
import CloudTestimonials from '@/components/CloudTestimonials';
import CloudPricing from '@/components/CloudPricing';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="CloudTech Solutions - Professional Cloud Services" 
        description="Leading provider of cloud solutions including VPN, Virtual Computing, VoIP, server hosting, and enterprise cloud infrastructure."
        keywords={['cloud solutions', 'VPN services', 'virtual computing', 'VoIP', 'server hosting', 'cloud infrastructure', 'enterprise cloud']}
      />
      <CloudHero />
      <CloudServices />
      <CloudFeatures />
      <CloudStats />
      <CloudTestimonials />
      <CloudPricing />
    </PageLayout>
  );
};

export default Index;
