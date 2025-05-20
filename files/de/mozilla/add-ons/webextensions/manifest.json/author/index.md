---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
l10n:
  sourceCommit: 570370b96885b4e2872342305353749b03206da3
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

Der Autor der Erweiterung. Er soll in der Benutzeroberfläche des Browsers angezeigt werden. Der durch den Wert gehaltene String ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

Firefox erwartet, dass dieser Schlüssel den Namen der Person oder Entität darstellt, die die Erweiterung entwickelt hat. Wenn der [developer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel auch als Objekt mit einer `name`-Eigenschaft angegeben ist, überschreibt der Wert von `name` den `author`-Schlüssel.

Es wird empfohlen, in Firefox den `developer`-Schlüssel zur Identifizierung des Autors zu verwenden.

Seit Mai 2025 nutzen Chrome und der Chrome Web Store diesen Schlüssel nicht mehr.

## Beispiel

```json
"author": "Walt Whitman"
```

## Browser-Kompatibilität

{{Compat}}
