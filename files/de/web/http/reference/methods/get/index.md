---
title: GET
slug: Web/HTTP/Reference/Methods/GET
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`GET`** HTTP-Methode fordert eine Darstellung der angegebenen Ressource an.
Anfragen, die `GET` verwenden, sollten nur zur Anforderung von Daten verwendet werden und dürfen keinen Body enthalten.

> [!NOTE]
> Die Semantik des Sendens eines Nachrichtenkörpers in `GET`-Anfragen ist nicht definiert.
> Einige Server können die Anfrage mit einer [4XX-Client-Fehler](/de/docs/Web/HTTP/Reference/Status#client_error_responses)-Antwort ablehnen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
GET <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Origin-Server und eine absolute URL bei Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen einer Ressource

Die folgende `GET`-Anfrage fordert die Ressource unter `example.com/contact` an:

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}} Header
- {{HTTPMethod("POST")}} Methode
