---
title: "HTMLElement: loseinterest-Ereignis"
slug: Web/API/HTMLElement/loseinterest_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`loseinterest`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf dem Zielelement eines [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn das Interesse verloren geht. So kann als Reaktion darauf Code ausgeführt werden.

Dieses Ereignis kann normalerweise [abgebrochen](/de/docs/Web/API/Event/cancelable) werden. Eine Ausnahme besteht, wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt, um das Interesse an allen im Dokument enthaltenen interest invokers zu beenden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("loseinterest", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Property](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onloseinterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Verwendung von Ereignissen eines interest invoker

In diesem Beispiel verwenden wir die Ereignisse `interest` und `loseinterest`, um zu melden, wann Interesse an einem {{htmlelement("button")}}-Element, das als interest invoker fungiert, gezeigt wird und wann es verloren geht. Dazu schreiben wir Meldungen in den Textinhalt des {{htmlelement("p")}}-Zielelements.

#### HTML

Wir stellen die Beziehung zwischen dem `<button>`-Element als interest invoker und seinem `<p>`-Zielelement her, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements auf die `id` des `<p>`-Elements setzen.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">No interest being shown currently.</p>
```

#### JavaScript

Wir rufen eine Referenz auf das `<button>`-Element und über die Property [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) eine Referenz auf sein Zielelement ab.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Anschließend registrieren wir am Zielelement zwei Event-Listener für die Ereignisse `interest` und `loseinterest`.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des `<p>`-Zielelements, um das Ereignis und das Element anzugeben, das es ausgelöst hat – in diesem Beispiel das `<button>`-Element. Beachten Sie, dass Sie über die Property [`source`](/de/docs/Web/API/InterestEvent/source) des Ereignisobjekts eine Referenz auf den interest invoker erhalten können.
- Wenn das Interesse verloren geht, aktualisieren wir den Absatztext, um anzugeben, dass kein Interesse mehr gezeigt wird.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest being shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Zeigen und beenden Sie das Interesse am Button (beispielsweise indem Sie den Mauszeiger darüber bewegen oder ihn fokussieren), um zu sehen, wie sich der Text des `<p>`-Elements ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignis
- [Popover API](/de/docs/Web/API/Popover_API)
- [Interest invokers verwenden](/de/docs/Web/API/Popover_API/Using_interest_invokers)
