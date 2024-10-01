---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 7aab76c49ae49d606b4958f8dc8cd1269fb7b9b6
---

{{HTTPSidebar}}

Der **`Accept`** HTTP-Anforderungsheader gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der Client verstehen kann. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Type")}} Antwort-Header. Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage. Zum Beispiel verwendet ein Browser unterschiedliche Werte in einer Anfrage, wenn ein CSS-Stylesheet, Bild, Video oder ein Skript abgerufen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass die Werte kein
        <em>CORS-unsicheres Anforderungsheader-Byte</em> enthalten dürfen: 0x00-0x1F (außer 0x09 (HT)),
        <code>"():&#x3C;>?@[\]{}</code> und 0x7F (DEL).
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
  - : Ein einzelner, präziser [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), wie `text/html`.
- `<MIME_type>/*`
  - : Ein MIME-Typ, aber ohne Subtyp. `image/*` entspricht `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder MIME-Typ
- `;q=` (q-Faktor Gewichtung)
  - : Ein verwendeter Wert wird in einer Präferenzordnung ausgedrückt mittels eines relativen {{Glossary("Quality_values", "Qualitätswertes")}}, dem _Gewicht_.

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

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Liste der Standard-Accept-Werte](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
