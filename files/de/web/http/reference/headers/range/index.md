---
title: Range header
short-title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Range`** {{Glossary("request_header", "Anforderungs-Header")}} gibt den Teil einer Ressource an, den der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem mehrteiligen Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der keine Bereichsanfragen unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem {{HTTPStatus("200")}} Statuscode zurückgeben. Ältere Browser verwendeten einen Antwort-Header wie {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}}, um Funktionen wie „Pause“ oder „Fortsetzen“ in Download-Managern zu deaktivieren. Da jedoch ein Server, der den `Range`-Header ignoriert, denselben Effekt hat wie das Antworten mit `Accept-Ranges: none`, wird der Header selten auf diese Weise verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ (nullbasiert und eingeschlossen) darstellen. Wenn die angeforderten Daten eine [Inhaltscodierung](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding) angewendet haben, repräsentiert jeder Byte-Bereich die codierte Sequenz von Bytes, nicht die Bytes, die nach der Dekodierung erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}, wenn die Direktive einen einzelnen Byte-Bereich angibt.

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
  - : Die Einheit, in der Bereiche definiert sind. Derzeit sind nur `bytes` eine registrierte Einheit.
- `<range-start>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition des Anforderungsbereichs angibt.
- `<range-end>`
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional und, wenn weggelassen, wird das Ende der Ressource als Endposition des Bereichs verwendet.
- `<suffix-length>`
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie man Anfragen mit dem `Range`-Header für CORS-safelisted Anfragen und für das Anfordern mehrerer Bereiche erstellt. Weitere Beispiele finden Sie im [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden.

### Einzelne Byte-Bereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}, wenn der Wert ein einzelner Byte-Bereich ist. Das bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Voranfrage")}} auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Wird die Endposition weggelassen, werden alle verbleibenden Einheiten der Ressource angefordert, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes angefordert werden können:

```http
Range: bytes=900-
```

Alternativ, wenn nicht bekannt ist, wie groß eine Ressource ist, können die letzten `n` Bytes mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern mehrerer Bereiche

Gegeben eine Ressource mit einer Länge von 10000 Bytes, fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichs-Spezifikator-Wert `9500-` lässt eine Endposition weg, was bedeutet, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überlappen (wenn die angeforderte Ressource zum Beispiel weniger als 1000 Bytes lang war).

```http
Range: bytes=0-499, -500
```

### Überprüfen, ob ein Server Bereichsanfragen unterstützt

Der folgende curl-Befehl erstellt eine {{HTTPMethod("HEAD")}}-Anfrage für ein Bild:

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

Der Server antwortet mit einer `200` Antwort, und der `Accept-Ranges: bytes` Header ist vorhanden (einige Header wurden der Kürze halber weggelassen):

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

- {{HTTPHeader("If-Range")}} konditionaler Anforderungs-Header
- {{HTTPHeader("Content-Range")}} Antwort-Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden
- {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
