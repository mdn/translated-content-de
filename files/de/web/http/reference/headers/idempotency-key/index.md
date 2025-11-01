---
title: Idempotency-Key header
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
l10n:
  sourceCommit: 2da6c8a65715a0ce3785e88d8e293c8dc786cb49
---

{{SeeCompatTable}}

Der HTTP-**`Idempotency-Key`**-{{Glossary("request_header", "Anforderungsheader")}} kann verwendet werden, um {{HTTPMethod("POST")}}- und {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} zu machen.

Dies ermöglicht es Clients, nicht bestätigte Anfragen erneut zu senden, ohne befürchten zu müssen, dass die Anfrage bereits vom Server empfangen und bearbeitet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
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
    Das Format wird vom Server definiert.

## Beschreibung

Die HTTP-Methoden {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}} und {{HTTPMethod("OPTIONS")}} sind idempotent.
Das bedeutet, dass Sie eine Nachricht mit diesen Methoden beliebig oft senden können und der Zustand des Servers entweder nicht geändert wird oder bei jedem Empfang der Nachricht auf die gleiche Weise geändert wird.
Zum Beispiel wird bei mehrmaligem Senden derselben `PUT`-Nachricht dasselbe Resource beim Server jedes Mal mit demselben Wert aktualisiert.

Die Methoden {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} sind nicht idempotent, was bedeutet, dass sich der Serverzustand jedes Mal ändern kann, wenn die Nachricht empfangen wird.
Anders als bei einer `PUT`-Nachricht kann der Server bei mehreren gleichen `POST`-Anfragen jedes Mal eine neue Resource erstellen, wenn sie erfolgreich sind.
Ähnlich beschreibt ein `PATCH` eine Änderung in Bezug auf einen bestimmten Zustand, und dieser Zustand wird jedes Mal geändert, wenn der Patch angewendet wird.

Idempotenz ist wichtig in Fällen, in denen ein Client keine Antwort erhält, weil es bedeutet, dass der Client die Anfrage sicher erneut senden kann, ohne sich um mögliche Nebeneffekte sorgen zu müssen.

Der HTTP-`Idempotency-Key`-Header ermöglicht es einem Client, `POST`- und `PATCH`-Anfragen idempotent zu machen, indem er ihnen eine eindeutige Kennung (einen Schlüssel) gibt.
Der Client kann dann dieselbe Anfrage mehrmals senden, und der Server kann erkennen, dass die Aktion nur einmal ausgeführt werden sollte.

### Verantwortlichkeiten des Clients

Client-JavaScript sollte den `Idempotency-Key`-Header bei `fetch`-Anfragen für Endpunkte, die ihn erfordern, mit einem Schlüssel, der den vom Server veröffentlichten Anforderungen entspricht, anhängen.

Für jede neue Anfrage, die gesendet wird, muss ein einzigartiger Schlüssel verwendet werden, und derselbe Schlüssel sollte verwendet werden, wenn diese Anfrage erneut gesendet wird.

### Verantwortlichkeiten des Servers

Server, die den `Idempotency-Key`-Header unterstützen, sollten ihre Unterstützung dokumentieren und veröffentlichen, einschließlich der Endpunkte, die den Header erfordern, und jeglicher Anforderungen an den Schlüssel (wie Länge, Berechnungsmethode und Ablauf).

Beachten Sie, dass der Server empfangene Schlüssel nach einiger Zeit ablaufen lassen kann; das Verhalten des Schlüsselablaufs muss definiert und dokumentiert werden, damit Clients konforme Anfragen stellen können.

#### Idempotenz-Fingerabdruck

Es wird erwartet, dass in jeder Anfrage ein eindeutiger Schlüssel verwendet wird.

Um zu verhindern, dass Clients Schlüssel für neue Anfragen wiederverwenden, kann ein Server einen „Idempotenz-Fingerabdruck“ der Anfrage erstellen und zusammen mit dem Schlüssel speichern.
Dies ist ein Hash der gesamten oder eines Teils der Anfrage, der mit anderen Anfragen mit demselben Schlüssel verglichen werden kann.

Wenn die Unterstützung von Idempotenz-Fingerabdrücken möglich ist, kann der Server eine Fehlermeldung senden, wenn derselbe Schlüssel einen anderen Fingerabdruck aufweist.

#### Anfragen verarbeiten

Beim Empfang einer `POST`- oder `PATCH`-Anfrage mit einem `Idempotency-Key` an einem Endpunkt, der diesen erfordert, sollte der Server prüfen, ob er bereits eine Anfrage mit diesem Schlüssel erhalten hat.

- Wenn nicht, sollte der Server die Operation ausführen und antworten und dann den Schlüssel speichern.
- Wenn ja, sollte er die Operation nicht ausführen, sondern so antworten, als hätte er es getan.

Server, die einen Idempotenz-Fingerabdruck verwenden, würden auch einen Fingerabdruck für jede neue Anfrage erzeugen und speichern.
Dies würde genutzt, um bei einem nachfolgenden Schlüssel- und Fingerabdruck-Mismatch mit einem Fehler zu antworten.

Wenn eine Anfrage ohne `Idempotency-Key` an einem Endpunkt empfangen wird, der diesen erfordert, sollte der Server mit einem Fehler antworten.

#### Server-Fehlermeldungen

Ein Server sollte in den folgenden Fällen Fehlermeldungen bereitstellen:

- {{HTTPStatus("400", "400 Bad Request")}}: Der Header fehlt an einem Endpunkt, der dokumentiert ist, dass er ihn erfordert.
- {{HTTPStatus("409", "409 Conflict")}}: Eine Anfrage mit demselben Schlüssel wird derzeit/noch verarbeitet.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: Der Schlüssel wird bereits für eine andere Anfragenutzlast verwendet (falls Idempotenz-Fingerabdruck unterstützt wird).

Im Falle einer `409 Conflict`-Antwort müssen Clients warten, bevor sie es erneut versuchen.
Für alle anderen Fehler müssen Clients die Anfragen anpassen, bevor sie sie erneut senden.

Die Spezifikation schreibt kein Format für die Fehlermeldungsnutzlast vor, aber Fehler sollten einen Link zu Implementierungsspezifikationen enthalten, die den Fehler erläutern.
Das JSON-Nutzlastformat, wie in {{rfc(9457, "Problem Details for HTTP APIs")}} umschrieben, ist eine Option.
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

Die folgende Nachricht zeigt eine `POST`-Anfrage zur Erstellung eines neuen Benutzers.
Der Schlüssel `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` ist ein einzigartiger Wert, der den Anforderungen entspricht, die vom Host veröffentlicht wurden (example.com unterstützt diesen Header nicht, daher haben wir einfach einen Wert erfunden).

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

Wenn keine Antwort empfangen wird, kann der Client die exakt gleiche Anfrage sicher erneut senden. Wenn der Server die vorherige Anfrage nicht erhalten hat, wird er auf diese reagieren; wenn er die vorherige Anfrage bereits erhalten hat, wird die zweite ignoriert, aber der Server wird so reagieren, als hätte er die zweite wie gewohnt verarbeitet.

Wenn der Client die Anfrage zu schnell erneut sendet, könnte er eine Fehlermeldung wie diese erhalten.
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
