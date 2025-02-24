---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Accept-Post`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Zum Beispiel könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Post`-Header antworten, der einen oder mehrere unterstützte Medientypen angibt.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf eine beliebige Anfragemethode bedeutet implizit, dass ein `POST` auf die Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> Die IANA führt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen, insbesondere für die Unterstützung älterer Systeme, verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja</td>
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
> Der `Accept-Post`-Header gibt einen Medientypbereich genauso an wie {{HTTPHeader("Accept")}}, außer dass er keine Vorstellung von Präferenzen über `q` ({{Glossary("quality_values", "Qualitätswerte")}}) Argumente hat.
> Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anforderungs-Header ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif`, und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.

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
Der Header wird vom Server gesendet und die Spezifikation definiert kein Client-Verhalten.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} Anfragemethode
