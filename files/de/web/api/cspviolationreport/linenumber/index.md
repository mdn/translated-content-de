---
title: "CSPViolationReport: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/CSPViolationReport/lineNumber
l10n:
  sourceCommit: a0d3dd05ba50e0ff4a595bb0c06499bdfc736e9f
---

{{APIRef("Reporting API")}}

Die **`lineNumber`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Dictionaries gibt die Zeilennummer in der Quelldatei an, in der der Verstoß gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) ausgelöst wurde.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) und [`CSPViolationReport.columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber) verwendet, die zusammen den genauen Ort in der Quelle angeben, der den Verstoß verursacht hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die den Verstoß ausgelöst hat.
Wenn die Ressource, die den CSP-Verstoß auslöst, nicht geladen wird, ist der Wert `null`.
Weitere Informationen finden Sie unter [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile).

## Wert

Ein ganzzahliger Wert, der die Zeilennummer enthält, die den Verstoß ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verstoß eines Inline-Scripts

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die HTML-Datei unten verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripts und anderen Ressourcen aus demselben Ursprung erlaubt, aber nicht das Ausführen von Inline-Skripts zulässt.
Das Dokument enthält zudem ein Inline-Skript, das somit einen CSP-Verstoß auslösen sollte.

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

Das oben genannte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies vom selben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverstöße des Typs `"csp-violation"` zu beobachten.
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

Beachten Sie, dass, obwohl es mehrere Berichte im zurückgegebenen Array geben könnte, wir aus Gründen der Kürze nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und starten Sie den Server im Stammverzeichnis.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

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

Beachten Sie, dass die Spaltennummer in den beiden Browsern unterschiedlich ist.
Chrome scheint immer `0` zu berichten.
Der Wert in Firefox gibt die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber)
