---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`From`**-Anforderungsheader enthält eine Internet-E-Mail-Adresse eines menschlichen Benutzers, der den anfordernden Benutzeragenten steuert.

Falls Sie einen robotischen Benutzeragenten betreiben (z. B. einen Crawler), muss der `From`-Header gesendet werden, damit Sie kontaktiert werden können, falls auf Servern Probleme auftreten, wie z.B. wenn der Roboter übermäßig viele unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für Zugriffskontrolle oder Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
From: <email>
```

## Direktiven

- \<email>
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
