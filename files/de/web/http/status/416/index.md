---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`416 Range Not Satisfiable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass ein Server die angeforderten Bereiche nicht bedienen konnte. Der wahrscheinlichste Grund für diese Antwort ist, dass das Dokument solche [Bereiche](/de/docs/Web/HTTP/Range_requests) nicht enthält oder dass der Wert des {{HTTPHeader("Range")}}-Headers zwar syntaktisch korrekt ist, aber keinen Sinn ergibt.

Die `416`-Antwortnachricht sollte einen {{HTTPHeader("Content-Range")}} enthalten, der einen nicht erfüllten Bereich anzeigt (das ist ein `'*'`), gefolgt von einem `'/'` und der aktuellen Länge der Ressource, z.B. `Content-Range: bytes */12777`.

Browser beenden in der Regel entweder die Operation bei diesem Fehler (zum Beispiel wird ein Download als nicht fortsetzbar betrachtet) oder fordern das gesamte Dokument erneut ohne Bereiche an.

## Status

```http
416 Range Not Satisfiable
```

## Beispiele

### Fehlerhafte Bereichsanfrage

Die folgende Anfrage fordert einen Bereich von 1000-1999 Bytes aus einer Textdatei an. Die erste Positionseinheit (1000) ist größer als die tatsächliche Ressource auf dem Server (800 Bytes):

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

Der Server unterstützt Bereichsanfragen und sendet die aktuelle Länge der ausgewählten Darstellung im {{HTTPHeader("Content-Range")}}-Header zurück:

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
