---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
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
      <th scope="row">Obligatorisch</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

Der Autor der Erweiterung. Er soll in der Benutzeroberfläche des Browsers angezeigt werden. Der Wert der Zeichenkette ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

Firefox erwartet, dass dieser Schlüssel den Namen der Person oder Entität darstellt, die die Erweiterung entwickelt hat. Wenn der [Entwickler](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel ebenfalls als Objekt mit einer `name`-Eigenschaft angegeben ist, überschreibt der Wert von `name` den `author`-Schlüssel.

Es wird empfohlen, den `developer`-Schlüssel zur Identifizierung des Autors in Firefox zu nutzen.

Ab Mai 2025 verwenden Chrome und der Chrome Web Store diesen Schlüssel nicht mehr.

## Beispiel

```json
"author": "Walt Whitman"
```

## Browser-Kompatibilität

{{Compat}}
