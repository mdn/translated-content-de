---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet partielle Modifikationen auf eine Ressource an.

`PATCH` ist in gewisser Weise analog zu dem "Update"-Konzept, das in {{Glossary("CRUD")}} zu finden ist (im Allgemeinen ist HTTP anders als {{Glossary("CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` einen vollständigen Ersatz der Ressource darstellt.
Eine `PUT`-Anfrage ist immer {{Glossary("idempotent")}} (mehrfache Wiederholung derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein kann.
Wenn eine Ressource beispielsweise einen sich automatisch erhöhenden Zähler enthält, überschreibt eine `PUT`-Anfrage den Zähler (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Ähnlich wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Nebenwirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er `PATCH` zur Liste in den Antwort-Headern {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/CORS)) hinzufügt.
Eine weitere implizite Anzeige, dass `PATCH` unterstützt wird, ist der Header {{HTTPHeader("Accept-Patch")}} (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage zu einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request hat Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Body</th>
      <td>Kann</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Nur, wenn Frischeinformationen enthalten sind</td>
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
PATCH <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im {{HTTPHeader("Host")}}-Header angegeben sind.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiche Änderung einer Ressource

Angenommen, es gibt eine Ressource auf dem Server, die einen Benutzer mit einer numerischen ID von `123` im folgenden Format darstellt:

```json
{
  "firstName": "Example",
  "lastName": "User",
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

Statt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, modifiziert ein `PATCH` nur spezifische Teile der Ressource.
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
Ein Erfolg kann durch einen der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Status#successful_responses) angezeigt werden.
In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da kein Body mit zusätzlichem Kontext zur Operation übertragen werden muss.
Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anfragende in Zukunft eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) ausführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – gibt die vom Server akzeptierten Patch-Dokumentformate an
