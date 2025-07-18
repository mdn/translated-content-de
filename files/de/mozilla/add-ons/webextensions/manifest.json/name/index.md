---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
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
      <th scope="row">Erforderlich</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

Name der Erweiterung. Dieser wird verwendet, um die Erweiterung in der Benutzeroberfläche des Browsers und auf Seiten wie addons.mozilla.org zu identifizieren.

Es ist eine gute Praxis, den Namen kurz genug zu halten, um in der Benutzeroberfläche angezeigt werden zu können. Außerdem kann die Länge des Namens einer veröffentlichten Erweiterung begrenzt sein. Zum Beispiel, ab Februar 2024:

- addons.mozilla.org akzeptiert maximal 50 Zeichen.
- der Chrome Web Store akzeptiert maximal 75 Zeichen.
- der Microsoft Edge Addons Store akzeptiert maximal 45 Zeichen.

Diese Einschränkungen gelten nicht für selbst gehostete Erweiterungen oder Erweiterungen, die außerhalb der Stores verteilt werden.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"name": "My Extension"
```

## Browser-Kompatibilität

{{Compat}}
