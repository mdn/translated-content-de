---
title: "CSPViolationReportBody: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/CSPViolationReportBody/effectiveDirective
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die **`effectiveDirective`** schreibgeschützte Eigenschaft der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein String, der die wirksame Richtlinie der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) darstellt, die verletzt wurde.

Beachten Sie, dass dies die spezifische Richtlinie enthält, die tatsächlich verletzt wurde, wie z. B. [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) für Verstöße im Zusammenhang mit Skriptelementen, und nicht die angegebene Richtlinie, die möglicherweise die (allgemeinere) [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) war.

## Wert

Ein String, der die wirksame [`Content-Security-Policy`-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, um den Unterschied deutlich zu machen.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen von derselben Domain erlaubt, aber keine Ausführung von Inline-Skripten zulässt. Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

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

Das obige Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da es von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die `effectiveDirective` und die `originalPolicy` des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es möglicherweise mehrere Berichte im zurückgegebenen Array gibt. Der Kürze halber protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code lautet:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>`-Inhalt der `Content-Security-Policy`-Richtlinie im HTML entspricht und angibt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript {{htmlelement("script")}}-Elemente angibt. Dies ist die spezielle Richtlinie, die tatsächlich verletzt wurde, obwohl in der Richtlinie `default-src` festgelegt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
