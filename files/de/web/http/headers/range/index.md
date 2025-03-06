---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: a7ff5dd72f29cbebce6fd3233adb20cbc139fa1c
---

{{HTTPSidebar}}

Der HTTP **`Range`** {{Glossary("request_header", "Anforderungsheader")}} gibt an, welcher Teil einer Ressource vom Server zurückgegeben werden soll. Mehrere Teile können gleichzeitig mit einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Multipart-Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den {{HTTPStatus("206", "206 Partial Content")}} Statuscode für die Antwort. Sind die Bereiche ungültig, gibt der Server den {{HTTPStatus("416", "416 Range Not Satisfiable")}} Fehler zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem {{HTTPStatus("200")}} Statuscode zurückgeben. Ältere Browser verwendeten einen Antwort-Header von {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie 'Pause' oder 'Fortsetzen' in Download-Managern zu deaktivieren, aber da ein Server, der den `Range`-Header ignoriert, die gleiche Bedeutung hat wie eine Antwort mit `Accept-Ranges: none`, wird der Header selten auf diese Weise verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ (nullbasiert & inklusiv) sind. Wenn auf die angeforderten Daten eine [Content-Codierung](/de/docs/Web/HTTP/Headers/Content-Encoding) angewendet wird, entspricht jeder Bytebereich der kodierten Bytefolge, nicht den Bytes, die nach der Dekodierung erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisteter Anforderungsheader")}}, wenn die Anweisung einen einzelnen Bytebereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Die Einheit, in der Bereiche definiert sind.
    Derzeit sind nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Eine ganze Zahl in der angegebenen Einheit, die die Startposition des Anforderungsbereichs angibt.
- `<range-end>`
  - : Eine ganze Zahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt.
    Dieser Wert ist optional und, wenn er weggelassen wird, wird das Ende der Ressource als Endpunkt des Bereichs verwendet.
- `<suffix-length>`
  - : Eine ganze Zahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie man mit dem `Range`-Header Anfragen für CORS-safelisted Anfragen und für mehrere Bereiche stellt. Weitere Beispiele finden Sie im [Leitfaden für HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

### Einzelne Bytebereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisteter Anforderungsheader")}}, wenn der Wert ein einzelner Bytebereich ist. Das bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight")}}-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

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

Alternativ, wenn nicht bekannt ist, wie groß eine Ressource ist, können die letzten `n` Bytes unter Verwendung eines Suffixbereichs von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern von mehreren Bereichen

Gegeben eine Ressource mit einer Länge von 10000 Bytes, fordert das folgende Beispiel drei separate Bereiche an; `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Wert des Bereichs-Spezifikators `9500-` lässt eine Endposition weg, was bedeutet, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource weniger als 1000 Bytes lang war, zum Beispiel).

```http
Range: bytes=0-499, -500
```

### Überprüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende curl-Befehl macht eine {{HTTPMethod("HEAD")}}-Anfrage für ein Bild:

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# or using the OPTIONS method:
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

Dies ergibt die folgende HTTP-Anfrage:

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Der Server antwortet mit einer `200` Antwort, und der `Accept-Ranges: bytes` Header ist vorhanden (einige Header werden der Kürze halber weggelassen):

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

- {{HTTPHeader("If-Range")}} bedingter Anforderungsheader
- {{HTTPHeader("Content-Range")}} Antwortheader
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [Leitfaden für HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
- {{Glossary("CORS-safelisted_request_header", "CORS-safelisteter Anforderungsheader")}}
