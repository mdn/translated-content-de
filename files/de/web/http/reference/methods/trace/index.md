---
title: TRACE request method
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: 4e34d3aa06ec299bf7f680d588fa92e462f031a4
---

{{HTTPSidebar}}

Die **`TRACE`** HTTP-Methode führt einen Nachrichtenrückkopplungstest entlang des Pfads zur Zielressource durch.

Der endgültige Empfänger der Anforderung sollte die Nachricht so reflektieren, wie sie erhalten wurde (mit Ausnahme von Feldern, die sensible Daten enthalten könnten), und zwar als Nachrichtenkörper einer {{HTTPStatus("200", "200 OK")}} Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http`.
Der endgültige Empfänger ist entweder der Ursprungsserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` in der Anforderung erhält.

Der Client darf keine {{Glossary("HTTP_Content", "Inhalte")}} in der Anforderung senden oder Header generieren, die sensible Daten wie Benutzeranmeldedaten oder Cookies enthalten könnten.
Nicht alle Server implementieren die `TRACE`-Methode, und einige Serverbetreiber haben die Verwendung der `TRACE`-Methode aus Sicherheitsbedenken historisch verweigert.
In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
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
  - : Identifiziert die Zielressource der Anforderung, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anforderungen an einen Ursprungsserver und eine absolute URL bei Anforderungen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die einem Fragezeichen `?` folgt.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiche TRACE-Anforderung

Eine `TRACE`-Anforderung kann mit `curl` durchgeführt werden:

```bash
curl -v -X TRACE example.com
```

Dies erzeugt die folgende HTTP-Anforderung:

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Eine {{HTTPStatus("200", "200 OK")}} Antwort mit den Anforderungsheadern im Antwortkörper wird an den Client zurückgesendet:

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

Der Browser verwendet die `TRACE`-Methode nicht für benutzergesteuerte Aktionen, daher gilt "Browser-Kompatibilität" nicht.

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
