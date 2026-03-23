---
title: "CSPViolationReport: effectiveDirective-Eigenschaft"
short-title: effectiveDirective
slug: Web/API/CSPViolationReport/effectiveDirective
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`effectiveDirective`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Wörterbuchs ist ein String, der die effektive [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Direktive repräsentiert, die verletzt wurde.

Beachten Sie, dass dies die spezifische Direktive enthält, die tatsächlich verletzt wurde, wie zum Beispiel [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) für Verstöße im Zusammenhang mit Skriptelementen, und nicht die spezifizierte Richtlinie, die möglicherweise die (allgemeinere) [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) war.

## Wert

Ein String, der die effektive [`Content-Security-Policy`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt, die verletzt wurde.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, wodurch der Unterschied deutlich wird.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was erlaubt, dass Skripte und andere Ressourcen von derselben Domain geladen werden, aber nicht erlaubt, dass Inline-Skripte ausgeführt werden.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

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

Das obenstehende Dokument lädt auch das externe Skript `main.js`, welches unten gezeigt wird.
Da dies von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverstöße des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die `effectiveDirective` und `originalPolicy` des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben könnte; der Kürze halber protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML entspricht und angibt, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente spezifiziert.
Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
