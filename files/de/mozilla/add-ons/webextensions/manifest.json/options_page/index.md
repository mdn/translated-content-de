---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
l10n:
  sourceCommit: 355619a1194739dfba5a262aab61d3ea22907456
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
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">"options_page": "options/options.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `options_page`, um eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) zu definieren, die in einem neuen Tab geöffnet wird. Diese Seite verwenden Sie, um es den Benutzern zu ermöglichen, die Einstellungen Ihrer Erweiterung zu ändern.

Wie der Benutzer die Seite öffnet, hängt vom Browser ab. In Firefox öffnet sich die Seite, wenn das Symbol der Erweiterung angeklickt wird. Ihre Erweiterung kann die Seite auch mit {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Alternativ können Sie den Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) mit `open_in_tab` auf `true` verwenden. Wenn `options_ui` angegeben ist, wird `options_page` ignoriert.

Sehen Sie sich [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) für weitere Informationen zur Entwicklung einer Einstellungsseite an.

## Beispiel

```json
"options_page": "options/options.html"
```

## Browser-Kompatibilität

{{Compat}}
