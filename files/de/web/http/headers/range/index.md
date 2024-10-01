---
title: Range
slug: Web/HTTP/Headers/Range
l10n:
  sourceCommit: 473c5974cf9afca9d7750ae4943d5b6d40b4f410
---

{{HTTPSidebar}}

Der **`Range`**-HTTP-Anforderungsheader gibt die Teile einer Ressource an, die der Server zurückgeben soll. Mehrere Teile können gleichzeitig in einem `Range`-Header angefordert werden, und der Server kann diese Bereiche in einem mehrteiligen Dokument zurücksenden. Wenn der Server Bereiche zurücksendet, verwendet er den Statuscode {{HTTPStatus("206", "206 Partial Content")}} für die Antwort. Wenn die Bereiche ungültig sind, gibt der Server den Fehler {{HTTPStatus("416", "416 Range Not Satisfiable")}} zurück.

Ein Server, der Bereichsanforderungen nicht unterstützt, kann den `Range`-Header ignorieren und die gesamte Ressource mit einem Statuscode von {{HTTPStatus("200")}} zurückgeben. Das Ignorieren des `Range`-Headers ist gleichbedeutend mit `Accept-Ranges: none`, daher wird der Antwortheader {{HTTPHeader("Accept-Ranges")}} selten zu diesem Zweck verwendet.

Derzeit sind nur [`bytes`-Einheiten registriert](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), die _Offsets_ sind (nullbasiert und eingeschlossen). Wenn auf die angeforderten Daten eine [Inhaltscodierung](/de/docs/Web/HTTP/Headers/Content-Encoding) angewendet wurde, stellt jeder Bytebereich die codierte Folge von Bytes dar, nicht die Bytes, die nach der Dekodierung erhalten würden.

Der Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}, wenn die Anweisung einen einzelnen Bytebereich angibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Die Einheit, in der die Bereiche angegeben werden.
- \<range-start>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition des Anforderungsbereichs angibt.
- \<range-end>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt. Dieser Wert ist optional und, falls weggelassen, wird das Ende der Ressource als Ende des Bereichs verwendet.
- \<suffix-length>
  - : Eine Ganzzahl, die die Anzahl der Einheiten am Ende der Ressource angibt, die zurückgegeben werden soll.

## Beispiele

Die folgenden Beispiele zeigen, wie Anfragen mit dem `Range`-Header für CORS-sichere Anfragen und zum Anfordern mehrerer Bereiche gemacht werden. Weitere Beispiele finden Sie im [HTTP-Bereichsanfragen-Leitfaden](/de/docs/Web/HTTP/Range_requests).

### Einzelne Byte-Bereiche und CORS-sichere Anfragen

Der `Range`-Header ist ein {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}, wenn der Wert ein einzelner Bytebereich ist. Das bedeutet, dass er in plattformübergreifenden Anfragen verwendet werden kann, ohne eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen.

Das folgende Beispiel fordert die ersten 500 Bytes einer Ressource an:

```http
Range: bytes=0-499
```

Um die zweiten 500 Bytes anzufordern:

```http
Range: bytes=500-999
```

Das Weglassen der Endposition fordert alle verbleibenden Einheiten der Ressource an, sodass die letzten 100 Bytes einer Ressource mit einer Länge von 1000 Bytes mit folgendem Code angefordert werden können:

```http
Range: bytes=900-
```

Alternativ, wenn nicht bekannt ist, wie groß eine Ressource ist, können die letzten `n` Bytes mit einem Suffixbereich von `-n` angefordert werden:

```http
Range: bytes=-100
```

### Mehrere Bereiche anfordern

Angenommen, es gibt eine Ressource mit einer Länge von 10000 Bytes, fordert das folgende Beispiel drei separate Bereiche an: `200`-`999` (800 Bytes), `2000`-`2499` (500 Bytes) und schließlich `9500-`. Der Bereich-Spezifikatorwert `9500-` lässt eine Endposition aus, was anzeigt, dass alle Bytes ab 9500 Teil des dritten Bereichs sind (500 Bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Dieses Beispiel fordert die ersten 500 und die letzten 500 Bytes der Datei an. Die Anfrage kann vom Server abgelehnt werden, wenn sich diese Bereiche überlappen (wenn die angeforderte Ressource z.B. weniger als 1000 Bytes lang war).

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
- [HTTP-Bereichsanfragen-Leitfaden](/de/docs/Web/HTTP/Range_requests)
- {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anforderungsheader")}}
