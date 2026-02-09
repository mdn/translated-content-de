---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`isConditionalMediationAvailable()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst, wenn [bedingte Vermittlung](/de/docs/Web/API/Web_Authentication_API#autofill_ui) verfügbar ist.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf einen booleschen Wert auflöst und anzeigt, ob die bedingte Vermittlung verfügbar ist oder nicht.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beispiele

Bevor Sie einen bedingten WebAuthn-API-Aufruf durchführen, überprüfen Sie:

- Ob der Browser die Web Authentication API unterstützt.
- Ob der Browser die bedingte Vermittlung unterstützt.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
