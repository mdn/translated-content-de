---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: 473c5974cf9afca9d7750ae4943d5b6d40b4f410
---

{{HTTPSidebar}}

Der **`Range`** HTTP-Anforderungsheader gibt die Teile einer Ressource an, die der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Multipart-Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den {{HTTPStatus("206", "206 Partial Content")}} Statuscode für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den {{HTTPStatus("416", "416 Range Not Satisfiable")}} Fehler zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die ganze Ressource mit einem {{HTTPStatus("200")}} Statuscode zurückgeben. Das Ignorieren des `Range`-Headers entspricht `Accept-Ranges: none`, daher wird der {{HTTPHeader("Accept-Ranges")}} Antwort-Header selten für diesen Zweck verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ sind (nullbasiert und inklusive). Wenn die angeforderten Daten eine [Content-Coding](/de/docs/Web/HTTP/Headers/Content-Encoding) angewendet haben, repräsentiert jeder Bytebereich die codierte Bytefolge, nicht die Bytes, die nach dem Decodieren erhalten würden.

Der Header ist ein [CORS-safelisted Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header), wenn die Anweisung einen einzigen Bytebereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## Direktiven

- \<unit>
  - : Die Einheit, in der Bereiche angegeben werden.
- \<range-start>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition des Anfragebereichs angibt.
- \<range-end>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional und wird, wenn weggelassen, das Ende der Ressource als Endpunkt des Bereichs verwendet.
- \<suffix-length>
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen mit dem `Range`-Header für CORS-safelisted Anfragen und für die Anforderung mehrerer Bereiche durchgeführt werden. Weitere Beispiele finden Sie im [HTTP Range Requests](/de/docs/Web/HTTP/Range_requests) Leitfaden.

### Einzelne Bytebereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein [CORS-safelisted Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header), wenn der Wert ein einzelner Bytebereich ist. Das bedeutet, dass er in Cross-Origin-Anfragen verwendet werden kann, ohne eine [Preflight](/de/docs/Glossary/Preflight_request) Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

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

Alternativ können, wenn unbekannt ist, wie groß eine Ressource ist, die letzten `n` Bytes mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern mehrerer Bereiche

Bei einer Ressource mit einer Länge von 10000 Bytes fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichs-Spezifikatorwert `9500-` verzichtet auf eine Endposition, was bedeutet, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an. Die Anfrage könnte vom Server abgelehnt werden, wenn diese Bereiche sich überschneiden (zum Beispiel, wenn die angeforderte Ressource weniger als 1000 Bytes lang war).

```http
Range: bytes=0-499, -499
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP Range Requests](/de/docs/Web/HTTP/Range_requests) Leitfaden
- [CORS-safelisted Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
