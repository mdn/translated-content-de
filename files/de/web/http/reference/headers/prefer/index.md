---
title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{HTTPSidebar}}

Der HTTP-Header **`Prefer`** ermöglicht es Clients, Präferenzen für spezifische Serververhalten während der Anfragenverarbeitung anzugeben.

> [!NOTE]
> Browser unterstützen die Header `Prefer` und {{HTTPHeader("Preference-Applied")}} nicht: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl Client als auch Server diesen Header unterstützen, bevor Sie sich in einer Produktionsumgebung darauf verlassen.
>
> Server sollten Präferenzen, die sie nicht unterstützen, stillschweigend ignorieren, als ob der Header nicht vorhanden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
    Beispielsweise könnte der Server mit einer {{httpstatus("202", "202 Accepted")}}-Antwort reagieren, die angibt, dass die Anfrage akzeptiert wurde, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client verwenden kann, um den Stand der Verarbeitung zu überwachen.
- `return=minimal`
  - : Fordert an, dass der Server minimalen Inhalt zurückgibt (eine Antwort nur mit Headern).
- `return=representation`
  - : Fordert eine komplette Ressourcendarstellung in der Antwort an.
- `wait=<seconds>`
  - : Die Zeit, innerhalb derer der Client erwartet, dass der Server eine Antwort bereitstellt, ab dem Zeitpunkt, an dem die Anfrage empfangen wurde.
    Wenn die `respond-async`-Präferenz ebenfalls angegeben ist, sollte der Server asynchron antworten, wenn die Verarbeitung der Anfrage die Wartezeit überschreiten wird.
    Andernfalls sollte der Server davon ausgehen, dass der Client nach der `wait`-Zeit ein Timeout hat (das Antwortverhalten hängt von der Implementierung des Servers ab).
- `handling=lenient`
  - : Der Client wünscht, dass der Server eine nachsichtige Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht, dass der Server eine strikte Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können eigene Präferenzen definieren, um spezifische Bedürfnisse zu erfüllen.
    Zum Beispiel: `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Anforderung einer minimalen Antwort

Die folgende Anfrage fordert eine minimale Antwort an.
Dies ist typischerweise eine Antwort nur mit Headern (im Gegensatz zu `return=representation`, wobei eine Darstellung im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL mit dem Speicherort der neu erstellten Ressource.
Es ist nicht erforderlich, einen `Preference-Applied`-Header einzuschließen, da das Fehlen eines Antwortkörpers offensichtlich ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Anforderung asynchroner Verarbeitung

Dieses Beispiel fordert den Server auf, eine asynchrone Verarbeitung zu starten:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einer {{httpstatus("202", "202 Accepted")}}-Antwort, die angibt, dass die Anfrage akzeptiert wurde und noch nicht asynchron abgeschlossen wurde.
Ein `Location`-Header verweist auf einen Statusmonitor, der den Stand der Verarbeitung darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Angabe mehrerer Präferenzen

Die folgende Anfrage enthält zwei Präferenzen: `timezone=Jupiter/Red_Spot`, die eine Zeitzonen-Präferenz für den Client angibt, und `handling=strict` für strikte Validierung:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In dieser Implementierung führt eine ungültige Zeitzone zu einem Fehler:

```http
HTTP/1.1 400 Bad Request
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Preference-Applied")}}
- [Prefer-Header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer-Header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
