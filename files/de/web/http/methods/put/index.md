---
title: PUT
slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: ein einzelner Aufruf unterscheidet sich nicht von mehreren aufeinanderfolgenden Aufrufen (es gibt keine _Nebeneffekte_).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat Inhalt</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
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
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anforderung in Kombination mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxyserver (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die einem Fragezeichen `?` folgt.
    Wird oft verwendet, um Identifizierungsinformationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage soll eine Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>` erstellen:

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

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese erfolgreich mit dem in der Anfrage angegebenen Zustand modifiziert wurde, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} zur Anzeige des erfolgreichen Abschlusses der Anfrage senden:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für von Nutzern initiierte Aktionen, daher ist "Browser-Kompatibilität" nicht anwendbar.
Entwickler können diese Anforderungsmethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatus
