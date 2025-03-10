---
title: PUT
slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: ein einziger Aufruf hat den gleichen Effekt wie mehrere aufeinanderfolgende Aufrufe (es gibt keine _Neben_ effekte).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Inhalt</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Inhalt</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
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
  - : Identifiziert die Zielressource der Anforderung in Kombination mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage fordert an, eine Ressource bei `example.com/new.html` mit dem Inhalt `<p>New File</p>` zu erstellen:

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

Falls die Zielressource **keine** aktuelle Repräsentation hat und die `PUT`-Anfrage erfolgreich eine erstellt, muss der Ursprungsserver eine {{HTTPStatus("201", "201 Created")}} Antwort senden:

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese erfolgreich mit dem Zustand der Anfrage modifiziert wird, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PUT`-Methode nicht für benutzerinitiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatuscodes
