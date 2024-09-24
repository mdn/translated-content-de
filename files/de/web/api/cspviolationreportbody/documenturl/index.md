---
title: "CSPViolationReportBody: documentURL-Eigenschaft"
short-title: documentURL
slug: Web/API/CSPViolationReportBody/documentURL
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`documentURL`** schreibgeschützte Eigenschaft der {{domxref("CSPViolationReportBody")}}-Schnittstelle ist ein String, der die URL des Dokuments oder Workers darstellt, der gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

## Wert

Ein String, der die URL des Dokuments oder Workers enthält, der gegen die CSP verstoßen hat.

## Beispiele

### CSP Inline-Skript-Verstoß mit Refereranzeige

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem {{domxref("ReportingObserver")}}.
Wir navigieren von einer anderen Seite zu der Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

#### HTML

Zuerst definieren wir unsere Referer-Seite `/bounce/index.html`.
Diese Seite enthält nur einen Link zu einer anderen Seite `../report_sample/index.html`.

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <ul>
      <li><a href="../report_sample/">Berichtsbeispiel</a></li>
    </ul>
  </body>
</html>
```

Die HTML-Datei `../report_sample/index.html` ist unten definiert.
Diese nutzt das [`<meta>`](/de/docs/Web/HTML/Element/meta) Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was erlaubt, Skripte von derselben Domain zu laden, aber keine Inline-Skripte auszuführen.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen wird.

```html
<!doctype html>
<!-- /report_sample/index.html -->
<html lang="de">
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

Das oben gezeigte Berichtsbeispiel lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses von derselben Domain wie das HTML geladen wird, wird es von der CSP nicht blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Verstöße gegen Inhaltsrichtlinien vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um den Verstoß `documentURL`, `referrer` und `blockedURL` in die Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir der Einfachheit halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code könnte ungefähr so aussehen (die Site hängt davon ab, wie die Seiten bereitgestellt werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert haben, `documentURL` die Seite mit dem CSP-Verstoß ist und `blockedURL` in diesem Fall keine URL ist, sondern ein Hinweis darauf, dass der Verstoß durch ein Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.documentURI")}}
