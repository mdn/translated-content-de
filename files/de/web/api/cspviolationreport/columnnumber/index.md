---
title: "CSPViolationReport: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/CSPViolationReport/columnNumber
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{APIRef("Reporting API")}}

Die **`columnNumber`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) Dictionaries gibt die Zeichenposition in der Quellcodedatei-Zeile an, die die Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) ausgelöst hat.

Diese Eigenschaft wird zusammen mit den [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) und [`CSPViolationReport.lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber) Eigenschaften verwendet, die gemeinsam den genauen Ort im Quellcode bereitstellen, der die Verletzung verursacht hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung ausgelöst hat.
Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`.
Siehe [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) für weitere Informationen.

## Wert

Ein ganzzahliger Wert, der die Spaltennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP-Violation durch ein Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Skript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was Skripte und andere Ressourcen erlaubt, vom gleichen Ursprung geladen zu werden, jedoch keine Inline-Skripte erlaubt.
Das Dokument enthält auch ein Inline-Skript, das daher eine CSP-Verletzung auslösen sollte.

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

Das obige Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses vom gleichen Bereich wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, Zeile und Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, wir aber der Einfachheit halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit dem obigen Setup ist die Ausgabe des Logs in Chrome:

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
Chrome scheint immer `0` zu melden.
Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
