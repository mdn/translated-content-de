---
title: "CSPViolationReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`sourceFile`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) zeigt die URL der Quelldatei an, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

Im Fall eines Verstoßes, der durch die Verwendung eines Inline-Skripts ausgelöst wurde, ist `sourceFile` die URL des aktuellen Dokuments.
Ähnlich verhält es sich, wenn ein Dokument ein Skript lädt, das gegen die CSP des Dokuments verstößt: In diesem Fall ist `sourceFile` die URL des Skripts.

Beachten Sie jedoch, dass `sourceFile` `null` ist, wenn ein Dokument mit einer CSP, die externe Ressourcen blockiert, versucht, eine externe Ressource zu laden.
Dies liegt daran, dass der Browser den Wert aus dem _globalen Objekt_ der Datei extrahiert, die den Verstoß ausgelöst hat.
Da aufgrund der CSP-Einschränkung die externe Ressource nie geladen wird, existiert kein entsprechendes globales Objekt.

Diese Eigenschaft ist besonders nützlich in Verbindung mit [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) und [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber), die die Position innerhalb der Datei angeben, die zu einem Verstoß geführt hat.

## Wert

Ein String, der die URL der Datei enthält, die den Verstoß ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verstoß durch Inline-Skript

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die folgende HTML-Datei nutzt das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was erlaubt, Skripte und andere Ressourcen vom gleichen Ursprung zu laden, jedoch nicht erlaubt, Inline-Skripte auszuführen.
Das Dokument enthält auch ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

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

Das oben stehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses Skript aus derselben Domäne wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverstöße des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die Datei, Zeile und Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es möglicherweise mehrere Berichte im zurückgegebenen Array gibt; zur Vereinfachung protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Sie können dies auf einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Konfiguration ist die Ausgabe des Protokolls auf Chrome:

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

Beachten Sie, dass sich die Spaltennummer in den beiden Browsern unterscheidet.
Chrome scheint immer `0` zu melden.
Der Wert in Firefox steht für die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
