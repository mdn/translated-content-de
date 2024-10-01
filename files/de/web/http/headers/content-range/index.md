---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Range`** Antwort-HTTP-Header gibt an, wo in einer vollständigen Nachricht eine Teilnachricht hingehört.

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
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anfrage-Header")}}
      </th>
      <td>nein</td>
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

- \<unit>
  - : Die Einheit, in der Bereiche angegeben werden. Dies ist üblicherweise `bytes`.
- \<range-start>
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Startposition (nullbasiert & inklusive) des angeforderten Bereichs angibt.
- \<range-end>
  - : Ein ganzzahliger Wert in der angegebenen Einheit, der die Endposition (nullbasiert & inklusive) des angeforderten Bereichs angibt.
- \<size>
  - : Die Gesamtlänge des Dokuments (oder `'*'`, falls unbekannt).

## Beispiele

```http
Content-Range: bytes 200-1000/67589
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
