---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser lassen diesen Header weg und Server sollten ihn ignorieren.

Der HTTP-Request-Header **`Accept-Charset`** war ein Header, der die vom Client unterstützten {{glossary("character encoding", "Zeichenkodierungen")}} anzeigte. Er wird nicht mehr häufig verwendet.

UTF-8 wird gut unterstützt und ist die überwältigend bevorzugte Wahl für die Zeichenkodierung. Um [bessere Privatsphäre durch weniger konfigurationsbasierte Entropie zu gewährleisten](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), lassen alle Browser den `Accept-Charset` Header weg.

Heutzutage ist `Accept-Charset` vor allem dafür bekannt, einer von mehreren [verbotenen Headernamen](/de/docs/Glossary/Forbidden_header_name) zu sein.

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

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
