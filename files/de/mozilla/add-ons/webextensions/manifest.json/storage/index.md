---
title: storage
slug: Mozilla/Add-ons/WebExtensions/manifest.json/storage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
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
        <pre class="brush: json">
"storage": {
  "managed_schema": "schema.json"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `storage` Schlüssel, um den Namen der Schema-Datei anzugeben, die die Struktur der Daten im verwalteten Speicher definiert.

Verwaltete Daten geben die Unternehmensrichtlinien an, die von der App unterstützt werden. Richtlinien sind analog zu Optionen, werden jedoch von einem Systemadministrator konfiguriert und nicht vom Benutzer, was es ermöglicht, die App für alle Benutzer einer Organisation zu konfigurieren.

Nachdem die Richtlinien deklariert wurden, werden sie über die {{WebExtAPIRef("storage.managed")}} API gelesen. Wenn jedoch ein Richtlinienwert nicht dem Schema entspricht, wird er nicht von der `storage.managed` API veröffentlicht. Es liegt an der App, die vom Administrator konfigurierten Richtlinien durchzusetzen.

> [!NOTE]
> Firefox definiert kein Schema für verwalteten Speicher, siehe {{WebExtAPIRef("storage.managed")}} für weitere Details.

Der `storage` Schlüssel ist ein Objekt, das die folgende erforderliche Eigenschaft hat:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>managed_schema</code></td>
      <td>
        <p>
          Ein <code>String</code>, der den vollständigen Pfad der Datei innerhalb der Erweiterung angibt, die das Schema des verwalteten Speichers definiert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
>
> Diese Seite enthält Details von der Chrome-Entwickler-Website [Manifest for storage areas](https://developer.chrome.com/docs/extensions/mv2/manifest/storage/), die hier unter der Creative Commons Attribution 3.0 United States License enthalten sind.
