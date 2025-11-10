---
title: Accept-Ranges header
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwortheader")}} wird vom Server verwendet, um seine Unterstützung für [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) anzuzeigen, was es Clients ermöglicht, einen Teil oder mehrere Teile einer Ressource anzufordern. Der Wert dieses Headers gibt die Einheit an, die verwendet werden kann, um einen Bereich zu definieren.

Zum Beispiel zeigt eine Antwort mit einem `Accept-Ranges`-Header an, dass der Server in der Lage ist, einen unterbrochenen Download _fortzusetzen_, anstatt dass ein Client den Transfer vollständig neu startet.

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
  - : Die Range-Einheit, die der Server unterstützt, obwohl `bytes` die einzige Range-Einheit ist, die formell durch {{RFC("7233")}} definiert ist.
    Range-Einheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Range-Einheit wird unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Pausentasten im Download-Manager zu deaktivieren oder zu entfernen, falls Server keine Unterstützung für Range-Anfragen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden
- [HTTP bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) Leitfaden
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anfrage-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
