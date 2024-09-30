---
title: protocol_handlers
slug: Web/Manifest/protocol_handlers
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `protocol_handlers`-Mitglied gibt ein Array von Objekten an, die Protokolle darstellen, die diese Web-App registrieren und handhaben kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine spezifische Anwendung mit dem angegebenen Protokollschema. Beispielsweise öffnen sich registrierte E-Mail-Anwendungen, wenn auf einer Webseite der Protokoll-Handler `mailto://` verwendet wird.

Nach der Registrierung einer Web-App als Protokoll-Handler würde, wenn ein Benutzer auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` aus einem Browser oder einer nativen App klickt, die registrierte PWA geöffnet und die URL empfangen werden.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu handhabende Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Manifest/scope), die das Protokoll
    handhaben wird.
    Der `%s`-Token wird durch die mit dem Protokoll-Handler-Schema beginnende URL ersetzt. Wenn `url` eine relative URL
    ist, ist die Basis-URL die URL des Manifests.

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

Ein Entwickler kann ein Feld in die manifest.json hinzufügen, um zu erklären, welche Protokolle die Web-App handhaben kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers`, und er enthält ein Array von Deklarationsobjekten für Protokoll-Handler.

Die Registrierung von Anwendungen zur Handhabung von URL-Schemata ist betriebssystemabhängig. Diese Zuordnung erfolgt in der Regel während der Anwendungsinstallation, kann aber auch nachträglich von einer bereits installierten App vorgenommen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
