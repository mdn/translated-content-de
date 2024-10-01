---
title: GET
slug: Web/HTTP/Methods/GET
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`GET`** HTTP-Methode fordert eine Darstellung der angegebenen Ressource an. Anfragen mit `GET` sollten nur verwendet werden, um Daten anzufordern und dürfen keinen Body enthalten.

> [!NOTE]
> Die Semantik des Sendens eines Nachrichten-Bodys in `GET`-Anfragen ist undefiniert.
> Einige Server könnten die Anfrage mit einer [4XX-Client-Fehlermeldung](/de/docs/Web/HTTP/Status#client_error_responses) ablehnen.

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
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erlaubt in HTML-Formularen</th>
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
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiches Abrufen einer Ressource

Die folgende `GET`-Anfrage fordert die Ressource unter `example.com/contact` an:

```http
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet die Ressource mit einem {{HTTPStatus("200", "200 OK")}} Statuscode zurück, was auf Erfolg hinweist:

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
