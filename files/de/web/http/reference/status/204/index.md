---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`204 No Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war, aber der Client nicht von seiner aktuellen Seite weg navigieren muss. Eine `204`-Antwort ist standardmäßig zwischenspeicherbar, und in solchen Fällen ist ein {{HTTPHeader("ETag")}}-Header enthalten.

Eine `204 No Content`-Antwort auf diese Anfragemethoden hat die folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich, und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der Wert von {{HTTPHeader("ETag")}} enthält das Entitätstag für die neue Darstellung dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn Sie eine "Speichern und weiter bearbeiten"-Funktionalität für Anwendungen wie Wikiseiten implementieren. In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um die Seiteninhalte zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch andere Inhalte ersetzt werden sollte.

Beachten Sie, dass die Antwort keinen Inhalt oder den {{HTTPHeader("Content-Length")}}-Header enthalten darf (Browser können Antworten ablehnen, die Inhalte enthalten).

## Status

```http
204 No Content
```

## Beispiele

### Erhalt einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage, um ein Bild mit der `DELETE`-Methode zu löschen. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

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
