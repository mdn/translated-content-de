---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: 7aab76c49ae49d606b4958f8dc8cd1269fb7b9b6
---

{{HTTPSidebar}}

Der **`Accept`** HTTP-Anfrage-Header gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der Client in der Lage ist zu verstehen. Der Server verwendet [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Auswahl mit dem {{HTTPHeader("Content-Type")}} Antwort-Header. Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage. Beispielsweise verwendet ein Browser unterschiedliche Werte in einer Anfrage, wenn er ein CSS-Stylesheet, ein Bild, ein Video oder ein Skript abruft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass Werte keine
        <em>CORS-unsafe request header byte</em> enthalten dürfen: 0x00-0x1F (außer 0x09 (HT)),
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

// Mehrere Typen, gewichtet mit der Qualitätswert-Syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Direktiven

- `<MIME_type>/<MIME_subtype>`
  - : Ein einzelner, präziser [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), wie `text/html`.
- `<MIME_type>/*`
  - : Ein MIME-Typ, jedoch ohne Subtyp. `image/*` entspricht `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder MIME-Typ
- `;q=` (q-Faktor-Gewichtung)
  - : Ein Wert, der verwendet wird, um eine Reihenfolge der Präferenz auszudrücken, dargestellt durch einen relativen [Qualitätswert](/de/docs/Glossary/Quality_values), der als _Gewicht_ bezeichnet wird.

## Beispiele

```http
Accept: text/html

Accept: image/*

// Allgemeiner Standard
Accept: */*

// Standard für Navigationsanfragen
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Liste der Standard-Accept-Werte](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
