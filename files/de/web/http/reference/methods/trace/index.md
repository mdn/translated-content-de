---
title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`TRACE`** HTTP-Methode führt einen Nachrichten-Loopback-Test entlang des Pfads zur Zielressource durch.

Der endgültige Empfänger der Anfrage sollte die Nachricht wie empfangen (ohne Felder, die sensible Daten enthalten könnten) als Nachrichtentext einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` an den Client zurücksenden. Der endgültige Empfänger ist entweder der Ursprungsserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` in der Anfrage erhält.

Der Client darf in der Anfrage keinen {{Glossary("HTTP_Content", "Inhalt")}} senden oder Header generieren, die sensible Daten wie Benutzeranmeldeinformationen oder Cookies enthalten könnten. Nicht alle Server implementieren die `TRACE`-Methode, und einige Serverbetreiber haben aus Sicherheitsgründen historisch die Nutzung der `TRACE`-Methode verboten. In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Inhalt</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Inhalt</th>
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
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a></th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu tragen.

## Beispiele

### Erfolgreiche TRACE-Anfrage

Eine `TRACE`-Anfrage kann mit `curl` durchgeführt werden:

```bash
curl -v -X TRACE example.com
```

Dies erzeugt die folgende HTTP-Anfrage:

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Eine {{HTTPStatus("200", "200 OK")}}-Antwort mit den Anfrage-Headern im Antworttext wird an den Client zurückgesendet:

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

## Browser-Kompatibilität

Der Browser verwendet die `TRACE`-Methode nicht für benutzerinitiierte Aktionen, daher ist "Browser-Kompatibilität" hier nicht anwendbar. Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) einstellen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
