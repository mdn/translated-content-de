---
title: PATCH request method
short-title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet teilweise Änderungen an einer Ressource an.

`PATCH` ist in gewisser Weise analog zum "Update"-Konzept, das im {{Glossary("CRUD", "CRUD")}} vorkommt (im Allgemeinen ist HTTP anders als {{Glossary("CRUD", "CRUD")}} und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` einen vollständigen Ersatz der Ressource darstellt.
Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (das wiederholte Senden derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand verbleibt), während eine `PATCH`-Anfrage nicht immer idempotent ist.
Beispielsweise, wenn eine Ressource einen automatisch inkrementierenden Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Ähnlich wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Nebeneffekte auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er es zur Liste in den Antwort-Headern {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/Guides/CORS)) hinzufügt.
Ein weiteres implizites Anzeichen dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}}-Header (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage für eine Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage enthält einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort enthält einen Body</th>
      <td>Kann sein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
      <td>Nur wenn Frische-Informationen enthalten sind</td>
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
PATCH <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Modifizieren einer Ressource

Angenommen, es gibt eine Ressource auf dem Server, die einen Benutzer mit einer numerischen ID von `123` im folgenden Format darstellt:

```json
{
  "firstName": "Example",
  "LastName": "User",
  "userId": 123,
  "signupDate": "2024-09-09T21:48:58Z",
  "status": "active",
  "registeredDevice": {
    "id": 1,
    "name": "personal",
    "manufacturer": {
      "name": "Hardware corp"
    }
  }
}
```

Anstatt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, modifiziert ein `PATCH` nur spezifische Teile der Ressource.
Diese Anfrage aktualisiert das `status`-Feld:

```http
PATCH /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 27
Authorization: Bearer ABC123

{
  "status": "suspended"
}
```

Die Interpretation und Authentifizierung der `PATCH`-Anfrage hängen von der Implementierung ab.
Erfolg kann durch jeden der [erfolgreichen Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status#successful_responses) angezeigt werden.
In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichem Kontext zur Operation zu übertragen.
Ein {{HTTPHeader("ETag")}} wird bereitgestellt, sodass der Anforderer eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) in Zukunft durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für vom Benutzer initiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anforderungsmethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) setzen.

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – spezifiziert die vom Server akzeptierten Patch-Dokumentformate
- [JSON Patch Generator](https://jsoning.com/jsonpatch/)
