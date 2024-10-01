---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}

Der **`Sec-Fetch-User`** {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} wird nur für Anfragen gesendet, die durch eine Benutzeraktivierung initiiert wurden, und sein Wert wird immer `?1` sein.

Ein Server kann diesen Header verwenden, um zu identifizieren, ob eine Navigationsanfrage von einem Dokument, `iframe`, etc. durch den Benutzer ausgelöst wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-User: ?1
```

## Direktiven

Der Wert wird immer `?1` sein. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktivierung ausgelöst wird, verlangt die Spezifikation, dass Browser den Header vollständig weglassen.

## Beispiele

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite im selben Ursprung klickt, würde die resultierende Anfrage die folgenden Header haben:

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}

- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
