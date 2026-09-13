---
title: "PaymentRequest: getSecurePaymentConfirmationCapabilities() statische Methode"
short-title: getSecurePaymentConfirmationCapabilities()
slug: Web/API/PaymentRequest/getSecurePaymentConfirmationCapabilities_static
l10n:
  sourceCommit: c808a24d4e4f7bda00e7117f315965ed39b780e5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{SeeCompatTable}}

Die **`getSecurePaymentConfirmationCapabilities()`** statische Methode des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt ein Objekt zurück, das anzeigt, welche Fähigkeiten der [sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)-Funktion vom aktuellen Browser unterstützt werden.

## Syntax

```js-nolint
PaymentRequest.getSecurePaymentConfirmationCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, bei dem die Eigenschaftsnamen Zeichenfolgen sind, die sich auf die Namen der Funktionen zur sicheren Zahlungsbestätigung beziehen, und die Werte Booleans sind, die angeben, ob die Funktion verfügbar ist (`true`) oder nicht (`false`).

Bekannte Funktionen sind wie folgt:

- `browserBoundKeyHardware`
  - : Die Secure Payment Confirmation API ist in der Lage, browsergebundene Schlüssel zu verwenden, die in sicheren Hardwareelementen auf dem Gerät gespeichert sind. Ein browsergebundener Schlüssel ist ein öffentlich-privates Schlüsselpaar, das zusätzlich zu den [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Anmeldedaten über die Transaktionsdetails signiert und vom Benutzeragenten an ein einzelnes Gerät gebunden ist.

> [!NOTE]
> Der Browser kann sich dafür entscheiden, einige oder alle Fähigkeiten aus dem Objekt wegzulassen, unabhängig davon, ob sie unterstützt werden oder nicht, zum Beispiel um die Privatsphäre des Nutzers zu schützen, falls ein Missbrauch der API vermutet wird.

## Beispiele

### Grundlegende Verwendung

```js
async function spcFeatures() {
  const features =
    await PaymentRequest.getSecurePaymentConfirmationCapabilities();
  for (const [key, value] of Object.entries(features)) {
    console.log(`${key}: ${value}`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)
