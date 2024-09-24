---
title: PUT
slug: Web/HTTP/Methods/PUT
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`PUT`** HTTP-Methode erstellt eine neue Ressource oder ersetzt eine Repräsentation der Zielressource mit dem Anforderungs-{{Glossary("HTTP Content", "Inhalt")}}.

Der Unterschied zwischen `PUT` und {{HTTPMethod("POST")}} besteht darin, dass `PUT` {{Glossary("idempotent")}} ist: Ein einmaliger Aufruf ist nicht anders, als es mehrmals hintereinander aufzurufen (es gibt keine _Nebenwirkungen_).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Körper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Könnte</td>
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
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anforderungen an einen Ursprungsserver und eine absolute URL bei Anforderungen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um Identifikationsinformationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiches Erstellen einer Ressource

Die folgende `PUT`-Anfrage versucht, eine Ressource unter `example.com/new.html` mit dem Inhalt `<p>New File</p>` zu erstellen:

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

Wenn die Zielressource **eine** aktuelle Repräsentation hat und diese Repräsentation mit dem Zustand in der Anforderung erfolgreich modifiziert wird, muss der Ursprungsserver entweder eine {{HTTPStatus("200", "200 OK")}} oder eine {{HTTPStatus("204", "204 No Content")}} senden, um den erfolgreichen Abschluss der Anfrage anzuzeigen:

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
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} Antwortstatuscodes
