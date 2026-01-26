---
title: "XMLHttpRequest: setPrivateToken() Methode"
short-title: setPrivateToken()
slug: Web/API/XMLHttpRequest/setPrivateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}{{SeeCompatTable}}

Die Methode **`setPrivateToken()`** von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) fügt einem `XMLHttpRequest`-Aufruf Informationen zu einem [privaten Status-Token](/de/docs/Web/API/Private_State_Token_API/Using) hinzu, um private Status-Token-Operationen zu starten.

## Syntax

```js-nolint
setPrivateToken(privateToken)
```

### Parameter

- `privateToken`
  - : Ein Objekt, das Optionen zum Starten einer privaten Status-Token-Operation enthält. Mögliche Eigenschaften sind:
    - `issuers` {{optional_inline}}
      - : Ein Array von Strings, das die URLs der Herausgeber enthält, für die Sie Einlöseaufzeichnungen weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt. In diesem Fall muss das `issuers`-Array enthalten sein.
    - `operation`
      - : Ein String, der den Typ der Token-Operation darstellt, die Sie starten möchten. Mögliche Werte sind:
        - `token-request`
          - : Startet eine [Token-Anfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server).
        - `token-redemption`
          - : Startet eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server).
        - `send-redemption-record`
          - : Startet eine [Weiterleitung einer Einlöseaufzeichnung](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2).
    - `refreshPolicy` {{optional_inline}}
      - : Ein enumerierter Wert, der das erwartete Verhalten angibt, wenn ein nicht abgelaufenes Einlöse-Dokument für den aktuellen Benutzer und die Seite zuvor festgelegt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Das zuvor festgelegte Einlöse-Dokument sollte verwendet werden, und ein neues sollte nicht ausgestellt werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neues Einlöse-Dokument wird immer ausgestellt.
    - `version`
      - : Eine Zahl, die die Version des kryptografischen Protokolls angibt, das Sie bei der Token-Generierung verwenden möchten. Derzeit ist dies immer auf `1` gesetzt, die einzige Version, die die Spezifikation unterstützt. Bei Angabe der `privateToken`-Option ist diese Eigenschaft obligatorisch.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige `XMLHttpRequest` sich nicht in einem geöffneten Zustand befindet oder [`send()`](/de/docs/Web/API/XMLHttpRequest/send) bereits aufgerufen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung von [Private State Token API](/de/docs/Web/API/Private_State_Token_API)-Operationen ausdrücklich durch eine {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} oder {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausgeschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `operation` auf `send-redemption-record` gesetzt ist und das `issues`-Array leer oder nicht gesetzt war oder einer oder mehrere der angegebenen `issuers` keine vertrauenswürdigen HTTPS-URLs sind.

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

### Weiterleiten einer Einlöseaufzeichnung

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
