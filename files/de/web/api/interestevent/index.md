---
title: InterestEvent
slug: Web/API/InterestEvent
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Popover API")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`InterestEvent`**-Interface repräsentiert ein Ereignis, das ausgelöst wird, wenn Interesse an einem [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) gezeigt oder verloren wird.

Dies ist das Ereignisobjekt für die [`interest`](/de/docs/Web/API/HTMLElement/interest_event)- und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignisse, die auf dem Zielelement ausgelöst werden, wenn Interesse gezeigt oder verloren wird.

{{InheritanceDiagram}}

## Konstruktor

- [`InterestEvent()`](/de/docs/Web/API/InterestEvent/InterestEvent) {{experimental_inline}} {{non-standard_inline}}
  - : Erstellt ein `InterestEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`InterestEvent.source`](/de/docs/Web/API/InterestEvent/source) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das Interest Invoker-Element repräsentiert, bei dem Interesse gezeigt oder verloren wurde, um das Ereignis auszulösen.

## Beispiele

Siehe den [Leitfaden zur Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) und die Referenzseite des [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignisses für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
