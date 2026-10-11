---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
l10n:
  sourceCommit: 276ba1b693cea46ed322a954ee9c58a2e880ece5
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

Name der Erweiterung. Er wird verwendet, um die Erweiterung in der Benutzeroberfläche des Browsers und auf Websites wie addons.mozilla.org zu identifizieren.

Es empfiehlt sich, den Namen so kurz zu halten, dass er in der Benutzeroberfläche angezeigt werden kann. Außerdem kann die Länge des Namens einer veröffentlichten Erweiterung begrenzt sein. Beispielsweise gelten mit Stand Februar 2024 folgende Höchstlängen:

- addons.mozilla.org akzeptiert maximal 45 Zeichen.
- Der Chrome Web Store akzeptiert maximal 75 Zeichen.
- Der Microsoft Edge Addons Store akzeptiert maximal 45 Zeichen.

Diese Beschränkungen gelten nicht für selbst gehostete Erweiterungen oder für Erweiterungen, die außerhalb der Stores verbreitet werden.

Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"name": "My Extension"
```

## Browser-Kompatibilität

{{Compat}}
