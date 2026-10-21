---
title: Cross-Origin-Resource-Policy (CORP) header
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: bd5271a96d814ed6876e974186c465f1b3959e07
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Cross-Origin-Resource-Policy`** (CORP) weist den Browser an, [`no-cors`](/de/docs/Web/API/RequestInit#no-cors)-Anfragen von anderen Origins oder Websites an die betreffende Ressource zu blockieren.

Er legt fest, welchen Websites oder Origins der Eigentümer der Ressource das Laden dieser Ressource erlaubt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Ressourcen können von jeder anderen Origin oder Website geladen werden.

## Beispiele

Weitere Beispiele finden Sie unter https://resourcepolicy.fyi/.

### Cross-Origin-no-cors-Anfragen verhindern

Der folgende `Cross-Origin-Resource-Policy`-Header bewirkt, dass kompatible User Agents Cross-Origin-no-cors-Anfragen ablehnen:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erläuterung zur Cross-Origin Resource Policy (CORP)](/de/docs/Web/Security/Practical_implementation_guides/CORP)
- [Erwägen Sie den Einsatz der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
