---
title: "CSPViolationReportBody: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`disposition`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) gibt an, ob der User-Agent so konfiguriert ist, dass Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) durchgesetzt oder nur gemeldet werden.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanforderung wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanforderung wird nicht blockiert.

## Beispiele

### CSP-Inlineskript-Verletzung, die die disposition anzeigt

Dieses Beispiel löst eine CSP-Verletzung mit einem Inlineskript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Die `disposition` wird protokolliert.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen von derselben Domain zu laden, aber nicht erlaubt, dass Inlineskripte ausgeführt werden.
Das Dokument enthält auch ein Inlineskript, das daher eine CSP-Verletzung auslösen sollte.

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

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die Datei, die Zeile und die Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir jedoch aus Gründen der Kürze nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Wenn der obige Code bereitgestellt wird, würde die Protokollausgabe folgendermaßen aussehen:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, wäre die disposition `report`.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben getan haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition)
