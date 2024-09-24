---
title: TRACE
slug: Web/HTTP/Methods/TRACE
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`TRACE`** HTTP-Methode führt einen Nachrichtenschleifentest entlang des Pfades zur Zielressource durch.

Der endgültige Empfänger der Anfrage sollte die Nachricht so, wie sie empfangen wurde (ausschließlich etwaiger Felder, die sensible Daten enthalten könnten), als Nachrichtenkörper einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` an den Client zurücksenden.
Der endgültige Empfänger ist entweder der Ursprungsserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` in der Anfrage erhält.

Der Client darf im Antrag keinen {{Glossary("HTTP Content", "content")}} senden oder Header generieren, die sensible Daten wie Benutzeranmeldedaten oder Cookies enthalten könnten.
Nicht alle Server implementieren die `TRACE`-Methode, und einige Serverbesitzer haben historisch die Verwendung der `TRACE`-Methode aus Sicherheitsgründen untersagt.
In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gesendet.

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
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">In <a href="/de/docs/Learn/Forms">HTML-Formularen</a> erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu tragen.

## Beispiele

### Erfolgreiche TRACE-Anfrage

Eine `TRACE`-Anfrage kann mit `curl` durchgeführt werden:

```bash
curl -v -X TRACE example.com
```

Dies führt zu der folgenden HTTP-Anfrage:

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Eine {{HTTPStatus("200", "200 OK")}}-Antwort mit den Anforderungs-Headern im Antwortkörper wird an den Client zurückgesendet:

```http
HTTP/1.1 200 OK
Content-Length: 123
Date: Wed, 04 Sep 2024 11:50:24 GMT
Server: Apache/2.4.59 (Unix)
Content-Type: message/http

TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
