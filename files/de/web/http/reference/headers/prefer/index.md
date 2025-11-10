---
title: Prefer header
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Prefer`**-Header ermöglicht es Clients, Präferenzen für bestimmte Serververhaltensweisen während der Anfragenverarbeitung anzugeben.

> [!NOTE]
> Browser behandeln die `Prefer`- und die {{HTTPHeader("Preference-Applied")}}-Header nicht: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl der Client als auch der Server diesen Header unterstützen, bevor Sie sich im Produktionsbetrieb darauf verlassen.
>
> Server sollten stillschweigend Präferenzen ignorieren, die sie nicht unterstützen, als ob der Header nicht vorhanden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}}
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
    Beispielsweise könnte der Server mit einer {{httpstatus("202", "202 Accepted")}}-Antwort, die besagt, dass die Anfrage angenommen wurde, antworten, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client verwenden kann, um den Status der Verarbeitung zu überwachen.
- `return=minimal`
  - : Fordert, dass der Server minimalen Inhalt zurückgibt (eine nur aus Headern bestehende Antwort).
- `return=representation`
  - : Fordert eine vollständige Repräsentation der Ressource in der Antwort an.
- `wait=<seconds>`
  - : Die Zeit, innerhalb der der Client erwartet, dass der Server eine Antwort liefert, ab dem Punkt, an dem die Anfrage empfangen wurde.
    Wenn die `respond-async`-Präferenz ebenfalls angegeben ist, sollte der Server asynchron antworten, wenn die Verarbeitung der Anfrage die Wartezeit überschreiten wird.
    Andernfalls sollte der Server davon ausgehen, dass der Client nach der `wait`-Zeit ein Timeout erwartet (das Antwortverhalten hängt von der Implementierung des Servers ab).
- `handling=lenient`
  - : Der Client wünscht, dass der Server eine nachsichtige Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht, dass der Server eine strikte Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können ihre eigenen Präferenzen definieren, um spezifische Bedürfnisse zu erfüllen.
    Beispiel: `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Minimalantwort anfordern

Die folgende Anfrage fordert eine minimale Antwort an.
Dies ist typischerweise eine Antwort, die nur aus Headern besteht (im Gegensatz zu `return=representation`, bei der eine Repräsentation im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit einem {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL zum Standort der neu erstellten Ressource.
Es ist nicht notwendig, einen `Preference-Applied`-Header einzuschließen, da das Fehlen eines Antwortkörpers einfach erkennbar ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Asynchrone Verarbeitung anfordern

Dieses Beispiel verlangt, dass der Server eine asynchrone Verarbeitung startet:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einer {{httpstatus("202", "202 Accepted")}}-Antwort, die besagt, dass die Anfrage angenommen wurde und noch nicht asynchron abgeschlossen ist.
Ein `Location`-Header verweist auf einen Statusmonitor, der den Status der Verarbeitung darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Mehrere Präferenzen angeben

Die folgende Anfrage enthält zwei Präferenzen; `timezone=Jupiter/Red_Spot`, die eine Zeitzonenpräferenz für den Client angibt, und `handling=strict` für strikte Validierung:

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
