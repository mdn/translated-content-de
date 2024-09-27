---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

> [!WARNING]
> Verwenden Sie diesen Header nicht. Browser lassen diesen Header weg und Server sollten ihn ignorieren.

Der **`Accept-Charset`** Anfrage-HTTP-Header war ein Header, der die von einem Client unterstützten [Zeichenkodierungen](/de/docs/Glossary/character_encoding) bekannt gab. Er wird heute nicht mehr weit verbreitet verwendet.

UTF-8 ist gut unterstützt und die überwältigend bevorzugte Wahl für Zeichenkodierungen. Um [durch weniger konfigurationsbasierte Entropie bessere Privatsphäre zu garantieren](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), lassen alle Browser den `Accept-Charset` Header weg.

Heutzutage ist `Accept-Charset` vor allem dafür bekannt, eines von mehreren [verbotenen Header-Namen](/de/docs/Glossary/Forbidden_header_name) zu sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anfrage-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset ist nicht mehr vorhanden](https://hsivonen.fi/accept-charset/)
- Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
