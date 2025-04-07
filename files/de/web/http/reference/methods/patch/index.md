---
title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: 4157a8e9baf0e43bbc34ee1faea8ebb7e4d422dd
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet teilweise Änderungen auf eine Ressource an.

`PATCH` ist in gewisser Weise analog zum "Update"-Konzept, das in {{Glossary("CRUD", "CRUD")}} zu finden ist (im Allgemeinen unterscheidet sich HTTP von {{Glossary("CRUD", "CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` einen vollständigen Ersatz der Ressource darstellt. Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (das wiederholte Ausführen derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent ist. Wenn eine Ressource beispielsweise einen autoinkrementierenden Zähler enthält, überschreibt eine `PUT`-Anfrage den Zähler (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Auswirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` ankündigen, indem er es der Liste in den Antwort-Headern {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/Guides/CORS)) hinzufügt. Ein weiteres implizites Zeichen dafür, dass `PATCH` unterstützt wird, ist der Header {{HTTPHeader("Accept-Patch")}} (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage an eine Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

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
      <th scope="row">{{Glossary("idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist. Häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiche Änderung einer Ressource

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

Anstatt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, ändert ein `PATCH` nur bestimmte Teile der Ressource. Diese Anfrage aktualisiert das `status`-Feld:

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

Die Interpretation und Authentifizierung der `PATCH`-Anfrage hängen von der Implementierung ab. Der Erfolg kann durch einen der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status#successful_responses) angezeigt werden. In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichem Kontext zur Operation zu übermitteln. Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anrufer in Zukunft eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für vom Benutzer initiierte Aktionen, daher trifft "Browser-Kompatibilität" nicht zu. Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – gibt die vom Server akzeptierten Patch-Dokumentformate an
- [JSON Patch Generator](https://jsoning.com/jsonpatch/)
