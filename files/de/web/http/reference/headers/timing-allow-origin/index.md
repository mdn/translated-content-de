---
title: Timing-Allow-Origin header
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Timing-Allow-Origin`**-{{Glossary("response_header", "Antwort-Header")}} gibt Ursprünge an, die berechtigt sind, die Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden. Diese Werte würden andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Gibt eine URI an, die die Timing-Ressourcen einsehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommas.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um jeder Ressource das Einsehen von Timing-Ressourcen zu ermöglichen:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu erlauben, können Sie angeben:

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
