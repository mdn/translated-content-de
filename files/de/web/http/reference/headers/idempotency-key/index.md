---
title: Idempotency-Key header
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{SeeCompatTable}}{{non-standard_header}}

Der HTTP **`Idempotency-Key`** {{Glossary("request_header", "Anforderungsheader")}} kann verwendet werden, um {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen.

Dies ermöglicht es Clients, nicht bestätigte Anfragen erneut zu senden, ohne sich Sorgen machen zu müssen, dass die Anfrage bereits vom Server empfangen und bearbeitet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Idempotency-Key: <key>
```

## Direktiven

- `<key>`
  - : Der eindeutige Schlüssel für eine bestimmte Anfrage.
    Das Format wird vom Server festgelegt.

## Beschreibung

Die HTTP-Methoden {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}} und {{HTTPMethod("OPTIONS")}} sind idempotent.
Das bedeutet, dass Sie eine Nachricht mit diesen Methoden beliebig oft senden können und der Zustand des Servers entweder nicht verändert wird oder jedes Mal auf die gleiche Weise verändert wird, wenn er die Nachricht erhält.
Zum Beispiel, wenn Sie dieselbe `PUT`-Nachricht mehrmals senden, wird jedes Mal dieselbe Ressource auf dem Server mit demselben Wert aktualisiert.

Die Methoden {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} sind nicht idempotent, was bedeutet, dass sich der Serverzustand jedes Mal ändern kann, wenn die Nachricht empfangen wird.
Im Gegensatz zu einer `PUT`-Nachricht kann der Server bei mehrfachen `POST`-Anfragen für jede erfolgreiche Anfrage eine neue Ressource erstellen.
Ebenso spiegelt ein `PATCH` eine Änderung in einem bestimmten Zustand wider, und dieser Zustand wird jedes Mal geändert, wenn der Patch angewendet wird.

Idempotenz ist wichtig in Fällen, in denen ein Client keine Antwort erhält, da es bedeutet, dass der Client die Anfrage sicher erneut senden kann, ohne sich über mögliche Nebeneffekte Sorgen machen zu müssen.

Der HTTP-Header `Idempotency-Key` ermöglicht es einem Client, `POST`- und `PATCH`-Anfragen idempotent zu machen, indem er ihnen eine eindeutige Kennung (einen Schlüssel) zuweist.
Der Client kann dann dieselbe Anfrage mehrfach senden, und der Server kann erkennen, dass die Aktion nur einmal ausgeführt werden soll.

### Verantwortlichkeiten des Clients

Client-JavaScript sollte den `Idempotency-Key`-Header in Fetch-Anfragen für Endpunkte anhängen, die ihn benötigen, mit einem Schlüssel, der den veröffentlichten Anforderungen des Servers entspricht.

Für jede neue Anfrage, die gesendet wird, muss ein eindeutiger Schlüssel verwendet werden, und derselbe Schlüssel sollte verwendet werden, wenn diese Anfrage erneut gesendet wird.

### Verantwortlichkeiten des Servers

Server, die den `Idempotency-Key`-Header unterstützen, sollten ihre Unterstützung dokumentieren und veröffentlichen, einschließlich der Endpunkte, die den Header benötigen, und aller Anforderungen an den Schlüssel (wie Länge, Berechnungsmethode und Ablauf).

Beachten Sie, dass der Server empfangene Schlüssel möglicherweise nach einer gewissen Zeit ablaufen lassen kann; das Verhalten des Key-Ablaufs muss definiert und dokumentiert werden, damit Clients konforme Anfragen senden können.

#### Idempotenz-Überprüfung

Es wird erwartet, dass für jede Anfrage ein eindeutiger Schlüssel verwendet wird.

Um zu verhindern, dass Clients Schlüssel für neue Anfragen wiederverwenden, kann ein Server einen "Idempotenz-Fingerabdruck" der Anfrage erstellen und mit dem Schlüssel speichern.
Dies ist ein Hash von Teilen einer Anfrage, der mit anderen Anfragen mit demselben Schlüssel verglichen werden kann.

Wenn Idempotenz-Überprüfung unterstützt wird, kann der Server eine Fehlermeldung senden, wenn derselbe Schlüssel einen anderen Fingerabdruck aufweist.

#### Anfragenbearbeitung

Beim Empfang einer `POST`- oder `PATCH`-Anfrage mit einem `Idempotency-Key` auf einem Endpunkt, der ihn erfordert, sollte der Server prüfen, ob er bereits eine Anfrage mit diesem Schlüssel erhalten hat.

- Falls nicht, sollte der Server die Operation durchführen und antworten und dann den Schlüssel speichern.
- Falls ja, sollte die Operation nicht erneut ausgeführt werden, sondern es sollte so geantwortet werden, als ob sie ausgeführt worden wäre.

Server, die eine Idempotenz-Überprüfung verwenden, würden auch einen Fingerabdruck für jede neue Anfrage generieren und speichern.
Dies würde verwendet, um mit einem Fehler zu antworten, wenn ein nachfolgender Schlüssel und Fingerabdruck nicht übereinstimmen.

Wenn eine Anfrage ohne einen `Idempotency-Key` auf einem Endpunkt empfangen wird, der diesen erfordert, sollte der Server mit einem Fehler antworten.

#### Server-Fehlerantworten

Ein Server sollte in folgenden Fällen Fehlerantworten bereitstellen:

- {{HTTPStatus("400", "400 Bad Request")}}: Der Header wird für einen Endpunkt weggelassen, der ihn dokumentiert erfordert.
- {{HTTPStatus("409", "409 Conflict")}}: Eine Anfrage mit demselben Schlüssel wird aktuell/noch verarbeitet.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: Der Schlüssel wird bereits für einen anderen Anforderungspayload verwendet (falls Idempotenz-Überprüfung unterstützt wird).

Im Fall einer `409 Conflict`-Antwort müssen Clients warten, bevor sie es erneut versuchen.
Für alle anderen Fehler müssen Clients die Anfragen ändern, bevor sie sie erneut senden.

Die Spezifikation verlangt kein bestimmtes Format für den Fehlerantwort-Payload, aber Fehler sollten einen Link zu implementierungsspezifischen Dokumentationen enthalten, die den Fehler erklären.
Das JSON-Payload-Format, das in {{rfc(9457, "Problem Details for HTTP APIs")}} beschrieben wird, ist eine Option.
Zum Beispiel könnte die folgende Antwort für einen fehlenden Schlüssel verwendet werden:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json
Content-Language: en

{
    "type": "https://developer.example.com/idempotency/docs",
    "title": "Idempotency-Key is missing",
    "detail": "This operation is idempotent and requires correct usage of Idempotency Key.",
}
```

## Beispiele

### Eine `POST`-Anfrage mit einem Schlüssel

Die folgende Nachricht zeigt eine `POST`-Anfrage zur Erstellung eines neuen Nutzers.
Der Schlüssel `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` ist ein einzigartiger Wert, der den Anforderungen des Hosts entspricht (example.com unterstützt diesen Header nicht, also haben wir einfach einen Wert erfunden).

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Idempotency-Key: 9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d

{
  "user_id": "12345",
  "name": "Sharma Chow",
  "email": "sharmac@example.com"
}
```

Wenn keine Antwort empfangen wird, kann der Client die exakt gleiche Anfrage sicher erneut senden. Falls der Server die vorherige Anfrage nicht erhalten hat, wird er diese Aktion durchführen; falls er die vorherige Anfrage bereits erhalten hat, wird die zweite ignoriert, aber der Server wird so antworten, als ob die zweite wie üblich verarbeitet worden wäre.

Wenn der Client die Anfrage zu schnell erneut sendet, könnte er eine Fehlerantwort wie diese erhalten.
Beachten Sie, dass nur der HTTP-Statuscode vorgeschrieben ist, der Rest der Informationen wird vom Server definiert.

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
Content-Language: en

{
    "type": "https://example.com/idempotency/docs",
    "title": "Server processing previous request.",
    "detail": "A request with the same key is currently/still being processed.",
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
