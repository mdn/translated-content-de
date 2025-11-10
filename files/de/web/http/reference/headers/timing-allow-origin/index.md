---
title: Timing-Allow-Origin header
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Timing-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt Ursprünge an, die berechtigt sind, Werte von Attributen einzusehen, die über Features der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden. Diese würden ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet.

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

## Anweisungen

- `*` (Wildcard)
  - : Jeder Ursprung darf Timing-Ressourcen einsehen.
- `<origin>`
  - : Gibt eine URI an, die die Timing-Ressourcen einsehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommas.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um jedem Ressource das Einsehen von Timing-Ressourcen zu erlauben:

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
- {{HTTPHeader("Server-Timing")}} Header
- {{HTTPHeader("Vary")}} Header
