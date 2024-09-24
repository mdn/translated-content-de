---
title: PaymentRequestUpdateEvent
slug: Web/API/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`PaymentRequestUpdateEvent`**-Interface wird für Ereignisse verwendet, die an eine {{domxref("PaymentRequest")}}-Instanz gesendet werden, wenn Änderungen an versandbezogenen Informationen für eine ausstehende {{domxref("PaymentRequest")}} vorgenommen werden. Diese Ereignisse sind:

- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}}
  - : Wird ausgelöst, wenn der Benutzer seine Versandadresse ändert.
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}}
  - : Wird ausgelöst, wenn der Benutzer eine Versandoption ändert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PaymentRequestUpdateEvent.PaymentRequestUpdateEvent()","PaymentRequestUpdateEvent()")}}
  - : Erstellt ein neues `PaymentRequestUpdateEvent`-Objekt.

## Instanz-Eigenschaften

_Bietet nur die von seinem übergeordneten Interface, {{domxref("Event")}}, geerbten Eigenschaften._

## Instanz-Methoden

_Zusätzlich zu den von der übergeordneten Schnittstelle {{domxref("Event")}} geerbten Methoden bietet `PaymentRequestUpdateEvent` die folgenden Methoden:_

- {{domxref("PaymentRequestUpdateEvent.updateWith()")}}
  - : Wenn der Ereignishandler feststellt, dass Informationen in der Zahlungsanforderung geändert werden müssen oder neue Informationen hinzugefügt werden müssen, ruft er `updateWith()` mit den zu ersetzenden oder hinzuzufügenden Informationen auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
