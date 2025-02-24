---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Accept-Patch`** {{Glossary("response_header", "Antwortheader")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
Ein Server, der eine `PATCH`-Anfrage mit einem nicht unterstützten Medientyp erhält, könnte beispielsweise mit {{HTTPStatus("415", "415 Unsupported Media Type")}} antworten und einen `Accept-Patch`-Header zurückgeben, der einen oder mehrere unterstützte Medientypen auflistet.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `PATCH`-Methode unterstützt.
Ein `Accept-Patch`-Header in einer Antwort auf jede Anfrageart bedeutet implizit, dass `PATCH` auf die Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> Die IANA pflegt [eine Liste der offiziellen Inhaltscodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Codierungen `bzip` und `bzip2` sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere für die Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// Comma-separated list of media types
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` den Typen `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.

## Beispiele

```http
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Server sendet den Header, und die Spezifikation definiert kein Client-Verhalten.

## Siehe auch

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}}-Anfragemethode
