---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response_header", "Antwort-Header")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors) Cross-Origin- oder Cross-Site-Anfragen an die angegebene Ressource blockieren soll.

Er spezifiziert die Richtlinie des Ressourcenbesitzers, welche Seiten/Ursprünge berechtigt sind, diese Ressource zu laden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

### Direktiven

- `same-site`

  - : Ressourcen können nur von derselben Site geladen werden.

- `same-origin`

  - : Ressourcen können nur vom gleichen Ursprung geladen werden.

- `cross-origin`
  - : Ressourcen können von jedem anderen Ursprung/Website geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Ablehnen von Cross-Origin-No-Cors-Anfragen

Der folgende `Cross-Origin-Resource-Policy`-Header wird dafür sorgen, dass kompatible Benutzeragenten Cross-Origin-No-Cors-Anfragen ablehnen:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin-Resource-Policy (CORP) Erklärung](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Bereitstellung der Cross-Origin-Resource-Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
