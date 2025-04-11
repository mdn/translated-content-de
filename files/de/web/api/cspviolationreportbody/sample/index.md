---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`sample`**-Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Diese Probe ist in der Regel die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der gegen eine CSP-Beschränkung verstoßen hat.
Wenn sie nicht befüllt ist, ist sie der leere String `""`.

Beachten Sie, dass dies nur dann befüllt wird, wenn versucht wird, _inline_-Skripte, Ereignishandler oder Stile zu laden, die gegen CSP [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Regeln verstoßen — externe Ressourcen, die gegen die CSP verstoßen, generieren keine Probe.
Zudem wird eine Probe nur dann einbezogen, wenn die verletzte `Content-Security-Policy`-Direktive auch das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.

> [!NOTE] Verletzungsberichte sollten als von Angreifern kontrollierte Daten betrachtet werden.
> Insbesondere der Inhalt dieses Feldes sollte bereinigt werden, bevor er gespeichert oder gerendert wird.

## Wert

Ein String, der eine Probe der Inline-Ressource enthält, die gegen die CSP verstoßen hat, in der Regel die ersten 40 Zeichen, oder der leere String.

## Beispiele

### CSP Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir fügen auch `'report-sample'` zur CSP hinzu, um ein `sample` im Body zu erzeugen.

#### HTML

Die untenstehende HTML-Datei nutzt das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was es erlaubt, Skripte von derselben Domain zu laden, aber keine Inline-Skripte ausgeführt werden können.
Wir fügen `'report-sample'` in die Direktive ein, damit eine Probe generiert wird.
Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

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

Das oben gezeigte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da dies von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverstoßberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags im Berichtsarray und verwenden ihn, um die Verletzungsprobe im Konsolenprotokoll zu speichern.

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

Beachten Sie, dass es im zurückgegebenen Array mehrere Berichte geben kann. Der Einfachheit halber protokollieren wir jedoch nur die Werte des ersten Elements.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code lautet:

```plain
sample: const int = 4;
```

In diesem Fall enthält die Probe den gesamten Inhalt des Inline-Skripts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample)
