---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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
        Kontingent: muss vorhanden sein, wenn das \_locales-Unterverzeichnis vorhanden ist,
        muss ansonsten fehlen.
      </td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

Dieser Schlüssel muss vorhanden sein, wenn die Erweiterung das \_locales-Verzeichnis enthält, und muss andernfalls fehlen. Er identifiziert ein Unterverzeichnis von \_locales, und dieses Unterverzeichnis wird verwendet, um die Standardzeichenfolgen für Ihre Erweiterung zu finden.

Siehe [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel

```json
"default_locale": "en"
```

## Browser-Kompatibilität

{{Compat}}
