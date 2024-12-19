---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: c3766629e2b90dafb73fa852440f7fb57c6ae5fe
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Methods`** {{Glossary("response_header", "Antwort-Header")}} gibt eine oder mehrere zulässige [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods) an, wenn auf eine Ressource als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} zugegriffen wird.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Direktiven

- `<method>`
  - : Eine durch Kommas getrennte Liste der zulässigen Anforderungsmethoden. `GET`, `HEAD` und `POST` sind immer erlaubt, unabhängig davon, ob sie in diesem Header angegeben sind, da sie als [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)s definiert sind.
- `*` (Platzhalter)
  - : Alle HTTP-Methoden.
    Dies hat nur für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen) diese Bedeutung. Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Methodenname `*` ohne besondere Semantik behandelt.

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
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)
