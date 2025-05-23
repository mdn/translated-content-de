---
title: Accept header
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Accept`**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types), der Sender verstehen kann.
Bei Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client mit dem {{HTTPHeader("Content-Type")}}-Antwort-Header über die Auswahl.
Bei Antworten gibt er Informationen darüber, welche Inhaltstypen der Server in Nachrichten an die angeforderte Ressource verstehen kann, damit der Inhaltstyp in nachfolgenden Anfragen an die Ressource verwendet werden kann.

Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage.
Ein Browser verwendet beispielsweise unterschiedliche Werte in einer Anfrage, wenn ein CSS-Stylesheet, ein Bild, ein Video oder ein Skript abgerufen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}},
      {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-Gelisteter Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen keine [CORS-unsicheren Anforderungs-Header-Bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten, einschließlich `"():<>?@[\]{},`, Löschzeichen `0x7F` und Steuerzeichen `0x00` bis `0x19`, mit Ausnahme von Tabulator `0x09`.

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
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bild-Typen.
- `*/*`
  - : Jeder Medientyp.
- `;q=` (q-Faktor Gewichtung)
  - : Ein Wert in Reihenfolge der Präferenz ausgedrückt durch einen relativen {{Glossary("quality_values", "Qualitätswert")}}, genannt das _Gewicht_.

## Beispiele

### Verwendung von Standard-Accept-Anforderungs-Headern

HTTP-Anfragen, die mit Befehlszeilentools wie [curl](https://curl.se/) und [wget](https://www.gnu.org/software/wget/) durchgeführt werden, verwenden `*/*` als Standardwert für `Accept`:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Die Browser-Navigation hat typischerweise den folgenden Wert im `Accept`-Anforderungs-Header:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Nach dem Empfang des Dokuments sehen die Standardwerte der `Accept`-Anfragen für Bilder auf dem Beispiel `developer.mozilla.org` so aus:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Konfigurieren von Accept-Anforderungs-Headern für JSON-Antworten

Systeme, die API-Interaktionen beinhalten, fordern häufig `application/json`-Antworten an.
Hier ist ein Beispiel einer {{HTTPMethod("GET")}}-Anfrage, bei der der Client explizit eine JSON-Antwort anfordert:

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

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [Liste der Standard-Accept-Werte](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- {{Glossary("CORS-safelisted_request_header#additional_restrictions", "CORS-Gelistete Anforderungs-Header-Beschränkungen")}}
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
