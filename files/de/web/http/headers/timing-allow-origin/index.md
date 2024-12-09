---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Timing-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden. Diese würden aufgrund von Cross-Origin-Beschränkungen sonst als null gemeldet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Jeder Ursprung darf die Timing-Ressourcen einsehen.
- `<origin>`
  - : Gibt eine URI an, die die Timing-Ressourcen einsehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommata.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um jedem Resource-Zugriff das Einsehen von Timing-Ressourcen zu erlauben:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu erlauben, können Sie folgendes angeben:

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
