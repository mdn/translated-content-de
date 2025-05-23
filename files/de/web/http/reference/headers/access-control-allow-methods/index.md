---
title: Access-Control-Allow-Methods header
short-title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Access-Control-Allow-Methods`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, welche [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) beim Zugriff auf eine Ressource im Antwortkontext auf eine {{Glossary("preflight_request", "Vorab-Anfrage")}} erlaubt sind.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Direktiven

- `<method>`
  - : Eine durch Kommas getrennte Liste der erlaubten Anfragemethoden. `GET`, `HEAD` und `POST` sind immer erlaubt, unabhängig davon, ob sie in diesem Header angegeben sind, da sie als [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)s definiert sind.
- `*` (Wildcard)
  - : Alle HTTP-Methoden.
    Dies hat nur dann Bedeutung, wenn es sich um Anfragen ohne Anmeldeinformationen handelt (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird es als der buchstäbliche Methodenname `*` ohne besondere Semantik behandelt.

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
