---
title: Sec-Fetch-User header
short-title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Sec-Fetch-User`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} wird für Anfragen gesendet, die durch eine Benutzeraktion initiiert wurden, und sein Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um festzustellen, ob eine Navigationsanforderung von einem Dokument, `iframe` usw. durch den Benutzer initiiert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Prefix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gewhitelisteter Anforderungs-Header")}}
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

Der Wert wird immer `?1` sein. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktivierung ausgelöst wird, verlangt die Spezifikation, dass Browser den Header vollständig weglassen.

## Beispiele

### Verwendung von Sec-Fetch-User

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite im gleichen Ursprung klickt, würde die resultierende Anfrage die folgenden Header enthalten:

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
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
