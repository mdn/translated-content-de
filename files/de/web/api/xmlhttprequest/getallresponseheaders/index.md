---
title: "XMLHttpRequest: getAllResponseHeaders()-Methode"
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{domxref("XMLHttpRequest")}}-Methode
**`getAllResponseHeaders()`** gibt alle Antwort-
Header, getrennt durch {{Glossary('CRLF')}}, als String zurück oder `null`,
wenn keine Antwort empfangen wurde.

Wenn ein Netzwerkfehler auftritt, wird ein leerer String
zurückgegeben.

> [!NOTE]
> Bei Mehrteil-Anfragen werden die Header des
> _aktuellen_ Teils der Anfrage zurückgegeben, nicht vom ursprünglichen Kanal.

## Syntax

```js-nolint
getAllResponseHeaders()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der alle Header der Antwort darstellt (außer denjenigen,
deren Feldname `Set-Cookie` ist), getrennt durch {{Glossary('CRLF')}},
oder `null`, wenn keine Antwort empfangen wurde. Bei einem Netzwerkfehler
wird ein leerer String zurückgegeben.

Ein Beispiel, wie eine rohe Header-Zeichenkette aussieht:

```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```

Jede Zeile wird durch die Zeichen für Wagenrücklauf und Zeilenumbruch
(`\r\n`) beendet. Diese sind im Wesentlichen Trennzeichen, die die einzelnen Header trennen.

> [!NOTE]
> In modernen Browsern werden die Header-Namen gemäß der neuesten Spezifikation
> in Kleinbuchstaben zurückgegeben.

## Beispiele

Dieses Beispiel untersucht die Header in dem {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}-Ereignis der Anfrage. Der Code zeigt, wie man die rohe Header-Zeichenkette erhält, sie in ein Array einzelner Header umwandelt und dann aus diesem Array eine Zuordnung von Header-Namen zu ihren Werten erstellt.

```js
const request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = () => {
  if (request.readyState === this.HEADERS_RECEIVED) {
    // Erhalte die rohe Header-Zeichenkette
    const headers = request.getAllResponseHeaders();

    // Konvertiere die Header-Zeichenkette in ein Array
    // einzelner Header
    const arr = headers.trim().split(/[\r\n]+/);

    // Erstelle eine Zuordnung von Header-Namen zu Werten
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      headerMap[header] = value;
    });
  }
};
```

Nachdem dies abgeschlossen ist, können Sie beispielsweise:

```js
const contentType = headerMap["content-type"];
```

Hierdurch wird der Wert des {{httpheader("Content-Type")}}-Headers in die Variable
`contentType` übernommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Request-Header setzen: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
