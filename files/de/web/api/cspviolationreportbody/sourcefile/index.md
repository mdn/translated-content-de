---
title: "CSPViolationReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`sourceFile`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle gibt die URL der Quelldatei an, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Bei einem Verstoß, der durch die Verwendung eines Inline-Skripts ausgelöst wurde, ist `sourceFile` die URL des aktuellen Dokuments.
Ähnlich verhält es sich, wenn ein Dokument erfolgreich ein Skript lädt, das dann gegen die CSP des Dokuments verstößt, dann ist `sourceFile` die URL des Skripts.

Beachten Sie jedoch, dass wenn ein Dokument mit einer CSP, die externe Ressourcen blockiert, versucht, eine externe Ressource zu laden, wird `sourceFile` `null` sein.
Dies liegt daran, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die den Verstoß ausgelöst hat.
Aufgrund der CSP-Beschränkung wird die externe Ressource niemals geladen und hat daher kein entsprechendes globales Objekt.

Diese Eigenschaft ist am nützlichsten zusammen mit [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) und [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber), die den Ort innerhalb der Datei angeben, der zu einem Verstoß geführt hat.

## Wert

Ein Zeichenfolgenwert, der die URL der Datei enthält, die den Verstoß ausgelöst hat, oder `null`.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen vom selben Ursprung zu laden, jedoch nicht erlaubt, Inline-Skripte auszuführen.
Das Dokument enthält außerdem ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

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
Da es vom selben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverstöße vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags im Berichtsarray und verwenden ihn, um die Datei, die Zeile und die Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass obwohl es mehrere Berichte im zurückgegebenen Array geben könnte, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie die HTML-Datei dann von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

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

Beachten Sie, dass die Spaltennummer für die beiden Browser unterschiedlich ist.
Chrome scheint immer `0` zu melden.
Der Wert in Firefox stellt die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
