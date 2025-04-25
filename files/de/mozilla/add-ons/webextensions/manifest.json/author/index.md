---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
l10n:
  sourceCommit: ae9ff189579379acf6aea6b4a1cb01ea1a96011d
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

Der Autor der Erweiterung, vorgesehen zur Anzeige in der Benutzeroberfläche des Browsers. Der Typ und die Bedeutung dieses Schlüssels variieren je nach Browser und [manifest_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version). Die Zeichenkette, die von diesem Wert gehalten wird, ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

Chrome erwartet, dass dieser Schlüssel die E-Mail-Adresse des Autors der Erweiterung repräsentiert. In Manifest V2 muss der Wert eine Zeichenkette sein. Ab Manifest V3 bevorzugt Chrome, dass der Wert ein Objekt mit einer `email`-Eigenschaft und einem Zeichenkettenwert ist. Beim Veröffentlichen im Chrome Web Store wird jede Datenstruktur akzeptiert, aber der Zeichenkettenwert muss mit der E-Mail-Adresse des Kontos übereinstimmen, das zur Veröffentlichung der Erweiterung verwendet wird.

Firefox erwartet, dass dieser Schlüssel den Namen der Person oder Organisation repräsentiert, die die Erweiterung entwickelt hat. Firefox erwartet eine Zeichenkette; wenn es als Objekt deklariert ist, ignoriert Firefox es. Wenn der [developer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel ebenfalls als Objekt mit einer `name`-Eigenschaft angegeben ist, überschreibt der Wert von `name` den `author`-Schlüssel.

Wenn Sie sowohl auf Chrome als auch auf Firefox abzielen, verwenden Sie den `author`-Schlüssel, um den Autor in Chrome zu identifizieren und den `developer`-Schlüssel, um den Autor in Firefox zu identifizieren.

## Beispiel

```json
"author": "Walt Whitman"
```

## Browser-Kompatibilität

{{Compat}}
