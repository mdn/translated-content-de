---
title: LÖSCHEN
slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`DELETE`** HTTP-Methode fordert den Server auf, eine angegebene Ressource zu löschen.

Die `DELETE`-Methode hat keine definierte Semantik für den Nachrichtenkörper, daher sollte dieser leer sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Kann</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Kann</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
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
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn/Forms">HTML-Formularen</a>
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
DELETE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den Informationen im {{HTTPHeader("Host")}}-Header.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungserver und eine absolute URL in Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponent, der einem Fragezeichen `?` folgt.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Löschen einer Ressource

Die folgende Anfrage fordert den Server auf, die Ressource `file.html` zu löschen:

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

Wenn die Anfrage erfolgreich ist, gibt es mehrere mögliche [erfolgreiche Antwortstatuscodes](/de/docs/Web/HTTP/Status#successful_responses).
Eine {{HTTPStatus("204", "204 No Content")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und keine zusätzlichen Informationen an den Client zurückgesendet werden müssen:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

Eine {{HTTPStatus("200", "200 OK")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und der Antwortkörper eine Darstellung beschreibt, die das Ergebnis darstellt:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html>
  <body>
    <h1>Datei "file.html" gelöscht.</h1>
  </body>
</html>
```

Eine {{HTTPStatus("202", "202 Accepted")}}-Antwort bedeutet, dass die Anfrage angenommen wurde und wahrscheinlich erfolgreich sein wird, aber die Ressource wurde noch nicht vom Server gelöscht.

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<html>
  <body>
    <h1>Löschen von "file.html" angenommen.</h1>
    <p>Sehen Sie den <a href="http://example.com/tasks/123/status">Statusmonitor</a> für Details.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
