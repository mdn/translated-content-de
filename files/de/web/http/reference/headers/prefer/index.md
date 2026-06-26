---
title: Prefer header
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`Prefer`**-Header ermöglicht es Clients, Präferenzen für bestimmte Server-Verhaltensweisen während der Anforderungsverarbeitung anzugeben.

> [!NOTE]
> Browser haben keine Handhabung für die Header `Prefer` und {{HTTPHeader("Preference-Applied")}}: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl Client als auch Server diesen Header unterstützen, bevor Sie sich in der Produktion darauf verlassen.
>
> Server sollten Präferenzen, die sie nicht unterstützen, stillschweigend ignorieren, als wäre der Header nicht vorhanden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Prefer: <preference>, <preference>, ...
```

## Direktiven

- `respond-async`
  - : Der Client bevorzugt eine asynchrone Verarbeitung.
    Zum Beispiel könnte der Server mit einer {{httpstatus("202", "202 Accepted")}} Antwort antworten, die angibt, dass die Anfrage akzeptiert wurde, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client verwenden kann, um den Status der Verarbeitung zu überwachen.
- `return=minimal`
  - : Fordert, dass der Server minimalen Inhalt zurückgibt (eine Antwort nur mit Headern).
- `return=representation`
  - : Fordert eine vollständige Ressourcenrepräsentation in der Antwort an.
- `wait=<seconds>`
  - : Die Zeitspanne, innerhalb der der Client eine Antwort vom Server erwartet, ab dem Zeitpunkt, zu dem die Anfrage empfangen wurde.
    Wenn die `respond-async`-Präferenz ebenfalls angegeben ist, sollte der Server asynchron antworten, wenn die Verarbeitung der Anfrage die Wartezeit überschreiten wird.
    Andernfalls sollte der Server davon ausgehen, dass der Client nach Ablauf der `wait`-Zeit ein Timeout erhält (das Antwortverhalten hängt von der Serverimplementierung ab).
- `handling=lenient`
  - : Der Client wünscht, dass der Server eine nachsichtige Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht, dass der Server eine strenge Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können eigene Präferenzen definieren, um spezifische Bedürfnisse zu erfüllen.
    Zum Beispiel `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Anforderung einer minimalen Antwort

Die folgende Anfrage fordert eine minimale Antwort an.
Dies ist typischerweise eine Antwort nur mit Headern (im Gegensatz zu `return=representation`, bei der eine Repräsentation im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit einem {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL mit dem Ort der neu erstellten Ressource.
Es ist nicht notwendig, einen `Preference-Applied`-Header einzuschließen, da das Fehlen eines Antwortkörpers sofort erkennbar ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Anforderung asynchroner Verarbeitung

In diesem Beispiel wird der Server gebeten, eine asynchrone Verarbeitungsaufgabe zu starten:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einer {{httpstatus("202", "202 Accepted")}}-Antwort, die anzeigt, dass die Anfrage akzeptiert wurde und die asynchrone Verarbeitung noch nicht abgeschlossen ist.
Ein `Location`-Header zeigt auf einen Statusmonitor, der den Stand der Verarbeitung darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Bereitstellung mehrerer Präferenzen

Die folgende Anfrage enthält zwei Präferenzen; `timezone=Jupiter/Red_Spot`, welche eine Zeitzonenpräferenz für den Client angibt, und `handling=strict` für strikte Validierung:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In dieser Implementierung wird ein ungültiger Zeitzonenwert einen Fehler auslösen:

```http
HTTP/1.1 400 Bad Request
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Preference-Applied")}}
- [Prefer-Header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer-Header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
