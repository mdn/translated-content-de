---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: c212cfca9809021001637344831487029f1b8887
---

Der HTTP-Statuscode **`204 No Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) gibt an, dass eine Anfrage erfolgreich war, aber der Client nicht von seiner aktuellen Seite weg navigieren muss.
Eine `204`-Antwort ist standardmäßig zwischenspeicherbar, und ein {{HTTPHeader("ETag")}}-Header wird in solchen Fällen eingeschlossen.

Eine `204 No Content`-Antwort auf diese Anfragemethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich, und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der {{HTTPHeader("ETag")}}-Wert enthält das Entitätstag für die neue Darstellung dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn "speichern und bearbeiten" Funktionalität für Anwendungen wie Wiki-Seiten implementiert wird. In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um die Seiteninhalte zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch anderen Inhalt ersetzt werden sollte.

Beachten Sie, dass die Antwort keinen Inhalt oder den {{HTTPHeader("Content-Length")}}-Header enthalten darf (Browser können Antworten ablehnen, die Inhalt enthalten).

## Status

```http
204 No Content
```

## Beispiele

### Empfang einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage, um ein Bild mit der `DELETE`-Methode zu löschen. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nach erfolgreichem Löschen des Bildes antwortet der Server mit einer `204`-Antwort ohne Inhalt, die angibt, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

### Empfang einer Antwort nach Aktualisierung mit PUT

In diesem Beispiel sendet der Client eine `PUT`-Anfrage, um die Profildaten eines Benutzers zu aktualisieren. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
PUT /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer 1234abcd

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

Nach erfolgreicher Aktualisierung des Benutzerprofils antwortet der Server mit einer `204`-Antwort. Der {{HTTPHeader("ETag")}}-Header enthält das Entitätstag für die aktualisierte Ressource:

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
