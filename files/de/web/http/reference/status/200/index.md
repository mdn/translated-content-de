---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`200 OK`** für eine [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war.
Eine `200 OK`-Antwort ist standardmäßig zwischenspeicherbar.

Eine `200 OK`-Antwort hat je nach HTTP-Anfragemethode eine unterschiedliche Bedeutung und Format.
Hier sind die Unterschiede für verschiedene Methoden:

- {{HTTPMethod("GET")}}: Eine Ressource wurde vom Server abgerufen und im Antworttext enthalten.
- {{HTTPMethod("POST")}}: Eine Aktion war erfolgreich; die Antwort enthält einen Nachrichtentext, der das Ergebnis beschreibt.
- {{HTTPMethod("HEAD")}}: Identisch mit `GET`, außer dass kein Nachrichtentext vorhanden ist.
- {{HTTPMethod("TRACE")}}: Die Antwort enthält einen Nachrichtentext mit der Anfrage, wie sie vom Server empfangen wurde.

Obwohl möglich, führen erfolgreiche {{HTTPMethod("PUT")}}- oder {{HTTPMethod("DELETE")}}-Anfragen oft nicht zu einer `200 OK`-Antwort.
Es ist häufiger, {{HTTPStatus("201", "201 Created")}} zu sehen, wenn die Ressource erstmals hochgeladen oder erstellt wird, oder {{HTTPStatus("204", "204 No Content")}} nach erfolgreichem Löschen einer Ressource.

## Status

```http
200 OK
```

## Beispiele

### Erhalt einer `200 OK`-Antwort für eine `GET`-Anfrage

In diesem Beispiel führt eine erfolgreiche `GET`-Anfrage an `https://example.com` zu einer `200 OK`-Antwort.
Die Antwort enthält Repräsentations-Header und einen Nachrichtentext mit dem HTML-Inhalt:

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

### Erhalt einer `200 OK`-Antwort für eine `POST`-Anfrage bei der Formularübermittlung

Angenommen, es gibt ein Formular, um Daten an einen Endpunkt zur Verwaltung von Abonnements an `http://example.com/subscribe` zu senden.
Eine `POST`-Anfrage, um einen Benutzer zu abonnieren, könnte wie folgt aussehen:

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

In diesem Beispiel könnte eine Antwort mit dem Status `200 OK` so aussehen:

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- Glossar: {{Glossary("Idempotent", "Idempotent")}}
