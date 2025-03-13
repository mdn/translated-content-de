---
title: "CSPViolationReportBody: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`originalPolicy`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}} HTTP-Antwortheader, der die Liste der [Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Policy ausmachen. Beachten Sie, dass dies sich von der [`effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) unterscheidet, die die spezifische Direktive ist, die tatsächlich verletzt wird (und die möglicherweise nicht explizit in der Richtlinie aufgeführt ist, wenn `default-src` verwendet wird).

## Wert

Ein String, der die Richtlinie darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

## Beispiele

### CSP-Verletzung durch Inline-Script

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Script aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Dabei werden insbesondere die `effectiveDirective` und die `originalPolicy` protokolliert, um den Unterschied deutlich zu machen.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen von derselben Domain zu laden, aber Inline-Skripte nicht auszuführen. Das Dokument enthält auch ein Inline-Script, das eine CSP-Verletzung auslösen sollte.

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

Das oben genannte Dokument lädt auch das externe Skript `main.js`, welches unten gezeigt wird. Da es von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichts-Arrays und verwenden ihn, um die `effectiveDirective` und `originalPolicy` der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann, aus Gründen der Kürze protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML entspricht und angibt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript {{htmlelement("script")}}-Elemente spezifiziert. Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)
