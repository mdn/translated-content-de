---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>
        Abhängig: muss vorhanden sein, wenn das _locales-Unterverzeichnis vorhanden ist,
        muss andernfalls fehlen.
      </td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

Dieser Schlüssel muss vorhanden sein, wenn die Erweiterung das \_locales-Verzeichnis enthält, und muss andernfalls fehlen. Er identifiziert ein Unterverzeichnis von \_locales, und dieses Unterverzeichnis wird verwendet, um die Standardzeichenfolgen für Ihre Erweiterung zu finden.

Siehe [Internationalization](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel

```json
"default_locale": "en"
```

## Browser-Kompatibilität

{{Compat}}
