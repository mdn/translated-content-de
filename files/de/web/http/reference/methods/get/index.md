---
title: GET request method
short-title: GET
slug: Web/HTTP/Reference/Methods/GET
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`GET`** HTTP-Methode fordert eine Repräsentation der angegebenen Ressource an. Anfragen mit `GET` sollten nur zur Anforderung von Daten verwendet werden und sollten keinen Body enthalten.

> [!NOTE]
> Die Semantik des Sendens eines Nachrichteninhalts in `GET`-Anfragen ist undefiniert.
> Einige Server könnten die Anfrage mit einer [4XX-Client-Fehlermeldung](/de/docs/Web/HTTP/Reference/Status#client_error_responses) ablehnen.

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
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Häufig wird sie verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}}-Header
- {{HTTPMethod("POST")}}-Methode
