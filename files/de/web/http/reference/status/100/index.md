---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`100 Continue`** [Informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode zeigt an, dass der erste Teil einer Anfrage empfangen wurde und vom Server noch nicht abgelehnt wurde.
Der Client sollte die Anfrage fortsetzen oder die 100-Antwort verwerfen, wenn die Anfrage bereits abgeschlossen ist.

Wenn eine Anfrage einen {{HTTPHeader("Expect", "Expect: 100-continue")}} Header enthält, zeigt die 100 Continue-Antwort an, dass der Server bereit oder in der Lage ist, den Anfrageninhalt zu empfangen.
Das Warten auf eine 100 Continue-Antwort kann hilfreich sein, wenn ein Client ein mögliches Fehlerauftreten antizipiert, z. B. beim Senden von zustandsverändernden Operationen ohne vorher verifizierte Authentifizierungsinformationen.

## Status

```http
100 Continue
```

## Beispiele

### PUT-Anfrage mit 100 Continue

Die folgende {{HTTPMethod("PUT")}}-Anfrage sendet Informationen an einen Server über einen Dateiupload.
Der Client gibt an, dass er mit dem Inhalt fortfährt, wenn er eine 100-Antwort erhält, um zu vermeiden, Daten über das Netzwerk zu senden, die zu einem Fehler führen könnten, wie {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}}.
Zunächst sendet der Client nur Header, darunter einen {{HTTPHeader("Expect", "Expect: 100-continue")}} Header:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 123456789
Expect: 100-continue
```

Der Server zeigt an, dass die Anfrage fortgesetzt werden kann:

```http
HTTP/1.1 100 Continue
```

Der Client vervollständigt die Anfrage, indem er die tatsächlichen Daten sendet:

```http
[Video data as content for PUT request]
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
