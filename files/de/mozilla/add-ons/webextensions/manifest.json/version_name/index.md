---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

Zusätzlich zum [version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Feld, das für Aktualisierungszwecke verwendet wird, kann [version_name](https://developer.chrome.com/docs/extensions/reference/manifest/version) auf eine beschreibende Versionszeichenfolge festgelegt werden und wird, falls vorhanden, für Anzeigezwecke verwendet.

Wenn kein **version_name** vorhanden ist, wird das **version**-Feld ebenfalls für Anzeigezwecke verwendet.

## Browser-Kompatibilität

{{Compat}}
