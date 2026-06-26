---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`416 Range Not Satisfiable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass ein Server die angeforderten Bereiche nicht bedienen konnte. Der wahrscheinlichste Grund für diese Antwort ist, dass das Dokument solche [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests) nicht enthält, oder dass der Wert des {{HTTPHeader("Range")}}-Headers, obwohl syntaktisch korrekt, keinen Sinn ergibt.

Die `416` Antwortnachricht sollte einen {{HTTPHeader("Content-Range")}} enthalten, der einen nicht erfüllten Bereich angibt (das ist ein `'*'`), gefolgt von einem `'/'` und der aktuellen Länge der Ressource, z.B. `Content-Range: bytes */12777`.

Wenn dieser Fehler auftritt, brechen Browser normalerweise den Vorgang ab (zum Beispiel wird ein Download als nicht fortsetzbar betrachtet) oder fordern das gesamte Dokument erneut ohne Bereiche an.

## Status

```http
416 Range Not Satisfiable
```

## Beispiele

### Falsch formatierte Range-Anforderung

Die folgende Anfrage fordert einen Bereich von 1000-1999 Bytes aus einer Textdatei an. Die erste Positionszahl (1000) ist größer als die tatsächliche Ressource auf dem Server (800 Bytes):

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

Der Server unterstützt Range-Anfragen und sendet die aktuelle Länge der ausgewählten Darstellung im {{HTTPHeader("Content-Range")}} Header zurück:

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
