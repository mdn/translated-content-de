---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet partielle Modifikationen auf eine Ressource an.

`PATCH` ist in gewisser Weise analog zum „Update“-Konzept, das bei {{Glossary("CRUD", "CRUD")}} zu finden ist (im Allgemeinen unterscheidet sich HTTP von {{Glossary("CRUD", "CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als Satz von Anweisungen zur Änderung einer Ressource, während `PUT` eine vollständige Ersetzung der Ressource darstellt.
Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (wiederholtes Senden derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein muss.
Wenn beispielsweise eine Ressource einen auto-increment- Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Wie bei {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Auswirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er es der Liste in den Antwort-Headern {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/CORS)) hinzufügt.
Ein weiteres implizites Indiz dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}}-Header (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage zu einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

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
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen im {{HTTPHeader("Host")}}-Header.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprung-Server und eine absolute URL in Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Ändern einer Ressource

Angenommen, es gibt eine Ressource auf dem Server, die einen Benutzer mit einer numerischen ID von `123` im folgenden Format repräsentiert:

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

Anstatt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, modifiziert `PATCH` nur spezifische Teile der Ressource.
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

Die Auslegung und Authentifizierung der `PATCH`-Anfrage hängen von der Implementierung ab.
Erfolg kann durch jeden der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Status#successful_responses) angezeigt werden.
In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichem Kontext über die Operation zu übertragen.
Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anforderer in Zukunft eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für benutzerinitiierte Aktionen, daher gilt „Browser-Kompatibilität“ nicht.
Entwickler können diese Anfragemethode mit [`fetch()`](/de/docs/Web/API/Window/fetch) einstellen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – gibt die Patch-Dokumentformate an, die vom Server akzeptiert werden
