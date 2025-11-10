---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
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

Zusätzlich zum [version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Feld, das für Aktualisierungszwecke verwendet wird, kann **version_name** auf einen beschreibenden Versionsstring gesetzt werden und wird für Anzeigzwecke verwendet, wenn vorhanden.

Wenn kein **version_name** vorhanden ist, wird das **version**-Feld ebenfalls für Anzeigzwecke verwendet.

## Browser-Kompatibilität

{{Compat}}
