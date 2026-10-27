---
title: "PublicKeyCredential: Statische Methode isConditionalMediationAvailable()"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: fc8ab6bcb82917a1a42fb95c2b3dd27a7f1b4807
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit `true` erfüllt wird, wenn das Gerät [conditional get](/de/docs/Web/API/Web_Authentication_API#autofill_ui) unterstützt.

Dies entspricht einem von [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities) zurückgegebenen Objekt, dessen [`conditionalGet`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static#conditionalget)-Eigenschaft den Wert `true` hat. Entwicklern wird empfohlen, diese API zu bevorzugen.

> [!NOTE]
> Diese Methode gibt **nicht** an, ob [conditional create](/de/docs/Web/API/Web_Authentication_API#conditional_create) unterstützt wird. Prüfen Sie dazu den Wert von [`conditionalCreate`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static#conditionalcreate) im Objekt, das [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities) zurückgibt.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert erfüllt wird, der angibt, ob conditional get verfügbar ist.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit folgendem Wert zurückgewiesen werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

Prüfen Sie vor dem Aufruf einer conditional WebAuthn API, ob:

- der Browser die Web Authentication API unterstützt.
- der Browser conditional get unterstützt.

```js
// Availability of `window.PublicKeyCredential` means WebAuthn is usable.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Check if conditional get is available.
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // Call WebAuthn authentication
    const publicKeyCredentialRequestOptions = {
      // Server generated challenge
      challenge: challengeFromServer,
      // The same RP ID as used during registration
      rpId: "example.com",
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
      signal: abortController.signal,
      // Specify 'conditional' to activate conditional UI
      mediation: "conditional",
    });
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
