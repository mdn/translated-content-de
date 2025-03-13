---
title: From
slug: Web/HTTP/Reference/Headers/From
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`From`** {{Glossary("request_header", "Request-Header")}} enthält eine Internet-E-Mail-Adresse eines Administrators, der einen automatisierten User-Agent kontrolliert.

Wenn Sie einen robotischen User-Agent betreiben (zum Beispiel einen Web-Crawler), muss der `From` Header in Anfragen gesendet werden, damit Sie kontaktiert werden können, falls Probleme auftreten, wie etwa ein Bot, der übermäßige, unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From` Header nicht für Zugriffskontrolle oder Authentifizierung verwenden.

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
