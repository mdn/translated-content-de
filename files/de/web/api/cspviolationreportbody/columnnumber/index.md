---
title: "CSPViolationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/CSPViolationReportBody/columnNumber
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`columnNumber`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle gibt die Spaltennummer in der Quelldatei an, die die Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) ausgelöst hat.

Beachten Sie, dass der Browser den Wert aus _dem globalen Objekt_ der Datei extrahiert, die die Verletzung verursacht hat.
Wenn die Ressource, die die CSP-Verletzung auslöst, nicht geladen wird, ist der Wert `null`.
Weitere Informationen finden Sie unter [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile).

Diese Eigenschaft ist besonders nützlich zusammen mit [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) und [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber), da sie den Standort der Spalte in dieser Datei und Zeile angibt, die zu einer Verletzung geführt hat.

## Wert

Ein Integer, der die Spaltennummer enthält, die die Verletzung ausgelöst hat, oder `null`.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung unter Verwendung eines Inline-Skripts aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was erlaubt, Skripte und andere Ressourcen von derselben Herkunft zu laden, jedoch nicht erlaubt, Inline-Skripte auszuführen.
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

Das obenstehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da es von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, Zeile und Spalte der Verletzung in die Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl möglicherweise mehrere Berichte im zurückgegebenen Array vorhanden sind, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Sie können dies mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausprobieren.
Kopieren Sie den obigen Code in `test/index.html` und `test/main.js` und führen Sie den Server im Stammverzeichnis aus.
Angenommen, die Adresse des lokalen Servers ist `http://127.0.0.1:9999`, können Sie die HTML-Datei von `http://127.0.0.1:9999/test/` (oder `http://127.0.0.1:9999/test/index.html`) laden.

Mit der obigen Konfiguration ist die Ausgabe des Protokolls in Chrome:

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
In Chrome wird immer `0` gemeldet.
Der Wert in Firefox stellt die Position des ersten Zeichens nach dem Ende des öffnenden `<script>`-Elements dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
