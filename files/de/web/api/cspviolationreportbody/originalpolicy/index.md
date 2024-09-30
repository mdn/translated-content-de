---
title: "CSPViolationReportBody: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{APIRef("Reporting API")}}

Die **`originalPolicy`**-Schreibgeschützte Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}}-HTTP-Antwortheader, der die Liste der [Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Policy bilden.
Beachten Sie, dass sich dies von der [`effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) unterscheidet, die die spezifische Richtlinie ist, die tatsächlich verletzt wird (und die möglicherweise nicht explizit in der Richtlinie aufgeführt ist, wenn `default-src` verwendet wird).

## Wert

Ein String, der die Policy darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, um den Unterschied deutlich zu machen.

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um das {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen aus derselben Domain erlaubt, aber nicht das Ausführen von Inline-Skripten erlaubt.
Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

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

Das oben genannte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichtsarrays und verwenden ihn, um die effectiveDirective und `originalPolicy` der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl es mehrere Berichte im zurückgegebenen Array geben kann, der Kürze halber nur die Werte des ersten Elements protokolliert werden.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` mit dem `<meta>`-Inhalt der `Content-Security-Policy`-Richtlinie im HTML übereinstimmt und angibt, dass die Policy standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente angibt.
Dies ist die spezifische Direktive, die tatsächlich verletzt wurde, obwohl `default-src` in der Richtlinie festgelegt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)
