---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`sample`**-Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist eine schreibgeschützte Zeichenkette, die einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

Dieses Beispiel ist in der Regel die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der gegen eine CSP-Einschränkung verstoßen hat. Ist es nicht gefüllt, ist es die leere Zeichenkette `""`.

Beachten Sie, dass dies nur befüllt wird, wenn versucht wird, _inline_-Skripte, Ereignishandler oder Stile zu laden, die gegen die CSP-Regeln [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) verstoßen — externe Ressourcen, die gegen die CSP verstoßen, erzeugen kein Beispiel. Darüber hinaus wird ein Beispiel nur dann aufgenommen, wenn die verletzte `Content-Security-Policy` Direktive auch das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) enthält.

> [!NOTE] Verstossberichte sollten als vom Angreifer kontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes _insbesondere_ sollte vor der Speicherung oder Darstellung bereinigt werden.

## Wert

Eine Zeichenkette, die ein Beispiel der Inline-Ressource enthält, die gegen die CSP verstoßen hat, in der Regel die ersten 40 Zeichen oder die leere Zeichenkette.

## Beispiele

### CSP-Inline-Skriptverstoß

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Wir fügen auch `'report-sample'` zur CSP hinzu, um ein `sample` im Berichtskörper zu generieren.

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was es erlaubt, Skripte von derselben Domain zu laden, aber nicht erlaubt, Inline-Skripte auszuführen. Wir beziehen `'report-sample'` in die Direktive ein, damit ein Beispiel erstellt wird. Das Dokument enthält auch ein Inline-Skript, das einen CSP-Verstoß auslösen sollte.

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

Das oben dargestellte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da dies von derselben Domain wie das HTML geladen wird, wird es durch die CSP nicht blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverstoßberichte vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Körper des ersten Eintrags des Berichtsarrays und verwenden ihn, um das Verletzungsbeispiel `sample` in die Konsole zu protokollieren.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, wir jedoch der Einfachheit halber nur die Werte des ersten Elements protokollieren.

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
