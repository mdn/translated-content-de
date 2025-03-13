---
title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwort-Header")}} wird vom Server verwendet, um seine Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) zu signalisieren, sodass Clients einen Teil oder mehrere Teile einer Ressource anfordern können. Der Wert dieses Headers gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Ein Beispiel: Eine Antwort mit einem `Accept-Ranges`-Header zeigt an, dass der Server in der Lage ist, einen unterbrochenen Download _fortzusetzen_, anstatt dass der Client den gesamten Transfer neu starten muss.

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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Direktiven

- `<range-unit>`
  - : Die Range-Einheit, die der Server unterstützt, obwohl `bytes` die einzige von {{RFC("7233")}} formal definierte Range-Einheit ist. Range-Einheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Range-Einheit wird unterstützt. Dies entspricht dem Weglassen des Headers und wird daher selten verwendet. Dieser Wert wurde in älteren Browsern verwendet, um die Pausentaste im Download-Manager zu deaktivieren oder zu entfernen, wenn Server keine Unterstützung für Range-Anfragen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTTP-Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- [Leitfaden zu HTTP-konditionalen Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anfrage-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
