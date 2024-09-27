---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
l10n:
  sourceCommit: eb11f0bd259ff4aa109067c7714bbe229285a499
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`PaymentMethodChangeEvent`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) beschreibt das [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis, das von einigen Zahlungsabwicklern ausgelöst wird, wenn der Benutzer das Zahlungsmittel wechselt (z. B. wenn ein Benutzer beim Verwenden von Apple Pay eine "Shop"-Karte auswählt, um einen Kauf zu tätigen).

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentMethodChangeEvent()`](/de/docs/Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent)
  - : Erstellt und gibt ein neues `PaymentMethodChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den untenstehenden Eigenschaften enthält diese Schnittstelle Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt wurden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die nützlich sind, wenn eine Zahlungsmethode geändert wird. Wenn keine solchen Informationen verfügbar sind, ist dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Ein String, der den Identifikator der Zahlungsmethode enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Identifikator ist normalerweise eine URL, die während des Zahlungsvorgangs verwendet wird, kann aber auch ein standardisierter, nicht URL-basierter String wie `basic-card` sein. Der Standardwert ist der leere String `""`.

## Instanz-Methoden

_Diese Schnittstelle enthält Methoden, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt wurden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
