---
title: storage
slug: Mozilla/Add-ons/WebExtensions/manifest.json/storage
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"storage": {
  "managed_schema": "schema.json"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `storage`-Schlüssel, um den Namen der Schema-Datei anzugeben, die die Struktur der Daten im verwalteten Speicher definiert.

Verwaltete Daten erklären die von der App unterstützten Unternehmensrichtlinien. Richtlinien sind Optionen ähnlich, werden jedoch von einem Systemadministrator anstelle des Benutzers konfiguriert, sodass die App für alle Benutzer einer Organisation konfiguriert werden kann.

Nachdem die Richtlinien deklariert wurden, werden sie über die {{WebExtAPIRef("storage.managed")}} API gelesen. Wenn jedoch ein Richtlinienwert nicht dem Schema entspricht, wird er von der `storage.managed` API nicht veröffentlicht. Es liegt an der App, die vom Administrator konfigurierten Richtlinien durchzusetzen.

> [!NOTE]
> Firefox definiert kein Schema für den verwalteten Speicher, siehe {{WebExtAPIRef("storage.managed")}} für weitere Details.

Der `storage`-Schlüssel ist ein Objekt, das die folgende erforderliche Eigenschaft besitzt:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>managed_schema</code></td>
      <td>
        <p>
          Ein <code>String</code>, der den vollständigen Pfad der Datei innerhalb der
          Erweiterung angibt, die das Schema des verwalteten Speichers definiert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
>
> Diese Seite enthält Details von der Chrome-Entwickler-Website-Seite [Manifest for storage areas](https://developer.chrome.com/docs/extensions/mv2/manifest/storage/), die hier unter der Creative Commons Attribution 3.0 United States-Lizenz enthalten sind.
