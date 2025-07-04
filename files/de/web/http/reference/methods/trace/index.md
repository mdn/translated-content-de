---
title: TRACE request method
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`TRACE`** HTTP-Methode führt einen Nachrichtenrückschlaufe-Test entlang des Pfades zur Zielressource aus.

Der endgültige Empfänger der Anfrage sollte die empfangene Nachricht (ohne Felder, die sensible Daten enthalten könnten) als Nachrichtentext einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` an den Client zurückgeben. Der endgültige Empfänger ist entweder der Ursprungserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` in der Anfrage erhält.

Der Client darf keinen {{Glossary("HTTP_Content", "Inhalt")}} in der Anfrage senden oder Header generieren, die sensible Daten wie Benutzeranmeldeinformationen oder Cookies enthalten könnten. Nicht alle Server implementieren die `TRACE`-Methode und einige Serverbetreiber haben historisch die Verwendung der `TRACE`-Methode aufgrund von Sicherheitsbedenken verboten. In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Textkörper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Textkörper</th>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im {{HTTPHeader("Host")}}-Header bereitgestellt werden.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungserver und eine absolute URL bei Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeführt wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übertragen.

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

Eine {{HTTPStatus("200", "200 OK")}}-Antwort mit den Anfrage-Headern, die im Antworttext enthalten sind, wird zurück an den Client gesendet:

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

Der Browser verwendet die `TRACE`-Methode nicht für vom Benutzer initiierte Aktionen, daher ist "Browser-Kompatibilität" nicht zutreffend.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
