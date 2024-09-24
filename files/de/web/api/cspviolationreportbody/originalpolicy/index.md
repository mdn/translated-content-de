---
title: "CSPViolationReportBody: originalPolicy-Eigenschaft"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
l10n:
  sourceCommit: 53ce499e73e05ff7d41c1cb27b7e9f008f1d3b6f
---

{{APIRef("Reporting API")}}

Die **`originalPolicy`** schreibgeschützte Eigenschaft der {{domxref("CSPViolationReportBody")}}-Schnittstelle ist ein String, der die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

Dies ist der String im {{HTTPHeader("Content-Security-Policy")}} HTTP-Antwort-Header, der die Liste der [Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#directives) und deren Werte enthält, die die CSP-Policy bilden. Beachten Sie, dass dies sich von der {{domxref("CSPViolationReportBody.effectiveDirective","effectiveDirective")}} unterscheidet, welche die spezifische Direktive ist, die effektiv verletzt wird (und die möglicherweise nicht explizit in der Policy aufgeführt ist, wenn `default-src` verwendet wird).

## Wert

Ein String, der die Policy darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.

## Beispiele

### CSP-Verletzung durch Inline-Skript

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Skript aus und meldet die Verletzung mit einem {{domxref("ReportingObserver")}}. Insbesondere protokolliert es die `effectiveDirective` und die `originalPolicy`, um den Unterschied deutlich zu machen.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es erlaubt, Skripte und andere Ressourcen von derselben Domain zu laden, jedoch nicht erlaubt, Inline-Skripte auszuführen. Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <!-- Das ist die (ursprüngliche) CSP-Policy -->
    <meta
      http-equiv="Reporting-Endpoints"
      content="csp-endpoint='https://example.com/csp-reports'" />
    <script src="main.js"></script>
    <title>CSP: Verletzung durch Inline-Skript</title>
  </head>
  <body>
    <h1>CSP: Verletzung durch Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das obenstehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da dies von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}} zur Beobachtung von Inhaltsverletzungsberichten des Typs `"csp-violation"`. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und nutzen diesen, um die `effectiveDirective` und `originalPolicy` der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir der Kürze halber jedoch nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code lautet:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Beachten Sie, dass die `originalPolicy` mit dem `<meta>`-Inhalt der `Content-Security-Policy`-Direktive im HTML übereinstimmt und angibt, dass die Policy standardmäßig `self` ist (`default-src 'self'`).

Die `effectiveDirective` ist `script-src-elem`, die gültige Quellen für JavaScript-{{htmlelement("script")}}-Elemente spezifiziert. Dies ist die spezifische Direktive, die effektiv verletzt wurde, obwohl `default-src` in der Policy gesetzt war.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}}
