---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Content-Range`**-{{Glossary("response_header", "Antwort-Header")}} wird bei [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) verwendet, um anzugeben, wo der Inhalt eines Antwortkörpers im Verhältnis zu einer vollständigen Ressource gehört.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}},
        {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteter Anforderungs-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## Direktiven

- `<unit>`
  - : Die Einheit zur Angabe von Bereichen.
    Derzeit wird nur `bytes` unterstützt.
- `<range-start>`
  - : Ein Ganzzahlwert in der angegebenen Einheit, der die Startposition (nullbasiert & inklusive) des Anforderungsbereichs angibt.
- `<range-end>`
  - : Ein Ganzzahlwert in der angegebenen Einheit, der die Endposition (nullbasiert & inklusive) des angeforderten Bereichs angibt.
- `<size>`
  - : Die Gesamtlänge des Dokuments (oder `*` falls unbekannt).

## Beispiele

```http
Content-Range: bytes 200-1000/67589
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Range_requests)-Leitfaden
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Headers
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Statuscodes
