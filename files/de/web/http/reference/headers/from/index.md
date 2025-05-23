---
title: From header
short-title: From
slug: Web/HTTP/Reference/Headers/From
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`From`** {{Glossary("request_header", "Anfrage-Header")}} enthält eine Internet-E-Mail-Adresse eines Administrators, der einen automatisierten Benutzeragenten steuert.

Wenn Sie einen robotischen Benutzeragenten betreiben (zum Beispiel einen Web-Crawler), muss der `From`-Header in Anfragen gesendet werden, damit Sie kontaktiert werden können, falls Probleme auftreten, wie beispielsweise ein Bot, der übermäßige, unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für Zugriffskontrollen oder Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
