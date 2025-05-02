---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: 1b8805ce680f1fbb9dfbade6a64d4671cd04da80
---

{{APIRef("Reporting API")}}

Die **`sample`** schreibgeschützte Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Dieses Beispiel ist in der Regel die ersten 40 Zeichen des Inline-Skripts, des Event-Handlers oder des Stils, die gegen eine CSP-Einschränkung verstoßen haben. Wenn es nicht ausgefüllt ist, ist es der leere String `""`.

Beachten Sie, dass dies nur ausgefüllt wird, wenn versucht wird, _inline_ Skripte, Event-Handler oder Stile zu laden, die gegen CSP [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) Regeln verstoßen – externe Ressourcen, die gegen die CSP verstoßen, erzeugen kein Beispiel.
Zusätzlich ist ein Beispiel nur enthalten, wenn die verletzte `Content-Security-Policy`-Direktive auch das Stichwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.

> [!NOTE]
> Verletzungsberichte sollten als angreifergesteuerte Daten betrachtet werden.
> Insbesondere der Inhalt dieses Feldes sollte vor dem Speichern oder Rendern bereinigt werden.

## Wert

Ein String, der ein Beispiel der Inline-Ressource enthält, die gegen die CSP verstoßen hat, in der Regel die ersten 40 Zeichen oder der leere String.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung durch ein Inline-Skript aus und meldet die Verletzung mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir fügen auch `'report-sample'` zur CSP hinzu, um ein `sample` im Body zu erzeugen.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was das Laden von Skripten aus derselben Domain erlaubt, aber nicht das Ausführen von Inline-Skripten. Wir fügen `'report-sample'` der Direktive hinzu, damit ein Beispiel generiert wird. Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

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

Das obenstehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies aus derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichts-Arrays und verwenden ihn, um das Verletzungs-`sample` in der Konsole zu protokollieren.

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

Die Konsolenausgabe für den obigen Code ist:

```plain
sample: const int = 4;
```

In diesem Fall enthält das Beispiel den gesamten Inhalt des Inline-Skripts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample)
