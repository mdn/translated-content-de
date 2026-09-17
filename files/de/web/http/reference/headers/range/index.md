---
title: Range header
short-title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Range`**-{{Glossary("request_header", "Request-Header")}} gibt den Teil einer Ressource an, den der Server zurückgeben soll.
Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Multipart-Dokument zurücksenden.
Wenn der Server Bereiche zurücksendet, verwendet er für die Antwort den Statuscode {{HTTPStatus("206", "206 Partial Content")}}.
Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Range-Anfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem Statuscode {{HTTPStatus("200")}} zurückgeben.
Ältere Browser verwendeten einen Response-Header von {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie „Pausieren“ oder „Fortsetzen“ in Download-Managern zu deaktivieren. Da ein Server, der den `Range`-Header ignoriert, jedoch dieselbe Bedeutung hat wie eine Antwort mit `Accept-Ranges: none`, wird der Header auf diese Weise nur selten verwendet.

Derzeit sind nur [`bytes`-Einheiten registriert](https://www.iana.org/assignments/http-parameters#range-units), bei denen es sich um _Offsets_ (nullbasiert und einschließlich) handelt.
Wenn auf die angeforderten Daten eine [Content-Codierung](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) angewendet wurde, stellt jeder Byte-Bereich die kodierte Byte-Sequenz dar, nicht die Bytes, die nach dem Dekodieren erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}, wenn die Direktive einen einzelnen Byte-Bereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, …, <range-startN>-<range-endN>
Range: <unit>=-<suffix-length>
```

## Direktiven

- `<unit>`
  - : Die Einheit, in der Bereiche definiert werden.
    Derzeit ist nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition des angeforderten Bereichs angibt.
- `<range-end>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt.
    Dieser Wert ist optional. Wenn er weggelassen wird, wird das Ende der Ressource als Ende des Bereichs verwendet.
- `<suffix-length>`
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen mit dem `Range`-Header für CORS-safelisted Anfragen und zum Anfordern mehrerer Bereiche gestellt werden.
Weitere Beispiele finden Sie im Leitfaden zu [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests).

### Einzelne Byte-Bereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}, wenn der Wert ein einzelner Byte-Bereich ist.
Das bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight")}}-Anfrage auszulösen. Dies ist für das Anfordern von Medien und das Fortsetzen von Downloads nützlich.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Durch Weglassen der Endposition werden alle verbleibenden Einheiten der Ressource angefordert. Daher können die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes folgendermaßen angefordert werden:

```http
Range: bytes=900-
```

Alternativ können, wenn die Größe einer Ressource unbekannt ist, die letzten `n` Bytes mithilfe eines Suffix-Bereichs von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Mehrere Bereiche anfordern

Bei einer Ressource mit einer Länge von 10000 Bytes fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`.
Der Bereichsspezifiziererwert `9500-` lässt eine Endposition weg. Dies gibt an, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an.
Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource beispielsweise kürzer als 1000 Bytes war).

```http
Range: bytes=0-499, -500
```

### Überprüfen, ob ein Server Range-Anfragen unterstützt

Der folgende curl-Befehl führt für ein Bild eine {{HTTPMethod("HEAD")}}-Anfrage aus:

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# or using the OPTIONS method:
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

Dies führt zu folgender HTTP-Anfrage:

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Der Server antwortet mit einer `200`-Antwort, und der Header `Accept-Ranges: bytes` ist vorhanden (einige Header wurden der Kürze halber weggelassen):

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 146515
Content-Type: image/jpeg
…
Accept-Ranges: bytes
```

### Einen Bereich von einer Blob-URL abrufen

Die [`blob:`](/de/docs/Web/URI/Reference/Schemes/blob)-URL unterstützt ebenfalls Range-Anfragen durch Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch).

```js
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
fetch(url, {
  headers: {
    Range: "bytes=7-11",
  },
})
  .then((response) => response.text())
  .then((text) => console.log(text)); // "world"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Bedingter Request-Header {{HTTPHeader("If-Range")}}
- Response-Header {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- Leitfaden zu [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
