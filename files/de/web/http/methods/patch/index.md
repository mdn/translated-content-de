---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet teilweise Modifikationen auf eine Ressource an.

`PATCH` ist in gewisser Weise analog zum "Update"-Konzept, das im [CRUD](/de/docs/Glossary/CRUD) verwendet wird (im Allgemeinen ist HTTP anders als [CRUD](/de/docs/Glossary/CRUD) und die beiden sollten nicht verwechselt werden).

Im Vergleich zu {{HTTPMethod("PUT")}} dient `PATCH` als eine Reihe von Anweisungen zur Änderung einer Ressource, während `PUT` eine vollständige Ersetzung der Ressource darstellt. Ein `PUT`-Anfrage ist immer [idempotent](/de/docs/Glossary/idempotent) (mehrmaliges Wiederholen derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent ist. Wenn eine Ressource beispielsweise einen Autoinkrement-Zähler enthält, überschreibt eine `PUT`-Anfrage den Zähler (da sie die gesamte Ressource ersetzt), aber eine `PATCH`-Anfrage möglicherweise nicht.

Ähnlich wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Nebenwirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` anzeigen, indem er es zur Liste in den Antwort-Headers {{HTTPHeader("Allow")}} oder {{HTTPHeader("Access-Control-Allow-Methods")}} (für [CORS](/de/docs/Web/HTTP/CORS)) hinzufügt. Ein weiteres implizites Anzeichen dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}}-Header (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage auf einer Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Inhalt</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Inhalt</th>
      <td>Kann</td>
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
      <th scope="row">[Zwischenspeicherbar](/de/docs/Glossary/Cacheable)</th>
      <td>Nur wenn Informationen zur Frische enthalten sind</td>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragebestandteil, der durch ein Fragezeichen `?` eingeleitet wird. Wird häufig verwendet, um Identifikationsinformationen in Form von `key=value` Paaren zu übermitteln.

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

Die Interpretation und Authentifizierung der `PATCH`-Anfrage hängen von der Implementierung ab. Erfolg kann durch einen der [erfolgreichen Antwort-Statuscodes](/de/docs/Web/HTTP/Status#successful_responses) angezeigt werden. In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht erforderlich ist, einen Inhalt mit zusätzlichem Kontext über die Operation zu übertragen. Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anrufer in Zukunft eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) durchführen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Headers](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}-Headers
- {{HTTPHeader("Accept-Patch")}} – gibt die Patch-Dokumentformate an, die vom Server akzeptiert werden
