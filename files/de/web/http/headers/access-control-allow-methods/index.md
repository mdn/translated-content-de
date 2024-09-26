---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Methods`** Antwort-Header spezifiziert eine oder mehrere erlaubte Methoden, wenn auf eine Ressource als Antwort auf eine {{glossary("preflight request")}} zugegriffen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Direktiven

- \<method>
  - : Eine durch Kommas getrennte Liste der erlaubten [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods).
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird es als der literale Methodenname `*` ohne spezielle Semantik behandelt.

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
