---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 47d9ce2619697a821b9da6d49067ed0bf2426854
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response_header", "Antwort-Header")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors) Cross-Origin- oder Cross-Site-Anfragen an die angegebene Ressource blockieren sollte.

Er gibt die Richtlinie des Ressourcenbesitzers an, welche Websites/Ursprünge berechtigt sind, diese Ressource zu laden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Ressourcen können nur vom selben Ursprung geladen werden.

- `cross-origin`
  - : Ressourcen können von jedem anderen Ursprung/Website geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Ablehnen von Cross-Origin no-cors Anfragen

Der untenstehende `Cross-Origin-Resource-Policy` Header führt dazu, dass kompatible Benutzeragenten Cross-Origin no-cors Anfragen ablehnen:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärer](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Implementierung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
