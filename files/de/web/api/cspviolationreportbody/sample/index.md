---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`sample`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Dieses Beispiel ist normalerweise die ersten 40 Zeichen des Inline-Skripts, des Event-Handlers oder des Stils, der eine CSP-Beschränkung verletzt hat. Wenn es nicht gefüllt ist, ist es der leere String `""`.

Beachten Sie, dass dies nur gefüllt wird, wenn versucht wird, _Inline_-Skripte, Event-Handler oder Stile zu laden, die gegen CSP-Regeln [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) verstoßen — externe Ressourcen, die gegen die CSP verstoßen, erzeugen kein Beispiel. Außerdem wird ein Beispiel nur dann aufgenommen, wenn die verletzte `Content-Security-Policy`-Direktive auch das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.

> [!NOTE] Verstoßberichte sollten als angreifergesteuerte Daten betrachtet werden.
> Der Inhalt dieses Feldes _insbesondere_ sollte vor der Speicherung oder Darstellung bereinigt werden.

## Wert

Ein String, der ein Beispiel der Inline-Ressource enthält, die gegen die CSP verstoßen hat, in der Regel die ersten 40 Zeichen, oder der leere String.

## Beispiele

### CSP-Verstoß durch Inline-Skript

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir fügen `'report-sample'` zur CSP hinzu, um ein `sample` im Body zu füllen.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was das Laden von Skripten aus derselben Domäne erlaubt, aber nicht das Ausführen von Inline-Skripten erlaubt. Wir fügen `'report-sample'` zur Direktive hinzu, damit ein Beispiel generiert wird. Das Dokument enthält außerdem ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

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

Das obenstehende Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da es von derselben Domäne wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichtsarrays und verwenden ihn, um das Verstöße-`sample` an die Konsole zu loggen.

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

Beachten Sie, dass, obwohl es mehrere Berichte im zurückgegebenen Array geben könnte, wir der Einfachheit halber nur die Werte des ersten Elements loggen.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code ist:

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
