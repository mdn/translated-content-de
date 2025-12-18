---
title: Sec-Redemption-Record header
short-title: Sec-Redemption-Record
slug: Web/HTTP/Reference/Headers/Sec-Redemption-Record
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

Der HTTP **`Sec-Redemption-Record`** {{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) verwendet, wenn [Einlösungsdatensätze weitergeleitet](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) werden. Der Header enthält eine Liste von Aussteller- und Einlösungsdatensatzpaaren, die jedem Einlösungsdatensatz entsprechen.

Beachten Sie, dass von einem Entwickler nicht erwartet wird, `Sec-Redemption-Record` Anfrage-Header zu generieren — diese werden automatisch vom Browser erstellt, wenn private state token `send-redemption-record` Fetch-Anfragen aufgerufen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
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
  - : Ein String, der Aussteller- und Einlösungsdatensatzpaare enthält.

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
