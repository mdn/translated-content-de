---
title: "CSPViolationReportBody: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/CSPViolationReportBody/referrer
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}}

Die **`referrer`** schreibgeschützte Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String, der die URL der verweisenden Seite der Ressource darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wurde.

Der Referrer ist die Seite, die dazu führte, dass die Seite mit dem CSP-Verstoß geladen wurde. Zum Beispiel, wenn wir einem Link zu einer Seite mit einem CSP-Verstoß gefolgt sind, ist der `referrer` die Seite, von der wir navigiert haben.

## Wert

Ein String, der die URL des Referrers der Seite mit dem CSP-Verstoß darstellt, oder null.

Beachten Sie, dass, wenn der Referrer eine HTTP(S)-URL ist, alle Benutzername, Passwort oder Fragment entfernt werden.
Wenn das URL-Schema nicht `http:` oder `https:` ist, wird nur das Schema zurückgegeben.

## Beispiele

### CSP Inline-Skript-Verstoß zeigt Referrer

Dieses Beispiel löst einen CSP-Verstoß mit einem Inline-Skript aus und meldet den Verstoß mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Wir navigieren von einer anderen Seite zu der Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

#### HTML

Zuerst definieren wir unsere Referrer-Seite `/bounce/index.html`.
Diese Seite enthält lediglich einen Link zu einer anderen Seite `../report_sample/index.html`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <ul>
      <li><a href="../report_sample/">report sample</a></li>
    </ul>
  </body>
</html>
```

Die `../report_sample/index.html` HTML-Datei ist unten definiert.
Diese verwendet das [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` zu setzen, was bedeutet, dass Skripte von derselben Domain geladen werden können, jedoch keine Inline-Skripte ausgeführt werden dürfen.
Das Dokument enthält auch ein Inline-Skript, welches einen CSP-Verstoß auslöst.

```html
<!doctype html>
<!-- /report_sample/index.html -->
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

Das oben erwähnte Report-Beispiel lädt auch das externe Skript `main.js`, das unten dargestellt wird.
Da dieses von derselben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags im Berichtsarray und verwenden ihn, um die Verletzung `documentURL`, `referrer` und `blockedURL` in der Konsole zu protokollieren.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`documentURL: ${reports[0].body.referrer}`);
    console.log(`referrer: ${reports[0].body.referrer}`);
    console.log(`blockedURL: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass, obwohl es mehrere Berichte im zurückgegebenen Array geben könnte, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code würde in etwa so aussehen (die Seite hängt davon ab, wie die Seiten ausgeliefert werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert haben, `documentURL` ist die Seite mit dem CSP-Verstoß und `blockedURL` in diesem Fall überhaupt keine URL ist, sondern ein Hinweis darauf, dass der Verstoß durch ein unsicheres Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer)
- {{httpheader("Referer")}}
