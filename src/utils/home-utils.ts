type CountryOptions = {
  key: string,
  value: string,
  flag: string,
  text: string
}

const countryOptions : Array<CountryOptions> = [
  { key: 'en-ca', value: 'en-ca', flag: 'en-ca', text: 'Canada' },
  { key: 'en', value: 'en', flag: 'en', text: 'United States' },
  { key: 'ko', value: 'ko', flag: 'ko', text: 'South Korea' },
];

export function getCountries() : Array<CountryOptions> {
  return countryOptions;
}