---
title: Sec-Private-State-Token header
short-title: Sec-Private-State-Token
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

Der HTTP-Header **`Sec-Private-State-Token`** existiert sowohl als Anforderungs- als auch als Antwort-Header. Er wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) während Ausstellungs- und Einlösevorgängen verwendet, um Anforderungs- und Antwortdaten zu übertragen.

Während der [Token-Ausstellung](/de/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2) enthält der `Sec-Private-State-Token`-Anforderungsheader eine Sammlung von nicht signierten, geblendeten Nonces, die erforderlich sind, um ein privates Status-Token an den Ausstellungsserver zu generieren. Eine erfolgreiche Antwort sollte einen `Sec-Private-State-Token`-Antwortheader enthalten, der Blind-Signaturen enthält, die der Browser dann entblendet und zusammen mit den ursprünglichen, nicht geblendeten Nonces in einem sicheren Token-Speicher speichert.

Während der [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens_2) enthält der `Sec-Private-State-Token`-Anforderungsheader ein einzelnes signiertes, nicht geblendetes Token zusammen mit zugehörigen Einlösemetadaten. Eine erfolgreiche Antwort sollte einen `Sec-Private-State-Token`-Antwortheader enthalten, der einen signierten Einlösungsdatensatz enthält, der wiederum vom Browser sicher gespeichert wird.

Es ist zu beachten, dass ein Entwickler nicht erwartet wird, `Sec-Private-State-Token`-Anforderungsheader zu generieren — diese werden automatisch vom Browser erstellt, wenn private Status-Token `token-request` und `token-redemption` Fetch-Anfragen aufgerufen werden.

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
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
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
  - : Ein String, der die erforderlichen Daten für Ausstellungs- und Einlösevorgänge von privaten Status-Token-Anfragen und -Antworten enthält.

## Beispiele

Beispiel für einen Anforderungsheader, der während der Token-Ausstellung gesendet wird:

```http
Sec-Private-State-Token: AEB9WGWUx398Pdr0SFE7NDo…
```

Beispiel für einen Antwortheader:

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
