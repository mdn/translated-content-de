---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
l10n:
  sourceCommit: eb11f0bd259ff4aa109067c7714bbe229285a499
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`PaymentMethodChangeEvent`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) beschreibt das {{domxref("PaymentRequest/paymentmethodchange_event", "paymentmethodchange")}}-Ereignis, das von einigen Zahlungshandlungen ausgelöst wird, wenn der Benutzer das Zahlungsmittel wechselt (z.B. wenn ein Benutzer eine "store"-Karte auswählt, um einen Kauf mit Apple Pay zu tätigen).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PaymentMethodChangeEvent.PaymentMethodChangeEvent", "PaymentMethodChangeEvent()")}}
  - : Erstellt und gibt ein neues `PaymentMethodChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften beinhaltet diese Schnittstelle auch Eigenschaften, die von {{domxref("PaymentRequestUpdateEvent")}} geerbt werden._

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethoden-spezifische Daten enthält, die nützlich sind, wenn ein Zahlungsmethodenwechsel bearbeitet wird. Wenn keine solche Information verfügbar ist, hat dieser Wert `null`.
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}}
  - : Ein String, der den Bezeichner der Zahlungsmethode enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Bezeichner ist üblicherweise eine URL, die während des Zahlungsvorgangs verwendet wird, kann aber auch ein standardisierter, nicht-URL-String wie `basic-card` sein. Der Standardwert ist der leere String, `""`.

## Instanz-Methoden

_Diese Schnittstelle beinhaltet Methoden, die von {{domxref("PaymentRequestUpdateEvent")}} geerbt werden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
