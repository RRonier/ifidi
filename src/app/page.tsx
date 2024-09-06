import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import styles from './page.module.css'
import "./reset.css"
import Link from "next/link"
import BackgroundVideo from 'next-video/background-video';
import video from "../../videos/signin.mp4"
import AreasCard from '@/components/AreasCard';
import BioCard from '@/components/UserCard';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';

export default function Index() {

  const cursosInfo = [
    {
      title: "Prevención de riesgos laborales ",
      image: '/img/riezgos_laborales.png',

    }, {
      title: "Expertos y Especialistas Universitarios",
      image: '/img/especialistas.jpeg',
    }, {
      title: "SocioSanitarios",
      image: '/img/sociosanitario.jpeg',
    }, {
      title: "Construcción",
      image: '/img/construccion.jpeg',
    }, {
      title: "Informática",
      image: '/img/informatica.jpeg',
    }, {
      title: "Calidad",
      image: '/img/calidad.jpeg',
    },
    {
      title: "MedioAmbiente",
      image: '/img/medio_ambiente.jpeg',
    }, {
      title: "Dirección, Administración de Empresas y Marketing",
      image: '/img/administracion_empresas.jpeg',
    }, {
      title: "Recursos Humanos",
      image: '/img/rrhh.jpeg',
    }, {
      title: "Mantenimiento y Seguridad Industrial",
      image: '/img/mantenimiento.jpeg',
    }
  ]

  const usersInfo = [
    {
      name: "Iñaki",
      testimonial: "Testimonio de Iñaki acerca que lo bueno que fue el curso",
      image: '/img/avatar1.jpg'
    },
    {
      name: "Amaia",
      testimonial: "Testimonio de Amaia acerca de la buena experiencia con Urko Formación",
      image: '/img/avatar2.jpg'
    },
    {
      name: "Leire",
      testimonial: "Testimonio de Leire acerca del buen trato recibido en Urko Formación",
      image: '/img/avatar2.jpg'
    }
  ]

  return (
    <>
      <main>
        <div>
          <BackgroundVideo src={video}>
            <div className={styles.contents}>
              <h1>IDIFI Formación</h1>
              <div className={styles.buttons}>
                <Link href="#work"
                >Nuestros cursos</Link>
                <Link href="#history"
                >Nuestra historia</Link>
              </div>
            </div>
          </BackgroundVideo>
        </div>
        <section id="history" className={styles.about}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              margin: '0 10px 0 20px'
            }}>
              <p>
                <strong>
                  Somos un grupo de profesionales asociados con amplia experiencia en los temas relacionados con la Prevención de Riesgos Laborales, Calidad, Medio Ambiente, Formación y otros.
                  <p style={{ marginTop: '10px' }}><b>Nuestros clientes le dirán:</b></p>
                  <ul>
                    <li>Que hemos sido flexibles para adaptar con rapidez nuestro servicio a sus circuntancias cambiantes.</li>
                    <li>Que hemos transformado ese servicio en compromisos concretos.</li>
                    <li>Que siempre que hemos adquirido un compromiso lo hemos cumplido.</li>
                  </ul>
                  <p style={{ marginTop: '10px' }}>Las fases de nuestra actuación son:</p>
                  <ul>
                    <li> Diagnosis de sus necesidades y plan de actuación en estas áreas.</li>
                    <li> Diseño del proyecto que encaje con los programas de financiación existentes.</li>
                  </ul>
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.workAreas}>
          <h2 id="work" className={styles.title}
          >Conozca nuestros cursos</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              rowGap: 20,
              placeItems: 'center'
            }}>
            {cursosInfo.length && cursosInfo.map((area, key) => <AreasCard
              key={key}
              title={area.title}
              image={area.image}
              withLink
            />)}
          </div>
        </section>
        <section className={styles.testimonials}>
          <h2 className={styles.testimonialsTitle}>Testimonios de nuestros alumnos</h2>
          <span className={styles.separator}>-</span>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            {usersInfo.length ? usersInfo.map((user, key) => <BioCard key={key} {...user} />) : null}
          </div>
        </section>
      </main >
      <footer className={styles.footer}>
        <section className={styles.information}>
          <section>
            <h3 className={styles.footerHeader}>Contacto</h3>
            <div style={{
              margin: '0 auto',
              height: '100%',
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <EmailIcon sx={{ m: 1 }} />
                <Link className={styles.link} href="">Correo: </Link>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <LocalPhoneIcon sx={{ m: 1 }} />
                <p>Cel: (+34) 943322868</p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <BusinessIcon sx={{ m: 1 }} />
                <p>Poner aca la direccion</p>
              </div>
            </div>
          </section>
        </section>
        <section
          style={{
            textAlign: 'center',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.3rem',
            padding: '20px 0'
          }}>Urko Formación
        </section>
      </footer>
    </>
  )
}
