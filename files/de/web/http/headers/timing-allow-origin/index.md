---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Timing-Allow-Origin`**-{{Glossary("response_header", "Antwort-Header")}} gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden. Diese Werte würden ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Gibt eine URI an, die die Timing-Ressourcen sehen darf. Es können mehrere Ursprünge angegeben werden, getrennt durch Kommas.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um jedem Resource Zugriff auf Timing-Ressourcen zu erlauben:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` Zugriff auf Timing-Ressourcen zu erlauben, können Sie angeben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Server-Timing")}}-Header
- {{HTTPHeader("Vary")}}-Header
