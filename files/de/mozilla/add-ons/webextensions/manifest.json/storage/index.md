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

Verwenden Sie den Schlüssel `storage`, um den Namen der Schema-Datei anzugeben, die die Struktur der Daten im verwalteten Speicher definiert.

Verwaltete Daten deklarieren die von der App unterstützten Unternehmensrichtlinien. Richtlinien sind Optionen ähnlich, werden jedoch von einem Systemadministrator statt vom Benutzer konfiguriert, wodurch die App für alle Benutzer einer Organisation konfiguriert werden kann.

Nach der Deklaration der Richtlinien werden diese über die {{WebExtAPIRef("storage.managed")}} API ausgelesen. Wenn ein Richtlinienwert jedoch nicht dem Schema entspricht, wird er nicht von der `storage.managed` API veröffentlicht. Es liegt in der Verantwortung der App, die vom Administrator konfigurierten Richtlinien durchzusetzen.

> [!NOTE]
> Firefox definiert kein Schema für verwalteten Speicher, siehe {{WebExtAPIRef("storage.managed")}} für weitere Details.

Der Schlüssel `storage` ist ein Objekt, das die folgende erforderliche Eigenschaft hat:

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
> Diese Seite enthält Details von der Chrome-Entwickler-Website-Seite [Manifest for storage areas](https://developer.chrome.com/docs/extensions/mv2/manifest/storage/), die hier unter der Creative Commons Attribution 3.0 United States License enthalten sind.
