---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
l10n:
  sourceCommit: df052b23bd544e625e471e8fad77d060eef9c9d1
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
      <td>
        <pre class="brush: json;">"options_page": "options/options.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `options_page`-Schlüssel, um eine [Einstellungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) zu definieren, die in einem neuen Tab geöffnet wird. Auf dieser Seite können Benutzer die Einstellungen Ihrer Erweiterung ändern.

Die Methode, wie der Benutzer die Seite öffnet, hängt vom Browser ab. In Firefox wird die Seite geöffnet, wenn auf das Symbol der Erweiterung geklickt wird. Ihre Erweiterung kann die Seite auch mit {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Alternativ können Sie den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssel mit `open_in_tab` auf `true` setzen. Wenn `options_ui` angegeben ist, wird `options_page` ignoriert.

Weitere Informationen zur Entwicklung einer Einstellungsseite finden Sie unter [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).

## Beispiel

```json
"options_page": "options/options.html"
```

## Browser-Kompatibilität

{{Compat}}
