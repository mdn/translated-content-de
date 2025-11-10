---
title: devtools_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
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
      <th scope="row">Erforderlich</th>
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

Verwenden Sie diesen Schlüssel, um Ihre Erweiterung zu aktivieren, die integrierten Entwicklertools des Browsers zu erweitern.

Dieser Schlüssel ist als URL zu einer HTML-Datei definiert. Die HTML-Datei muss mit der Erweiterung gebündelt werden, und die URL ist relativ zum Stamm der Erweiterung.

Die Verwendung dieses Manifest-Schlüssels löst eine [Installationszeit-Berechtigungswarnung zu den Entwicklertools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) aus. Um eine Installationszeit-Berechtigungswarnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auflisten.

Weitere Informationen finden Sie unter [Erweiterung der Entwicklertools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Beispiel

```json
"devtools_page": "devtools/my-page.html"
```

## Browser-Kompatibilität

{{Compat}}
