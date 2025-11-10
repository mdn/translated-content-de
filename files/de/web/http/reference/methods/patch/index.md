---
title: PATCH request method
short-title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-Methode **`PATCH`** wendet teilweise Modifikationen auf eine Ressource an.

`PATCH` ist in gewisser Weise analog zum Konzept der "Aktualisierung", das im {{Glossary("CRUD", "CRUD")}} zu finden ist (im Allgemeinen ist HTTP anders als {{Glossary("CRUD", "CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Modifizierung einer Ressource, während `PUT` eine vollständige Ersetzung der Ressource darstellt. Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (das Wiederholen derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand verbleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein muss. Wenn z. B. eine Ressource einen Autoincrement-Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Seiteneffekte auf andere Ressourcen haben.

Ein Server kann Unterstützung für `PATCH` anzeigen, indem er es in die Liste der {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/Guides/CORS)) Antwort-Header aufnimmt. Ein weiteres implizites Anzeichen dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}}-Header (gewöhnlich nach einer {{HTTPMethod("OPTIONS")}}-Anfrage zu einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

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
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprung-Server und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponente, der durch ein Fragezeichen `?` eingeleitet wird. Häufig verwendet, um Identifikationsinformationen in Form von `key=value`-Paaren zu übertragen.

## Beispiele

### Erfolgreiche Modifikation einer Ressource

Angenommen, auf dem Server gibt es eine Ressource, die einen Benutzer mit einer numerischen ID von `123` im folgenden Format darstellt:

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

Die Interpretation und Authentifizierung der `PATCH`-Anfrage hängt von der Implementierung ab. Der Erfolg kann durch jeden der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status#successful_responses) angezeigt werden. In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichen Kontextinformationen über die Operation zu übermitteln. Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anrufer eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) in Zukunft durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für vom Benutzer initiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht. Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) einstellen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – gibt die Patch-Dokumentformate an, die vom Server akzeptiert werden
- [JSON Patch Generator](https://jsoning.com/jsonpatch/)
