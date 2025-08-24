---
title: "PaymentRequest: `securePaymentConfirmationAvailability()` statische Methode"
short-title: securePaymentConfirmationAvailability()
slug: Web/API/PaymentRequest/securePaymentConfirmationAvailability_static
l10n:
  sourceCommit: 43875884a5ebc2c7de4702c31a9bdc3ecbeed610
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die statische Methode **`securePaymentConfirmationAvailability()`** der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Schnittstelle gibt an, ob die Funktion [Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) (SPC) verfügbar ist.

## Syntax

```js-nolint
securePaymentConfirmationAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem aufgelisteten Wert aufgelöst wird, der angibt, ob SPC verfügbar ist, und wenn nicht, ein Grund für die Nichtverfügbarkeit.

Mögliche Werte sind:

- `available`
  - : SPC ist im aufrufenden Frame verfügbar. Dies garantiert nicht, dass ein [SPC-kompatibles Anmeldeinformation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#creating_a_credential) zur Authentifizierung verfügbar ist.
- `unavailable-unknown-reason`
  - : SPC ist im aufrufenden Frame aus unbekannten Gründen nicht verfügbar. Der Browser kann dieses Ergebnis anstelle eines spezifischeren Grundes zurückgeben, um die Privatsphäre der Benutzer zu schützen.
- `unavailable-feature-not-enabled`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil es nicht aktiviert ist.
- `unavailable-no-permission-policy`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil es durch eine [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment) [Genehmigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
- `unavailable-no-user-verifying-platform-authenticator`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil kein Benutzer-verifizierender Plattform-Authenticator zur Verfügung steht ([`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static) kann ebenfalls verwendet werden, um diese Information zu ermitteln).

## Beispiele

```js
async function spcSupport() {
  const support = await PaymentRequest.securePaymentConfirmationAvailability();
  if (support === "available") {
    // Commence SPC payment flow
  } else {
    // Fallback to traditional flows
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)
