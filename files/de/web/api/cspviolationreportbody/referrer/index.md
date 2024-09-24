---
title: "CSPViolationReportBody: referrer-Eigenschaft"
short-title: referrer
slug: Web/API/CSPViolationReportBody/referrer
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`referrer`** des Interfaces {{domxref("CSPViolationReportBody")}} ist ein String, der die URL der verweisenden Seite der Ressource darstellt, deren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt wurde.

Der Referrer ist die Seite, die das Laden der Seite mit der CSP-Verletzung verursacht hat. Wenn wir beispielsweise einem Link zu einer Seite mit einer CSP-Verletzung gefolgt sind, ist der `referrer` die Seite, von der aus wir navigiert haben.

## Wert

Ein String, der die URL des Referrers der Seite mit der CSP-Verletzung darstellt, oder null.

Beachten Sie, dass, wenn der Referrer eine HTTP(S)-URL ist, jeder Benutzername, jedes Passwort oder Fragment entfernt wird.
Wenn das URL-Schema nicht `http:` oder `https:` ist, wird nur das Schema zurückgegeben.

## Beispiele

### CSP Inline-Skript-Verletzung zeigt Referrer

Dieses Beispiel löst eine CSP-Verletzung mit einem Inline-Skript aus und meldet die Verletzung mithilfe eines {{domxref("ReportingObserver")}}.
Wir navigieren von einer anderen Seite auf die Seite und protokollieren den `referrer`, `documentURL` und `blockedURL`.

#### HTML

Zuerst definieren wir unsere Referrer-Seite `/bounce/index.html`.
Diese Seite enthält einfach einen Link zu einer anderen Seite `../report_sample/index.html`.

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
Diese verwendet das [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element, um die {{httpheader('Content-Security-Policy')}} `script-src-elem` auf `self` festzulegen, was erlaubt, dass Skripte vom selben Domain geladen werden dürfen, aber Inline-Skripte nicht ausgeführt werden dürfen.
Das Dokument enthält auch ein Inline-Skript, das eine CSP-Verletzung auslösen wird.

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

Das obige Report-Beispiel lädt auch das externe Skript `main.js`, das unten gezeigt wird.
Da es vom selben Domain wie das HTML geladen wird, wird es nicht von der CSP blockiert.

Das Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, erhalten wir den Body des ersten Eintrags des Reports-Arrays und verwenden ihn, um die Verletzung `documentURL`, `referrer` und `blockedURL` in der Konsole zu protokollieren.

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

Beachten Sie, dass, obwohl es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir der Kürze halber nur die Werte des ersten Elements protokollieren.

#### Ergebnisse

Die Konsolenausgabe für den obigen Code könnte ungefähr wie unten aussehen (die Seite hängt davon ab, wie die Seiten bereitgestellt werden):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Beachten Sie, dass `referrer` die Seite ist, von der wir navigiert haben, `documentURL` die Seite mit der CSP-Verletzung ist und `blockedURL` in diesem Fall keine URL ist, sondern ein Hinweis darauf, dass die Verletzung durch ein unsicheres Inline-Skript verursacht wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SecurityPolicyViolationEvent.referrer")}}
- {{httpheader("Referer")}}
