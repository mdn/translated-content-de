---
title: protocol_handlers
slug: Web/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `protocol_handlers`-Element spezifiziert ein Array von Objekten, die Protokolle sind, welche diese Web-App registrieren und verwalten kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verbindet eine spezifische Anwendung mit dem gegebenen Protokoll-Schema. Zum Beispiel, beim Verwenden des Protokoll-Handlers `mailto://` auf einer Webseite öffnen sich registrierte E-Mail-Anwendungen.

Nachdem eine Web-App als Protokoll-Handler registriert wurde, öffnet sich die registrierte PWA und empfängt die URL, wenn ein Benutzer auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` von einem Browser oder einer nativen App klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu handhabende Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Manifest/Reference/scope), die das Protokoll
    bearbeiten wird.
    Der `%s`-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn `url` eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest, dass die App registriert werden soll, um die Protokolle `web+jngl` und `web+jnglstore` zu verwalten.

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

Ein Entwickler kann ein Feld im manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App verwalten kann. Wie im obigen Beispiel zu sehen, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Deklarations-Objekten.

Anwendungen für die Verwaltung von URL-Schemata zu registrieren, ist betriebssystemabhängig. Diese Zuordnung erfolgt normalerweise während der Anwendungsinstallation, kann aber auch nachträglich von einer bereits installierten App aus durchgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
