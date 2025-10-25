# iNaturalist I18n Guidelines

1. As much as possible, employ reusable strings and keep them in the default
   translation files.
2. For strings specific to individual views, scope them appropriately under
   views, e.g. `views.help.index.welcome_message_html`
3. For views that are primarily static AND don't involve a lot of markup, make
   a locale-specific view, e.g. index.es.html.erb.
4. [I18n fallbacks](https://github.com/svenfuchs/i18n/wiki/Fallbacks) are
   active, so if, for example, you want to add es-MX.yml files for Mexican
   Spanish, they will overide the es.yml files when available, but es values
   will be used when there is no es-MX translation.
5. Do not use I18n to make site-specific configurations like substituting a
   different site name. The translations should be site agnostic and if you
   see a reference to iNaturalist you should replace it with `%{site_name}`. If
   you need site-specific configurations like this, check
   `config/config.yml.example` to see if any have already been added. If not,
   open an issue.

## Generating Translations

The translations in JS are located in `app/assets/javascripts/i18n/translations/`, and get generated on every release, so there's no need to check them in (and in fact, checking them in will probably lead to a lot of annoying conflict resolution in the future).

You can generate these files locally with

```sh
rake inaturalist:generate_translations_js
```
