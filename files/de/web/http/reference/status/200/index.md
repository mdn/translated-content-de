---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`200 OK`** zeigt an, dass eine Anfrage erfolgreich war. Eine `200 OK`-Antwort ist standardmäßig cachefähig.

Eine `200 OK`-Antwort hat je nach HTTP-Anfragemethode eine unterschiedliche Bedeutung und Format. Hier ist, wie sie sich bei verschiedenen Methoden unterscheidet:

- {{HTTPMethod("GET")}}: Eine Ressource wurde vom Server abgerufen und im Antwortkörper enthalten.
- {{HTTPMethod("POST")}}: Eine Aktion war erfolgreich; die Antwort enthält einen Nachrichtentext, der das Ergebnis beschreibt.
- {{HTTPMethod("HEAD")}}: Identisch mit `GET`, außer dass es keinen Nachrichtentext gibt.
- {{HTTPMethod("TRACE")}}: Die Antwort enthält einen Nachrichtentext, der die vom Server empfangene Anfrage enthält.

Obwohl es möglich ist, führen erfolgreiche {{HTTPMethod("PUT")}}- oder {{HTTPMethod("DELETE")}}-Anfragen oft nicht zu einer `200 OK`-Antwort. Wahrscheinlicher ist es, dass Sie {{HTTPStatus("201", "201 Created")}} sehen, wenn die Ressource zum ersten Mal hochgeladen oder erstellt wird, oder {{HTTPStatus("204", "204 No Content")}}, wenn eine Ressource erfolgreich gelöscht wurde.

## Status

```http
200 OK
```

## Beispiele

### Erhalt eines `200 OK` für eine `GET`-Anfrage

In diesem Beispiel liefert eine erfolgreiche `GET`-Anfrage an `https://example.com` eine `200 OK`-Antwort. Die Antwort enthält Repräsentations-Header und einen Nachrichtentext mit dem HTML-Inhalt:

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

### Erhalt eines `200 OK` für eine `POST`-Anfrage bei der Formularübermittlung

Angenommen, ein Formular existiert, um Daten an einen Endpunkt zur Verwaltung von Abonnements bei `http://example.com/subscribe` zu senden. Eine `POST`-Anfrage, um einen Benutzer zu abonnieren, könnte wie folgt aussehen:

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- Glossar: {{Glossary("Idempotent", "Idempotent")}}
