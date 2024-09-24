---
title: devtools_seite
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
l10n:
  sourceCommit: d596fa52a398798a9812258064a49faf75a3ef99
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">"devtools_page": "devtools/my-page.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie diesen Schlüssel, um Ihre Erweiterung zu aktivieren, die integrierten Devtools des Browsers zu erweitern.

Dieser Schlüssel wird als URL zu einer HTML-Datei definiert. Die HTML-Datei muss mit der Erweiterung gebündelt werden, und die URL ist relativ zum Root-Verzeichnis der Erweiterung.

Die Verwendung dieses Manifest-Schlüssels löst [eine Berechtigungswarnung zur Installationszeit über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) aus. Um eine Berechtigungswarnung zur Installationszeit zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifestschema auflisten.

Siehe [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) um mehr zu erfahren.

## Example

```json
"devtools_page": "devtools/my-page.html"
```

## Browser compatibility

{{Compat}}
