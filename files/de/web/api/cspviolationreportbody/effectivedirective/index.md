---
title: "CSPViolationReportBody: effectiveDirective property"
short-title: effectiveDirective
slug: Web/API/CSPViolationReportBody/effectiveDirective
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die **`effectiveDirective`** schreibgeschützte Eigenschaft der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein String, der die effektive [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Direktive darstellt, die verletzt wurde.

Beachten Sie, dass dies die spezifische Direktive enthält, die effektiv verletzt wurde, wie beispielsweise [`script-src-elem`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem) für Verstöße im Zusammenhang mit Skriptelementen, und nicht die ursprünglich festgelegte Richtlinie, die möglicherweise die (allgemeinere) [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) war.

## Wert

Ein String, der die effektive violated[`Content-Security-Policy` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives) darstellt.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, was den Unterschied klar macht.

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta) Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was Skripten und anderen Ressourcen erlaubt, vom selben Domain geladen zu werden, jedoch nicht erlaubt, Inline-Skripte auszuführen.
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
    <h1>CSP: Violation due to inline script</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das obige Dokument lädt auch das externe Skript `main.js`, welches unten gezeigt wird.
Da dies vom selben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Arrays von Berichten und verwenden ihn, um die `effectiveDirective` und `originalPolicy` des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann; der Kürze halber protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe des obigen Codes ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` dem `<meta>` Inhalt der `Content-Security-Policy` Direktive im HTML entspricht und spezifiziert, dass die Richtlinie standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, welches gültige Quellen für JavaScript {{htmlelement("script")}} Elemente angibt.
Dies ist die spezifische Direktive, die effektiv verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt war.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
