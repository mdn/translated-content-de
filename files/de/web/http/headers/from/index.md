---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`From`**-Anforderungsheader enthält eine Internet-E-Mail-Adresse für eine menschliche Person, die den anfordernden Benutzeragenten kontrolliert.

Wenn Sie einen robotischen Benutzeragenten betreiben (z.B. einen Crawler), muss der `From`-Header gesendet werden, damit Sie kontaktiert werden können, falls Probleme auf Servern auftreten, wie z.B. wenn der Roboter übermäßige, unerwünschte oder ungültige Anfragen sendet.

> [!WARNING]
> Sie dürfen den `From`-Header nicht für Zugangskontrollen oder Authentifizierung verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Eine maschinell nutzbare E-Mail-Adresse.

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
