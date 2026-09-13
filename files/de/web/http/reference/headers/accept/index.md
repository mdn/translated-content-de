---
title: Accept header
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Der HTTP-**`Accept`**-{{Glossary("request_header", "Request")}}- und {{Glossary("response_header", "Response-Header")}} gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), der Sender verstehen kann.
In Requests verwendet der Server [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client mit dem Response-Header {{HTTPHeader("Content-Type")}} über die Auswahl.
In Responses enthält er Informationen darüber, welche Inhaltstypen der Server in Nachrichten an die angeforderte Ressource verstehen kann, sodass der Inhaltstyp in nachfolgenden Requests an die Ressource verwendet werden kann.

Browser legen die erforderlichen Werte für diesen Header anhand des Kontexts des Requests fest.
Beispielsweise verwendet ein Browser in einem Request unterschiedliche Werte, wenn er ein CSS-Stylesheet, ein Bild, ein Video oder ein Script abruft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}},
      {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen keine [CORS-unsicheren Request-Header-Bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten, einschließlich `"():<>?@[\]{},`, Delete `0x7F` und Steuerzeichen von `0x00` bis `0x19`, mit Ausnahme von Tab `0x09`.

## Syntax

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Beispielsweise entspricht `image/*` den Typen `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.
- `;q=` (q-Faktor-Gewichtung)
  - : Ein Wert für die Reihenfolge der Präferenz, ausgedrückt durch einen relativen {{Glossary("quality_values", "Qualitätswert")}}, der als _Gewichtung_ bezeichnet wird.

## Beispiele

### Standardmäßige Accept-Request-Header verwenden

HTTP-Requests, die mit Befehlszeilentools wie [curl](https://curl.se/) und [wget](https://www.gnu.org/software/wget/) erstellt werden, verwenden `*/*` als standardmäßigen `Accept`-Wert:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Browser-Navigationen haben typischerweise den folgenden `Accept`-Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Nach dem Empfang des Dokuments sehen die standardmäßigen `Accept`-Werte in Requests für Bilder im `developer.mozilla.org`-Beispiel wie folgt aus:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Accept-Request-Header für JSON-Responses konfigurieren

Systeme mit API-Interaktion fordern häufig `application/json`-Responses an.
Hier ist ein Beispiel für einen {{HTTPMethod("GET")}}-Request, bei dem der Client ausdrücklich eine JSON-Response anfordert:

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-[Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [Liste der standardmäßigen Accept-Werte](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- {{Glossary("CORS-safelisted_request_header#additional_restrictions", "Einschränkungen für CORS-safelisted Request-Header")}}
- Ein Header mit dem Ergebnis der Content Negotiation: {{HTTPHeader("Content-Type")}}
- Weitere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
