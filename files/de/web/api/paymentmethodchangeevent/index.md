---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
l10n:
  sourceCommit: eb11f0bd259ff4aa109067c7714bbe229285a499
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`PaymentMethodChangeEvent`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) beschreibt das [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis, das von einigen Zahlungsabwicklern ausgelöst wird, wenn der Benutzer die Zahlungsmittel wechselt (z. B. wählt ein Benutzer eine "Store"-Karte, um einen Kauf während der Nutzung von Apple Pay abzuschließen).

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentMethodChangeEvent()`](/de/docs/Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent)
  - : Erstellt und gibt ein neues `PaymentMethodChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften umfasst diese Schnittstelle Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt werden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die beim Umgang mit einer Zahlungsmethodenänderung nützlich sind. Wenn keine solchen Informationen verfügbar sind, ist dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Ein String, der den Zahlungsmethoden-Bezeichner enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Bezeichner ist normalerweise eine URL, die während des Zahlungsvorgangs verwendet wird, kann aber auch ein standardisierter Nicht-URL-String sein, wie `basic-card`. Der Standardwert ist der leere String, `""`.

## Instanz-Methoden

_Diese Schnittstelle umfasst Methoden, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt werden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
