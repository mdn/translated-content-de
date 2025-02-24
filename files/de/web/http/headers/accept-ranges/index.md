---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwortheader")}} wird vom Server verwendet, um seine Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) zu bewerben, wodurch Clients einen Teil oder mehrere Teile einer Ressource anfordern können. Der Wert dieses Headers gibt die Einheit an, die verwendet werden kann, um einen Bereich zu definieren.

Ein Beispiel: Eine Antwort mit einem `Accept-Ranges` Header zeigt an, dass der Server in der Lage ist, einen unterbrochenen Download fortzusetzen, anstatt den Transfer vollständig neu zu starten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Die Bereichseinheit, die der Server unterstützt, obwohl `bytes` die einzige Bereichseinheit ist, die formell durch {{RFC("7233")}} definiert wird.
    Bereichseinheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Bereichseinheit wird unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Pause-Schaltflächen im Download-Manager zu deaktivieren oder zu entfernen, falls Server keine Unterstützung für Range-Anfragen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Range_requests) Leitfaden
- [HTTP-Bedingte-Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anfrage-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
