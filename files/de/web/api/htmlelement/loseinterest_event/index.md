---
title: "HTMLElement: loseinterest Ereignis"
slug: Web/API/HTMLElement/loseinterest_event
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`loseinterest`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf dem Ziel-Element eines [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn das Interesse verloren geht, wodurch Code als Reaktion ausgeführt werden kann.

Dieses Ereignis ist normalerweise [abbrechbar](/de/docs/Web/API/Event/cancelable), es sei denn, der Benutzer drückt die <kbd>Esc</kbd>-Taste, um das Interesse an allen interest invokern im Dokument zu verlieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("loseinterest", (event) => { })

onloseinterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Verwendung von interest invoker Ereignissen

In diesem Beispiel verwenden wir die `interest`- und `loseinterest`-Ereignisse, um zu berichten, wann Interesse an einem {{htmlelement("button")}}-Element, das als interest invoker fungiert, gezeigt und verloren wird. Wir tun dies, indem wir Nachrichten in den Textinhalt des Ziel-{{htmlelement("p")}}-Elements drucken.

#### HTML

Wir richten die Beziehung zwischen dem `<button>`-Element interest invoker und seinem Ziel-`<p>`-Element ein, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements gleich der `id` des `<p>`-Elements setzen.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">No interest being shown currently.</p>
```

#### JavaScript

Wir erhalten eine Referenz zum `<button>`-Element und dessen Ziel-Element über die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement)-Eigenschaft.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Dann setzen wir zwei Ereignis-Listener auf das Ziel-Element, für die `interest`- und `loseinterest`-Ereignisse.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des Ziel-`<p>`-Elements, um das Ereignis zu berichten und das Element einzuschließen, das es ausgelöst hat; in diesem Beispiel ist das das `<button>`-Element. Beachten Sie, wie Sie über die [`source`](/de/docs/Web/API/InterestEvent/source)-Eigenschaft des Ereignisobjekts eine Referenz zum interest invoker erhalten können.
- Wenn Interesse verloren geht, aktualisieren wir den Absatztext, um zu berichten, dass kein Interesse mehr gezeigt wird.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest being shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse am Button zu zeigen und es wieder zu verlieren (zum Beispiel durch Hover oder Fokus), um zu sehen, wie sich der `<p>`-Text ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignis
- [Popover API](/de/docs/Web/API/Popover_API)
- [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
