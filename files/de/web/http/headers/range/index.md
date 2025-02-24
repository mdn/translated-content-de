---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Range`** {{Glossary("request_header", "Anforderungs-Header")}} gibt den Teil einer Ressource an, den der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Multipart-Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem {{HTTPStatus("200")}} Statuscode zurückgeben. Ältere Browser verwendeten einen Antwortheader wie {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie "Anhalten" oder "Fortsetzen" in Download-Managern zu deaktivieren, aber da ein Server, der den `Range`-Header ignoriert, dieselbe Bedeutung hat wie die Antwort mit `Accept-Ranges: none`, wird der Header auf diese Weise selten verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ sind (nullbasiert & inklusiv). Wenn die angeforderten Daten eine [Inhaltskodierung](/de/docs/Web/HTTP/Headers/Content-Encoding) verwenden, stellt jeder Bytebereich die codierte Sequenz von Bytes dar, nicht die Bytes, die nach dem Decodieren erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}, wenn die Direktive einen einzelnen Bytebereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional, und wenn er weggelassen wird, wird das Ende der Ressource als Ende des Bereichs verwendet.
- `<suffix-length>`
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen unter Verwendung des `Range`-Headers für CORS-gesicherte Anfragen gestellt werden, und wie mehrere Bereiche angefordert werden. Weitere Beispiele finden Sie im [HTTP-Bereichsanfragen-Leitfaden](/de/docs/Web/HTTP/Range_requests).

### Einzelne Bytebereiche und CORS-gesicherte Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anforderungs-Header")}}, wenn der Wert ein einzelner Bytebereich ist. Dies bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight")}}-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Das Weglassen der Endposition fordert alle verbleibenden Einheiten der Ressource an, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes mit folgender Angabe angefordert werden können:

```http
Range: bytes=900-
```

Alternativ können, wenn nicht bekannt ist, wie groß eine Ressource ist, die letzten `n` Bytes mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anforderung mehrerer Bereiche

Angenommen, eine Ressource hat eine Länge von 10000 Bytes, fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichs-Spezifizierwert `9500-` lässt eine Endposition aus, was bedeutet, dass alle Bytes von 9500 an Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource beispielsweise kürzer als 1000 Bytes war).

```http
Range: bytes=0-499, -499
```

### Überprüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende curl-Befehl macht eine {{HTTPMethod("HEAD")}}-Anfrage für ein Bild:

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# or using the OPTIONS method:
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

Dies führt zu der folgenden HTTP-Anfrage:

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Der Server antwortet mit einer `200`-Reaktion, und der `Accept-Ranges: bytes`-Header ist vorhanden (einige Header sind der Kürze halber weggelassen):

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 146515
Content-Type: image/jpeg
…
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Range")}} bedingter Anforderungs-Header
- {{HTTPHeader("Content-Range")}} Antwort-Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP-Bereichsanfragen-Leitfaden](/de/docs/Web/HTTP/Range_requests)
- {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anforderungs-Header")}}
