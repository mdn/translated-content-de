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

Verwenden Sie den Schlüssel `options_page`, um eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) zu definieren, die in einem neuen Tab geöffnet wird. Sie verwenden diese Seite, um den Benutzern das Ändern der Einstellungen Ihrer Erweiterung zu ermöglichen.

Die Art und Weise, wie der Benutzer die Seite öffnet, ist browserabhängig. In Firefox öffnet sich die Seite, wenn das Symbol der Erweiterung angeklickt wird. Ihre Erweiterung kann die Seite auch durch die Verwendung von {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Alternativ können Sie den Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) mit `open_in_tab` auf `true` verwenden. Wenn `options_ui` angegeben ist, wird `options_page` ignoriert.

Siehe [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) für weitere Informationen zur Entwicklung einer Einstellungsseite.

## Beispiel

```json
"options_page": "options/options.html"
```

## Browser-Kompatibilität

{{Compat}}
