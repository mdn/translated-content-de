---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Accept`**-{{Glossary("request_header", "Anforderungsheader")}} gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/MIME_types), der Client verstehen kann. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Auswahl mit dem {{HTTPHeader("Content-Type")}}-Antwortheader. Browser legen die erforderlichen Werte für diesen Header basierend auf dem Kontext der Anforderung fest. Beispielsweise verwendet ein Browser unterschiedliche Werte in einer Anforderung beim Abrufen eines CSS-Stylesheets, Bildes, Videos oder eines Skripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen keine [CORS-unsafe request header bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten, einschließlich `"():<>?@[\]{},`, Delete `0x7F`, und Steuerzeichen `0x00` bis `0x19`, außer Tab `0x09`.

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
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.
- `;q=` (q-Faktor Gewichtung)
  - : Ein Wert in der Reihenfolge der Präferenz, ausgedrückt mit einem relativen {{Glossary("quality_values", "Qualitätswert")}}, genannt das _Gewicht_.

## Beispiele

### Verwendung von Standard-Accept-Anforderungsheadern

HTTP-Anfragen, die mit Kommandozeilenwerkzeugen wie [curl](https://curl.se/) und [wget](https://www.gnu.org/software/wget/) gestellt werden, verwenden `*/*` als Standardwert für `Accept`:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Die Browser-Navigation hat typischerweise den folgenden `Accept`-Headerwert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Nach Erhalt des Dokuments sehen die Standard-`Accept`-Werte in Anfragen für Bilder auf dem `developer.mozilla.org` Beispiel folgendermaßen aus:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Konfiguration von Accept-Anforderungsheadern für JSON-Antworten

Systeme, die eine API-Interaktion beinhalten, fordern häufig `application/json`-Antworten an. Hier ist ein Beispiel für eine {{HTTPMethod("GET")}}-Anforderung, bei der der Client spezifisch eine JSON-Antwort anfordert:

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

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Liste der Standardwerte für Accept](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- {{Glossary("CORS-safelisted_request_header#additional_restrictions", "CORS Safelist Anforderungsheader-Einschränkungen")}}
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
