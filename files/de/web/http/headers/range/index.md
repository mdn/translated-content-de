---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Range`** {{Glossary("request_header", "Anforderungsheader")}} gibt den Teil einer Ressource an, den der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem mehrteiligen Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den {{HTTPStatus("206", "206 Partial Content")}} Statuscode für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem {{HTTPStatus("200")}} Statuscode zurückgeben. Ältere Browser verwendeten einen Antwort-Header von {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie 'Pause' oder 'Fortsetzen' in Download-Managern zu deaktivieren, aber da ein Server, der den `Range`-Header ignoriert, die gleiche Bedeutung hat wie die Antwort `Accept-Ranges: none`, wird dieser Header selten auf diese Weise verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ sind (nullbasiert & inklusiv). Wenn die angeforderten Daten eine [Inhaltscodierung](/de/docs/Web/HTTP/Headers/Content-Encoding) haben, repräsentiert jeder Bytebereich die kodierte Bytefolge, nicht die Bytes, die nach dem Dekodieren erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}, wenn die Direktive einen einzigen Bytebereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Die Einheit, in der Bereiche definiert sind. Derzeit sind nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Startposition des Anforderungsbereichs angibt.
- `<range-end>`
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional und, wenn weggelassen, wird das Ende der Ressource als Ende des Bereichs verwendet.
- `<suffix-length>`
  - : Ein ganzzahliger Wert, der die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen mit dem `Range`-Header für CORS-sichere Anforderungen und für die Anforderung mehrerer Bereiche gemacht werden. Weitere Beispiele finden Sie im [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) Leitfaden.

### Einzelne Bytebereiche und CORS-sichere Anforderungen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}, wenn der Wert ein einzelner Bytebereich ist. Das bedeutet, dass er in Anfragen über Ursprungsgrenzen hinweg verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Vorabinspektion")}} auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Wenn die Endposition weggelassen wird, werden alle verbleibenden Einheiten der Ressource angefordert, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes angefordert werden können mit:

```http
Range: bytes=900-
```

Alternativ kann, wenn nicht bekannt ist, wie groß eine Ressource ist, das letzte `n`-Bytes unter Verwendung eines Suffixbereichs von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anforderung von mehreren Bereichen

Angesichts einer Ressource mit einer Länge von 10000 Bytes fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichsspezifizierwert `9500-` lässt eine Endposition aus, was anzeigt, dass alle Bytes ab 9500 Teil des dritten Bereichs (500 Bytes) sind.

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überschneiden (wenn die angeforderte Ressource beispielsweise weniger als 1000 Bytes lang war).

```http
Range: bytes=0-499, -499
```

### Prüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende Curl-Befehl macht eine {{HTTPMethod("HEAD")}} Anfrage für ein Bild:

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

Der Server antwortet mit einer `200` Antwort, und der `Accept-Ranges: bytes` Header ist vorhanden (einige Header sind aus Gründen der Kürze weggelassen):

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
- [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) Leitfaden
- {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}
