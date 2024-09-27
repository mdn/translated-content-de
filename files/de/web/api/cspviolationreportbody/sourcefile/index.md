---
title: "CSPViolationReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`sourceFile`** schreibgeschützte Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces gibt die URL der Quelldatei an, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt hat.

Bei einer Verletzung, die durch die Verwendung eines Inline-Skripts ausgelöst wird, ist `sourceFile` die URL des aktuellen Dokuments. Ähnlich verhält es sich, wenn ein Dokument erfolgreich ein Skript lädt, das anschließend die CSP des Dokuments verletzt; `sourceFile` ist dann die URL des Skripts.

Beachten Sie jedoch, dass `sourceFile` `null` ist, wenn ein Dokument mit einer CSP, die externe Ressourcen blockiert, versucht, eine externe Ressource zu laden. Dies liegt daran, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung ausgelöst hat. Aufgrund der CSP-Einschränkung wird die externe Ressource nie geladen und hat daher kein entsprechendes globales Objekt.

Diese Eigenschaft ist besonders nützlich in Verbindung mit [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) und [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber), die den Ort innerhalb der Datei angeben, der zur Verletzung geführt hat.

## Wert

Ein String, der die URL der Datei enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verletzung durch Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was bedeutet, dass Skripte und andere Ressourcen nur von demselben Ursprung geladen werden dürfen, jedoch keine Inline-Skripte ausgeführt werden dürfen. Das Dokument enthält zudem ein Inline-Skript, das daher eine CSP-Verletzung auslösen sollte.

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

Das oben dargestellte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da dieses Skript von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Reports-Arrays und verwenden ihn, um die Datei, Zeile und Spalte der Verletzung in die Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann, wir aber der Einfachheit halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren. Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus. Angenommen, die Adresse des lokalen Servers lautet `http://127.0.0.1:9999`, können Sie die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung ist die Ausgabe des Logs in Chrome:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 0
```

Das Ergebnis ist ähnlich in Firefox:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 13
```

Beachten Sie, dass die Spaltennummer in den beiden Browsern unterschiedlich ist. In Chrome wird immer `0` gemeldet. Der Wert in Firefox stellt die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
