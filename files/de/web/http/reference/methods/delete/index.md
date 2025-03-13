---
title: DELETE
slug: Web/HTTP/Reference/Methods/DELETE
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`DELETE`** HTTP-Methode fordert den Server auf, eine angegebene Ressource zu löschen.

Die `DELETE`-Methode hat keine definierten Semantiken für den Nachrichtenkörper, daher sollte dieser leer sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Körper</th>
      <td>Kann sein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Körper</th>
      <td>Kann sein</td>
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
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header angegebenen Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Löschen einer Ressource

Die folgende Anfrage fordert den Server auf, die Ressource `file.html` zu löschen:

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

Wenn die Anfrage erfolgreich ist, gibt es mehrere mögliche [erfolgreiche Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status#successful_responses).
Eine {{HTTPStatus("204", "204 No Content")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und keine zusätzlichen Informationen an den Client zurückgesendet werden müssen:

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

Eine {{HTTPStatus("200", "200 OK")}}-Antwort bedeutet, dass die Anfrage erfolgreich war und der Antwortkörper eine Darstellung enthält, die das Ergebnis beschreibt:

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

Eine {{HTTPStatus("202", "202 Accepted")}}-Antwort bedeutet, dass die Anfrage akzeptiert wurde und wahrscheinlich erfolgreich sein wird, aber die Ressource noch nicht vom Server gelöscht wurde.

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

Der Browser verwendet die `DELETE`-Methode nicht für benutzerinitiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- HTTP-Status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
