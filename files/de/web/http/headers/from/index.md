---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`From`**- {{Glossary("request_header", "Request-Header")}} enthält eine Internet-E-Mail-Adresse eines Administrators, der einen automatisierten User-Agent kontrolliert.

Wenn Sie einen roboterartigen User-Agent (zum Beispiel einen Webcrawler) betreiben, muss der `From`-Header in Anfragen gesendet werden, damit Sie kontaktiert werden können, falls Probleme auftreten, wie ein Bot, der übermäßig viele, unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für Zugangskontrolle oder Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
From: <email>
```

## Direktiven

- `<email>`
  - : Eine maschinenlesbare E-Mail-Adresse.

## Beispiele

```http
From: webmaster@example.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Host")}}
