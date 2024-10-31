---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 8bdaa4a8990ed9731a40407e90834b483fbf2912
---

{{HTTPSidebar}}

Der HTTP **`Accept-Post`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage akzeptiert werden.
Ein Server, der eine `POST`-Anfrage mit einem nicht unterstützten Medientyp erhält, könnte zum Beispiel mit {{HTTPStatus("415", "415 Unsupported Media Type")}} antworten und einen `Accept-Post`-Header verwenden, der einen oder mehrere unterstützte Medientypen nennt.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `POST`-Methode unterstützt.
Ein `Accept-Post`-Header in einer Antwort auf eine beliebige Anfrage-Methode bedeutet implizit, dass ein `POST` auf die Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> Die IANA führt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip`- und `bzip2`-Kodierungen sind nicht standardisiert, können aber in einigen Fällen verwendet werden, insbesondere zur Unterstützung von älteren Systemen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
> Der `Accept-Post`-Header spezifiziert einen Medienbereich auf die gleiche Weise wie {{HTTPHeader("Accept")}}, außer dass er keine Präferenzen durch `q` ({{Glossary("quality_values", "Qualitätswerte")}}) Argumente beinhaltet.
> Dies liegt daran, dass `Accept-Post` ein Antwort-Header ist, während `Accept` ein Anfrage-Header ist.

## Anweisungen

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
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

Die Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Header wird vom Server gesendet und die Spezifikation definiert kein Verhalten des Clients.

## Siehe auch

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} Anfragemethode
