---
title: "CSPViolationReportBody: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/CSPViolationReportBody/effectiveDirective
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`effectiveDirective`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der die effektive [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Direktive darstellt, die verletzt wurde.

Beachten Sie, dass dies die spezifische Direktive enthält, die tatsächlich verletzt wurde, wie z.B. [`script-src-elem`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem) bei Verstößen im Zusammenhang mit Skriptelementen, und nicht die ursprünglich festgelegte Richtlinie, die möglicherweise die allgemeinere [`default-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) war.

## Wert

Ein String, der die effektive [Content-Security-Policy-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

## Beispiele

### CSP-Verletzung durch Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung mithilfe eines Inline-Skripts aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, um den Unterschied klar zu machen.

#### HTML

Die nachfolgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was Skripte und andere Ressourcen erlaubt, von derselben Domain geladen zu werden, aber keine Inline-Skripts ausführt.
Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

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

Das obige Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags im Berichtsarray und verwenden ihn, um die `effectiveDirective` und `originalPolicy` der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir aus Gründen der Kürze jedoch nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` mit dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML übereinstimmt und angibt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente festlegt.
Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt war.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
