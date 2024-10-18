---
title: 100 Continue
slug: Web/HTTP/Status/100
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`100 Continue`** [informational response](/de/docs/Web/HTTP/Status#informational_responses) zeigt an, dass der erste Teil einer Anfrage empfangen wurde und noch nicht vom Server abgelehnt wurde.
Der Client sollte mit der Anfrage fortfahren oder die 100-Antwort verwerfen, wenn die Anfrage bereits abgeschlossen ist.

Wenn eine Anfrage einen {{HTTPHeader("Expect", "Expect: 100-continue")}} Header hat, zeigt die 100 Continue-Antwort an, dass der Server bereit oder in der Lage ist, den Anfrageinhalt zu empfangen.
Das Warten auf eine 100 Continue-Antwort kann hilfreich sein, wenn ein Client erwartet, dass ein Fehler wahrscheinlich ist, zum Beispiel beim Senden von zustandsverändernden Operationen ohne zuvor verifizierte Authentifizierungsdaten.

## Status

```http
100 Continue
```

## Beispiele

### PUT-Anfrage mit 100 Continue

Die folgende {{HTTPMethod("PUT")}} Anfrage sendet Informationen zu einem Datei-Upload an einen Server.
Der Client gibt an, dass er mit dem Inhalt fortfahren wird, wenn er eine 100-Antwort erhält, um zu vermeiden, Daten über das Netzwerk zu senden, die zu einem Fehler wie {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}} führen könnten.
Zunächst sendet der Client nur Header, einschließlich eines {{HTTPHeader("Expect", "Expect: 100-continue")}} Headers:

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
