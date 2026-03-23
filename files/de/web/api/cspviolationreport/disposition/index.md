---
title: "CSPViolationReport: disposition Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReport/disposition
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`disposition`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) Wörterbuchs zeigt an, ob der Benutzeragent so konfiguriert ist, dass Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) durchgesetzt oder nur gemeldet werden.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanforderung wird blockiert.
    Dies wird für Verstöße gegen Richtlinien verwendet, die mit {{httpheader("Content-Security-Policy")}} festgelegt wurden.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanforderung wird nicht blockiert.
    Dies wird für Verstöße gegen Richtlinien verwendet, die mit {{httpheader("Content-Security-Policy-Report-Only")}} festgelegt wurden.

## Beispiele

### CSP Inline-Skript-Verstoß zeigt die disposition

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Die `disposition` wird protokolliert.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta) Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen von derselben Domain zu laden, jedoch keine Inline-Skripte auszuführen.
Das Dokument enthält außerdem ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

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
Da es von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverstoßberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, die Zeile und die Spalte des Verstoßes in der Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolationBody = reports[0].body;
    console.log(`disposition: ${cspViolationBody.disposition}`);
    // For example: "enforce"
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Wenn der obige Code bereitgestellt wird, wäre die Protokollausgabe:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, wäre die disposition `report`.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: Es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben getan haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition)
