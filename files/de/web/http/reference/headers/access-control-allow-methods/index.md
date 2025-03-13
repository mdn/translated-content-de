---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Methods`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche ein oder mehrere [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) zulässig sind, wenn auf eine Ressource als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} zugegriffen wird.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Direktiven

- `<method>`
  - : Eine kommagetrennte Liste der zulässigen Anfragemethoden. `GET`, `HEAD` und `POST` sind immer erlaubt, unabhängig davon, ob sie in diesem Header angegeben sind, da sie als [CORS-gesicherte Methode](https://fetch.spec.whatwg.org/#cors-safelisted-method) definiert sind.
- `*` (Wildcard)
  - : Alle HTTP-Methoden.
    Diese Bedeutung hat es nur für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird es als der buchstäbliche Methodenname `*` ohne besondere Semantik behandelt.

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
