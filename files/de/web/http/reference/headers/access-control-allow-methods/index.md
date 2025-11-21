---
title: Access-Control-Allow-Methods header
short-title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Access-Control-Allow-Methods`** {{Glossary("response_header", "Response-Header")}} gibt eine oder mehrere [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) an, die beim Zugriff auf eine Ressource als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} erlaubt sind.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Direktiven

- `<method>`
  - : Eine durch Kommas getrennte Liste der erlaubten Anfragemethoden. `GET`, `HEAD` und `POST` sind immer erlaubt, unabhängig davon, ob sie in diesem Header angegeben sind, da sie als [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)s definiert sind.
- `*` (Wildcard)
  - : Alle HTTP-Methoden.
    Dies hat jedoch nur für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen) diese Bedeutung. Bei Anfragen mit Anmeldeinformationen wird es
    als der methodenliterale Name `*` ohne spezielle Semantik behandelt.

## Beispiele

```http
Access-Control-Allow-Methods: PUT, DELETE
Access-Control-Allow-Methods: *
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
