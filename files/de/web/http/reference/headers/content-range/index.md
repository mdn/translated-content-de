---
title: Content-Range header
short-title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Content-Range`**-{{Glossary("response_header", "Response-Header")}} wird in [Range-Requests](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, um anzugeben, wo der Inhalt eines Antwortkörpers in Bezug auf eine vollständige Ressource einzuordnen ist.

Er sollte nur in {{HTTPStatus("206", "206 Partial Content")}}- oder {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antworten enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}},
        {{Glossary("Content_header", "Content-Header")}}
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
  - : Die Einheit zur Angabe von Bereichen.
    Derzeit wird nur `bytes` unterstützt.
- `<range>`
  - : Ein Bereich im Format `<range-start>-<range-end>`, wobei `<range-start>` und `<range-end>` ganze Zahlen für die Start- und Endposition (nullbasiert & einschließlich) des Bereichs in der angegebenen `<unit>` sind.
    `*` wird in einer {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Antwort verwendet, um anzuzeigen, dass der Wert kein Bereich ist.
- `<size>`
  - : Die Gesamtlänge des Dokuments (oder `*`, wenn unbekannt).

## Beispiele

### Teilweiser Inhaltsantwort

Diese {{HTTPStatus("206", "206 Partial Content")}}-Antwort zeigt eine teilweise Antwort, wobei der `Content-Range` angibt, dass sie die ersten 1024 Bytes einer 146515 Bytes langen Datei enthält.

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

### Bereich nicht zufriedenstellend

Wenn der Server den angeforderten Bereichsanfrage nicht erfüllen kann, sollte er mit einem {{HTTPStatus("416", "416 Range Not Satisfiable")}}-Status antworten, und der `Content-Range` sollte `*` für den Bereich zusammen mit der Gesamtgröße der Ressource angeben.

```http
HTTP/2 416

Content-Range: bytes */67589
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Range-Requests](/de/docs/Web/HTTP/Guides/Range_requests) Leitfaden
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Header
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Status-Codes
