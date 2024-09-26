---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`From`**-Request-Header enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzer-Agenten kontrolliert.

Wenn Sie einen automatisierten Benutzer-Agenten (z.B. einen Crawler) betreiben, muss der `From`-Header gesendet werden, damit Sie kontaktiert werden können, wenn auf den Servern Probleme auftreten, beispielsweise wenn der Roboter eine übermäßige Anzahl von unerwünschten oder ungültigen Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für den Zugriffsschutz oder die Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
