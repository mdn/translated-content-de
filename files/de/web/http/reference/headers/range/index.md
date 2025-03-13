---
title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Range`** {{Glossary("request_header", "Anforderungsheader")}} gibt an, welcher Teil einer Ressource vom Server zurückgegeben werden soll.
Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem mehrteiligen Dokument zurücksenden.
Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort.
Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanforderungen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem Statuscode von {{HTTPStatus("200")}} zurückgeben.
Ältere Browser verwendeten einen Antwort-Header wie {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie „Pause“ oder „Fortsetzen“ in Download-Managern zu deaktivieren. Aber da das Ignorieren des `Range`-Headers durch einen Server dieselbe Bedeutung hat wie das Antworten mit `Accept-Ranges: none`, wird der Header selten auf diese Weise verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ sind (nullbasiert und inklusive).
Wenn auf die angeforderten Daten eine [Inhaltscodierung](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) angewendet wurde, stellt jeder Bytebereich die codierte Bytefolge dar, nicht die Bytes, die nach dem Decodieren erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}, wenn die Anweisung einen einzelnen Bytebereich angibt.

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
    Derzeit ist nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Eine ganze Zahl in der angegebenen Einheit, die die Startposition des Anforderungsbereichs angibt.
- `<range-end>`
  - : Eine ganze Zahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt.
    Dieser Wert ist optional und, falls weggelassen, wird das Ende der Ressource als Endpunkt des Bereichs verwendet.
- `<suffix-length>`
  - : Eine ganze Zahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anforderungen mit dem `Range`-Header für CORS-safelisted Anfragen und zum Anfordern mehrerer Bereiche gestellt werden.
Weitere Beispiele finden Sie im [HTTP Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden.

### Einzelne Bytebereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}, wenn der Wert ein einzelner Bytebereich ist.
Das bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight")}} Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Das Weglassen der Endposition fordert alle verbleibenden Einheiten der Ressource an, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes mit folgendem Beispiel angefordert werden können:

```http
Range: bytes=900-
```

Alternativ, wenn unbekannt ist, wie groß eine Ressource ist, können die letzten `n` Bytes mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern mehrerer Bereiche

Angenommen, eine Ressource hat eine Länge von 10000 Bytes, so fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`.
Der Bereichs-Spezifikationswert `9500-` lässt eine Endposition weg, was anzeigt, dass alle Bytes von 9500 an zum dritten Bereich gehören (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an.
Der Antrag kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource beispielsweise weniger als 1000 Bytes lang war).

```http
Range: bytes=0-499, -500
```

### Überprüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende Curl-Befehl führt eine {{HTTPMethod("HEAD")}}-Anfrage für ein Bild aus:

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

Der Server antwortet mit einer `200` Antwort, und der `Accept-Ranges: bytes` Header ist vorhanden (einige Header sind der Kürze halber weggelassen):

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

- {{HTTPHeader("If-Range")}} konditioneller Anforderungsheader
- {{HTTPHeader("Content-Range")}} Antwortheader
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden
- {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
