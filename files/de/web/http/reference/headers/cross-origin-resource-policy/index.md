---
title: Cross-Origin-Resource-Policy (CORP) header
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response_header", "Antwort-Header")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors) Cross-Origin- oder Cross-Site-Anfragen an die gegebene Ressource blockieren sollte.

Er spezifiziert die Richtlinie des Ressourcenbesitzers, von welchen Websites/Origins diese Ressource geladen werden darf.

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

  - : Ressourcen können nur von derselben Website geladen werden.

- `same-origin`

  - : Ressourcen können nur von derselben Origin geladen werden.

- `cross-origin`
  - : Ressourcen können von jeder anderen Origin/Website geladen werden.

## Beispiele

Für weitere Beispiele, siehe https://resourcepolicy.fyi/.

### Das Ablehnen von Cross-Origin no-cors Anfragen

Der untenstehende `Cross-Origin-Resource-Policy` Header wird kompatible Benutzeragenten dazu veranlassen, Cross-Origin no-cors Anfragen abzulehnen:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärung](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Überlegen Sie, die Cross-Origin Resource Policy einzusetzen](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
