---
title: GET
slug: Web/HTTP/Methods/GET
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`GET`** HTTP-Methode fordert eine Repräsentation der angegebenen Ressource an.
Anfragen, die `GET` verwenden, sollten nur dazu verwendet werden, Daten anzufordern, und sollten keinen Hauptteil enthalten.

> [!NOTE]
> Die Semantik des Sendens eines Nachrichtentextes in `GET`-Anfragen ist undefiniert.
> Einige Server könnten die Anfrage mit einer [4XX-Clientfehler](/de/docs/Web/HTTP/Status#client_error_responses) Antwort ablehnen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Allowed in HTML forms</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
GET <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorausgeht.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiches Abrufen einer Ressource

Die folgende `GET`-Anfrage fragt die Ressource bei `example.com/contact` an:

```http
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet die Ressource mit einem {{HTTPStatus("200", "200 OK")}} Statuscode zurück, was den Erfolg anzeigt:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Content-Length: 1234

<!doctype html>
<!-- HTML content follows -->
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}-Header
- {{HTTPMethod("POST")}}-Methode
