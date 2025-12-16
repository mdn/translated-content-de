---
title: Sec-Private-State-Token header
short-title: Sec-Private-State-Token
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

Der HTTP-Header **`Sec-Private-State-Token`** existiert sowohl als Anforderungs- als auch als Antwort-Header. Er wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) während der Anfragen zur Ausstellung und Einlösung verwendet, um Anfragedaten und Antwortdaten zu übermitteln.

Während der [Token-Ausstellung](/de/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2) enthält der `Sec-Private-State-Token`-Anforderungs-Header eine Sammlung von unsignierten, geblindeten Nonces, die erforderlich sind, um ein privates Status-Token an den Ausstellungsserver zu senden. Eine erfolgreiche Antwort sollte einen `Sec-Private-State-Token`-Antwort-Header mit blindierten Signaturen enthalten, die der Browser dann entblindet und zusammen mit den ursprünglichen ungebundenen Nonces in einem sicheren Token-Speicher speichert.

Während der [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens_2) enthält der `Sec-Private-State-Token`-Anforderungs-Header ein einzelnes signiertes, ungebundenes Token zusammen mit zugehörigen Einlösemethoden. Eine erfolgreiche Antwort sollte einen `Sec-Private-State-Token`-Antwort-Header mit einem signierten Einlösungsrecords enthalten, der erneut sicher vom Browser gespeichert wird.

Es ist wichtig zu beachten, dass ein Entwickler nicht erwarten würde, `Sec-Private-State-Token`-Anforderungs-Header zu generieren — diese werden automatisch vom Browser erstellt, wenn private Status-Token `token-request`- und `token-redemption`-Fetch-Anfragen aufgerufen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-aufgelisteter Anforderungs-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Private-State-Token: <string>
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

- `<string>`
  - : Ein String, der die erforderlichen Daten für Anfragen und Antworten zur Ausstellung und Einlösung von privaten Status-Token enthält.

## Beispiele

Beispiel eines Anforderungs-Headers, der während der Token-Ausstellung gesendet wird:

```http
Sec-Private-State-Token: AEB9WGWUx398Pdr0SFE7NDo…
```

Beispiel eines Antwort-Headers:

```http
Sec-Private-State-Token: AEB9WGWUxj1085Cuk2qmt3y…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
