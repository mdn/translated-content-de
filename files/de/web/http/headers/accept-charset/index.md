---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: fbc04f8ffb33fb5539a247aeb25746a1965a32a4
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser lassen diesen Header weg und Server sollten ihn ignorieren.
>
> Der Header wurde durch [RFC 9110 Abschnitt 12.5.2 Accept-Charset](https://datatracker.ietf.org/doc/html/rfc9110#section-12.5.2) (Juni 2022) abgeschafft.

Der HTTP **`Accept-Charset`** {{Glossary("request_header", "Request-Header")}} war ein Header, der die vom Client unterstützten {{Glossary("character_encoding", "Zeichenkodierungen")}} angab. Er wird nicht mehr weit verbreitet verwendet.

UTF-8 ist gut unterstützt und die überwiegend bevorzugte Wahl für Zeichenkodierungen. Um [bessere Privatsphäre durch weniger konfigurationsbasierte Entropie zu gewährleisten](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), lassen alle Browser den `Accept-Charset`-Header weg.

Heute ist `Accept-Charset` vor allem dafür bekannt, einer von mehreren {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} zu sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
