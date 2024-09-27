---
title: "CSPViolationReportBody: disposition-Eigenschaft"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`disposition`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle zeigt an, ob der Benutzeragent konfiguriert ist, [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verstöße durchzusetzen oder nur zu melden.

## Wert

Mögliche Werte sind:

- `"enforce"`
  - : Die Richtlinie wird durchgesetzt und die Ressourcenanfrage wird blockiert.
- `"report"`
  - : Der Verstoß wird gemeldet, aber die Ressourcenanfrage wird nicht blockiert.

## Beispiele

### CSP-Verstoß bei Inline-Skripten zeigt die Disposition

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Die `disposition` wird protokolliert.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `default-src` auf `self` zu setzen, was das Laden von Skripten und anderen Ressourcen von derselben Domain erlaubt, jedoch nicht die Ausführung von Inline-Skripten.
Das Dokument enthält auch ein Inline-Skript, das daher einen CSP-Verstoß auslösen sollte.

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

Das oben dargestellte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dieses vom gleichen Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichts-Arrays und verwenden ihn, um die Datei, Zeile und Spalte des Verstoßes in der Konsole zu protokollieren.

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

Beachten Sie, dass zwar mehrere Berichte im zurückgegebenen Array vorhanden sein könnten, wir der Kürze halber jedoch nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Wenn der obige Code bereitgestellt wird, wäre die Log-Ausgabe:

```plain
disposition: enforce
```

> [!NOTE]
> Wenn `Content-Security-Policy-Reporting-Only` aktiviert wäre, wäre die Disposition `report`.
> Beachten Sie jedoch, dass `Content-Security-Policy-Reporting-Only` bereitgestellt werden muss: Es kann nicht im `<meta>`-Element gesetzt werden, wie wir es oben gemacht haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition)
