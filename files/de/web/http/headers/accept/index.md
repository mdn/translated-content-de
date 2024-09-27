---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 7aab76c49ae49d606b4958f8dc8cd1269fb7b9b6
---

{{HTTPSidebar}}

Der **`Accept`** HTTP-Anforderungsheader gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der Client verstehen kann. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Type")}} Antwort-Header. Browser setzen die erforderlichen Werte für diesen Header basierend auf dem Kontext der Anfrage. Ein Browser verwendet zum Beispiel unterschiedliche Werte in einer Anforderung beim Abrufen eines CSS-Stylesheets, eines Bildes, eines Videos oder eines Skripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass Werte kein
        <em>CORS-unsafe request header byte</em> enthalten dürfen: 0x00-0x1F (außer 0x09 (HT)),
        <code>"():&#x3C;>?@[\]{}</code>, und 0x7F (DEL).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Direktiven

- `<MIME_type>/<MIME_subtype>`
  - : Ein einzelner, genauer [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), wie `text/html`.
- `<MIME_type>/*`
  - : Ein MIME-Typ, aber ohne Subtyp. `image/*` entspricht `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder MIME-Typ
- `;q=` (q-Faktor Gewichtung)
  - : Ein verwendeter Wert wird in einer Reihenfolge der Präferenz ausgedrückt, die ein relatives [Qualitätswert](/de/docs/Glossary/Quality_values) genanntes _Gewicht_ verwendet.

## Beispiele

```http
Accept: text/html

Accept: image/*

// General default
Accept: */*

// Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Liste der Standard-Accept-Werte](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
