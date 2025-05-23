---
title: TRACE request method
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`TRACE`** HTTP-Methode führt einen Nachrichtenschleifentest entlang des Pfades zur Zielressource durch.

Der endgültige Empfänger der Anfrage sollte die Nachricht wie empfangen (ohne Felder, die sensible Daten enthalten könnten) zurück an den Client als Nachrichtenkörper einer {{HTTPStatus("200", "200 OK")}}-Antwort mit einem {{HTTPHeader("Content-Type")}} von `message/http` spiegeln.
Der endgültige Empfänger ist entweder der Ursprungsserver oder der erste Server, der einen {{HTTPHeader("Max-Forwards")}}-Wert von `0` in der Anfrage erhält.

Der Client darf im {{Glossary("HTTP_Content", "Inhalt")}} der Anfrage keine Daten senden oder Header generieren, die sensible Daten wie Benutzeranmeldedaten oder Cookies enthalten könnten.
Nicht alle Server implementieren die `TRACE`-Methode, und einige Serverbesitzer haben aus Sicherheitsgründen historisch die Verwendung der `TRACE`-Methode untersagt.
In solchen Fällen wird eine {{HTTPStatus("405", "405 Method Not Allowed")}} [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Körper</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponenten, der von einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu transportieren.

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

Eine {{HTTPStatus("200", "200 OK")}}-Antwort mit den Anfrage-Headern im Antwortkörper wird an den Client zurückgesendet:

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

Der Browser nutzt die `TRACE`-Methode nicht für benutzerinitiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anforderungsmethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
