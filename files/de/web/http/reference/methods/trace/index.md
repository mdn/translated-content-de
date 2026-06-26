---
title: TRACE request method
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Die **`TRACE`** HTTP-Methode führt einen Meldungsrückschlaufe-Test entlang des Pfads zur Zielressource durch.

Der endgültige Empfänger der Anfrage sollte die empfangene Nachricht (ohne Felder, die sensible Daten enthalten könnten) als Nachrichtenkörper einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` an den Client zurückspiegeln. Der endgültige Empfänger ist entweder der Ursprungsserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}} Wert von `0` in der Anfrage erhält.

Der Client darf im Rahmen der Anfrage keine {{Glossary("HTTP_Content", "Inhalte")}} senden oder Header erzeugen, die sensible Daten wie Benutzeranmeldedaten oder Cookies enthalten könnten. Nicht alle Server implementieren die `TRACE`-Methode, und einige Serverbesitzer haben die Verwendung der `TRACE`-Methode aus Sicherheitsgründen historisch untersagt. In solchen Fällen wird ein {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
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
      <th scope="row">In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> erlaubt</th>
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
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiche TRACE-Anfrage

Eine `TRACE`-Anfrage kann mit `curl` ausgeführt werden:

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

Eine {{HTTPStatus("200", "200 OK")}}-Antwort mit den Anforderungsheadern im Antwortkörper wird an den Client zurückgesandt:

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

Der Browser verwendet die `TRACE`-Methode nicht für benutzerinitiierte Aktionen, daher gilt "Browser-Kompatibilität" hier nicht.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
