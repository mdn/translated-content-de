---
title: "CSPViolationReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/CSPViolationReportBody/lineNumber
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`lineNumber`**-Eigenschaft der {{domxref("CSPViolationReportBody")}} Schnittstelle gibt die Zeilennummer in der Quelldatei an, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verletzung ausgelöst hat.

Es ist zu beachten, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung ausgelöst hat.
Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`.
Siehe {{domxref("CSPViolationReportBody.sourceFile")}} für weitere Informationen.

Diese Eigenschaft ist am nützlichsten in Verbindung mit {{domxref("CSPViolationReportBody.sourceFile")}} und {{domxref("CSPViolationReportBody.columnNumber")}}, da sie den Ort der Zeile in dieser Datei und die Spalte angibt, die zu einer Verletzung führte.

## Wert

Ein Ganzzahlwert, der die Zeilennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verletzung durch Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mit einem {{domxref("ReportingObserver")}}.

#### HTML

Die HTML-Datei unten verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen. Dadurch dürfen Skripte und andere Ressourcen von derselben Quelle geladen werden, aber Inline-Skripte dürfen nicht ausgeführt werden.
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
    <title>CSP: Verletzung aufgrund von Inline-Skript</title>
  </head>
  <body>
    <h1>CSP: Verletzung aufgrund von Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben stehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da es von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Inhalte zu beobachten, die Berichte über Verstöße vom Typ `"csp-violation"` melden.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, Zeile und Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, wir aus Gründen der Kürze nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers lautet `http://127.0.0.1:9999`, können Sie dann die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

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
Chrome scheint immer `0` zu melden.
Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.lineNumber")}}
