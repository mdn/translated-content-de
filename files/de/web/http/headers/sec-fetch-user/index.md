---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-User`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} wird für Anfragen gesendet, die durch eine Benutzeraktion initiiert wurden, und sein Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um zu identifizieren, ob eine Navigationsanfrage von einem Dokument, einem iframe usw. vom Benutzer ausging.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anforderungsheader")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-User: ?1
```

## Direktiven

Der Wert wird immer `?1` sein. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktion ausgelöst wird, verlangt die Spezifikation, dass Browser den Header vollständig weglassen.

## Beispiele

### Verwendung von Sec-Fetch-User

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite am gleichen Ursprung klickt, hätte die resultierende Anfrage die folgenden Header:

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

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}} Fetch-Metadaten-Anforderungsheader
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
