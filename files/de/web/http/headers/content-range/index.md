---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Range`** {{Glossary("response_header", "Antwort-Header")}} wird in [Range Requests](/de/docs/Web/HTTP/Range_requests) verwendet, um anzugeben, wo der Inhalt eines Antwortkörpers im Verhältnis zu einer gesamten Ressource steht.

Er sollte nur in {{HTTPStatus("206", "206 Partial Content")}}- oder {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antworten enthalten sein.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
Content-Range: <unit> <range>/<size>
Content-Range: <unit> <range>/*
Content-Range: <unit> */<size>
```

## Direktiven

- `<unit>`
  - : Die Einheit zur Spezifizierung von Bereichen.
    Derzeit wird nur `bytes` unterstützt.
- `<range>`
  - : Ein Bereich im Format `<range-start>-<range-end>`, wobei `<range-start>` und `<range-end>` Ganzzahlen für die Start- und Endposition (nullbasiert & inklusive) des Bereichs in der angegebenen `<unit>` sind.
    `*` wird in einer {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antwort verwendet, um anzuzeigen, dass der Wert kein Bereich ist.
- `<size>`
  - : Die Gesamtlänge des Dokuments (oder `*`, wenn unbekannt).

## Beispiele

### Teilinhaltsantwort

Diese {{HTTPStatus("206", "206 Partial Content")}}-Antwort zeigt eine Teilantwort, wobei `Content-Range` angibt, dass sie die ersten 1024 Bytes einer 146515 Byte Datei enthält.

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

### Bereich nicht erfüllbar

Wenn der Server die angeforderte Bereichsanfrage nicht erfüllen kann, sollte er mit dem Status {{HTTPStatus("416", "416 Range Not Satisfiable")}} antworten, und `Content-Range` sollte `*` für den Bereich zusammen mit der Gesamtgröße der Ressource angeben.

```http
HTTP/2 416

Content-Range: bytes */67589
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) Leitfaden
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Statuscodes
