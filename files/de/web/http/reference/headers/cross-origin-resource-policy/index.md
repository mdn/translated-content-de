---
title: Cross-Origin-Resource-Policy (CORP) header
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Cross-Origin-Resource-Policy`**-{{Glossary("response_header", "Antwortheader")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors)-Cross-Origin- oder Cross-Site-Anfragen zu der angegebenen Ressource blockieren soll.

Er legt die Richtlinie des Ressourceneigentümers fest, welche Sites/Ursprünge diese Ressource laden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ressourcen können von jedem anderen Ursprung/Webseite geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Verhindern von `no-cors`-Cross-Origin-Anfragen

Der folgende `Cross-Origin-Resource-Policy`-Header bewirkt, dass kompatible Benutzeragenten `no-cors`-Cross-Origin-Anfragen verhindern:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärer](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Bereitstellung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
