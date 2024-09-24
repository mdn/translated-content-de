---
title: "PaymentAddress: country-Eigenschaft"
short-title: country
slug: Web/API/PaymentAddress/country
l10n:
  sourceCommit: 8b881bdd0a21b84d437977f09b4b5d53f1c351b5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`country`** des {{domxref('PaymentAddress')}}-Interfaces ist ein String, der das Land der Adresse anhand des [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standards identifiziert. Der String ist immer in seiner kanonischen Großschreibweise.

Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.

## Wert

Ein String, der den ISO3166-1 alpha-2-Code enthält, der das Land identifiziert, in dem sich die Adresse befindet, oder ein leerer String, falls kein Land verfügbar ist, was häufig bedeuten kann "gleiches Land wie der Seitenbetreiber".

## Verwendungshinweise

Falls der Zahlungsdienstleister die Adresse validiert und feststellt, dass der Wert von `country` ungültig ist, wird ein Aufruf an {{domxref("PaymentRequestUpdateEvent.updateWith()")}} mit einem `details`-Objekt gemacht, das ein `shippingAddressErrors`-Feld enthält. Dieses Feld enthält ein Objekt, dessen `country`-Eigenschaft ein String ist, der den Validierungsfehler angibt, der aufgetreten ist, und, wenn möglich, Vorschläge, wie dieser behoben werden kann.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequestUpdateEvent.updateWith")}}
