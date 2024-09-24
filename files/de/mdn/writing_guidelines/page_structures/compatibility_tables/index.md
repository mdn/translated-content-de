---
title: Kompatibilitätstabellen und das Browser-Kompatibilitätsdaten-Repository (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

MDN hat ein Standardformat für Tabellen, die die Kompatibilität gemeinsamer Technologien über alle Browser hinweg darstellen, wie DOM, HTML, CSS, JavaScript, SVG usw. Um diese Daten in mehreren Projekten programmatisch verfügbar zu machen, wird ein Node.js-Paket aus dem [browser-compat-data repository](https://github.com/mdn/browser-compat-data) erstellt und auf npm veröffentlicht.

Um die Daten in diesen Tabellen zu ändern, finden Sie umfassende Dokumentation zusammen mit den neuesten Details zu den Konventionen und JSON-Schemata zur Darstellung der Daten im [beitragsleitfaden des Repositories](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) sowie im [Datenrichtlinien-Leitfaden](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md). Wenn Sie Fragen haben oder Probleme entdecken, sind Sie herzlich eingeladen, [um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Verwendung von BCD-Daten in MDN-Seiten

Sobald Daten im [browser-compat-data](https://github.com/mdn/browser-compat-data) Repo aufgenommen wurden, können Sie dynamisch Browser-Kompatibilitäts- und Spezifikationstabellen basierend auf diesen Daten in MDN-Seiten einbinden.

Um mit BCD-Daten auf MDN-Seiten zu beginnen, verwenden Sie die Abfragezeichenfolge, die in der BCD-Quelldatei für die relevanten Daten, die Sie einfügen möchten, angegeben ist. Zum Beispiel:

- Die {{domxref("AbortController")}}-Kompatibilitätsdaten sind in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) definiert und können mit `api.AbortController` abgefragt werden.
- Die {{HTTPHeader("Content-Type")}} HTTP-Header-Kompatibilitätsdaten sind in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) definiert und die Abfrage ist `http.headers.Content-Type`.
- Die {{domxref("VRDisplay.capabilities")}}-Eigenschafts-Kompatibilitätsdaten sind in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) definiert und ihre Abfrage ist `api.VRDisplay.capabilities`.

Die Abfrage der Kompatibilitätsdaten sollte in der Seiten-Front-Matter im `browser-compat` Schlüssel angegeben werden. Zum Beispiel würde {{domxref("AbortController")}} wie unten gezeigt hinzugefügt werden:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Die Kompatibilitäts- und Spezifikationstabellen, die dem Schlüssel entsprechen, werden dann automatisch anstelle der `\{{Compat}}` und `\{{Specifications}}` Makros im Quelltext gerendert.

Wenn mehrere Kompatibilitäts-/Spezifikationstabellen auf derselben Seite erforderlich sind, können Sie den Wert von `browser-compat` als ein Array angeben. Beispielsweise würde dies für die [Kanalnachrichten-API](/de/docs/Web/API/Channel_Messaging_API) wie unten gezeigt hinzugefügt werden:

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

Die Makroaufrufe erzeugen die folgenden Tabellen (und den entsprechenden Satz von Notizen):

### Beispiel für eine Kompatibilitätstabelle

{{Compat}}

### Beispiele für Spezifikationstabellen

{{Specifications}}
