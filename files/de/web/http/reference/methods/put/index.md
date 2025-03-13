---
title: PUT
slug: Web/HTTP/Reference/Methods/PUT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Darstellung der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Es macht keinen Unterschied, ob es einmal oder mehrmals hintereinander aufgerufen wird (es gibt keine zusätzlichen Effekte).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Eventuell</td>
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
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> erlaubt
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
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage versucht, eine Ressource bei `example.com/new.html` mit dem Inhalt `<p>New File</p>` zu erstellen:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

Wenn die Zielressource **keine** aktuelle Darstellung hat und die `PUT`-Anfrage erfolgreich eine erstellt, muss der Ursprungsserver eine {{HTTPStatus("201", "201 Created")}}-Antwort senden:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

Wenn die Zielressource **eine** aktuelle Darstellung hat und diese Darstellung erfolgreich mit dem Zustand in der Anfrage modifiziert wird, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für vom Benutzer initiierte Aktionen, daher gilt die "Browser-Kompatibilität" nicht.
Entwickler können diese Anforderungsmethode mithilfe von [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatus
