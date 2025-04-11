---
title: "CSPViolationReportBody: documentURL Eigenschaft"
short-title: documentURL
slug: Web/API/CSPViolationReportBody/documentURL
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`documentURL`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der die URL des Dokuments oder Workers darstellt, das gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

## Wert

Ein String, der die URL des Dokuments oder Workers enthält, das gegen die CSP verstoßen hat.

## Beispiele

### CSP Inline-Skript-Verstoß zeigt Referrer

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir navigieren von einer anderen Seite auf die Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

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

Die `../report_sample/index.html` HTML-Datei wird unten definiert.
Diese verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was das Laden von Skripten aus derselben Domain erlaubt, jedoch nicht das Ausführen von Inline-Skripten.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen wird.

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

Das obige Beispiel lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir aber der Einfachheit halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code würde in etwa wie unten gezeigt aussehen (die Site hängt davon ab, wie die Seiten bereitgestellt werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert haben, `documentURL` die Seite mit dem CSP-Verstoß ist, und `blockedURL` in diesem Fall keine URL ist, sondern ein Hinweis darauf, dass der Verstoß durch ein Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI)
