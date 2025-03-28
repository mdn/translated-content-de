---
title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: 48e5f930bc2ac2d73650905ce0ee2cd36d6270ba
---

{{HTTPSidebar}}

Der HTTP-Header **`Prefer`** ermöglicht es Clients, Präferenzen für bestimmte Serververhalten während der Anfragenverarbeitung anzugeben.

> [!NOTE]
> Browser haben keine Behandlung für die Header `Prefer` und {{HTTPHeader("Preference-Applied")}}: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl der Client als auch der Server diesen Header unterstützen, bevor Sie sich im Produktionsbetrieb darauf verlassen.
>
> Server sollten Präferenzen, die sie nicht unterstützen, stillschweigend ignorieren, als ob der Header nicht vorhanden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}}
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
    Zum Beispiel könnte der Server mit einer {{httpstatus("202", "202 (Accepted)")}}-Antwort antworten, die anzeigt, dass die Anfrage akzeptiert wurde, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client zur Überwachung des Verarbeitungsstatus verwenden kann.
- `return=minimal`
  - : Fordert, dass der Server minimalen Inhalt zurückgibt (eine Antwort nur mit Headern).
- `return=representation`
  - : Fordert eine vollständige Ressourcen-Repräsentation in der Antwort an.
- `wait=<seconds>`
  - : Die Zeit, innerhalb der der Client erwartet, dass der Server eine Antwort gibt, ab dem Zeitpunkt, an dem die Anfrage empfangen wurde.
    Wenn die Präferenz `respond-async` ebenfalls angegeben ist, sollte der Server asynchron antworten, wenn die Verarbeitung der Anfrage die Wartezeit überschreiten wird.
    Andernfalls sollte der Server davon ausgehen, dass der Client nach der `wait`-Zeit ein Timeout erreicht (das Antwortverhalten hängt von der Serverimplementierung ab).
- `handling=lenient`
  - : Der Client wünscht, dass der Server eine flexible Validierung und Fehlerbehandlung während der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht, dass der Server eine strikte Validierung und Fehlerbehandlung während der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können eigene Präferenzen definieren, um spezifische Bedürfnisse zu erfüllen.
    Zum Beispiel `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Anforderung einer minimalen Antwort

Die folgende Anfrage fordert eine minimale Antwort an.
Dies ist typischerweise eine Antwort nur mit Headern (im Gegensatz zu `return=representation`, bei dem eine Repräsentation im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit einem {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL mit dem Ort der neu erstellten Ressource.
Es ist nicht notwendig, einen `Preference-Applied`-Header einzuschließen, da das Fehlen eines Antwortkörpers offensichtlich ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Anfordern einer asynchronen Verarbeitung

Dieses Beispiel fordert den Server auf, eine asynchrone Verarbeitungsaufgabe zu starten:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einer {{httpstatus("202", "202 (Accepted)")}}-Antwort, die anzeigt, dass die Anfrage akzeptiert wurde und noch nicht beendet ist.
Ein `Location`-Header verweist auf einen Statusmonitor, der den Verarbeitungsstatus darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Angabe mehrerer Präferenzen

Die folgende Anfrage enthält zwei Präferenzen; `timezone=Jupiter/Red_Spot`, die eine Zeitzonenpräferenz für den Client angibt, und `handling=strict` für strikte Validierung:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In dieser Implementierung wird ein ungültiger Zeitzonenwert einen Fehler verursachen:

```http
HTTP/1.1 400 Bad Request
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Preference-Applied")}}
- [Prefer header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
