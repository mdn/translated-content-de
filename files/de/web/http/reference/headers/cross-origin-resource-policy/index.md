---
title: Cross-Origin-Resource-Policy (CORP) header
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Cross-Origin-Resource-Policy`**-{{Glossary("response_header", "Antwort-Header")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors) Cross-Origin- oder Cross-Site-Anfragen zur angegebenen Ressource blockieren sollte.

Er legt die Richtlinie des Ressourcenbesitzers fest, welche Seiten/Ursprünge zum Laden dieser Ressource berechtigt sein sollen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Ressourcen können nur vom selben Ursprung geladen werden.

- `cross-origin`
  - : Ressourcen können von jedem anderen Ursprung/Website geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Verhindern von Cross-Origin no-cors-Anfragen

Der untenstehende `Cross-Origin-Resource-Policy`-Header wird dazu führen, dass kompatible Benutzeragenten Cross-Origin no-cors-Anfragen verhindern:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erläuterung zur Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Implementierung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
