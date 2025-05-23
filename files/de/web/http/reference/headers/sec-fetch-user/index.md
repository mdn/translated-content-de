---
title: Sec-Fetch-User header
short-title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Sec-Fetch-User`**-{{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} wird für Anfragen gesendet, die durch eine Benutzeraktion initiiert wurden, und sein Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um zu identifizieren, ob eine Navigationsanfrage von einem Dokument, iframe usw. durch den Benutzer initiiert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
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

Der Wert wird immer `?1` sein. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktivierung ausgelöst wird, verlangen die Spezifikationen, dass Browser den Header vollständig weglassen.

## Beispiele

### Verwendung von Sec-Fetch-User

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite im gleichen Ursprung klickt, hätte die resultierende Anfrage die folgenden Header:

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

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}} Fetch-Metadaten-Anforderungs-Header
- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
