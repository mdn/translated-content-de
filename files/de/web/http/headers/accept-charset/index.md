---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser lassen diesen Header weg und Server sollten ihn ignorieren.

Der HTTP **`Accept-Charset`** {{Glossary("request_header", "Anforderungsheader")}} war ein Header, der die von einem Client unterstützten {{Glossary("character_encoding", "Zeichenkodierungen")}} angab. Er wird heute nicht mehr weit verbreitet verwendet.

UTF-8 ist gut unterstützt und die überwältigend bevorzugte Wahl für Zeichenkodierungen. Um [bessere Privatsphäre durch weniger konfigurationsbasierte Entropie zu gewährleisten](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), lassen alle Browser den `Accept-Charset`-Header weg.

Heute ist `Accept-Charset` hauptsächlich dafür bekannt, einer von mehreren {{Glossary("Forbidden_header_name", "verbotenen Headernamen")}} zu sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset ist nicht mehr](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
