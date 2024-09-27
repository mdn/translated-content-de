---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-**`416 Range Nicht Erfüllbar`**-[Client-Fehlerantwortstatuscode](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass ein Server die angeforderten Bereiche nicht bedienen konnte. Der wahrscheinlichste Grund für diese Antwort ist, dass das Dokument solche [Bereiche](/de/docs/Web/HTTP/Range_requests) nicht enthält, oder dass der Wert des {{HTTPHeader("Range")}}-Headers zwar syntaktisch korrekt, aber nicht sinnvoll ist.

Die `416`-Antwortnachricht sollte einen {{HTTPHeader("Content-Range")}} enthalten, der einen nicht erfüllten Bereich angibt (das ist ein `'*'`), gefolgt von einem `'/'` und der aktuellen Länge der Ressource, z.B. `Content-Range: bytes */12777`.

Beim Auftreten dieses Fehlers brechen Browser normalerweise die Operation ab (zum Beispiel wird ein Download als nicht fortsetzbar angesehen) oder fordern das gesamte Dokument erneut ohne Bereiche an.

## Status

```http
416 Range Not Satisfiable
```

## Beispiele

### Fehlformatierte Bereichsanfrage

Die folgende Anfrage verlangt einen Bereich von 1000-1999 Bytes aus einer Textdatei.
Die erste Positionsangabe (1000) ist größer als die tatsächliche Ressource auf dem Server (800 Bytes):

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
