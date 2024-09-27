---
title: PaymentRequestUpdateEvent
slug: Web/API/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`PaymentRequestUpdateEvent`**-Interface wird für Ereignisse verwendet, die an eine [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz gesendet werden, wenn Änderungen an versandbezogenen Informationen für eine ausstehende [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) stattfinden. Diese Ereignisse sind:

- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - : Wird ausgelöst, wenn der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)
  - : Wird ausgelöst, wenn der Benutzer eine Versandoption ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestUpdateEvent()`](/de/docs/Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent)
  - : Erstellt ein neues `PaymentRequestUpdateEvent`-Objekt.

## Instanz-Eigenschaften

_Bietet nur die Eigenschaften, die von seiner Elternschnittstelle [`Event`](/de/docs/Web/API/Event) geerbt werden._

## Instanz-Methoden

_Zusätzlich zu Methoden, die von der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) geerbt werden, bietet `PaymentRequestUpdateEvent` die folgenden Methoden:_

- [`PaymentRequestUpdateEvent.updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)
  - : Wenn der Ereignis-Handler feststellt, dass Informationen im Zahlungsantrag geändert oder neue Informationen hinzugefügt werden müssen, ruft er `updateWith()` mit den zu ersetzenden oder hinzuzufügenden Informationen auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
