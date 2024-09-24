---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

Der **`Accept`** HTTP-Anforderungsheader zeigt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/MIME_types), der Client verstehen kann. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Type")}}-Antwortheader. Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage. Zum Beispiel verwendet ein Browser unterschiedliche Werte in einer Anfrage, wenn er ein CSS-Stylesheet, ein Bild, ein Video oder ein Skript abruft.

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
        {{Glossary("CORS-safelisted_request_header", "CORS-Whitelisted Anforderungsheader")}}
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass die Werte keine
        <em>CORS-unsicheren Anforderungsheader-Bytes</em> enthalten dürfen: 0x00-0x1F (außer 0x09 (HT)),
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
  - : Ein einzelner, präziser [MIME-Typ](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
- `<MIME_type>/*`
  - : Ein MIME-Typ, jedoch ohne Subtyp. `image/*` entspricht `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder MIME-Typ
- `;q=` (q-Faktor-Gewichtung)
  - : Ein Wert, der in eine Reihenfolge der Präferenz gesetzt wird, ausgedrückt durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}}, der als _Gewicht_ bezeichnet wird.

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
