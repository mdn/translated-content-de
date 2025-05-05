---
title: protocol_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/protocol_handlers
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `protocol_handlers`-Mitglied gibt ein Array von Objekten an, welche Protokolle sind, die diese Web-App registrieren und handhaben kann. Protokoll-Handler registrieren die Anwendung in den Anwendungseinstellungen eines Betriebssystems; die Registrierung assoziiert eine spezifische Anwendung mit dem gegebenen Protokoll-Schema. Wenn beispielsweise der Protokoll-Handler `mailto://` auf einer Webseite verwendet wird, öffnen sich registrierte E-Mail-Anwendungen.

Nachdem eine Web-App als Protokoll-Handler registriert wurde, öffnet sich die registrierte PWA und empfängt die URL, wenn ein Benutzer in einem Browser oder einer nativen App auf einen Hyperlink mit einem spezifischen Schema wie `mailto://` oder `web+music://` klickt.

### Werte

Protokoll-Handler-Objekte können die folgenden Werte enthalten:

- `protocol` {{experimental_inline}}

  - : Ein erforderlicher String, der das zu bearbeitende Protokoll enthält; z.B.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Erforderliche HTTPS-URL innerhalb des Anwendungs[`bereichs`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope), die das Protokoll
    handhaben wird.
    Das `%s`-Token wird durch die URL ersetzt, die mit dem Schema des Protokoll-Handlers beginnt. Wenn `url` eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

## Beispiele

In diesem Beispiel gibt ein Web-App-Manifest an, dass die App registriert werden soll, um die Protokolle `web+jngl` und `web+jnglstore` zu bearbeiten.

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

Ein Entwickler kann ein Feld in der manifest.json hinzufügen, um anzugeben, welche Protokolle die Web-App handhaben kann. Wie im obigen Beispiel zu sehen ist, wird der Schlüssel `protocol_handlers` genannt und enthält ein Array von Protokoll-Handler-Deklarationsobjekten.

Das Registrieren von Anwendungen zur Bearbeitung von URL-Schemata ist betriebssystemabhängig. Diese Assoziation wird normalerweise während der Anwendungsinstallation durchgeführt, kann aber auch nachträglich von einer bereits installierten App aus erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
