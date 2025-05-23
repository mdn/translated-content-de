---
title: Accept-Ranges header
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwort-Header")}} wird vom Server verwendet, um seine Unterstützung für [Bereichsanforderungen](/de/docs/Web/HTTP/Guides/Range_requests) zu bewerben, sodass Clients Teile oder mehrere Teile einer Ressource anfordern können.
Der Wert dieses Headers gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Ein Beispiel für eine Antwort mit einem `Accept-Ranges`-Header zeigt an, dass der Server in der Lage ist, einen unterbrochenen Download fortzusetzen, anstatt dass ein Client den Transfer vollständig neu startet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Direktiven

- `<range-unit>`
  - : Die Bereichseinheit, die der Server unterstützt, obwohl `bytes` die einzige Bereichseinheit ist, die formell durch {{RFC("7233")}} definiert ist.
    Bereichseinheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Bereichseinheit wird unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Pausenschaltflächen im Download-Manager zu deaktivieren oder zu entfernen, wenn Server keine Unterstützung für Bereichsanforderungen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für HTTP-Bereichsanforderungen](/de/docs/Web/HTTP/Guides/Range_requests)
- [Leitfaden für HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anforderungs-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
