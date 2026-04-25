---
title: "CSPViolationReport: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/CSPViolationReport/sourceFile
l10n:
  sourceCommit: a0d3dd05ba50e0ff4a595bb0c06499bdfc736e9f
---

{{APIRef("Reporting API")}}

Die **`sourceFile`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Dictionaries gibt die URL der Quelldatei an, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Bei einer Verletzung, die durch die Verwendung eines Inline-Skripts ausgelöst wird, ist `sourceFile` die URL des aktuellen Dokuments. Ebenso, wenn ein Dokument ein Skript erfolgreich lädt, das dann gegen die CSP des Dokuments verstößt, ist `sourceFile` die URL des Skripts.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`CSPViolationReport.lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber) und [`CSPViolationReport.columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber) verwendet, die zusammen den genauen Ort im Quellcode angeben, der die Verletzung verursacht hat.

Beachten Sie jedoch, dass `sourceFile` `null` sein wird, wenn ein Dokument mit einer CSP, die externe Ressourcen blockiert, versucht, eine externe Ressource zu laden. Dies liegt daran, dass der Browser den Wert _vom globalen Objekt_ der Datei extrahiert, die die Verletzung ausgelöst hat. Aufgrund der CSP-Beschränkung wird die externe Ressource niemals geladen und hat daher kein entsprechendes globales Objekt.

## Wert

Ein String, der die URL der Datei enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen von der gleichen Herkunft erlaubt, aber die Ausführung von Inline-Skripten verbietet. Das Dokument enthält auch ein Inline-Skript, das daher eine CSP-Verletzung auslösen sollte.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <meta
      http-equiv="Reporting-Endpoints"
      content="csp-endpoint='https://example.com/csp-reports'" />
    <script src="main.js"></script>
    <title>CSP: Violation due to inline script</title>
  </head>
  <body>
    <h1>CSP: Violation due to inline script</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das obige Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da es vom gleichen Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, Zeile und Spalte der Verletzung an die Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolationBody = reports[0].body;
    console.log(`sourceFile: ${cspViolationBody.sourceFile}`);
    console.log(`lineNumber: ${cspViolationBody.lineNumber}`);
    console.log(`columnNumber: ${cspViolationBody.columnNumber}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren. Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus. Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung ist die Ausgabe des Logs in Chrome:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 0
```

Das Ergebnis ist ähnlich für Firefox:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 13
```

Beachten Sie, dass die Spaltennummer für die beiden Browser unterschiedlich ist. Chrome scheint immer `0` zu melden. Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
