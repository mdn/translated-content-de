---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}

Der **`Sec-Fetch-User`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} wird nur für Anfragen gesendet, die durch eine Benutzeraktion initiiert werden, und sein Wert ist immer `?1`.

Ein Server kann diesen Header verwenden, um festzustellen, ob eine Navigationsanfrage von einem Dokument, einem `<iframe>` usw. vom Benutzer ausgelöst wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
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

Der Wert ist immer `?1`. Wenn eine Anfrage nicht durch eine Benutzeraktion ausgelöst wird, verlangt die Spezifikation, dass Browser den Header vollständig weglassen.

## Beispiele

Wenn ein Benutzer auf einen Link auf einer Seite zu einer anderen Seite im selben Ursprung klickt, hätte die resultierende Anfrage die folgenden Header:

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

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
