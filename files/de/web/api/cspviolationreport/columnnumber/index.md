---
title: "CSPViolationReport: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/CSPViolationReport/columnNumber
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`columnNumber`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) Wörterbuchs gibt die Zeichenposition in der Quelldateizeile an, die den [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstoß ausgelöst hat.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) und [`CSPViolationReport.lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber) verwendet, die gemeinsam den genauen Ort im Quellcode angeben, der den Verstoß verursacht hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die den Verstoß ausgelöst hat.
Wenn die Ressource, die den CSP-Verstoß verursacht, nicht geladen wird, ist der Wert `null`.
Siehe [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) für weitere Informationen.

## Wert

Ein ganzzahliger Wert, der die Spaltennummer enthält, die den Verstoß ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verstoß durch Inline-Skript

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen vom gleichen Ursprung erlaubt, jedoch das Ausführen von Inline-Skripten nicht zulässt.
Das Dokument enthält zudem ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

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

Das oben genannte Dokument lädt außerdem das externe Skript `main.js`, das unten gezeigt wird.
Da dieses vom gleichen Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichtserstattungen von Inhaltsverstößen vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, die Zeile und die Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann. Der Kürze halber protokollieren wir nur die Werte des ersten Elements.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung ist die Ausgabe des Protokolls in Chrome:

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

Beachten Sie, dass die Spaltennummer in den beiden Browsern unterschiedlich ist.
Chrome meldet immer `0`.
Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
