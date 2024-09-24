---
title: "CSPViolationReportBody: disposition Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`disposition`** schreibgeschützte Eigenschaft der {{domxref("CSPViolationReportBody")}}-Schnittstelle gibt an, ob der Benutzeragent so konfiguriert ist, dass Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) durchgesetzt oder nur gemeldet werden.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Anforderungsanforderung wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Anforderungsanforderung wird nicht blockiert.

## Beispiele

### CSP Inline-Skriptverstoß zeigt die Disposition

In diesem Beispiel wird ein CSP-Verstoß mit einem Inline-Skript ausgelöst, und der Verstoß wird mit einem {{domxref("ReportingObserver")}} gemeldet. Die `disposition` wird protokolliert.

#### HTML

Die folgende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was es ermöglicht, Skripte und andere Ressourcen von derselben Domain zu laden, aber keine Inline-Skripte auszuführen. Das Dokument enthält auch ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

```html
<!doctype html>
<html lang="de">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <meta
      http-equiv="Reporting-Endpoints"
      content="csp-endpoint='https://example.com/csp-reports'" />
    <script src="main.js"></script>
    <title>CSP: Verstoß aufgrund eines Inline-Skripts</title>
  </head>
  <body>
    <h1>CSP: Verstoß aufgrund eines Inline-Skripts</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben angegebene Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da es von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um Datei, Zeile und Spalte des Verstoßes in der Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolationBody = reports[0].body;
    console.log(`disposition: ${cspViolationBody.disposition}`);
    // Zum Beispiel: "enforce"
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl mehrere Berichte im zurückgegebenen Array enthalten sein könnten, wir der Einfachheit halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Wenn der obige Code ausgeführt wird, wäre die Protokollausgabe:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, wäre die Disposition `report`.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben getan haben.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.disposition")}}
