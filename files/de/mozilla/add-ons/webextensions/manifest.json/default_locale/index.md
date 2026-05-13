---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
l10n:
  sourceCommit: 19337ada99ac76020b6d16fbc979056cd4d3f117
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>
        Abhängig: muss vorhanden sein, wenn das Unterverzeichnis <code>_locales</code> vorhanden ist,
        muss andernfalls fehlen.
      </td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

Dieser Schlüssel muss vorhanden sein, wenn die Erweiterung das Verzeichnis `\_locales` enthält, und muss andernfalls fehlen. Er identifiziert ein Unterverzeichnis von `\_locales`, in dem das i18n-System die Standardlokalisierungsketten der Erweiterung findet.

Siehe [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für weitere Informationen.

## Beispiel

```json
"default_locale": "en"
```

## Browser-Kompatibilität

{{Compat}}
