---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die **`sample`**-Eigenschaft, die nur lesbar ist, des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Dieses Sample ist normalerweise die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der gegen eine CSP-Einschränkung verstoßen hat.
Wenn es nicht gefüllt ist, ist es der leere String `""`.

Beachten Sie, dass dies nur dann gefüllt ist, wenn versucht wird, _inline_ Skripte, Ereignishandler oder Stile zu laden, die gegen CSP [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#style-src) Regeln verstoßen — externe Ressourcen, die gegen die CSP verstoßen, erzeugen kein Sample.
Zusätzlich wird ein Sample nur dann eingeschlossen, wenn die verletzte `Content-Security-Policy`-Direktive auch das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.

> [!NOTE] Verstoßberichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes _insbesondere_ sollte bereinigt werden, bevor er gespeichert oder gerendert wird.

## Wert

Ein String, der ein Sample der Inline-Ressource enthält, die gegen die CSP verstoßen hat, normalerweise die ersten 40 Zeichen, oder der leere String.

## Beispiele

### CSP Inline-Skriptverletzung

Dieses Beispiel führt zu einer CSP-Verletzung durch ein Inline-Skript und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir ergänzen die CSP um `'report-sample'`, um ein `sample` im Body zu erzeugen.

#### HTML

Die HTML-Datei unten verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um das {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was bedeutet, dass Skripte von derselben Domain geladen werden können, aber keine Inline-Skripte ausgeführt werden dürfen.
Wir fügen `'report-sample'` in die Direktive ein, damit ein Sample generiert wird.
Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
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

Das oben angegebene Dokument lädt auch das externe Skript `main.js`, das unten angezeigt wird.
Da es von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichtsarrays und nutzen ihn, um das Verstoß-`sample` in der Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`sample: ${reports[0].body.sample}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben könnte, aber der Kürze halber protokollieren wir nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code lautet:

```plain
sample: const int = 4;
```

In diesem Fall enthält das Sample den gesamten Inhalt des Inline-Skripts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample)
