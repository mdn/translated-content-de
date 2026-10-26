---
title: "HTMLElement: interest-Ereignis"
slug: Web/API/HTMLElement/interest_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`interest`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf dem Zielelement eines [Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn Interesse gezeigt wird. So kann als Reaktion darauf Code ausgeführt werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("interest", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oninterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Verwendung von Ereignissen eines Interest Invokers

In diesem Beispiel verwenden wir die Ereignisse `interest` und `loseinterest`, um zu melden, wann Interesse an einem {{htmlelement("button")}}-Element, das als Interest Invoker dient, gezeigt wird und wann es endet. Dazu schreiben wir Meldungen in den Textinhalt des als Ziel dienenden {{htmlelement("p")}}-Elements.

#### HTML

Wir stellen die Beziehung zwischen dem `<button>`-Element als Interest Invoker und seinem Ziel, dem `<p>`-Element, her, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements auf die `id` des `<p>`-Elements setzen.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">No interest being shown currently.</p>
```

#### JavaScript

Über die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement)-Eigenschaft erhalten wir eine Referenz auf das `<button>`-Element und sein Zielelement.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Anschließend fügen wir dem Zielelement zwei Event-Listener hinzu: einen für `interest` und einen für `loseinterest`.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des als Ziel dienenden `<p>`-Elements, um das Ereignis und das Element zu nennen, das es ausgelöst hat – in diesem Beispiel das `<button>`-Element. Beachten Sie, dass Sie über die [`source`](/de/docs/Web/API/InterestEvent/source)-Eigenschaft des Ereignisobjekts eine Referenz auf den Interest Invoker erhalten können.
- Wenn das Interesse endet, aktualisieren wir den Text des Absatzes, um zu melden, dass kein Interesse mehr gezeigt wird.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Zeigen Sie Interesse an der Schaltfläche und beenden Sie es wieder (beispielsweise indem Sie den Mauszeiger darüber bewegen oder die Schaltfläche fokussieren), um zu sehen, wie sich der Text des `<p>`-Elements ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignis
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
