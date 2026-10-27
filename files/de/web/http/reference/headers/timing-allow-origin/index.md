---
title: Timing-Allow-Origin header
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Timing-Allow-Origin`** gibt an, welche Origins die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden und für Cross-Origin-Ressourcen andernfalls eingeschränkt sind.
Ohne diesen Header meldet der Browser für diese Werte null, eine leere Zeichenfolge oder ein leeres Array.
Eine Liste der betroffenen Eigenschaften finden Sie unter [Cross-Origin-Einschränkungen](/de/docs/Web/API/PerformanceResourceTiming#cross-origin_restrictions) in der Referenz zu [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming).

Der Browser prüft diesen Header bei Cross-Origin-Antworten: Same-Origin-Ressourcen geben auch ohne ihn vollständige Timing-Informationen preis.

Dieser Header ist unabhängig von [CORS](/de/docs/Web/HTTP/Guides/CORS).
Eine erfolgreiche CORS-Prüfung gewährt keinen Zugriff auf detaillierte Timing-Informationen.
Umgekehrt gibt `Timing-Allow-Origin` keine Eigenschaften preis, die die Antwort selbst beschreiben, etwa ihre Body-Größe, ihren Inhaltstyp oder ihren Statuscode.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Jede Origin darf Timing-Informationen zu Ressourcen sehen.
- `<origin>`
  - : Gibt einen URI an, der die Timing-Informationen zu Ressourcen sehen darf. Sie können mehrere Origins angeben, die durch Kommas getrennt sind.

## Beispiele

### Timing-Allow-Origin verwenden

So erlauben Sie jeder Origin, Timing-Informationen zu Ressourcen zu sehen:

```http
Timing-Allow-Origin: *
```

Damit `https://developer.mozilla.org` Timing-Informationen zu Ressourcen sehen darf, können Sie Folgendes angeben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Server-Timing")}}-Header
- {{HTTPHeader("Vary")}}-Header
