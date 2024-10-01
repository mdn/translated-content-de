---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser verzichten auf diesen Header und Server sollten ihn ignorieren.

Der **`Accept-Charset`** HTTP-Anforderungsheader war ein Header, der die unterstützten {{Glossary("character_encoding", "Zeichenkodierungen")}} eines Clients bekannt machte. Heutzutage wird er kaum noch verwendet.

UTF-8 wird gut unterstützt und ist die überwiegend bevorzugte Wahl für Zeichenkodierungen. Um [bessere Privatsphäre durch weniger Konfigurations-basierte Entropie zu gewährleisten](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), verzichten alle Browser auf den `Accept-Charset` Header.

Heutzutage ist `Accept-Charset` vor allem dafür bekannt, einer von mehreren {{Glossary("Forbidden_header_name", "verbotenen Header-Namen")}} zu sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
