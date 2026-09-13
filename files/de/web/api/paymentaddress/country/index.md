---
title: "PaymentAddress: country-Eigenschaft"
short-title: country
slug: Web/API/PaymentAddress/country
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`country`** der
[`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle ist ein String, der das Land der Adresse gemäß dem [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standard identifiziert. Der String ist
immer in seiner kanonischen Großbuchstabenform.

Einige Beispiele für gültige `country`-Werte: `"US"`,
`"GB"`, `"CN"` oder `"JP"`.

## Wert

Ein String, der den ISO3166-1 alpha-2 Code enthält, der das Land identifiziert, in dem sich die Adresse befindet, oder ein leerer String, wenn kein Land verfügbar ist. Dies kann häufig als "gleiches Land wie der Seiteninhaber" interpretiert werden.

## Anwendungshinweise

Wenn der Zahlungsdienstleister die Adresse validiert und feststellt, dass der Wert von
`country` ungültig ist, wird ein Aufruf von
[`PaymentRequestUpdateEvent.updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) mit einem
`details`-Objekt gemacht, das ein `shippingAddressErrors`-
Feld enthält. Dieses Feld enthält ein Objekt, dessen
`country`-Eigenschaft ein String ist, der den
aufgetretenen Validierungsfehler angibt und, wenn möglich, Vorschläge enthält, wie dieser behoben werden kann.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`PaymentRequestUpdateEvent.updateWith`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)
