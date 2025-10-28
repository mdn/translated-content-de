---
title: Idempotency-Key header
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
l10n:
  sourceCommit: 6aa1d0e74a78963ba77070be6313a2c59f96af91
---

Der HTTP **`Idempotency-Key`** {{Glossary("request_header", "Request-Header")}} kann verwendet werden, um {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen.

Dies ermöglicht es Clients, nicht bestätigte Anfragen erneut zu senden, ohne befürchten zu müssen, dass die Anfrage bereits vom Server empfangen und bearbeitet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
Das bedeutet, dass Sie eine Nachricht mit diesen Methoden beliebig oft senden können und der Zustand des Servers entweder nicht verändert wird oder jedes Mal auf die gleiche Weise verändert wird, wenn er die Nachricht erhält.
Zum Beispiel wird, wenn Sie dieselbe `PUT`-Nachricht mehrfach senden, dasselbe Ressource auf dem Server jedes Mal mit demselben Wert aktualisiert.

Die Methoden {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} sind nicht idempotent, was bedeutet, dass sich der Serverzustand jedes Mal ändern kann, wenn die Nachricht empfangen wird.
Im Gegensatz zu einer `PUT`-Nachricht kann es bei mehrfachem Senden derselben `POST`-Anfrage vorkommen, dass der Server für jede erfolgreiche Anfrage eine neue Ressource erstellt.
Ähnlich spiegelt ein `PATCH`-Befehl eine Änderung in Bezug auf einen bestimmten Zustand wider, und dieser Zustand wird jedes Mal geändert, wenn der Patch angewendet wird.

Idempotenz ist wichtig in Fällen, in denen ein Client keine Antwort erhält, da es bedeutet, dass der Client die Anfrage sicher erneut senden kann, ohne sich über mögliche Nebenwirkungen Sorgen machen zu müssen.

Der HTTP-Header `Idempotency-Key` erlaubt es einem Client, `POST`- und `PATCH`-Anfragen idempotent zu machen, indem er ihnen einen eindeutigen Identifikator (einen Schlüssel) zuweist.
Der Client kann dann dieselbe Anfrage mehrfach erneut senden und der Server kann erkennen, dass die Aktion nur einmal ausgeführt werden soll.

### Verantwortlichkeiten des Clients

JavaScript auf der Client-Seite sollte den `Idempotency-Key`-Header in `fetch`-Anfragen für Endpunkte einfügen, die diesen erfordern, wobei ein Schlüssel verwendet wird, der den vom Server veröffentlichten Anforderungen entspricht.

Ein eindeutiger Schlüssel muss für jede neue gesendete Anfrage verwendet werden, und derselbe Schlüssel sollte verwendet werden, wenn die Anfrage erneut gesendet wird.

### Verantwortlichkeiten des Servers

Server, die den `Idempotency-Key`-Header unterstützen, sollten ihre Unterstützung dokumentieren und veröffentlichen, einschließlich der Endpunkte, die den Header erfordern, sowie jegliche Anforderungen an den Schlüssel (wie Länge, Berechnungsmethode und Ablauf).

Beachten Sie, dass der Server entscheiden kann, empfangene Schlüssel im Laufe der Zeit auslaufen zu lassen; Das Ablaufverhalten des Schlüssels muss definiert und dokumentiert sein, damit Clients konforme Anfragen stellen können.

#### Idempotenz Fingerabdruck

Es wird erwartet, dass für jede Anfrage ein eindeutiger Schlüssel verwendet wird.

Um zu verhindern, dass Clients Schlüssel für neue Anfragen wiederverwenden, kann ein Server einen "Idempotenz Fingerabdruck" der Anfrage zusammen mit dem Schlüssel erstellen und speichern.
Dies ist ein Hash der gesamten oder eines Teils einer Anfrage, der mit anderen Anfragen mit demselben Schlüssel verglichen werden kann.

Wenn Idempotenz Fingerabdruck unterstützt wird, kann der Server eine Fehlermeldung senden, wenn dieselbe Schlüssel einen anderen Fingerabdruck hat.

#### Anfrageverarbeitung

Beim Empfang einer `POST`- oder `PATCH`-Anfrage mit einem `Idempotency-Key` an einem Endpunkt, der diesen erfordert, sollte der Server überprüfen, ob er bereits eine Anfrage mit diesem Schlüssel erhalten hat.

- Wenn er das nicht hat, sollte der Server die Operation durchführen und antworten und dann den Schlüssel speichern.
- Wenn er das hat, sollte er die Operation nicht erneut durchführen, aber so antworten, als hätte er es getan.

Server, die einen Idempotenz Fingerabdruck verwenden, würden auch einen Fingerabdruck für jede neue Anfrage generieren und speichern.
Dieser würde verwendet, um mit einem Fehler zu antworten, wenn ein nachfolgender Schlüssel und Fingerabdruck nicht übereinstimmen.

Wenn eine Anfrage ohne `Idempotency-Key` an einem Endpunkt, der diesen erfordert, empfangen wird, sollte der Server mit einem Fehler antworten.

#### Server-Fehlerantworten

Ein Server sollte in folgenden Fällen Fehlerantworten bereitstellen:

- {{HTTPStatus("400", "400 Bad Request")}}: Der Header fehlt für einen Endpunkt, der dokumentiert ist, dass er erforderlich ist.
- {{HTTPStatus("409", "409 Conflict")}}: Eine Anfrage mit demselben Schlüssel wird aktuell/noch verarbeitet.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: Der Schlüssel wird bereits für eine andere Anfragenutzlast verwendet (wenn Idempotenz Fingerabdruck unterstützt wird).

Im Fall einer `409 Conflict`-Antwort müssen Clients warten, bevor sie es erneut versuchen.
Für alle anderen Fehler müssen Clients die Anfragen ändern, bevor sie sie erneut senden.

Die Spezifikation schreibt kein Format für die Fehlerantwortnutzlast vor, aber Fehler sollten einen Link zu implementierungsspezifischer Dokumentation enthalten, die den Fehler erklärt.
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

### Ein POST mit einem Schlüssel

Die folgende Nachricht zeigt eine POST-Anfrage zur Erstellung eines neuen Benutzers.
Der Schlüssel `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` ist ein eindeutiger Wert, der den vom Host veröffentlichten Anforderungen entspricht (example.com unterstützt diesen Header nicht, daher haben wir einen Wert erfunden).

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

Wenn keine Antwort empfangen wird, kann der Client sicher genau dieselbe Anfrage erneut senden; Wenn der Server die Anfrage nicht erhalten hat, wird er darauf reagieren, wenn er die Anfrage bereits erhalten hat, wird er den Post nicht ausführen, aber er wird so antworten, als hätte er es getan.

Sendet der Client die Anfrage zu schnell erneut, könnte er eine Fehlerantwort wie diese erhalten.
Beachten Sie, dass nur der HTTP-Statuscode vorgeschrieben ist, die restlichen Informationen sind serverdefiniert.

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
