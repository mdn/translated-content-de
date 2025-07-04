---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`204 No Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war, aber der Client nicht von seiner aktuellen Seite weg navigieren muss.
Eine `204`-Antwort ist standardmäßig zwischenspeicherbar, und ein {{HTTPHeader("ETag")}}-Header wird in solchen Fällen hinzugefügt.

Eine `204 No Content`-Antwort auf diese Anforderungsmethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich und der {{HTTPHeader("ETag")}}-Wert enthält das Entity-Tag für die neue Repräsentation dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn eine "Speichern und weiterbearbeiten"-Funktionalität für Anwendungen wie Wiki-Seiten implementiert wird.
In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um den Seiteninhalt zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch anderen Inhalt ersetzt werden sollte.

Beachten Sie, dass die Antwort keinen Inhalt oder den {{HTTPHeader("Content-Length")}}-Header enthalten darf (Browser können Antworten ablehnen, die Inhalt enthalten).

## Status

```http
204 No Content
```

## Beispiele

### Empfang einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage, um ein Bild mithilfe der `DELETE`-Methode zu löschen.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nach dem erfolgreichen Löschen des Bildes antwortet der Server mit einer `204`-Antwort ohne Inhalt, was anzeigt, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
