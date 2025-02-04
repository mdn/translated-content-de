---
title: "PublicKeyCredential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst, wenn [bedingte Mediation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) verfügbar ist.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem booleschen Wert auflöst, der angibt, ob die bedingte Mediation verfügbar ist oder nicht.

## Beispiele

Bevor Sie einen bedingten WebAuthn-API-Aufruf ausführen, sollten Sie prüfen, ob:

- Der Browser die Web Authentication API unterstützt.
- Der Browser die bedingte WebAuthn-UI unterstützt.

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
      challenge: ****,
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
> Weitere Informationen zur Verwendung der bedingten Mediation finden Sie unter [Anmelden mit einem Passkey über das automatische Ausfüllen von Formularen](https://web.dev/articles/passkey-form-autofill).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
