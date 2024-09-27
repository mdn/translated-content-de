---
title: protocol_handlers
slug: Web/Manifest/protocol_handlers
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `protocol_handlers`-Element spezifiziert ein Array von Objekten, die Protokolle sind, die von dieser Web-App registriert und gehandhabt werden können. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung verknüpft eine bestimmte Anwendung mit dem angegebenen Protokollschema. Zum Beispiel öffnen registrierte E-Mail-Anwendungen beim Verwenden des Protokoll-Handlers `mailto://` auf einer Webseite.

Nachdem eine Web-App als Protokoll-Handler registriert wurde, würde beim Klicken eines Nutzers auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` aus einem Browser oder einer nativen App heraus die registrierte PWA geöffnet und die URL empfangen.

### Werte

Protokoll-Handler-Objekte können folgende Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu behandelnde Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs-[`scope`](/de/docs/Web/Manifest/scope), die das Protokoll handhabt.
    Das `%s`-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn `url` eine relative
    URL ist, wird die Basis-URL die URL des Manifests sein.

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

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um zu deklarieren, welche Protokolle die Web-App handhaben kann. Wie im obigen Beispiel zu sehen ist, heißt der Schlüssel `protocol_handlers` und enthält ein Array von Protokoll-Handler-Deklarationsobjekten.

Das Registrieren von Anwendungen zum Handhaben von URL-Schemata ist betriebssystemabhängig. Diese Zuordnung erfolgt normalerweise während der Anwendungsinstallation, kann aber auch nachträglich von einer bereits installierten App aus erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
