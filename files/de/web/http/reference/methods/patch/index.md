---
title: PATCH request method
short-title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Die **`PATCH`** HTTP-Methode wendet teilweise Änderungen an einer Ressource an.

`PATCH` ist etwas analog zum Konzept der "Aktualisierung", das im {{Glossary("CRUD", "CRUD")}} vorkommt (allgemein ist HTTP anders als {{Glossary("CRUD", "CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` einen vollständigen Ersatz der Ressource darstellt. Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (mehrmaliges Wiederholen der gleichen Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein muss. Wenn beispielsweise eine Ressource einen automatisch inkrementierenden Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Ähnlich wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Nebenwirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er es der Liste in den {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/Guides/CORS)) Antwort-Headern hinzufügt. Ein weiteres implizites Anzeichen dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}} Header (in der Regel nach einer {{HTTPMethod("OPTIONS")}}-Anfrage zu einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
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
PATCH <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert das Ziel der Anfrage in Kombination mit den Informationen im {{HTTPHeader("Host")}}-Header. Dies ist ein absoluter Pfad (z.B., `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiche Änderung einer Ressource

Angenommen, es gibt eine Ressource auf dem Server, die einen Benutzer mit einer numerischen ID von `123` in folgendem Format darstellt:

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

Anstatt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, ändert ein `PATCH` nur bestimmte Teile der Ressource. Diese Anfrage aktualisiert das Feld `status`:

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

Die Interpretation und Authentifizierung der `PATCH`-Anfrage hängen von der Implementierung ab. Der Erfolg kann durch jeden der [erfolgreichen Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status#successful_responses) angezeigt werden. In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichen Kontextinformationen zur Operation zu übermitteln. Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anfragesteller eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) in der Zukunft durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für vom Benutzer initiierte Aktionen, daher ist "Browser-Kompatibilität" nicht anwendbar. Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – spezifiziert die vom Server akzeptierten Patch-Dokumentformate
- [JSON Patch Generator](https://jsoning.com/jsonpatch/)
