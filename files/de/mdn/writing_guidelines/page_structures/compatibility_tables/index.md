---
title: Browser-Kompatibilitätstabellen und Browser-Kompatibilitätsdaten (BCD)
short-title: Kompatibilitätstabellen und BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

MDN hat ein Standardformat für Tabellen, die die Kompatibilität von gemeinsam genutzten Technologien über alle Browser hinweg veranschaulichen, wie DOM, HTML, CSS, JavaScript, SVG usw. Um diese Daten programmatisch in mehreren Projekten verfügbar zu machen, wird ein Node.js-Paket aus dem [browser-compat-data-Repository](https://github.com/mdn/browser-compat-data) erstellt und bei npm veröffentlicht.

Um die Daten innerhalb dieser Tabellen zu ändern, finden Sie umfassende Dokumentation zusammen mit den neuesten Details zu Konventionen und JSON-Schemata, die zur Darstellung der Daten verwendet werden, im [Beitrag-Leitfaden](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) des Repositories sowie im [Datenrichtlinien-Leitfaden](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines). Wenn Sie Fragen haben oder Probleme entdecken, können Sie gerne [um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Verwendung von BCD-Daten in MDN-Seiten

Sobald Daten im [browser-compat-data](https://github.com/mdn/browser-compat-data) Repository aufgenommen wurden, können Sie beginnen, Browser-Kompatibilitäts- und Spezifikationstabellen basierend auf diesen Daten dynamisch in MDN-Seiten einzubinden.

Um mit BCD-Daten auf MDN-Seiten zu beginnen, verwenden Sie die im BCD-Quellfile angegebene Abfragezeichenfolge für die relevanten Daten, die Sie einfügen möchten. Zum Beispiel:

- Die Kompatibilitätsdaten von [`AbortController`](/de/docs/Web/API/AbortController) sind in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) definiert und können mit `api.AbortController` abgefragt werden.
- Die Kompatibilitätsdaten für den {{HTTPHeader("Content-Type")}} HTTP-Header sind in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) definiert und die Abfrage lautet `http.headers.Content-Type`.
- Die Kompatibilitätsdaten der Eigenschaft [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) sind in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) definiert und die Abfrage lautet `api.VRDisplay.capabilities`.

Die Abfrage der Kompatibilitätsdaten sollte im Front-Matter der Seite im Schlüssel `browser-compat` angegeben werden. Zum Beispiel würde [`AbortController`](/de/docs/Web/API/AbortController) wie unten gezeigt hinzugefügt werden:

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

Die Makroaufrufe generieren die folgenden Tabellen (und das entsprechende Set an Notizen):

### Beispiel für eine Kompatibilitätstabelle

{{Compat}}

### Beispiel für Spezifikationstabellen

{{Specifications}}
