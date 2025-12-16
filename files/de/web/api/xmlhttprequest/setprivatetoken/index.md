---
title: "XMLHttpRequest: setPrivateToken() Methode"
short-title: setPrivateToken()
slug: Web/API/XMLHttpRequest/setPrivateToken
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`setPrivateToken()`** fügt einem `XMLHttpRequest`-Aufruf Informationen zum [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) hinzu, um private State-Token-Operationen zu initiieren.

## Syntax

```js-nolint
setPrivateToken(privateToken)
```

### Parameter

- `privateToken`
  - : Ein Objekt, das Optionen für die Initiierung einer privaten State-Token-Operation enthält. Mögliche Eigenschaften umfassen:
    - `issuers` {{optional_inline}}
      - : Ein Array von Strings, das die URLs von Ausstellern enthält, für die Sie Einlösungsdatensätze weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt, in welchem Fall das `issuers`-Array enthalten sein muss.
    - `operation`
      - : Ein String, der die Art der Token-Operation darstellt, die Sie initiieren möchten. Mögliche Werte sind:
        - `token-request`
          - : Initiiert eine [Token-Anforderung](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server)-Operation.
        - `token-redemption`
          - : Initiiert eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server)-Operation.
        - `send-redemption-record`
          - : Initiiert eine [Einlösungsdatensatz senden](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2)-Operation.
    - `refreshPolicy` {{optional_inline}}
      - : Ein enumerierter Wert, der das erwartete Verhalten angibt, wenn ein nicht abgelaufener Einlösungsdatensatz für den aktuellen Benutzer und die aktuelle Website bereits festgelegt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Der zuvor festgelegte Einlösungsdatensatz sollte verwendet werden, und ein neuer sollte nicht ausgegeben werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neuer Einlösungsdatensatz wird immer ausgegeben.
    - `version`
      - : Eine Zahl, die die Version des kryptografischen Protokolls angibt, das Sie verwenden möchten, wenn Sie ein Token generieren. Derzeit ist dies immer auf `1` gesetzt, was die einzige Version ist, die die Spezifikation unterstützt. Wenn Sie die `privateToken`-Option angeben, ist diese Eigenschaft obligatorisch.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige `XMLHttpRequest` sich nicht in einem geöffneten Zustand befindet oder [`send()`](/de/docs/Web/API/XMLHttpRequest/send) bereits darauf aufgerufen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung von Operationen der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) durch eine {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} oder {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich untersagt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `operation` auf `send-redemption-record` gesetzt ist und das `issuers`-Array leer oder nicht gesetzt war, oder einer oder mehrere der angegebenen `issuers` keine vertrauenswürdigen HTTPS-URLs sind.

## Beispiele

### Ausstellen eines privaten Tokens

```js
const hasToken = await Document.hasPrivateToken(`issuer.example`);
if (!hasToken) {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://issuer.example/.well-known/private-state-token/issuance",
  );
  request.setPrivateToken({
    version: 1,
    operation: "token-request",
  });
  req.send();
}
```

### Einlösen eines privaten Tokens

```js
const request = new XMLHttpRequest();
request.open(
  "POST",
  "https://issuer.example/.well-known/private-state-token/redemption",
);
request.setPrivateToken({
  version: 1,
  operation: "token-redemption",
  refreshPolicy: "none",
});
req.send();
```

### Weiterleiten eines Einlösungsdatensatzes

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  const request = new XMLHttpRequest();
  request.open("POST", "some-resource.example");
  request.setPrivateToken({
    version: 1,
    operation: "send-redemption-record",
    issuers: ["https://issuer.example"],
  });
  req.send();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
