---
title: Cross-Origin-Resource-Policy (CORP) header
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response_header", "Antwort-Header")}} (CORP) gibt an, dass der Browser [`no-cors`](/de/docs/Web/API/RequestInit#no-cors) Cross-Origin- oder Cross-Site-Anfragen an die angegebene Ressource blockieren sollte.

Er gibt die Richtlinie des Ressourceninhabers an, welche Seiten/Ursprünge diese Ressource laden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

  - : Ressourcen können nur von der gleichen Seite geladen werden.

- `same-origin`

  - : Ressourcen können nur von der gleichen Herkunft geladen werden.

- `cross-origin`
  - : Ressourcen können von jeder anderen Herkunft/Webseite geladen werden.

## Beispiele

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

### Cross-Origin no-cors-Anfragen verhindern

Der `Cross-Origin-Resource-Policy`-Header unten wird kompatible Benutzeragenten dazu veranlassen, Cross-Origin no-cors-Anfragen zu verhindern:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärung](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Implementierung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
