---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`From`** {{Glossary("request_header", "Request-Header")}} enthält eine Internet-E-Mail-Adresse eines Administrators, der einen automatisierten Benutzeragenten steuert.

Wenn Sie einen robotischen Benutzeragenten betreiben (zum Beispiel einen Web-Crawler), muss der `From`-Header in Anfragen gesendet werden, damit Sie kontaktiert werden können, wenn Probleme auftreten, wie zum Beispiel wenn ein Bot übermäßige, unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für Zugriffskontrolle oder Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
