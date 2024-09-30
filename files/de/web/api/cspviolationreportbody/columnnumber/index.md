---
title: "CSPViolationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/CSPViolationReportBody/columnNumber
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`columnNumber`** der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle gibt die Spaltennummer in der Quelldatei an, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verletzung ausgelöst hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung auslöste.
Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`.
Siehe [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) für weitere Informationen.

Diese Eigenschaft ist besonders nützlich zusammen mit [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) und [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber), da sie die Position der Spalte in dieser Datei und Zeile angibt, die zu einer Verletzung führte.

## Wert

Ein ganzzahliger Wert, der die Spaltennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Skript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die nachstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen aus demselben Ursprung ermöglicht, aber das Ausführen von Inline-Skripten nicht erlaubt.
Das Dokument enthält außerdem ein Inline-Skript, das daher eine CSP-Verletzung auslösen sollte.

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

Das obige Dokument lädt auch das externe Skript `main.js`, welches unten gezeigt wird.
Da dieses vom selben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Arrays für Berichte und nutzen ihn, um die Datei, die Zeile und die Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann. Der Übersichtlichkeit halber protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einstellung ist die Ausgabe des Logs in Chrome:

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

Beachten Sie, dass die Spaltennummer für die beiden Browser unterschiedlich ist.
Chrome scheint immer `0` zu melden.
Der Wert in Firefox stellt die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
