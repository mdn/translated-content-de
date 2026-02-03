---
title: Sec-Redemption-Record header
short-title: Sec-Redemption-Record
slug: Web/HTTP/Reference/Headers/Sec-Redemption-Record
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{SeeCompatTable}}

Der HTTP **`Sec-Redemption-Record`** {{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) verwendet, wenn [Redemption Records weitergeleitet](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) werden. Der Header enthält eine Liste von Aussteller- und Redemption-Record-Paaren, die jedem Redemption-Record entsprechen.

Beachten Sie, dass ein Entwickler nicht erwartet werden würde, `Sec-Redemption-Record`-Anforderungsheader zu erzeugen — diese werden automatisch vom Browser erstellt, wenn private State Token `send-redemption-record` Fetch-Anfragen aufgerufen werden.

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
  - : Ein String, der Aussteller- und Redemption-Record-Paare enthält.

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
- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
