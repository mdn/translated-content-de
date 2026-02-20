---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
l10n:
  sourceCommit: 9a1a8665d37c3b75f9d9a545c4c2407296615a41
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

Zusätzlich zum [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Schlüssel, der für Aktualisierungen verwendet wird, kann `version_name` auf eine beschreibende Versionszeichenfolge gesetzt werden und wird als angezeigter Versionswert verwendet.

Wenn `version_name` nicht vorhanden ist, wird die `version`-Eigenschaft als angezeigte Version verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) Manifest-Schlüssel
