---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 3eea6ef9070a54ffd6379164ff9fd39db66b5172
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Methods`** Antwort-Header gibt eine oder mehrere Methoden an, die beim Zugriff auf eine Ressource als Antwort auf eine {{glossary("preflight request")}} erlaubt sind.

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
  - : Der Wert "`*`" zählt nur als spezieller Platzhalterwert für Anfragen
    ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird er als literaler Methodenname "`*`" ohne spezielle Semantik behandelt.

## Beispiele

```http
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Methods: *
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
