---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Die **`PATCH`** HTTP-Methode wendet partielle Änderungen an einer Ressource an.

`PATCH` ist in gewisser Weise analog zum "Update"-Konzept, das in {{Glossary("CRUD", "CRUD")}} gefunden wird (im Allgemeinen ist HTTP anders als {{Glossary("CRUD", "CRUD")}}, und die beiden sollten nicht verwechselt werden).

Im Vergleich mit {{HTTPMethod("PUT")}} dient ein `PATCH` als Anweisungsset zur Modifizierung einer Ressource, während `PUT` einen kompletten Ersatz der Ressource darstellt.
Eine `PUT`-Anfrage ist immer {{Glossary("idempotent", "idempotent")}} (das wiederholte Senden derselben Anfrage führt dazu, dass die Ressource im gleichen Zustand bleibt), während eine `PATCH`-Anfrage nicht immer idempotent sein muss.
Zum Beispiel, wenn eine Ressource einen auto-inkrementierenden Zähler enthält, wird eine `PUT`-Anfrage den Zähler überschreiben (da sie die gesamte Ressource ersetzt), eine `PATCH`-Anfrage jedoch möglicherweise nicht.

Wie {{HTTPMethod("POST")}} kann eine `PATCH`-Anfrage potenziell Nebenwirkungen auf andere Ressourcen haben.

Ein Server kann die Unterstützung für `PATCH` durch Hinzufügen zu der Liste in den {{HTTPHeader("Allow")}}- oder {{HTTPHeader("Access-Control-Allow-Methods")}}-Antwortheadern (für [CORS](/de/docs/Web/HTTP/CORS)) anzeigen.
Ein weiteres implizites Indiz dafür, dass `PATCH` unterstützt wird, ist der {{HTTPHeader("Accept-Patch")}}-Header (normalerweise nach einer {{HTTPMethod("OPTIONS")}}-Anfrage an eine Ressource), der die Medientypen auflistet, die der Server in einer `PATCH`-Anfrage für eine Ressource verstehen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Inhalt</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Inhalt</th>
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
      <th scope="row">{{Glossary("Cacheable", "Zwischenspeicherbar")}}</th>
      <td>Nur, wenn Frischeinformationen enthalten sind</td>
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
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die von einem Fragezeichen `?` eingeleitet wird.
    Oft verwendet, um Identifikationsinformationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### Erfolgreiche Modifikation einer Ressource

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

Anstatt ein JSON-Objekt zu senden, um eine Ressource vollständig zu überschreiben, ändert ein `PATCH` nur bestimmte Teile der Ressource.
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
Der Erfolg kann durch einen der [erfolgreichen Antwortstatuscodes](/de/docs/Web/HTTP/Status#successful_responses) angezeigt werden.
In diesem Beispiel wird ein {{HTTPStatus("204", "204 No Content")}} verwendet, da es nicht notwendig ist, einen Body mit zusätzlichem Kontext zur Operation zu übermitteln.
Ein {{HTTPHeader("ETag")}} wird bereitgestellt, damit der Anrufer eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) in der Zukunft vornehmen kann:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Der Browser verwendet die `PATCH`-Methode nicht für benutzerinitiierte Aktionen, daher gilt "Browser-Kompatibilität" nicht.
Entwickler können diese Anfragemethode mithilfe von [`fetch()`](/de/docs/Web/API/Window/fetch) festlegen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} Header
- {{HTTPHeader("Accept-Patch")}} – spezifiziert die vom Server akzeptierten Dokumentformate für Patches
