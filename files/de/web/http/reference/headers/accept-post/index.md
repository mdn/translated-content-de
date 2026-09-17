---
title: Accept-Post header
short-title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Accept-Post`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Beispielsweise könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp empfängt, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Post`-Header antworten, der auf einen oder mehrere unterstützte Medientypen verweist.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf jede Anfragemethode bedeutet implizit, dass ein `POST` für die Zielressource der Anfrage erlaubt ist.

> [!NOTE]
> IANA führt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// Comma-separated list of media types
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> Der `Accept-Post`-Header gibt einen Medienbereich auf dieselbe Weise wie {{HTTPHeader("Accept")}} an, außer dass er kein Konzept von Präferenzen über `q`-Argumente ({{Glossary("quality_values", "Qualitätswerte")}}) hat.
> Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Beispielsweise entspricht `image/*` den Typen `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Beliebiger Medientyp.

## Beispiele

```http
Accept-Post: application/json, text/plain
Accept-Post: image/webp
Accept-Post: */*
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Header wird vom Server gesendet, und die Spezifikation definiert kein Client-Verhalten.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}}-Anfragemethode
