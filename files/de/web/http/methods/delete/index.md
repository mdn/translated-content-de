---
title: DELETE
slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`DELETE`** HTTP-Methode fordert den Server auf, eine spezifizierte Ressource zu löschen.

Die `DELETE`-Methode hat keine definierten Semantiken für den Nachrichtentext, daher sollte dieser leer sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Textkörper</th>
      <td>Darf</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Textkörper</th>
      <td>Darf</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
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
  - : Identifiziert das Ziel der Anfrage, wenn es mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Origin-Server und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponent, der einem Fragezeichen `?` vorangestellt ist.
    Häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übertragen.

## Beispiele

### Erfolgreiches Löschen einer Ressource

Die folgende Anfrage fordert den Server dazu auf, die Ressource `file.html` zu löschen:

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

Wenn die Anfrage erfolgreich ist, gibt es mehrere mögliche [erfolgreiche Antwortstatus-Codes](/de/docs/Web/HTTP/Status#successful_responses).
Eine {{HTTPStatus("204", "204 No Content")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und keine zusätzlichen Informationen an den Client zurückgesendet werden müssen:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

Eine {{HTTPStatus("200", "200 OK")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und der Antwortkörper eine Darstellung des Ergebnisses enthält:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html>
  <body>
    <h1>File "file.html" deleted.</h1>
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
    <h1>Deletion of "file.html" accepted.</h1>
    <p>See <a href="http://example.com/tasks/123/status">the status monitor</a> for details.</p>
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
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
