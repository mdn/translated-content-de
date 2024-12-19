---
title: PUT
slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} ist, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: es macht keinen Unterschied, ob man die Methode einmal oder mehrmals hintereinander aufruft (es gibt keine _Nebeneffekte_).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Inhalt</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Inhalt</th>
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
      <th scope="row">{{Glossary("Cacheable", "Zwischenspeicherbar")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im {{HTTPHeader("Host")}}-Header bereitgestellt werden.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungs-Server und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu transportieren.

## Beispiele

### Eine Ressource erfolgreich erstellen

Die folgende `PUT`-Anfrage verlangt das Erstellen einer Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>`:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

Falls die Zielressource **keine** aktuelle Repräsentation hat und die `PUT`-Anfrage erfolgreich eine erstellt, muss der Ursprungs-Server eine {{HTTPStatus("201", "201 Created")}} Antwort senden:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

Falls die Zielressource **eine** aktuelle Repräsentation hat und diese erfolgreich mit dem Zustand der Anfrage modifiziert wird, muss der Ursprungs-Server entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für durch den Benutzer initiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anforderungsmethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatuscodes
