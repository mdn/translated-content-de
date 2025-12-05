---
title: InterestEvent
slug: Web/API/InterestEvent
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("Popover API")}}

Das **`InterestEvent`**-Interface repräsentiert ein Ereignis, das auftritt, wenn Interesse an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) gezeigt oder verloren wird.

Dies ist das Ereignisobjekt für die [`interest`](/de/docs/Web/API/HTMLElement/interest_event)- und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignisse, die auf dem Zielelement ausgelöst werden, wenn Interesse gezeigt oder verloren wird.

{{InheritanceDiagram}}

## Konstruktor

- [`InterestEvent()`](/de/docs/Web/API/InterestEvent/InterestEvent)
  - : Erstellt ein `InterestEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`InterestEvent.source`](/de/docs/Web/API/InterestEvent/source) {{ReadOnlyInline}}
  - : Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das Interest Invoker-Element darstellt, bei dem Interesse gezeigt oder verloren wurde, um das Ereignis auszulösen.

## Beispiele

Sehen Sie sich den [Leitfaden zur Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) und die Referenzseite zum [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignis für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
