---
title: Sec-Private-State-Token-Crypto-Version header
short-title: Sec-Private-State-Token-Crypto-Version
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Crypto-Version
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

Der HTTP **`Sec-Private-State-Token-Crypto-Version`** {{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Anforderungsheader")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) während der [Token-Ausgabe](/de/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2) verwendet, um dem Ausstellerserver anzugeben, welche kryptografische Protokollversion zum Signieren von geblendeten Nonces bei der Token-Generierung verwendet werden soll.

Zum Zeitpunkt der Erstellung dieses Textes wird nur eine Version unterstützt, aber dieser Mechanismus ermöglicht es, in Zukunft mehrere Versionen zu unterstützen.

Beachten Sie, dass Entwickler keine `Sec-Private-State-Token-Crypto-Version`-Anforderungsheader generieren müssen – diese werden automatisch vom Browser erstellt, wenn private State Token `token-request` Fetch-Anfragen aufgerufen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
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
  - : Ein String, der die kryptografische Protokollversion enthält, die vom Ausstellerserver verwendet werden soll, um geblendete Nonces bei der Token-Generierung zu signieren.

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
