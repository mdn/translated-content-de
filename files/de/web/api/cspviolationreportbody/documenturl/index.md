---
title: "CSPViolationReportBody: documentURL-Eigenschaft"
short-title: documentURL
slug: Web/API/CSPViolationReportBody/documentURL
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`documentURL`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der die URL des Dokuments oder Workers darstellt, das gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

## Wert

Ein String, der die URL des Dokuments oder Workers enthält, das gegen die CSP verstoßen hat.

## Beispiele

### CSP Inline-Skript-Verletzung mit Referrer anzeigen

In diesem Beispiel wird eine CSP-Verletzung mithilfe eines Inline-Skripts ausgelöst und die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet.
Wir navigieren von einer anderen Seite zu der Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

#### HTML

Zuerst definieren wir unsere Referrer-Seite `/bounce/index.html`.
Diese Seite enthält nur einen Link zu einer anderen Seite `../report_sample/index.html`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <ul>
      <li><a href="../report_sample/">report sample</a></li>
    </ul>
  </body>
</html>
```

Die HTML-Datei `../report_sample/index.html` ist unten definiert.
Diese verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was das Laden von Skripten von derselben Domain erlaubt, jedoch keine Inline-Skripte ausgeführt werden können.
Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslöst.

```html
<!doctype html>
<!-- /report_sample/index.html -->
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das obige Bericht-Beispiel lädt auch das externe Skript `main.js`, welches unten gezeigt wird.
Da dieses vom selben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die `documentURL`, den `referrer` und die `blockedURL` der Verletzung in der Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`documentURL: ${reports[0].body.referrer}`);
    console.log(`referrer: ${reports[0].body.referrer}`);
    console.log(`blockedURL: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl möglicherweise mehrere Berichte im zurückgegebenen Array enthalten sind, wir zur Vereinfachung nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code könnte in etwa wie unten dargestellt aussehen (die Seite hängt davon ab, wie die Seiten bereitgestellt werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert sind, `documentURL` die Seite mit der CSP-Verletzung ist und `blockedURL` in diesem Fall keine URL ist, sondern ein Hinweis darauf, dass die Verletzung durch ein Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI)
