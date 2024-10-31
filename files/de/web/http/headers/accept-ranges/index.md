---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Accept-Ranges`** {{Glossary("response_header", "Antwort-Header")}} wird vom Server verwendet, um seine Unterstützung für [Teilanforderungen](/de/docs/Web/HTTP/Range_requests) zu signalisieren, wodurch Clients einen Teil oder mehrere Teile einer Ressource anfordern können.
Der Wert dieses Headers gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Ein Beispiel: Eine Antwort mit einem `Accept-Ranges` Header zeigt an, dass der Server in der Lage ist, einen unterbrochenen Download _fortzusetzen_, anstatt dass der Client den gesamten Transfer erneut startet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ des Headers</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Die Bereichseinheit, die der Server unterstützt, wobei `bytes` die einzige formal definierte Bereichseinheit durch {{RFC("7233")}} ist.
    Bereichseinheiten sind im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert.
- `none`
  - : Keine Bereichseinheit wird unterstützt.
    Dies entspricht dem Weglassen des Headers und wird daher selten verwendet.
    Dieser Wert wurde in älteren Browsern verwendet, um die Pause-Tasten im Download-Manager zu deaktivieren oder zu entfernen, wenn Server keine Unterstützung für Teilanforderungen hatten.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTTP-Teilanforderungen](/de/docs/Web/HTTP/Range_requests)
- [Leitfaden zu HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} Anforderungs-Header
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
