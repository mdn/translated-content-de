---
title: "CSPViolationReportBody: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`disposition`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces gibt an, ob der Benutzer-Agent so konfiguriert ist, dass Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) erzwungen werden oder nur gemeldet werden.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanfrage wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanfrage wird nicht blockiert.

## Beispiele

### CSP Inline-Skript-Verstoß zeigt die Disposition

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Die `disposition` wird protokolliert.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen. Dadurch können Skripte und andere Ressourcen aus derselben Domain geladen werden, aber Inline-Skripte dürfen nicht ausgeführt werden.
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

Das oben genannte Dokument lädt außerdem das externe Skript `main.js`, das unten gezeigt wird.
Da dieses aus derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um die Datei, Zeile und Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir zur Kürze nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Wenn der obige Code bereitgestellt wird, wäre die Protokollausgabe:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, würde die Disposition `report` lauten.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: Es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben gemacht haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition)
