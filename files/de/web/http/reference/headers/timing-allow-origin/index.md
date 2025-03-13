---
title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Timing-Allow-Origin`**-{{Glossary("response_header", "Antwortheader")}} gibt Ursprünge an, die berechtigt sind, die Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, welche ansonsten aufgrund von Cross-Origin-Einschränkungen als Null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>, …, <originN>
```

## Direktiven

- `*` (Wildcard)
  - : Jeder Ursprung darf Timing-Ressourcen sehen.
- `<origin>`
  - : Gibt eine URI an, die die Timing-Ressourcen sehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommata.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um zu erlauben, dass jede Ressource die Timing-Ressourcen sieht:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` zu erlauben, die Timing-Ressourcen zu sehen, können Sie folgendes angeben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Server-Timing")}} header
- {{HTTPHeader("Vary")}} header
