---
title: Kompatibilitätstabellen und das Browser-Kompatibilitätsdaten-Repository (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

MDN hat ein Standardformat für Tabellen, die die Kompatibilität von gemeinsam genutzten Technologien in allen Browsern veranschaulichen, wie z.B. DOM, HTML, CSS, JavaScript, SVG usw.
Um diese Daten programmatisch in mehreren Projekten verfügbar zu machen, wird ein Node.js-Paket aus dem [browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellt und in npm veröffentlicht.

Um die Daten innerhalb dieser Tabellen zu ändern, finden Sie umfassende Dokumentation zusammen mit den neuesten Informationen zu Konventionen und JSON-Schemata, die zur Darstellung der Daten verwendet werden, im [Contributing Guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) des Repositories sowie im [Datenleitfaden](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).
Wenn Sie Fragen haben oder Probleme entdecken, können Sie gerne [um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Verwendung von BCD-Daten auf MDN-Seiten

Sobald die Daten im [browser-compat-data](https://github.com/mdn/browser-compat-data)-Repo enthalten sind, können Sie beginnen, dynamisch Kompatibilitäts- und Spezifikationstabellen basierend auf diesen Daten in MDN-Seiten einzubinden.

Um mit BCD-Daten auf MDN-Seiten zu beginnen, verwenden Sie die im BCD-Quelldatei angegebene Abfragezeichenfolge für die relevanten Daten, die Sie einbeziehen möchten.
Zum Beispiel:

- Die Kompatibilitätsdaten von [`AbortController`](/de/docs/Web/API/AbortController) sind in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) definiert und können mit `api.AbortController` abgefragt werden.
- {{HTTPHeader("Content-Type")}} Die Kompatibilitätsdaten des HTTP-Headers sind in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) definiert und die Abfrage ist `http.headers.Content-Type`.
- Die Kompatibilitätsdaten der [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities)-Eigenschaft sind in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) definiert und ihre Abfrage ist `api.VRDisplay.capabilities`.

Die Kompatibilitätsdaten-Abfrage sollte im Frontmatter der Seite im `browser-compat` Schlüssel angegeben werden.
Zum Beispiel, [`AbortController`](/de/docs/Web/API/AbortController) würde wie unten gezeigt hinzugefügt werden:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Die Kompatibilitäts- und Spezifikationstabellen, die dem Schlüssel entsprechen, werden dann automatisch anstelle der `\{{Compat}}` und `\{{Specifications}}` Makros in der Quelle gerendert.

Wenn auf derselben Seite mehrere Kompatibilitäts-/Spezifikationstabellen erforderlich sind, können Sie den Wert von `browser-compat` als Array angeben. Zum Beispiel, für die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) würde dies wie unten gezeigt hinzugefügt werden:

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

Die Makroaufrufe erzeugen die folgenden Tabellen (und den entsprechenden Satz von Hinweisen):

### Beispiel für eine Kompatibilitätstabelle

{{Compat}}

### Beispiele für Spezifikationstabellen

{{Specifications}}
