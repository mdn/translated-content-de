---
title: "CSPViolationReportBody: sample-Eigenschaft"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`sample`**-Schreibgeschützte Eigenschaft der {{domxref("CSPViolationReportBody")}}-Schnittstelle ist ein String, der einen Teil der Ressource enthält, die gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

Dieses Sample ist normalerweise die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der gegen eine CSP-Beschränkung verstoßen hat. Wenn es nicht gefüllt ist, ist es der leere String `""`.

Beachten Sie, dass dies nur gefüllt wird, wenn versucht wird, _Inline_-Skripte, Ereignishandler oder Stile zu laden, die gegen CSP [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src)- und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src)-Regeln verstoßen – externe Ressourcen, die gegen die CSP verstoßen, werden kein Sample erzeugen. Außerdem wird ein Sample nur einbezogen, wenn die `Content-Security-Policy`-Direktive, die verletzt wurde, auch das [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)-Schlüsselwort enthält.

> [!NOTE] Verletzungsberichte sollten als von Angreifern kontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes _insbesondere_ sollte vor der Speicherung oder Darstellung bereinigt werden.

## Wert

Ein String, der ein Sample der Inline-Ressource enthält, die gegen die CSP verstoßen hat, normalerweise die ersten 40 Zeichen, oder der leere String.

## Beispiele

### CSP-Inline-Skript-Verstoß

Dieses Beispiel löst einen CSP-Verstoß durch ein Inline-Skript aus und meldet den Verstoß mithilfe eines {{domxref("ReportingObserver")}}.
Wir fügen auch `'report-sample'` zur CSP hinzu, um ein `sample` im Body auszufüllen.

#### HTML

Die unten stehende HTML-Datei verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, welches erlaubt, Skripte vom selben Domain zu laden, jedoch nicht erlaubt, Inline-Skripte auszuführen. Wir fügen `'report-sample'` zur Direktive hinzu, damit ein Sample erzeugt wird. Das Dokument enthält auch ein Inline-Skript, was einen CSP-Verstoß auslösen sollte.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
    <script src="main.js"></script>
    <title>CSP: Verstoß durch Inline-Skript</title>
  </head>
  <body>
    <h1>CSP: Verstoß durch Inline-Skript</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben angegebene Dokument lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da es von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Berichte-Arrays und verwenden ihn, um das Verstoß-`sample` in der Konsole zu protokollieren.

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

Beachten Sie, dass möglicherweise mehrere Berichte im zurückgegebenen Array vorhanden sind; der Kürze halber protokollieren wir jedoch nur die Werte des ersten Elements.

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

- {{domxref("SecurityPolicyViolationEvent.sample")}}
