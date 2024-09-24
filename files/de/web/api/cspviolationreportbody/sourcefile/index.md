---
title: "CSPViolationReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`sourceFile`** des Interfaces {{domxref("CSPViolationReportBody")}} gibt die URL der Quelldatei an, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

Bei einem Verstoß, der durch die Verwendung eines Inline-Skripts ausgelöst wurde, ist `sourceFile` die URL des aktuellen Dokuments.
Ähnlich verhält es sich, wenn ein Dokument erfolgreich ein Skript lädt, das dann gegen die Dokument-CSP verstößt; `sourceFile` ist dann die URL des Skripts.

Beachten Sie jedoch, dass `sourceFile` `null` ist, wenn ein Dokument mit einer CSP, die externe Ressourcen blockiert, versucht, eine externe Ressource zu laden.
Dies liegt daran, dass der Browser den Wert aus dem _globalen Objekt_ der Datei extrahiert, die den Verstoß ausgelöst hat.
Aufgrund der CSP-Beschränkung wird die externe Ressource niemals geladen und hat daher kein entsprechendes globales Objekt.

Diese Eigenschaft ist besonders nützlich in Verbindung mit {{domxref("CSPViolationReportBody.lineNumber")}} und {{domxref("CSPViolationReportBody.columnNumber")}}, die den Ort innerhalb der Datei angeben, der zu einem Verstoß geführt hat.

## Wert

Ein String, der die URL der Datei enthält, die den Verstoß ausgelöst hat, oder `null`.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem {{domxref("ReportingObserver")}}.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es Skripten und anderen Ressourcen erlaubt, vom gleichen Ursprung geladen zu werden, jedoch nicht die Ausführung von Inline-Skripten gestattet.
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
    <title>CSP: Verstoß aufgrund von Inline-Skript</title>
  </head>
  <body>
    <h1>CSP: Verstoß aufgrund von Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben gezeigte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies vom gleichen Domain wie das HTML geladen wird, wird es von der CSP nicht blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Berichte über Inhaltsverletzungen vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, die Zeile und die Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, wir aber der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie die HTML-Datei unter `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung ist die Konsolenausgabe in Chrome:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 0
```

Das Ergebnis ist für Firefox ähnlich:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 13
```

Beachten Sie, dass die Spaltennummer bei den beiden Browsern unterschiedlich ist.
Chrome scheint immer `0` zu melden.
Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.sourceFile")}}
