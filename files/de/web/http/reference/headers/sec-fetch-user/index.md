---
title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-User`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} wird für Anfragen gesendet, die durch eine Benutzeraktivierung initiiert werden, und dessen Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um festzustellen, ob eine Navigationsanfrage von einem Dokument, iframe usw. vom Benutzer initiiert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anfrage-Header")}}
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

Der Wert wird immer `?1` sein. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktivierung ausgelöst wird, verlangt die Spezifikation, dass Browser den Header komplett weglassen.

## Beispiele

### Verwendung von Sec-Fetch-User

Wenn ein Benutzer auf einen Seitenlink klickt, der zu einer anderen Seite im gleichen Ursprung führt, würde die resultierende Anfrage die folgenden Header haben:

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

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}} fetch metadata request headers
- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
