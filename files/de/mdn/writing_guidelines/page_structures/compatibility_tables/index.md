---
title: Kompatibilitätstabellen und das Browser-Kompatibilitätsdaten-Repository (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN hat ein Standardformat für Tabellen entwickelt, die die Kompatibilität gemeinsamer Technologien in allen Browsern aufzeigen, wie DOM, HTML, CSS, JavaScript, SVG usw. Um diese Daten programmgesteuert in mehreren Projekten verfügbar zu machen, wird ein Node.js-Paket aus dem [browser-compat-data repository](https://github.com/mdn/browser-compat-data) erstellt und auf npm veröffentlicht.

Um die Daten in diesen Tabellen zu ändern, finden Sie umfassende Dokumentation zusammen mit den neuesten Details zu Konventionen und JSON-Schemata, die zur Darstellung der Daten verwendet werden, im [Leitfaden für Mitwirkende](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) des Repositories sowie im [Leitfaden für Datenrichtlinien](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).
Wenn Sie Fragen haben oder Probleme entdecken, sind Sie eingeladen, [um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Verwendung von BCD-Daten in MDN-Seiten

Sobald Daten in das [browser-compat-data](https://github.com/mdn/browser-compat-data) Repository aufgenommen wurden, können Sie beginnen, Browser-Kompatibilitäts- und Spezifikationstabellen basierend auf diesen Daten dynamisch in MDN-Seiten einzubinden.

Um mit BCD-Daten auf MDN-Seiten zu beginnen, verwenden Sie die im BCD-Quellfile angegebene Abfragezeichenfolge für die relevanten Daten, die Sie einschließen möchten.
Zum Beispiel:

- Die Kompatibilitätsdaten für [`AbortController`](/de/docs/Web/API/AbortController) sind in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) definiert und können mit `api.AbortController` abgefragt werden.
- Die Kompatibilitätsdaten für den HTTP-Header {{HTTPHeader("Content-Type")}} sind in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) definiert und die Abfrage lautet `http.headers.Content-Type`.
- Die Kompatibilitätsdaten für die Eigenschaft [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) sind in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) definiert und die Abfrage lautet `api.VRDisplay.capabilities`.

Die Kompatibilitätsdatenabfrage sollte im Seiten-Frontmatter unter dem Schlüssel `browser-compat` angegeben werden. Zum Beispiel würde [`AbortController`](/de/docs/Web/API/AbortController) wie unten gezeigt hinzugefügt werden:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Die entsprechenden Kompatibilitäts- und Spezifikationstabellen werden dann automatisch anstelle der `\{{Compat}}` und `\{{Specifications}}` Makros im Quelltext gerendert.

Wenn auf derselben Seite mehrere Kompatibilitäts-/Spezi­fikationstabellen erforderlich sind, können Sie den Wert von `browser-compat` als Array angeben. Zum Beispiel würde dies für die [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API) wie unten gezeigt hinzugefügt werden:

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

Die Makroaufrufe generieren die folgenden Tabellen (und den entsprechenden Anmerkungssatz):

### Beispiel für eine Kompatibilitätstabelle

{{Compat}}

### Beispiele für Spezifikationstabellen

{{Specifications}}
