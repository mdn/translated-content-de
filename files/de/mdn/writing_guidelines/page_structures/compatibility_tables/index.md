---
title: Browser-Kompatibilitätstabellen und Browser-Kompatibilitätsdaten (BCD)
short-title: Kompatibilitätstabellen und BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

MDN hat ein Standardformat für Tabellen, die die Kompatibilität gemeinsamer Technologien über alle Browser hinweg darstellen, wie DOM, HTML, CSS, JavaScript, SVG usw.
Um diese Daten in mehreren Projekten programmatisch verfügbar zu machen, wird ein Node.js-Paket aus dem [browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellt und auf npm veröffentlicht.

Um die Daten innerhalb dieser Tabellen zu ändern, finden Sie umfassende Dokumentation zusammen mit den neuesten Details zu Konventionen und JSON-Schemata, die zur Darstellung der Daten verwendet werden, im [Leitfaden für Mitwirkende](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) sowie im [Datenrichtlinien-Leitfaden](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md) des Repositories.
Wenn Sie Fragen haben oder Probleme entdecken, können Sie gerne [um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Nutzung von BCD-Daten auf MDN-Seiten

Sobald Daten im [browser-compat-data](https://github.com/mdn/browser-compat-data)-Repository enthalten sind, können Sie damit beginnen, Tabellen zu Browser-Kompatibilität und Spezifikationen basierend auf diesen Daten dynamisch in MDN-Seiten einzufügen.

Um mit BCD-Daten auf MDN-Seiten zu starten, verwenden Sie die Abfragezeichenfolge, die in der BCD-Quelldatei für die relevanten Daten angegeben ist, die Sie einfügen möchten.
Zum Beispiel:

- Die Kompatibilitätsdaten von [`AbortController`](/de/docs/Web/API/AbortController) sind in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) definiert und können mit `api.AbortController` abgefragt werden.
- Die {{HTTPHeader("Content-Type")}} HTTP-Header-Kompatibilitätsdaten sind in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) definiert, und die Abfrage lautet `http.headers.Content-Type`.
- Die Kompatibilitätsdaten der [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities)-Eigenschaft sind in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) definiert, und die Abfrage lautet `api.VRDisplay.capabilities`.

Die Kompatibilitätsabfrage sollte im Front-Matter der Seite im `browser-compat`-Schlüssel angegeben werden.
Zum Beispiel wird [`AbortController`](/de/docs/Web/API/AbortController) wie folgt hinzugefügt:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Die Kompatibilitäts- und Spezifikationstabellen, die dem Schlüssel entsprechen, werden dann automatisch anstelle der Makros `\{{Compat}}` und `\{{Specifications}}` im Quelltext eingefügt.

Wenn auf derselben Seite mehrere Kompatibilitäts-/Spezifikationstabellen benötigt werden, können Sie den Wert von `browser-compat` als Array angeben. Zum Beispiel würde dies für die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) wie folgt hinzugefügt werden:

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

Die Makroaufrufe generieren die folgenden Tabellen (und das entsprechende Set von Anmerkungen):

### Beispiel für eine Kompatibilitätstabelle

{{Compat}}

### Beispiele für Spezifikationstabellen

{{Specifications}}
