---
title: "CSPViolationReportBody: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/CSPViolationReportBody/effectiveDirective
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`effectiveDirective`** der {{domxref("CSPViolationReportBody")}}-Schnittstelle ist ein String, der die wirksame [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Direktive darstellt, die verletzt wurde.

Beachten Sie, dass dies die spezifische Direktive enthält, die tatsächlich verletzt wurde, wie [`script-src-elem`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem) für Verstöße im Zusammenhang mit Skriptelementen, und nicht die spezifizierte Richtlinie, die möglicherweise die (allgemeinere) [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) war.

## Wert

Ein String, der die wirksame [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

## Beispiele

### CSP-Verstoß durch Inline-Skript

Dieses Beispiel löst einen CSP-Verstoß mithilfe eines Inline-Skripts aus und meldet den Verstoß mithilfe eines {{domxref("ReportingObserver")}}.
Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, um den Unterschied klar zu machen.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was Skripte und andere Ressourcen erlaubt, vom gleichen Domain geladen zu werden, aber keine Ausführung von Inline-Skripten gestattet.
Das Dokument enthält auch ein Inline-Skript, welches einen CSP-Verstoß auslösen sollte.

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
    <h1>CSP: Verstoß durch Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das obenstehende Dokument lädt auch das externe Skript `main.js`, welches unten gezeigt wird.
Da es vom gleichen Domain wie das HTML geladen wird, wird es von der CSP nicht blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Berichte von Inhaltsverstößen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die `effectiveDirective` und die `originalPolicy` des Verstoßes in die Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`effectiveDirective: ${reports[0].body.effectiveDirective}`);
    // effectiveDirective: script-src-elem
    console.log(`originalPolicy: ${reports[0].body.originalPolicy}`);
    // originalPolicy: default-src 'self'; report-to csp-endpoint
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass zwar mehrere Berichte im zurückgegebenen Array vorhanden sein können, aber aus Gründen der Kürze nur die Werte des ersten Elements protokolliert werden.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML entspricht und angibt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, was gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente spezifiziert.
Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt war.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}}
