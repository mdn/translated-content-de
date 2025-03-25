---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `protocol_handlers`-Mitglied spezifiziert ein Array von Objekten, die Protokolle sind, welche diese Webanwendung registrieren und handhaben kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine spezifische Anwendung mit dem angegebenen Protokollschema. Zum Beispiel öffnen sich bei der Nutzung des Protokoll-Handlers `mailto://` auf einer Webseite die registrierten E-Mail-Anwendungen.

Nachdem eine Webanwendung als Protokoll-Handler registriert wurde, öffnet sich die registrierte PWA und empfängt die URL, wenn ein Benutzer auf einen Hyperlink mit einem bestimmten Schema wie `mailto://` oder `web+music://` von einem Browser oder einer nativen App klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu handhabende Protokoll enthält; z. B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendung[`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll handhaben wird.
    Das `%s`-Token wird durch die URL ersetzt, die mit dem Protokollhandler-Schema beginnt. Wenn `url` eine relative URL ist, wird die Basis-URL die URL des Manifestes sein.

## Beispiele

In diesem Beispiel deklariert ein Web-App-Manifest, dass die App registriert werden soll, um die Protokolle `web+jngl` und `web+jnglstore` zu handhaben.

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

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um anzugeben, welche Protokolle die Webanwendung handhaben kann. Wie im obigen Beispiel zu sehen, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Deklarationsobjekten der Protokoll-Handler.

Die Registrierung von Anwendungen zur Handhabung von URL-Schemata ist betriebssystemabhängig. Diese Verknüpfung erfolgt normalerweise während der Installation der Anwendung, kann aber auch später von einer bereits installierten App vorgenommen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
