---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Sec-Fetch-User`** ({{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}}) wird für Anfragen gesendet, die durch eine Benutzeraktivierung initiiert werden, und sein Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um festzustellen, ob eine Navigationsanfrage von einem Dokument, iframe usw. vom Benutzer initiiert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-berechtigter Anforderungsheader")}}
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

Der Wert wird immer `?1` sein. Wenn eine Anfrage von etwas anderem als einer Benutzeraktivierung ausgelöst wird, erfordert die Spezifikation, dass Browser den Header vollständig weglassen.

## Beispiele

### Verwendung von Sec-Fetch-User

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite im selben Ursprung klickt, würde die resultierende Anfrage die folgenden Header enthalten:

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
