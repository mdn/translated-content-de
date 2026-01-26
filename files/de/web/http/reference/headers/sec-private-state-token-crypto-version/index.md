---
title: Sec-Private-State-Token-Crypto-Version header
short-title: Sec-Private-State-Token-Crypto-Version
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Crypto-Version
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

Der HTTP **`Sec-Private-State-Token-Crypto-Version`** {{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) während der [Token-Ausgabe](/de/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2) verwendet, um dem ausgebenden Server anzuzeigen, welche kryptografische Protokollversion zum Signieren von geblendeten Nonces bei der Generierung von Tokens verwendet werden soll.

Zum Zeitpunkt des Verfassens dieses Dokuments wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht es, in Zukunft mehrere Versionen zu unterstützen.

Es ist zu beachten, dass von einem Entwickler nicht erwartet wird, `Sec-Private-State-Token-Crypto-Version`-Anfrageheader zu generieren – diese werden automatisch vom Browser erstellt, wenn private State-Token-`token-request`-Fetch-Anfragen aufgerufen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anfrageheader")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Private-State-Token-Crypto-Version: <string>
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

- `<string>`
  - : Ein String, der die kryptografische Protokollversion enthält, die vom ausgebenden Server zum Signieren von geblendeten Nonces bei der Generierung von Tokens verwendet werden soll.

## Beispiele

```http
Sec-Private-State-Token-Crypto-Version: PrivateStateTokenV1VOPRF
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
