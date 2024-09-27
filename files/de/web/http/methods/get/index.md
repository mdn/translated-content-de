---
title: GET
slug: Web/HTTP/Methods/GET
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`GET`**-Methode des HTTP-Protokolls fordert eine Darstellung der angegebenen Ressource an. `GET`-Anfragen sollten nur verwendet werden, um Daten anzufordern und sollten keinen Rumpf enthalten.

> [!NOTE]
> Die Semantik zum Senden eines Nachrichtenrumpfs in `GET`-Anfragen ist undefiniert. Einige Server können die Anfrage mit einer [4XX-Clientfehler](/de/docs/Web/HTTP/Status#client_error_responses)-Antwort ablehnen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Rumpf</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Rumpf</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Zwischenspeicherbar](/de/docs/Glossary/Cacheable)</th>
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
  - : Identifiziert die Zielressource der Anfrage, kombiniert mit den Informationen, die im {{HTTPHeader("Host")}} Header bereitgestellt werden.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxy-Server (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponenten, die einem Fragezeichen `?` folgt.
    Häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen einer Ressource

Die folgende `GET`-Anfrage fordert die Ressource unter `example.com/contact` an:

```http
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet die Ressource mit einem {{HTTPStatus("200", "200 OK")}} Statuscode zurück, was auf einen Erfolg hinweist:

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
- {{HTTPHeader("Range")}} Header
- {{HTTPMethod("POST")}} Methode
