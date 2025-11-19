---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das `protocol_handlers`-Mitglied spezifiziert ein Array von Objekten, die Protokolle darstellen, die diese Web-App registrieren und verarbeiten kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine spezifische Anwendung mit dem angegebenen Protokollschema. Zum Beispiel öffnen sich bei Verwendung des Protokoll-Handlers `mailto://` auf einer Webseite registrierte E-Mail-Anwendungen.

Nachdem eine Web-App als Protokoll-Handler registriert wurde, öffnet sich die registrierte Progressive Web App (PWA) und erhält die URL, wenn ein Benutzer auf einen Hyperlink mit einem bestimmten Schema wie `mailto://` oder `web+music://` aus einem Browser oder einer nativen App klickt.

## Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}
  - : Ein erforderlicher String, der das zu verarbeitende Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll verarbeiten wird.
    Der `%s`-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn `url` eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest, dass die App die Protokolle `web+jngl` und `web+jnglstore` verarbeiten soll.

```json
{
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
}
```

Ein Entwickler kann ein Feld in der `manifest.json` hinzufügen, um zu deklarieren, welche Protokolle die Web-App verarbeiten kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Deklarationsobjekten.

Die Registrierung von Anwendungen zur Verarbeitung von URL-Schemata ist betriebssystemabhängig. Diese Zuordnung erfolgt in der Regel während der Installation der Anwendung, kann aber auch nachträglich von einer bereits installierten App vorgenommen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
