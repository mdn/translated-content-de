---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn [bedingte Vermittlung](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) verfügbar ist.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Booleschen Wert aufgelöst wird, der angibt, ob bedingte Vermittlung verfügbar ist oder nicht.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

Bevor Sie einen bedingten WebAuthn-API-Aufruf tätigen, prüfen Sie, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die WebAuthn-bedingte UI unterstützt.

```js
// Availability of `window.PublicKeyCredential` means WebAuthn is usable.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Check if conditional mediation is available.
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

> [!NOTE]
> Weitere Informationen zur Verwendung von bedingter Vermittlung finden Sie unter [Mit einem Passkey über die automatische Formularausfüllung anmelden](https://web.dev/articles/passkey-form-autofill).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
