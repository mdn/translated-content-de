---
title: TRACE request method
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Die HTTP-Methode **`TRACE`** führt entlang des Pfads zur Zielressource einen Message-Loopback-Test durch.

Der endgültige Empfänger der Anfrage sollte die empfangene Nachricht (mit Ausnahme aller Felder, die möglicherweise sensible Daten enthalten) als Nachrichtentext einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` an den Client zurückspiegeln.
Der endgültige Empfänger ist entweder der Origin-Server oder der erste Server, der in der Anfrage einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` empfängt.

Der Client darf in der Anfrage keinen {{Glossary("HTTP_Content", "Inhalt")}} senden und keine Header erzeugen, die möglicherweise sensible Daten wie Benutzeranmeldedaten oder Cookies enthalten.
Nicht alle Server implementieren die Methode `TRACE`, und einige Serverbetreiber haben die Verwendung der Methode `TRACE` in der Vergangenheit aufgrund von Sicherheitsbedenken untersagt.
In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}}-[Clientfehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im Header {{HTTPHeader("Host")}} bereitgestellt werden.
    Bei Anfragen an einen Origin-Server ist dies ein absoluter Pfad (z. B. `/path/to/file.html`), bei Anfragen an Proxys eine absolute URL (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übertragen.

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

Eine {{HTTPStatus("200", "200 OK")}}-Antwort, deren Antwort-Body die Anfrage-Header enthält, wird an den Client zurückgesendet:

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

Der Browser verwendet die Methode `TRACE` nicht für von Benutzern initiierte Aktionen, daher ist „Browser-Kompatibilität“ nicht anwendbar.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://community.owasp.org/attacks/Cross_Site_Tracing)
