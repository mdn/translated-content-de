---
title: Prefer header
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-Header **`Prefer`** ermöglicht es Clients, Präferenzen für bestimmte Serververhaltensweisen während der Anforderungsverarbeitung anzugeben.

> [!NOTE]
> Browser haben keine Verarbeitung für die Header `Prefer` und {{HTTPHeader("Preference-Applied")}}: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl der Client als auch der Server diesen Header unterstützen, bevor Sie sich in der Produktion darauf verlassen.
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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Prefer: <preference>
```

## Direktiven

- `respond-async`
  - : Der Client bevorzugt asynchrone Verarbeitung.
    Zum Beispiel könnte der Server mit einer {{httpstatus("202", "202 Accepted")}}-Antwort antworten, die angibt, dass die Anfrage akzeptiert wurde, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client verwenden kann, um den Status der Verarbeitung zu überwachen.
- `return=minimal`
  - : Fordert, dass der Server minimalen Inhalt zurückgibt (eine Antwort, die nur Header enthält).
- `return=representation`
  - : Fordert eine vollständige Repräsentation der Ressource in der Antwort an.
- `wait=<seconds>`
  - : Die Zeit, innerhalb derer der Client erwartet, dass der Server eine Antwort liefert, ab dem Zeitpunkt, zu dem die Anfrage empfangen wurde.
    Wenn die Präferenz `respond-async` ebenfalls angegeben ist, sollte der Server asynchron antworten, wenn die Bearbeitung der Anfrage die Wartezeit überschreitet.
    Ansonsten sollte der Server davon ausgehen, dass der Client nach der `wait`-Zeit ein Timeout erlebt (das Antwortverhalten hängt von der Serverimplementierung ab).
- `handling=lenient`
  - : Der Client wünscht, dass der Server eine nachsichtige Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht, dass der Server eine strenge Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können ihre eigenen Präferenzen definieren, um spezifische Bedürfnisse zu erfüllen.
    Zum Beispiel, `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Anfordern einer minimalen Antwort

Die folgende Anfrage fordert eine minimale Antwort an.
Dies ist typischerweise eine Antwort, die nur Header enthält (im Gegensatz zu `return=representation`, bei dem eine Repräsentation im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit einem {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL mit dem Ort der neu erstellten Ressource.
Es gibt keine Notwendigkeit, einen `Preference-Applied`-Header einzuschließen, da das Fehlen eines Antwortkörpers augenfällig ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Anfordern einer asynchronen Verarbeitung

Dieses Beispiel fordert den Server auf, mit einer asynchronen Verarbeitung zu beginnen:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einem {{httpstatus("202", "202 Accepted")}}, der anzeigt, dass die Anfrage akzeptiert wurde und noch nicht abgeschlossen asynchron ausgeführt wird.
Ein `Location`-Header verweist auf einen Statusmonitor, der den Zustand der Verarbeitung darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Bereitstellen mehrerer Präferenzen

Die folgende Anfrage enthält zwei Präferenzen: `timezone=Jupiter/Red_Spot`, die eine Zeitzonenpräferenz für den Client angibt, und `handling=strict` für strenge Validierung:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In dieser Implementierung wird eine ungültige Zeitzone einen Fehler auslösen:

```http
HTTP/1.1 400 Bad Request
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Preference-Applied")}}
- [Prefer header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
