---
title: "CSPViolationReportBody: documentURL-Eigenschaft"
short-title: documentURL
slug: Web/API/CSPViolationReportBody/documentURL
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Reporting API")}}

Die **`documentURL`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist eine schreibgeschützte Zeichenkette, die die URL des Dokuments oder Workers darstellt, das gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

## Wert

Eine Zeichenkette, die die URL des Dokuments oder Workers enthält, das gegen die CSP verstoßen hat.

## Beispiele

### CSP-Inline-Skriptverstoß mit Referrer

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir navigieren von einer anderen Seite zu der Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

#### HTML

Zuerst definieren wir unsere Referrer-Seite `/bounce/index.html`.
Diese Seite enthält lediglich einen Link zu einer anderen Seite `../report_sample/index.html`.

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
Diese verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was es erlaubt, Skripte vom selben Domain zu laden, aber nicht erlaubt, Inline-Skripte auszuführen.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslöst.

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

Das obige Report-Beispiel lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies vom gleichen Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Verletzung `documentURL`, `referrer` und `blockedURL` in der Konsole zu protokollieren.

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

Beachten Sie, dass während es mehrere Berichte im zurückgegebenen Array geben könnte, wir aus Gründen der Kürze nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code würde in etwa so aussehen (die Seite hängt davon ab, wie die Seiten bereitgestellt werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert sind, `documentURL` ist die Seite mit dem CSP-Verstoß und `blockedURL` ist in diesem Fall keine URL, sondern ein Hinweis darauf, dass der Verstoß durch ein Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI)
