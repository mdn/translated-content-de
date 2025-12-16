---
title: Sec-Redemption-Record header
short-title: Sec-Redemption-Record
slug: Web/HTTP/Reference/Headers/Sec-Redemption-Record
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

Der HTTP **`Sec-Redemption-Record`** {{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) beim [Weiterleiten von Einlösungsnachweisen](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) verwendet. Der Header enthält eine Liste von Ausstellern und Einlösungsnachweis-Paaren, die zu jedem Einlösungsnachweis gehören.

Beachten Sie, dass Entwickler:innen nicht erwartet wird, `Sec-Redemption-Record`-Anfrage-Header selbst zu generieren – diese werden automatisch vom Browser erstellt, wenn private state token `send-redemption-record` Fetch-Anfragen ausgeführt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Redemption-Record: <string>
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

- `<string>`
  - : Ein String, der Aussteller- und Einlösungsnachweis-Paare enthält.

## Beispiele

```http
Sec-Redemption-Record: "https://redeemer.example";redemption-record="eyJwdWJsaWNfbWV0YWR...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Crypto-Version")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
