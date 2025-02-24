---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response_header", "Antwort-Header")}} (CORP) zeigt an, dass der Browser `no-cors`-Cross-Origin- oder Cross-Site-Anfragen zu der angegebenen Ressource blockieren sollte.

Es legt die Richtlinie des Ressourcenbesitzers für die Websites/Ursprünge fest, die diese Ressource laden dürfen.

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

  - : Ressourcen können nur von der gleichen Website geladen werden.

- `same-origin`

  - : Ressourcen können nur vom gleichen Ursprung geladen werden.

- `cross-origin`
  - : Ressourcen können von jedem anderen Ursprung/Website geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Keine Cross-Origin-Anfragen mit no-cors zulassen

Der `Cross-Origin-Resource-Policy`-Header unten wird dazu führen, dass kompatible Benutzeragenten Cross-Origin-Anfragen mit no-cors nicht zulassen:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärung](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Bereitstellung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
