---
title: 200 OK
slug: Web/HTTP/Status/200
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`200 OK`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war. Eine `200 OK`-Antwort ist standardmäßig zwischenspeicherbar.

Eine `200 OK`-Antwort hat je nach HTTP-Anfragemethode eine unterschiedliche Bedeutung und Formatierung. So variieren sie je nach Methode:

- {{HTTPMethod("GET")}}: Eine Ressource wurde vom Server abgerufen und im Antworttext enthalten.
- {{HTTPMethod("POST")}}: Eine Aktion war erfolgreich; die Antwort enthält einen Nachrichtentext, der das Ergebnis beschreibt.
- {{HTTPMethod("HEAD")}}: Identisch zu `GET`, außer dass kein Nachrichtentext vorhanden ist.
- {{HTTPMethod("TRACE")}}: Die Antwort enthält einen Nachrichtentext, der die Anfrage so enthält, wie sie vom Server empfangen wurde.

Obwohl möglich, führen erfolgreiche {{HTTPMethod("PUT")}}- oder {{HTTPMethod("DELETE")}}-Anfragen oft nicht zu einer `200 OK`-Antwort. Es ist häufiger, {{HTTPStatus("201", "201 Created")}} zu sehen, wenn die Ressource zum ersten Mal hochgeladen oder erstellt wird, oder {{HTTPStatus("204", "204 No Content")}} bei erfolgreicher Löschung einer Ressource.

## Status

```http
200 OK
```

## Beispiele

### Erhalt einer `200 OK` für eine `GET`-Anfrage

In diesem Beispiel führt eine erfolgreiche `GET`-Anfrage an `https://example.com` zu einer `200 OK`-Antwort. Die Antwort enthält Repräsentations-Header und einen Nachrichtentext mit dem HTML-Inhalt:

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
<!-- HTML content follows here -->
```

### Erhalt einer `200 OK` für eine `POST`-Anfrage bei der Formularübermittlung

Angenommen, es existiert ein Formular, um Daten an einen Endpunkt zur Verwaltung von Abonnements unter `http://example.com/subscribe` zu senden. Eine `POST`-Anfrage, um einen Benutzer zu abonnieren, könnte folgendermaßen aussehen:

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

In diesem Beispiel könnte eine Antwort mit einem `200 OK`-Status so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "User subscription pending. A confirmation email has been sent.",
  "subscription": {
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "id": 123,
    "feed": "default"
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- Glossar: [Idempotent](/de/docs/Glossary/Idempotent)
