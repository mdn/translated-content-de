---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `protocol_handlers`-Element gibt ein Array von Objekten an, die Protokolle darstellen, die diese Web-App registrieren und behandeln kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine spezifische Anwendung mit dem angegebenen Protokollschema. Zum Beispiel öffnen sich bei der Verwendung des Protokoll-Handlers `mailto://` auf einer Webseite die registrierten E-Mail-Anwendungen.

Nachdem eine Web-App als Protokoll-Handler registriert wurde, öffnet sich die registrierte PWA und empfängt die URL, wenn ein Benutzer auf einen Hyperlink mit einem bestimmten Schema wie `mailto://` oder `web+music://` aus einem Browser oder einer nativen App klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu behandelnde Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungsbereichs [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll behandeln wird.
    Der `%s`-Token wird durch die URL ersetzt, die mit dem Protokoll-Handler-Schema beginnt. Wenn `url` eine relative
    URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest, dass die App so registriert werden soll, dass sie die Protokolle `web+jngl` und `web+jnglstore` behandelt.

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

Ein Entwickler kann ein Feld im manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App verarbeiten kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Deklarationsobjekten.

Die Registrierung von Anwendungen zur Behandlung von URL-Schemata ist betriebssystemabhängig. Diese Zuordnung erfolgt normalerweise während der Installation der Anwendung, kann aber auch nachträglich aus einer bereits installierten App heraus erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
