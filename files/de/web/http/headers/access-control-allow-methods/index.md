---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Methods`** {{Glossary("response_header", "Response-Header")}} gibt eine oder mehrere erlaubte [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods) an, wenn auf eine Ressource als Antwort auf eine {{Glossary("preflight_request", "Vorab-Anfrage")}} zugegriffen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Eine durch Kommas getrennte Liste der erlaubten Anfragemethoden.
- `*` (Wildcard)
  - : Alle HTTP-Methoden.
    Dies hat diese Bedeutung nur für Anfragen ohne Berechtigungsnachweise (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). In Anfragen mit Berechtigungsnachweisen wird es als der buchstäbliche Methodenname `*` ohne besondere Semantik behandelt.

## Beispiele

```http
Access-Control-Allow-Methods: GET, POST
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
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
