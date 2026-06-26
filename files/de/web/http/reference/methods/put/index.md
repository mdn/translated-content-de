---
title: PUT request method
short-title: PUT
slug: Web/HTTP/Reference/Methods/PUT
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Die **`PUT`**-HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} ist, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Ein einzelner Aufruf unterscheidet sich nicht von mehreren aufeinanderfolgenden Aufrufen (es gibt keine _seitlichen_ Effekte).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung enthält einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort enthält einen Body</th>
      <td>Kann</td>
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
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anforderung, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anforderungen an einen Ursprungsserver und eine absolute URL bei Anforderungen an Proxy-Server (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anforderung bittet darum, eine Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>` zu erstellen:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

Wenn die Zielressource **keine** aktuelle Repräsentation hat und die `PUT`-Anforderung erfolgreich eine erstellt, muss der Ursprungsserver eine {{HTTPStatus("201", "201 Created")}}-Antwort senden:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese Repräsentation erfolgreich mit dem Zustand in der Anforderung modifiziert wird, muss der Ursprungsserver entweder einen {{HTTPStatus("200", "200 OK")}} oder einen {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anforderung anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für benutzerinitiierte Aktionen, daher trifft "Browser-Kompatibilität" nicht zu. Entwickler können diese Anforderungsmethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatuscodes
