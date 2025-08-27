---
title: "PaymentRequest: securePaymentConfirmationAvailability() statische Methode"
short-title: securePaymentConfirmationAvailability()
slug: Web/API/PaymentRequest/securePaymentConfirmationAvailability_static
l10n:
  sourceCommit: 8b10fe925e7bdd362ef4c0b88e305c104befa465
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{SeeCompatTable}}

Die statische Methode **`securePaymentConfirmationAvailability()`** der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Schnittstelle zeigt an, ob die Funktion [Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) (SPC) verfügbar ist.

## Syntax

```js-nolint
securePaymentConfirmationAvailability()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem aufgezählten Wert aufgelöst wird, der angibt, ob SPC verfügbar ist; falls nicht, wird ein Grund für die Nichtverfügbarkeit angegeben.

Mögliche Werte sind:

- `available`
  - : SPC ist im aufrufenden Frame verfügbar. Dies garantiert nicht, dass ein [SPC-kompatibles Anmeldeinformationsobjekt](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#creating_a_credential) zur Authentifizierung verfügbar ist.
- `unavailable-unknown-reason`
  - : SPC ist im aufrufenden Frame aus einem unbekannten Grund nicht verfügbar. Der Browser könnte dieses Ergebnis zurückgeben, anstatt einen spezifischeren Grund anzugeben, um die Privatsphäre der Nutzer zu schützen.
- `unavailable-feature-not-enabled`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil es nicht aktiviert ist.
- `unavailable-no-permission-policy`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil es durch eine [`payment`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment)-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert ist.
- `unavailable-no-user-verifying-platform-authenticator`
  - : SPC ist im aufrufenden Frame nicht verfügbar, weil kein nutzerverifizierender Plattform-Authentifikator vorhanden ist ([`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static) kann ebenfalls verwendet werden, um diese Information zu ermitteln).

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

- [Verwendung der sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)
