---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`416 Range Not Satisfiable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass ein Server die angeforderten Bereiche nicht bereitstellen konnte.
Der wahrscheinlichste Grund für diese Antwort ist, dass das Dokument solche [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests) nicht enthält oder dass der Wert des {{HTTPHeader("Range")}}-Headers, obwohl syntaktisch korrekt, keinen Sinn ergibt.

Die `416`-Antwortnachricht sollte einen {{HTTPHeader("Content-Range")}} enthalten, der einen nicht erfüllten Bereich (das heißt ein `'*'`) gefolgt von einem `'/'` und der aktuellen Länge der Ressource angibt, z. B.: `Content-Range: bytes */12777`

Bei diesem Fehler brechen Browser normalerweise entweder die Operation ab (zum Beispiel wird ein Download als nicht fortsetzbar angesehen) oder fordern das gesamte Dokument erneut ohne Bereiche an.

## Status

```http
416 Range Not Satisfiable
```

## Beispiele

### Fehlgebildete Bereichsanfrage

Die folgende Anfrage verlangt einen Bereich von 1000-1999 Bytes aus einer Textdatei.
Die erste Positionsangabe (1000) ist größer als die tatsächliche Ressource auf dem Server (800 Bytes):

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

Der Server unterstützt Bereichsanfragen und sendet in dem {{HTTPHeader("Content-Range")}}-Header die aktuelle Länge der gewählten Repräsentation zurück:

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
