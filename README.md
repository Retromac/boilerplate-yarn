## This package provides config & helper classes for custom Core project for Hellenic Technologies

[//]: # ()
[//]: # ([![Latest Version on Packagist]&#40;https://img.shields.io/packagist/v/hellenictechnologies/htsage.svg?style=flat-square&#41;]&#40;https://packagist.org/packages/hellenictechnologies/htsage&#41;)

[//]: # ([![GitHub Tests Action Status]&#40;https://img.shields.io/github/actions/workflow/status/hellenictechnologies/htsage/run-tests.yml?branch=main&label=tests&style=flat-square&#41;]&#40;https://github.com/hellenictechnologies/htsage/actions?query=workflow%3Arun-tests+branch%3Amain&#41;)

[//]: # ([![GitHub Code Style Action Status]&#40;https://img.shields.io/github/actions/workflow/status/hellenictechnologies/htsage/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square&#41;]&#40;https://github.com/hellenictechnologies/htsage/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain&#41;)

[//]: # ([![Total Downloads]&#40;https://img.shields.io/packagist/dt/hellenictechnologies/htsage.svg?style=flat-square&#41;]&#40;https://packagist.org/packages/hellenictechnologies/htsage&#41;)

[//]: # ()

## Installation

### Development

Add the following entry in project's `composer.json` file:



Optionally, you can publish the views using

```bash
wp acorn vendor:publish --tag="htsage-views"
```

## Usage

```php
$htsage = new HellenicTechnologies\HtSage();
echo $htsage->echoPhrase('Hello, HellenicTechnologies!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Hellenic Technologies](https://github.com/hellenictechnologies)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.