---
title: From header
short-title: From
slug: Web/HTTP/Reference/Headers/From
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`From`** {{Glossary("request_header", "Request-Header")}} enthält eine Internet-E-Mail-Adresse eines Administrators, der einen automatisierten Benutzeragenten steuert.

Wenn Sie einen robotischen Benutzeragenten betreiben (zum Beispiel einen Web-Crawler), muss der `From` Header in Anfragen gesendet werden, damit Sie kontaktiert werden können, falls Probleme auftreten, wie zum Beispiel das Senden von übermäßigen, unerwünschten oder ungültigen Anfragen durch einen Bot.

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
