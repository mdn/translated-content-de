---
title: "CSPViolationReportBody: Eigenschaft originalPolicy"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`originalPolicy`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}} HTTP-Antwortheader, der die Liste von [Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Richtlinie bilden.
Beachten Sie, dass sich dies von der [`effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) unterscheidet, welche die spezifische Direktive ist, die tatsächlich verletzt wird (und die möglicherweise nicht explizit in der Richtlinie aufgeführt ist, wenn `default-src` verwendet wird).

## Wert

Ein String, der die Richtlinie darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.

## Beispiele

### CSP-Verstoß durch Inline-Skript

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Insbesondere werden die `effectiveDirective` und die `originalPolicy` protokolliert, um den Unterschied deutlich zu machen.

#### HTML

Die HTML-Datei unten verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was erlaubt, dass Skripte und andere Ressourcen von derselben Domain geladen werden, jedoch nicht zulässt, dass Inline-Skripte ausgeführt werden.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <!-- This is the (original) CSP policy -->
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

Das obige Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses vom selben Domain wie das HTML geladen wird, wird es von der CSP nicht blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverstöße des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtarrays und verwenden ihn, um die `effectiveDirective` und `originalPolicy` des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es möglicherweise mehrere Berichte im zurückgegebenen Array geben könnte, wir jedoch der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code lautet:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML entspricht und festlegt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente spezifiziert.
Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)
