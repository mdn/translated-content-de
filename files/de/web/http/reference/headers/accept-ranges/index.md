---
title: Accept-Ranges header
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Accept-Ranges`**-{{Glossary("response_header", "Response-Header")}} wird vom Server verwendet, um seine Unterstützung für [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) anzukündigen. Dadurch können Clients einen Teil oder mehrere Teile einer Ressource anfordern.
Der Wert dieses Headers gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Beispielsweise zeigt eine Antwort mit einem `Accept-Ranges`-Header an, dass der Server einen unterbrochenen Download _fortsetzen_ kann, anstatt dass ein Client die Übertragung vollständig neu starten muss.

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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Direktiven

- `<range-unit>`
  - : Die Bereichseinheit, die der Server unterstützt, obwohl `bytes` die einzige durch {{RFC("7233")}} formal definierte Bereichseinheit ist.
    Bereichseinheiten werden in der [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters#range-units) registriert.
- `none`
  - : Es wird keine Bereichseinheit unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Schaltflächen zum Anhalten im Download-Manager zu deaktivieren oder zu entfernen, wenn Server keine Unterstützung für Bereichsanfragen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- [Leitfaden zu bedingten HTTP-Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Request-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters#range-units)
