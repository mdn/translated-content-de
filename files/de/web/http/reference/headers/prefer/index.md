---
title: Prefer header
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: c8bc787246fbec6fed108e4fb9e25df1d70a29ce
---

Der HTTP-**`Prefer`**-Header ermöglicht es Clients, Präferenzen für spezifische Serververhaltensweisen während der Anfragverarbeitung anzugeben.

> [!NOTE]
> Browser haben keine Verarbeitung für die `Prefer`- und {{HTTPHeader("Preference-Applied")}}-Header: Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.
> Stellen Sie sicher, dass sowohl der Client als auch der Server diesen Header unterstützen, bevor Sie sich im produktiven Einsatz darauf verlassen.
>
> Server sollten Präferenzen, die sie nicht unterstützen, stillschweigend ignorieren, als ob der Header nicht vorhanden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Der Client bevorzugt asynchrone Verarbeitung.
    Zum Beispiel könnte der Server mit einer {{httpstatus("202", "202 Accepted")}}-Antwort antworten, die angibt, dass die Anfrage angenommen wurde, zusammen mit dem {{httpheader("Location")}}-Header, der eine URL enthält, die der Client verwenden kann, um den Status der Verarbeitung zu überwachen.
- `return=minimal`
  - : Fordert an, dass der Server minimalen Inhalt zurückgibt (eine Antwort nur mit Headern).
- `return=representation`
  - : Fordert eine vollständige Ressourcenrepräsentation in der Antwort an.
- `wait=<seconds>`
  - : Die Zeit, innerhalb derer der Client erwartet, dass der Server eine Antwort liefert, ab dem Zeitpunkt, an dem die Anfrage empfangen wurde.
    Wenn auch die `respond-async`-Präferenz angegeben ist, sollte der Server asynchron antworten, wenn die Verarbeitung der Anfrage die Wartezeit überschreitet.
    Andernfalls sollte der Server davon ausgehen, dass der Client nach der `wait`-Zeit ein Timeout auslöst (das Antwortverhalten hängt von der Serverimplementierung ab).
- `handling=lenient`
  - : Der Client wünscht sich, dass der Server eine nachsichtige Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- `handling=strict`
  - : Der Client wünscht sich, dass der Server eine strikte Validierung und Fehlerbehandlung bei der Verarbeitung der Anfrage anwendet.
- Benutzerdefinierte Präferenz
  - : Anbieter oder Anwendungen können ihre eigenen Präferenzen definieren, um spezifische Anforderungen zu erfüllen.
    Zum Beispiel `Prefer: timezone=America/Los_Angeles`.

## Beispiele

### Minimalantwort anfordern

Die folgende Anfrage fragt nach einer Minimalantwort.
Dies ist typischerweise eine Antwort nur mit Headern (im Gegensatz zu `return=representation`, wo eine Repräsentation im Antwortkörper enthalten ist):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Der Server antwortet mit einer {{httpstatus("201")}}, enthält jedoch keinen Antwortkörper.
Der {{httpheader("Location")}}-Header enthält eine URL mit dem Standort der neu erstellten Ressource.
Es ist nicht notwendig, einen `Preference-Applied`-Header zu enthalten, da das Fehlen eines Antwortkörpers offensichtlich ist:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Asynchrone Verarbeitung anfordern

Dieses Beispiel fordert den Server auf, eine asynchrone Verarbeitung zu starten:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Der Server antwortet mit einer {{httpstatus("202", "202 Accepted")}}-Antwort, die angibt, dass die Anfrage akzeptiert wurde und die Ausführung noch nicht asynchron abgeschlossen ist.
Ein `Location`-Header zeigt auf einen Statusmonitor, der den Zustand der Verarbeitung darstellt:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Mehrere Präferenzen angeben

Die folgende Anfrage enthält zwei Präferenzen; `timezone=Jupiter/Red_Spot`, das eine Zeitzonen-Präferenz für den Client angibt, und `handling=strict` für strikte Validierung:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In dieser Implementierung löst eine ungültige Zeitzone einen Fehler aus:

```http
HTTP/1.1 400 Bad Request
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Preference-Applied")}}
- [Prefer-Header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer-Header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
