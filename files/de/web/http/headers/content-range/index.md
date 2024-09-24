---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Range`** HTTP-Header in der Antwort gibt an, wo in einer vollständigen Nachrichtenstruktur eine Teilnachricht gehört.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
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
  - : Die Einheit, in der Bereiche spezifiziert sind. Dies ist normalerweise `bytes`.
- \<range-start>
  - : Eine ganze Zahl in der angegebenen Einheit, die die Startposition des angeforderten Bereichs angibt (nullbasiert und inklusive).
- \<range-end>
  - : Eine ganze Zahl in der angegebenen Einheit, die die Endposition des angeforderten Bereichs angibt (nullbasiert und inklusive).
- \<size>
  - : Die Gesamtlänge des Dokuments (oder `'*'`, wenn unbekannt).

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
