---
title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Post`**-{{Glossary("response_header", "Antwortheader")}} gibt die [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) an, die vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Zum Beispiel könnte ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Post`-Header antworten, der einen oder mehrere unterstützte Medientypen angibt.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf eine beliebige Anfragemethode bedeutet implizit, dass ein `POST` auf die Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> Die IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardmäßig, können jedoch in einigen Fällen, insbesondere zur Unterstützung von Legacy-Systemen, verwendet werden.

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
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// Comma-separated list of media types
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> Der `Accept-Post`-Header gibt einen Medienbereich auf die gleiche Weise an wie {{HTTPHeader("Accept")}}, mit dem Unterschied, dass er keine Vorstellung von Präferenz über `q` ({{Glossary("quality_values", "Qualitätswerte")}})-Argumente hat.
> Dies liegt daran, dass `Accept-Post` ein Antwortheader ist, während `Accept` ein Anfrageheader ist.

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, genauer [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` den Typen `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
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
Der Header wird vom Server gesendet und die Spezifikation definiert kein Verhalten für den Client.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}}-Anfragemethode
