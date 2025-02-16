import { WrenchScrewdriverIcon, BeakerIcon, CogIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Maintenance Services',
    description: 'Regular maintenance to keep your vehicle running smoothly.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Diagnostic Services',
    description: 'Advanced diagnostic testing to identify issues.',
    icon: BeakerIcon,
  },
  {
    name: 'Repair Services',
    description: 'Professional repair services for all vehicle makes and models.',
    icon: CogIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Professional Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything your car needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of automotive services to keep your vehicle in top condition.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}