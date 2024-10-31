---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Accept-Post`** {{Glossary("response_header", "Antwortheader")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Zum Beispiel könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Post`-Header antworten, der einen oder mehrere unterstützte Medientypen angibt.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf jede Anfragemethode bedeutet implizit, dass ein `POST` auf der Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen verwendet werden, insbesondere für die Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
> Der `Accept-Post`-Header spezifiziert eine Medien-Reihe auf die gleiche Weise wie {{HTTPHeader("Accept")}}, außer dass er keine Präferenz über `q` ({{Glossary("quality_values", "Qualitätswerte")}}) Argumente kennt.
> Dies liegt daran, dass `Accept-Post` ein Antwortheader ist, während `Accept` ein Anfrageheader ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
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

Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Header wird vom Server gesendet und die Spezifikation definiert kein Clientverhalten.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}}-Anfragemethode
