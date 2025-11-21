---
title: Accept-Post header
short-title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Accept-Post`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Zum Beispiel könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Post`-Header antworten, der einen oder mehrere unterstützte Medientypen referenziert.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen zu einer Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf eine beliebige Anfragemethode bedeutet implizit, dass ein `POST` auf die angeforderte Ressource erlaubt ist.

> [!NOTE]
> IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip` und `bzip2` Kodierungen sind nicht standardisiert, können aber in einigen Fällen, insbesondere zur Unterstützung älterer Systeme, verwendet werden.

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
> Der `Accept-Post`-Header spezifiziert einen Medienspektrum in derselben Weise wie {{HTTPHeader("Accept")}}, hat jedoch keinen Präferenzbegriff mittels `q` ({{Glossary("quality_values", "Qualitätswerte")}}) Argumente.
> Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, genauer [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
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
Der Header wird vom Server gesendet und die Spezifikation definiert kein Verhalten für den Client.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} Anfragemethode
