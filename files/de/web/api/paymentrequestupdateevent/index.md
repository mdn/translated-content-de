---
title: PaymentRequestUpdateEvent
slug: Web/API/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`PaymentRequestUpdateEvent`** Interface wird für Ereignisse verwendet, die an eine [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz gesendet werden, wenn Änderungen an versandbezogenen Informationen für eine ausstehende [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) vorgenommen werden. Diese Ereignisse sind:

- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - : Wird ausgelöst, wenn der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)
  - : Wird ausgelöst, wenn der Benutzer eine Versandoption ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestUpdateEvent()`](/de/docs/Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent)
  - : Erstellt ein neues `PaymentRequestUpdateEvent`-Objekt.

## Instanz-Eigenschaften

_Bietet nur die von seinem Eltern-Interface [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

## Instanz-Methoden

_Zusätzlich zu den von dem Eltern-Interface [`Event`](/de/docs/Web/API/Event) geerbten Methoden bietet `PaymentRequestUpdateEvent` die folgenden Methoden:_

- [`PaymentRequestUpdateEvent.updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)
  - : Wenn der Ereignishandler feststellt, dass Informationen im Zahlungsanforderung geändert oder neue Informationen hinzugefügt werden müssen, ruft er `updateWith()` mit den Informationen auf, die ersetzt oder hinzugefügt werden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
