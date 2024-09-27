---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Range`** HTTP-Antwort-Header zeigt an, wo sich eine Teilnachricht in einer gesamten Nachricht befindet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        [Antwort-Header](/de/docs/Glossary/Response_header),
        [Inhalts-Header](/de/docs/Glossary/Content_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-aufgelisteter Anforderungs-Header](/de/docs/Glossary/CORS-safelisted_request_header)
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
  - : Die Einheit, in der Bereiche angegeben werden. Dies ist normalerweise `bytes`.
- \<range-start>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Startposition (nullbasiert & inklusiv) des Anforderungsbereichs angibt.
- \<range-end>
  - : Eine Ganzzahl in der angegebenen Einheit, die die Endposition (nullbasiert & inklusiv) des angeforderten Bereichs angibt.
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
