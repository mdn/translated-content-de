---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: 473c5974cf9afca9d7750ae4943d5b6d40b4f410
---

{{HTTPSidebar}}

Der **`Range`** HTTP-Anforderungsheader gibt die Teile einer Ressource an, die der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem Multipart-Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanfragen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit dem Statuscode {{HTTPStatus("200")}} zurückgeben. Das Ignorieren des `Range`-Headers entspricht `Accept-Ranges: none`, daher wird der {{HTTPHeader("Accept-Ranges")}} Antwort-Header selten zu diesem Zweck verwendet.

Derzeit sind nur [`bytes` Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), bei denen es sich um _Offsets_ (null-basiert und inklusive) handelt. Wenn die angeforderten Daten eine angewendete [Inhaltskodierung](/de/docs/Web/HTTP/Headers/Content-Encoding) haben, stellt jeder Byte-Bereich die kodierte Byte-Sequenz dar, nicht die Bytes, die nach dem Dekodieren erhalten würden.

Der Header ist ein [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header), wenn die Anweisung einen einzigen Byte-Bereich spezifiziert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Startposition des Anforderungsbereichs angibt.
- \<range-end>
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional und, wenn nicht angegeben, wird das Ende der Ressource als Endpunkt des Bereichs verwendet.
- \<suffix-length>
  - : Ein ganzzahliger Wert, der die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden sollen.

## Beispiele

Die folgenden Beispiele zeigen, wie man Anfragen mit dem `Range`-Header für CORS-safelisted Anfragen und für das Anfordern mehrerer Bereiche macht. Weitere Beispiele finden Sie im [Leitfaden für HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

### Einzelne Byte-Bereiche und CORS-safelisted Anfragen

Der `Range`-Header ist ein [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header), wenn der Wert ein einzelner Byte-Bereich ist. Das bedeutet, dass er bei Cross-Origin-Anfragen verwendet werden kann, ohne eine [Preflight](/de/docs/Glossary/Preflight_request)-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Wenn die Endposition weggelassen wird, werden alle verbleibenden Einheiten der Ressource angefordert, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes mit folgender Anfrage angefordert werden können:

```http
Range: bytes=900-
```

Alternativ, wenn nicht bekannt ist, wie groß eine Ressource ist, können die letzten `n` Bytes mit einem Suffix-Bereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Anfordern mehrerer Bereiche

Bei einer Ressource mit einer Länge von 10000 Bytes fordert das folgende Beispiel drei separate Bereiche an; `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereichsspezifikatorwert `9500-` lässt eine Endposition weg, was darauf hinweist, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn diese Bereiche überlappen (wenn die angeforderte Ressource beispielsweise kürzer als 1000 Bytes wäre).

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
- [Leitfaden für HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
- [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header)
