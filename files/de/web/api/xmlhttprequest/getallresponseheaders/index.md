---
title: "XMLHttpRequest: getAllResponseHeaders() Methode"
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`getAllResponseHeaders()`** des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt alle Antwort-Header, getrennt durch {{Glossary("CRLF", "CRLF")}}, als Zeichenkette zurück oder `null`, wenn keine Antwort empfangen wurde.

Wenn ein Netzwerkfehler aufgetreten ist, wird eine leere Zeichenkette zurückgegeben.

> [!NOTE]
> Bei Multipart-Anfragen gibt dies die Header des _aktuellen_ Teils der Anfrage zurück, nicht vom ursprünglichen Kanal.

## Syntax

```js-nolint
getAllResponseHeaders()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die alle Antwort-Header darstellt (außer denen, deren Feldname `Set-Cookie` ist), getrennt durch {{Glossary("CRLF", "CRLF")}}, oder `null`, wenn keine Antwort empfangen wurde. Bei einem Netzwerkfehler wird eine leere Zeichenkette zurückgegeben.

Ein Beispiel dafür, wie eine rohe Header-Zeichenkette aussieht:

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

Jede Zeile wird durch sowohl Wagenrücklauf- als auch Zeilenvorschubzeichen (`\r\n`) beendet. Diese dienen im Wesentlichen als Trennzeichen, die jeden der Header voneinander abtrennen.

> [!NOTE]
> In modernen Browsern werden die Header-Namen gemäß der neuesten Spezifikation in Kleinschreibung zurückgegeben.

## Beispiele

Dieses Beispiel untersucht die Header im [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Ereignis der Anfrage. Der Code zeigt, wie man die rohe Header-Zeichenkette erhält, sie in ein Array einzelner Header umwandelt und anschließend eine Zuordnung der Header-Namen zu ihren Werten erstellt.

```js
const request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = () => {
  if (request.readyState === this.HEADERS_RECEIVED) {
    // Get the raw header string
    const headers = request.getAllResponseHeaders();

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
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

Sobald dies erledigt ist, können Sie beispielsweise:

```js
const contentType = headerMap["content-type"];
```

Dies erhält den Wert des {{httpheader("Content-Type")}}-Headers in der Variablen `contentType`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Setzen von Anforderungs-Headern: [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)
