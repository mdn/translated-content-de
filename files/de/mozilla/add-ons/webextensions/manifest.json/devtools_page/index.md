---
title: devtools_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
l10n:
  sourceCommit: d596fa52a398798a9812258064a49faf75a3ef99
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
        <pre class="brush: json">"devtools_page": "devtools/my-page.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie diesen Schlüssel, um Ihre Erweiterung zu ermöglichen, die eingebauten Entwicklertools des Browsers zu erweitern.

Dieser Schlüssel ist als URL zu einer HTML-Datei definiert. Die HTML-Datei muss mit der Erweiterung gebündelt sein, und die URL ist relativ zum Stammverzeichnis der Erweiterung.

Die Verwendung dieses Manifest-Schlüssels löst [eine Installationswarnung über die Entwicklertools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) aus. Um eine Installationswarnung zu vermeiden, kennzeichnen Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im [Manifest-Schlüssel `optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufführen.

Mehr dazu erfahren Sie unter [Erweiterung der Entwicklertools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Beispiel

```json
"devtools_page": "devtools/my-page.html"
```

## Browser-Kompatibilität

{{Compat}}
