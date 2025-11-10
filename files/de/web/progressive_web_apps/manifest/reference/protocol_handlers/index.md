---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{SeeCompatTable}}

Das `protocol_handlers` Element spezifiziert ein Array von Objekten, die Protokolle darstellen, welche diese Web-App registrieren und verwalten kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine spezifische Anwendung mit dem angegebenen Protokollschema. Zum Beispiel öffnen sich registrierte E-Mail-Anwendungen, wenn das Protokoll `mailto://` auf einer Webseite verwendet wird.

Nach der Registrierung einer Web-App als Protokoll-Handler würde sich die registrierte PWA öffnen und die URL erhalten, wenn ein Benutzer auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` aus einem Browser oder einer nativen App klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}
  - : Ein erforderlicher String, der das zu verwaltende Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll verwalten wird.
    Das `%s` Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Falls `url` eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel erklärt ein Web-App-Manifest, dass die App registriert werden soll, um die Protokolle `web+jngl` und `web+jnglstore` zu verwalten.

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

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App verwalten kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Objekten.

Die Registrierung von Anwendungen zur Verwaltung von URL-Schemata ist betriebssystemabhängig. Diese Verknüpfung erfolgt in der Regel während der Anwendungsinstallation, kann aber auch nachträglich von einer App aus vorgenommen werden, die bereits installiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
