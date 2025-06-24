---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `protocol_handlers`-Mitglied spezifiziert ein Array von Objekten, die Protokolle sind, welche diese Web-App registrieren und handhaben kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine bestimmte Anwendung mit dem gegebenen Protokollschema. Zum Beispiel öffnen sich registrierte E-Mail-Anwendungen, wenn das Protokoll-Handler `mailto://` auf einer Webseite verwendet wird.

Nach der Registrierung einer Web-App als Protokoll-Handler öffnet sich die registrierte PWA und empfängt die URL, wenn ein Benutzer auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` von einem Browser oder einer nativen App klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu handhabende Protokoll enthält; z. B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll handhaben wird.
    Der `%s`-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn `url` eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest, dass die App so registriert werden soll, dass sie die Protokolle `web+jngl` und `web+jnglstore` handhabt.

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

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App handhaben kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Deklarationsobjekten für Protokoll-Handler.

Die Registrierung von Anwendungen zur Handhabung von URL-Schemata ist betriebssystemabhängig. Diese Zuordnung erfolgt normalerweise während der Installation der Anwendung, kann aber auch nachträglich von einer App durchgeführt werden, die bereits installiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
