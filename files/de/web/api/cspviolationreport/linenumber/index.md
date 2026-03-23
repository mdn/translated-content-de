---
title: "CSPViolationReport: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/CSPViolationReport/lineNumber
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`lineNumber`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Dictionaries gibt die Zeilennummer in der Quelldatei an, bei der die Verletzung der [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) ausgelöst wurde.

Diese Eigenschaft wird zusammen mit den Eigenschaften [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile) und [`CSPViolationReport.columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber) verwendet, die zusammen den genauen Ort in der Quelle angeben, der die Verletzung verursacht hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung ausgelöst hat. Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`. Weitere Informationen finden Sie unter [`CSPViolationReport.sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile).

## Wert

Ein ganzzahliger Wert, der die Zeilennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP-Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und protokolliert die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen von derselben Quelle zu laden, jedoch keine Inline-Skripte auszuführen. Das Dokument enthält auch ein Inline-Skript, das daher eine CSP-Verletzung auslösen sollte.

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

Das oben stehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da es von derselben Domäne wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion ausgeführt wird, erhalten wir den Körper des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die Datei, die Zeile und die Spalte der Verletzung in die Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir jedoch der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren. Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus. Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung lautet die Ausgabe des Protokolls in Chrome:

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

Beachten Sie, dass die Spaltennummer für die beiden Browser unterschiedlich ist. Chrome scheint immer `0` zu melden. Der Wert in Firefox stellt die Position des ersten Zeichens nach dem Ende des Öffnungsschlusses des `<script>`-Elements dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber)
