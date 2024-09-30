---
title: "PaymentAddress: country Eigenschaft"
short-title: country
slug: Web/API/PaymentAddress/country
l10n:
  sourceCommit: 8b881bdd0a21b84d437977f09b4b5d53f1c351b5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`country`** des
[`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces ist ein String, der das Land der Adresse unter Verwendung des [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standards identifiziert. Der String ist immer in seiner kanonischen Großbuchstabenform.

Einige Beispiele für gültige `country`-Werte: `"US"`,
`"GB"`, `"CN"` oder `"JP"`.

## Wert

Ein String, der den ISO3166-1 alpha-2-Code enthält, welcher das Land identifiziert, in dem sich die Adresse befindet, oder ein leerer String, wenn kein Land verfügbar ist, was häufig als "gleiches Land wie der Seiteninhaber" interpretiert werden kann.

## Verwendungshinweise

Wenn der Zahlungsabwickler die Adresse validiert und feststellt, dass der Wert von
`country` ungültig ist, wird ein Aufruf an
[`PaymentRequestUpdateEvent.updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) mit einem
`details`-Objekt gemacht, das ein `shippingAddressErrors`-Feld enthält. Dieses Feld enthält ein Objekt, dessen
`country`-Eigenschaft ein String ist, der den
aufgetretenen Validierungsfehler angibt und, falls möglich, Vorschläge zur Behebung enthält.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`PaymentRequestUpdateEvent.updateWith`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)
