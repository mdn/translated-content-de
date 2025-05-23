---
title: Content-Range header
short-title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Content-Range`**-{{Glossary("response_header", "Antwortheader")}} wird in [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, um anzuzeigen, wo der Inhalt eines Antwortkörpers im Verhältnis zu einer vollständigen Ressource gehört.

Er sollte nur in {{HTTPStatus("206", "206 Partial Content")}}- oder {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antworten enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwortheader")}},
        {{Glossary("Content_header", "Inhaltsheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Range: <unit> <range>/<size>
Content-Range: <unit> <range>/*
Content-Range: <unit> */<size>
```

## Direktiven

- `<unit>`
  - : Die Einheit zur Angabe der Bereiche.
    Derzeit wird nur `bytes` unterstützt.
- `<range>`
  - : Ein Bereich mit dem Format `<range-start>-<range-end>`, wobei `<range-start>` und `<range-end>` ganze Zahlen für die Start- und Endposition (nullbasiert & inklusive) des Bereichs in der angegebenen `<unit>` sind.
    `*` wird in einer {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antwort verwendet, um anzuzeigen, dass der Wert kein Bereich ist.
- `<size>`
  - : Die Gesamtlänge des Dokuments (oder `*`, falls unbekannt).

## Beispiele

### Antwort mit Teilinhalt

Diese {{HTTPStatus("206", "206 Partial Content")}}-Antwort zeigt eine Teilantwort, wobei `Content-Range` angibt, dass sie die ersten 1024 Bytes einer 146515 Byte großen Datei enthält.

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

### Bereich nicht erfüllbar

Wenn der Server die angeforderte Bereichsanfrage nicht erfüllen kann, sollte er mit einem {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Status antworten, und `Content-Range` sollte `*` für den Bereich zusammen mit der Gesamtgröße der Ressource spezifizieren.

```http
HTTP/2 416

Content-Range: bytes */67589
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}}-Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Statuscodes
