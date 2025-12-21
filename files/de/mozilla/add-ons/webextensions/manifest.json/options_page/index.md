---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
l10n:
  sourceCommit: 9928bcdc0db13da73e8ef065ab40a8e1ac8e6b0c
---

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
      <td>
        <pre class="brush: json">"options_page": "options/options.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `options_page`, um eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) zu definieren, die in einem neuen Tab geöffnet wird. Diese Seite ermöglicht es Nutzern, die Einstellungen Ihrer Erweiterung zu ändern.

Wie der Nutzer die Seite öffnet, hängt vom Browser ab. In Firefox öffnet sich die Seite, wenn auf das Symbol der Erweiterung geklickt wird. Ihre Erweiterung kann die Seite auch mit {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Alternativ können Sie den Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) mit `open_in_tab` auf `true` verwenden. Wenn `options_ui` angegeben ist, wird `options_page` ignoriert.

Weitere Informationen zur Entwicklung einer Einstellungsseite finden Sie unter [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).

## Beispiel

```json
"options_page": "options/options.html"
```

## Browser-Kompatibilität

{{Compat}}
