---
title: Accept-Ranges header
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwort-Header")}} wird vom Server verwendet, um seine Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) zu bewerben, wodurch Clients einen Teil oder mehrere Teile einer Ressource anfordern können. Der Wert dieses Headers gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Zum Beispiel zeigt eine Antwort mit einem `Accept-Ranges`-Header an, dass der Server in der Lage ist, einen unterbrochenen Download wieder aufzunehmen, anstatt dass ein Client den Transfer komplett von vorne beginnen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Die Bereichseinheit, die der Server unterstützt, obwohl `bytes` die einzige Bereichseinheit ist, die formell durch {{RFC("7233")}} definiert ist.
    Die Bereichseinheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Bereichseinheit wird unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Pause-Schaltflächen im Download-Manager zu deaktivieren oder zu entfernen, wenn Server keine Unterstützung für Range-Anfragen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anleitung zu HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- [Anleitung zu HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anfrage-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
