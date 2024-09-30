---
title: "CSPViolationReportBody: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`disposition`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) gibt an, ob der Benutzeragent so konfiguriert ist, dass er Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) durchsetzt oder nur meldet.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanforderung wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanforderung wird nicht blockiert.

## Beispiele

### CSP Inline-Skript-Verletzung mit Anzeige der Disposition

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Die `disposition` wird protokolliert.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen. Dadurch dürfen Skripte und andere Ressourcen von derselben Domain geladen werden, aber Inline-Skripte dürfen nicht ausgeführt werden.
Das Dokument enthält auch ein Inline-Skript, was daher eine CSP-Verletzung auslösen sollte.

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

Das oben genannte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses vom selben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichte-Arrays und verwenden ihn, um die Datei, die Zeile und die Spalte der Verletzung in der Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl möglicherweise mehrere Berichte im zurückgegebenen Array enthalten sind, zur Kürze nur die Werte des ersten Elements protokolliert werden.

#### Ergebnisse

Wenn der obige Code ausgeführt wird, wäre die Protokollausgabe:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, würde die Disposition `report` sein.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben getan haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition)
