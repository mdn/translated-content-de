---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet partielle Änderungen auf eine Ressource an.

`PATCH` ist in gewissem Maße mit dem "Update"-Konzept in [CRUD](/de/docs/Glossary/CRUD) vergleichbar (im Allgemeinen ist HTTP anders als [CRUD](/de/docs/Glossary/CRUD) und beide sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient ein `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` einen vollständigen Ersatz der Ressource darstellt.
Eine `PUT`-Anfrage ist immer [idempotent](/de/docs/Glossary/idempotent) (das wiederholte Senden derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein muss.
Wenn eine Ressource beispielsweise einen sich automatisch erhöhenden Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Ähnlich wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Auswirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er es zur Liste in den {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/CORS)) Antwortheadern hinzufügt.
Ein weiteres implizites Zeichen dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}} Header (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage zu einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Könnte</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn/Forms">HTML-Formularen</a> erlaubt
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
  - : Identifiziert die Zielressource der Anfrage in Verbindung mit den Informationen, die im {{HTTPHeader("Host")}} Header bereitgestellt werden.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeleitet wird.
    Wird oft verwendet, um identifizierende Informationen in der Form von `key=value` Paaren zu übermitteln.

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
Erfolg kann durch einen beliebigen der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Status#successful_responses) angezeigt werden.
In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Körper mit zusätzlichen Informationen zur Operation zu übermitteln.
Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anrufer eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) in der Zukunft durchführen kann:

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
- {{HTTPHeader("Accept-Patch")}} – gibt die Patch-Dokumentformate an, die vom Server akzeptiert werden
