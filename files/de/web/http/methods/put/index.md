---
title: PUT
slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-[Inhalt](/de/docs/Glossary/HTTP_Content).

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` [idempotent](/de/docs/Glossary/idempotent) ist: Ein einmaliger Aufruf unterscheidet sich nicht von mehrmaligen aufeinanderfolgenden Aufrufen (es gibt keine _Nebeneffekte_).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Kann</td>
    </tr>
    <tr>
      <th scope="row">[Safe](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
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
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um Identifizierungsinformationen in Form von `key=value`-Paaren zu übertragen.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage fordert das Erstellen einer Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>`:

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

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese Repräsentation erfolgreich mit dem Zustand in der Anfrage modifiziert wird, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatus
