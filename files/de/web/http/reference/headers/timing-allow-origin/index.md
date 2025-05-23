---
title: Timing-Allow-Origin header
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Timing-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden und die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Jeder Ursprung darf Zeitressourcen sehen.
- `<origin>`
  - : Gibt eine URI an, die die Zeitressourcen sehen darf. Sie können mehrere Ursprünge angeben, die durch Kommas getrennt sind.

## Beispiele

### Verwendung von Timing-Allow-Origin

Um jedem Ressource zu erlauben, Zeitressourcen zu sehen:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` zu erlauben, Zeitressourcen zu sehen, können Sie angeben:

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
