---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser lassen diesen Header weg und Server sollten ihn ignorieren.

Der **`Accept-Charset`**-Anfrage-HTTP-Header war ein Header, der die von einem Client unterstützten {{glossary("character encoding", "Zeichenkodierungen")}} mitteilte. Er wird nicht mehr weit verbreitet verwendet.

UTF-8 ist gut unterstützt und die überwältigend bevorzugte Wahl für Zeichenkodierung. Um [bessere Privatsphäre durch weniger konfigurationsbasierten Entropie](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) zu gewährleisten, lassen alle Browser den `Accept-Charset` Header weg.

Heute ist `Accept-Charset` vor allem als einer von mehreren [verbotenen Headernamen](/de/docs/Glossary/Forbidden_header_name) bekannt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset ist nicht mehr](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
