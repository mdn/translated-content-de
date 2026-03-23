---
title: "CSPViolationReport: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReport/sample
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`sample`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Wörterbuchs ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

Dieses Sample sind normalerweise die ersten 40 Zeichen des Inline-Skripts, des Ereignis-Handlers oder des Styles, die gegen eine CSP-Einschränkung verstoßen haben. Wenn es nicht ausgefüllt ist, ist es der leere String `""`.

Beachten Sie, dass dies nur ausgefüllt wird, wenn versucht wird, _inline_-Skripts, Ereignis-Handler oder Styles zu laden, die gegen die CSP [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)- und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Regeln verstoßen – externe Ressourcen, die gegen die CSP verstoßen, erzeugen kein Sample. Außerdem wird ein Sample nur dann eingefügt, wenn die verletzte `Content-Security-Policy`-Direktive auch das [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)-Schlüsselwort enthält.

> [!NOTE]
> Violation-Berichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes _insbesondere_ sollte bereinigt werden, bevor er gespeichert oder dargestellt wird.

## Wert

Ein String, der ein Sample der Inline-Ressource enthält, die gegen die CSP verstoßen hat, normalerweise die ersten 40 Zeichen oder den leeren String.

## Beispiele

### CSP Inline-Skript-Verletzung

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Wir fügen auch `'report-sample'` zur CSP hinzu, um ein `sample` im Body auszufüllen.

#### HTML

Die untenstehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um den {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was erlaubt, dass Skripte von derselben Domain geladen werden, jedoch nicht erlaubt, dass Inline-Skripte ausgeführt werden. Wir fügen `'report-sample'` zur Direktive hinzu, damit ein Sample generiert wird. Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen sollte.

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

Das oben genannte Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird. Da das Skript von derselben Domain wie das HTML geladen wird, wird es nicht durch die CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zur Beobachtung von Inhaltsverletzungsberichten des Typs `"csp-violation"`. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichte-Arrays und verwenden ihn, um das Violation-`sample` in der Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl möglicherweise mehrere Berichte im zurückgegebenen Array enthalten sind, wir der Einfachheit halber nur die Werte des ersten Elements protokollieren.

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
