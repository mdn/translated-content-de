---
title: Accept header
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Accept`**-{{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt an, welche Inhaltsarten, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), der Absender verstehen kann. Bei Anfragen verwendet der Server [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Auswahl mit dem {{HTTPHeader("Content-Type")}}-Response-Header. In Antworten gibt der Header an, welche Inhaltsarten der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass diese Inhaltsart bei nachfolgenden Anfragen an die Ressource verwendet werden kann.

Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage. Beispielsweise verwendet ein Browser unterschiedliche Werte in einer Anfrage, wenn ein CSS-Stylesheet, Bild, Video oder ein Skript abgerufen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}},
      {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

\* Werte dürfen keine [CORS-unsicheren Anfrage-Header-Bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten, einschließlich `"():<>?@[\]{},`, Delete `0x7F` und Steuerzeichen `0x00` bis `0x19`, außer Tab `0x09`.

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
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.
- `;q=` (q-Faktor Gewichtung)
  - : Ein Wert der Präferenzordnung, ausgedrückt mithilfe eines relativen {{Glossary("quality_values", "Qualitätswertes")}}, genannt das _Gewicht_.

## Beispiele

### Verwenden der Standard-Accept-Anfrage-Header

HTTP-Anfragen, die mit Befehlszeilentools wie [curl](https://curl.se/) und [wget](https://www.gnu.org/software/wget/) erstellt werden, verwenden `*/*` als Standardwert für `Accept`:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Die Browsenavigation hat typischerweise den folgenden `Accept`-Anfrage-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Nach dem Empfang des Dokuments sehen die Standard-`Accept`-Werte in Anfragen für Bilder auf dem Beispiel `developer.mozilla.org` so aus:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Konfigurieren von Accept-Anfrage-Headern für JSON Antworten

Systeme, die API-Interaktion beinhalten, fordern typischerweise `application/json`-Antworten an. Hier ist ein Beispiel für eine {{HTTPMethod("GET")}}-Anfrage, bei der der Client spezifisch eine JSON-Antwort anfordert:

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

- HTTP [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [Liste der Standardwerte für Accept](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- {{Glossary("CORS-safelisted_request_header#additional_restrictions", "CORS-Safelist-Anfrage-Header-Einschränkungen")}}
- Ein Header mit dem Ergebnis der Content Negotiation: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
