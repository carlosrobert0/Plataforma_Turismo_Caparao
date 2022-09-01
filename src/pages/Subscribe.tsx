import { Logo } from "../components/Logo";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../generated";

// import codeMockup from "/src/assets/code-mockup.png"
import pico from "/src/assets/pico.jpg"
import logoPico from "/src/assets/logoPico.jpg"
import { CardRoutes } from "../components/CardRoutes";

interface FormData {
  name: string;
  email: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Seu nome é obrigatório'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Seu email é obrigatório')
}).required();

export function Subscribe() {
  const [createSubscriber, { loading, error, reset }] = useCreateSubscriberMutation()

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  async function handleSubscribe({ name, email }: FormData) {
    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur relative bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <img src={logoPico} className="mt-10 border-gray rounded" alt="" />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-green-500">experiência completa</strong>, com a <strong className="text-green-500">Plataforma de Turismo do Caparaó</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Diversas rotas em videos. Os melhores pontos turísticos da região
            do Pico da Bandeira, destinos fantásticos para você se surpreender.
            Guias turisticos especializados para conduzir o seu melhor passeio.
          </p>
        </div>

        <div className="flex flex-col mb-5">
          <div className="flex justify-center items-center">
            <h1 className="text-[2.5rem] leading-tight">
              <strong className="bg-gradient-to-r from-[#d2850d] to-[#8c99a9] text-transparent bg-clip-text">Caparaó Turismo</strong>
            </h1>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-5">
            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubmit(handleSubscribe)} className="flex flex-col gap-2 w-full">
              <input
                {...register("name")}
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
              />
              {errors.name && <p className="text-red-500 leading-relaxed">{errors.name?.message}</p>}
              <input
                {...register("email")}
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={reset}
              />
              {error && <p className="text-red-500 leading-relaxed">E-mail já cadastrado</p>}
              {errors.email && <p className="text-red-500 leading-relaxed">{errors.email?.message}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha experiência
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <CardRoutes
          urlImg={pico}
          title="Parque Nacional do Caparaó"
          description="Pico da bandeira em parque montanhoso"
        />
        <CardRoutes
          urlImg="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ5pPUIFumg2YkKXnMXJnPfcBrxHzDWpzU9xYsvap9zUc_s0sEeCF7LBOjclbyNZ73ij3inBz-ZKHzUQ3S1P39jwA"
          title="Pico do Cristal"
          description="Montanha e natureza"
        />
        <CardRoutes
          urlImg="https://scontent.fitp1-1.fna.fbcdn.net/v/t1.18169-9/16508099_1913893212176491_7183472990242067580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFUsnUNAh9gZo8FU85SW_IrFU0FdWfCT38VTQV1Z8JPfzEkoM6jARqBg87zli9NWQ3IZseMmBIN5YHoTpDM4xcU&_nc_ohc=5ulSQxjwRVwAX9jUgp6&_nc_ht=scontent.fitp1-1.fna&oh=00_AT_Liq07DYeGw9cBSEIfvhWTcY0f3D_9E_X2PTdMDd6Ngw&oe=632BE090"
          title="Vale Encantando"
          description="Cachoeira em montanha"
        />
        <CardRoutes
          urlImg="https://static.wixstatic.com/media/8f3f41_a02262cd200a4e59a7716efd4150310a~mv2.jpg/v1/fill/w_524,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20190224-WA0000.jpg"
          title="Cachoeira das Andorinhas"
          description="Parque na natureza"
        />
        <CardRoutes
          urlImg="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTsXol9zRaxgM6gvdh62oZy_XcOx30y2ElND7T9pGyR04VGt9wfqiTAFm8_3rIzJQZQ5qkOcwIq-6xIiMKZaLcFMw"
          title="Cachoeira do Granito"
          description="Natureza"
        />
        <CardRoutes
          urlImg="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQj2zxri_qZsC9w3L2E2jqoduuaOvODk5nqOuQnx9-pYcWd_WZRcWnBHAP6VjnBj6gQMEniKmy_AsKclKmHbbtIhg"
          title="Pico do Calçado"
          description="Montanha"
        />
      </div>
      <div className="bg-transparent mt-20 mb-10">dentre outros destinos</div>
    </div>
  )
}