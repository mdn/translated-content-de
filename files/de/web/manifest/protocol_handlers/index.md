---
title: protocol_handlers
slug: Web/Manifest/protocol_handlers
l10n:
  sourceCommit: 0c015b80f786ecc4547c3e37a70c7f6aafdfbf74
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das `protocol_handlers`-Mitglied spezifiziert ein Array von Objekten, die Protokolle sind, für die diese Web-App registriert und behandelt werden kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine bestimmte Anwendung mit dem gegebenen Protokollschema. Zum Beispiel öffnen sich registrierte E-Mail-Anwendungen, wenn auf einer Webseite der Protokoll-Handler `mailto://` verwendet wird.

Nach der Registrierung einer Web-App als Protokoll-Handler, öffnet sich die registrierte PWA und erhält die URL, wenn ein Benutzer auf einen Hyperlink mit einem bestimmten Schema wie `mailto://` oder `web+music://` von einem Browser oder einer nativen App klickt.

## Beispiel

In diesem Beispiel deklariert ein Web-App-Manifest, dass die App registriert werden soll, um die Protokolle `web+jngl` und `web+jnglstore` zu behandeln.

```json
"protocol_handlers": [
  {
    "protocol": "web+jngl",
    "url": "/lookup?type=%s"
  },
  {
    "protocol": "web+jnglstore",
    "url": "/shop?for=%s"
  }
]
```

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App behandeln kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Deklarationsobjekten.

Die Registrierung von Anwendungen zur Handhabung von URL-Schemata ist betriebssystemabhängig. Diese Verknüpfung erfolgt normalerweise bei der Anwendungsinstallation, kann aber auch nachträglich von einer bereits installierten App erfolgen.

## Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Mitglied</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>protocol</code></td>
      <td>
        Ein erforderlicher String, der das zu behandelnde Protokoll enthält; z.B.:
        <code>mailto</code>, <code>ms-word</code>, <code>web+jngl</code>.
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>
        Erforderliche HTTPS-URL innerhalb des Anwendungs-
        <a href="/de/docs/Web/Manifest/scope">scopes</a>, die das Protokoll behandeln wird. Das <code>%s</code>-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn <code>url</code> eine relative URL ist, ist die Basis-URL die URL des Manifests.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
