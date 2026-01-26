---
title: Sec-Private-State-Token-Lifetime header
short-title: Sec-Private-State-Token-Lifetime
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Lifetime
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

Der HTTP-**`Sec-Private-State-Token-Lifetime`**-{{Glossary("Response_Header", "Antwort-Header")}} wird von der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) während der [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens_2) verwendet. Er wird vom Einlöser-Server gesendet, um dem Browser mitzuteilen, wie lange (in Sekunden) ein Einlösungsdatensatz zwischengespeichert werden soll. Der Einlösungsdatensatz selbst wird in einem {{httpheader("Sec-Private-State-Token")}}-Antwort-Header gesendet.

Wenn der `Sec-Private-State-Token-Lifetime`-Header weggelassen wird, wird die Lebensdauer des Einlösungsdatensatzes an die Lebensdauer des Token-Verifizierungsschlüssels gebunden, der die Ausgabe des eingelösten Tokens bestätigt hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_Header", "Antwort-Header")}}</td>
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
Sec-Private-State-Token-Lifetime: <integer>
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

- `<integer>`
  - : Ein Integer, der die Lebensdauer des gesendeten Einlösungsdatensatzes in Sekunden angibt.

## Beispiele

```http
Sec-Private-State-Token-Lifetime: 604800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
