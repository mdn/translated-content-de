---
title: "CSPViolationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/CSPViolationReportBody/columnNumber
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`columnNumber`**-Eigenschaft (schreibgeschützt) des {{domxref("CSPViolationReportBody")}}-Interfaces gibt die Spaltennummer in der Quelldatei an, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung ausgelöst hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung verursacht hat.
Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`.
Siehe {{domxref("CSPViolationReportBody.sourceFile")}} für weitere Informationen.

Diese Eigenschaft ist besonders nützlich zusammen mit {{domxref("CSPViolationReportBody.sourceFile")}} und {{domxref("CSPViolationReportBody.lineNumber")}}, da sie die Position der Spalte in dieser Datei und Zeile angibt, die zu einer Verletzung führte.

## Wert

Ein ganzzahliger Wert, der die Spaltennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP-Verletzung durch Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Skript aus und meldet die Verletzung mittels eines {{domxref("ReportingObserver")}}.

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was Skripte und andere Ressourcen erlaubt, vom gleichen Ursprung geladen zu werden, jedoch keine Inline-Skripte zulässt.
Das Dokument enthält außerdem ein Inline-Skript, welches daher eine CSP-Verletzung auslösen sollte.

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
    <title>CSP: Verstoß durch Inline-Skript</title>
  </head>
  <body>
    <h1>CSP: Verstoß durch Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben beschriebene Dokument lädt ebenfalls das externe Skript `main.js`, welches unten angezeigt wird.
Da es vom gleichen Ursprung wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, die Zeile und die Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann. Der Einfachheit halber protokollieren wir nur die Werte des ersten Elements.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Root-Verzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie die HTML-Datei dann unter `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Einrichtung ist die Ausgabe des Protokolls in Chrome:

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

Beachten Sie, dass die Spaltennummer in den beiden Browsern unterschiedlich ist.
Chrome scheint immer `0` zu melden.
Der Wert in Firefox repräsentiert die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.columnNumber")}}
