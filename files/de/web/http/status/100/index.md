---
title: 100 Weiter
slug: Web/HTTP/Status/100
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`100 Continue`** [informational response](/de/docs/Web/HTTP/Status#information_responses) zeigt an, dass der erste Teil einer Anfrage empfangen wurde und vom Server noch nicht abgelehnt wurde. Der Client sollte die Anfrage fortsetzen oder die 100-Antwort verwerfen, wenn die Anfrage bereits abgeschlossen ist.

Wenn eine Anfrage einen {{HTTPHeader("Expect", "Expect: 100-continue")}} Header enthält, zeigt die 100 Continue Antwort an, dass der Server bereit oder in der Lage ist, den Anfrageinhalt zu empfangen. Das Warten auf eine 100 Continue Antwort kann hilfreich sein, wenn ein Client mit einem Fehler rechnet, zum Beispiel beim Senden von zustandsverändernden Operationen ohne vorher überprüfte Authentifizierungsdaten.

## Status

```http
100 Continue
```

## Beispiele

### PUT-Anfrage mit 100 Continue

Die folgende {{HTTPMethod("PUT")}} Anfrage sendet Informationen zu einem Datei-Upload an einen Server. Der Client gibt an, dass er mit dem Inhalt fortfahren wird, wenn er eine 100-Antwort erhält, um zu vermeiden, Daten über das Netzwerk zu senden, die zu einem Fehler wie {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}} führen könnten. Zuerst sendet der Client nur Header, einschließlich eines {{HTTPHeader("Expect", "Expect: 100-continue")}} Headers:

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
