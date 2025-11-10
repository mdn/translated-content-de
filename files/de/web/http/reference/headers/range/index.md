---
title: Range header
short-title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

Der HTTP-**`Range`**-{{Glossary("request_header", "Request-Header")}} gibt den Teil einer Ressource an, den der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Mehrfachdokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit dem Statuscode {{HTTPStatus("200")}} zurückgeben. Ältere Browser verwendeten einen Antwort-Header von {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie „Pause“ oder „Fortsetzen“ in Download-Managern zu deaktivieren. Da ein Server, der den `Range`-Header ignoriert, die gleiche Bedeutung hat wie eine Antwort mit `Accept-Ranges: none`, wird dieser Header selten auf diese Weise verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offset_ sind (Null-Indizierung & inklusive). Wenn die angeforderten Daten eine [Content-Coding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) angewendet haben, repräsentiert jeder Byte-Bereich die kodierte Sequenz von Bytes, nicht die Bytes, die nach der Dekodierung erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn die Direktive einen einzelnen Byte-Bereich spezifiziert.

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
  - : Die Einheit, in der die Bereiche definiert sind. Derzeit sind nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition des Anforderungsbereichs angibt.
- `<range-end>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional, und wenn er weggelassen wird, wird das Ende der Ressource als Endpunkt des Bereichs verwendet.
- `<suffix-length>`
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen mit dem `Range`-Header für CORS-safelisted-Anfragen und das Anfordern mehrerer Bereiche gestellt werden. Weitere Beispiele finden Sie im [Leitfaden zu HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests).

### Einzelne Byte-Bereiche und CORS-safelisted-Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Byte-Bereich ist. Dies bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight")}}-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Das Weglassen der Endposition fordert alle verbleibenden Einheiten der Ressource an, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes wie folgt angefordert werden können:

```http
Range: bytes=900-
```

Alternativ können die letzten `n` Bytes einer Ressource mit einer unbekannten Größe mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern mehrerer Bereiche

Angenommen, eine Ressource hat eine Länge von 10.000 Bytes, fordert das folgende Beispiel drei separate Bereiche an; `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichs-Spezifizierungswert `9500-` lässt eine Endposition weg, was anzeigt, dass alle Bytes ab 9500 Teil des dritten Bereichs (500 Bytes) sind.

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource beispielsweise weniger als 1000 Bytes lang war).

```http
Range: bytes=0-499, -500
```

### Überprüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende Curl-Befehl macht eine {{HTTPMethod("HEAD")}}-Anfrage für ein Bild:

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# or using the OPTIONS method:
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

Dies führt zur folgenden HTTP-Anfrage:

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Der Server antwortet mit einer `200`-Antwort, und der `Accept-Ranges: bytes`-Header ist vorhanden (einige Header wurden der Kürze halber weggelassen):

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 146515
Content-Type: image/jpeg
…
Accept-Ranges: bytes
```

### Abrufen eines Bereichs von einer Blob-URL

Die [`blob:`](/de/docs/Web/URI/Reference/Schemes/blob)-URL unterstützt auch Bereichsanfragen unter Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch).

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

- {{HTTPHeader("If-Range")}} Bedingter Anforderungs-Header
- {{HTTPHeader("Content-Range")}} Antwort-Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [Leitfaden zu HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
