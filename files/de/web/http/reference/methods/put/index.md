---
title: PUT request method
short-title: PUT
slug: Web/HTTP/Reference/Methods/PUT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Einmaliges Aufrufen unterscheidet sich nicht vom mehrmaligen aufeinanderfolgenden Aufrufen (es gibt keine \_Neben_effekte).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponent, der einem Fragezeichen `?` folgt.
    Wird oft verwendet, um Identifikationsinformationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage fordert das Erstellen einer Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>` an:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

Wenn die Zielressource **keine** aktuelle Repräsentation hat und die `PUT`-Anfrage erfolgreich eine erstellt, muss der Ursprungsserver eine {{HTTPStatus("201", "201 Created")}}-Antwort senden:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese erfolgreich mit dem Zustand in der Anfrage modifiziert wird, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}}- oder eine {{HTTPStatus("204", "204 No Content")}}-Antwort senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für vom Benutzer initiierte Aktionen, daher ist "Browser-Kompatibilität" nicht relevant.
Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatuscodes
