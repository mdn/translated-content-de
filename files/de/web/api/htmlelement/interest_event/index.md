---
title: "HTMLElement: interest-Ereignis"
slug: Web/API/HTMLElement/interest_event
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`interest`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf einem [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers)-Zielelement ausgelöst, wenn Interesse gezeigt wird, wodurch es möglich ist, Code in Reaktion darauf auszuführen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("interest", (event) => { })

oninterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Nutzung von interest invoker-Ereignissen

In diesem Beispiel verwenden wir die Ereignisse `interest` und `loseinterest`, um zu melden, wann Interesse an einem {{htmlelement("button")}}-Element gezeigt und verloren wird, das als interest invoker fungiert. Wir tun dies, indem wir Nachrichten in den Textinhalt des Ziel-{{htmlelement("p")}}-Elements einfügen.

#### HTML

Wir richten die Beziehung zwischen dem `<button>`-Element interest invoker und seinem Ziel-`<p>`-Element ein, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements auf die `id` des `<p>`-Elements setzen.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">No interest being shown currently.</p>
```

#### JavaScript

Wir erhalten eine Referenz auf das `<button>`-Element und sein Zielelement über die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement)-Eigenschaft.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Wir setzen dann zwei Ereignis-Listener auf das Zielelement, für die Ereignisse `interest` und `loseinterest`.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des Ziel-`<p>`-Elements, um das Ereignis zu melden und das Element anzugeben, das es ausgelöst hat; in diesem Beispiel ist das das `<button>`-Element. Beachten Sie, wie Sie eine Referenz auf den interest invoker über die [`source`](/de/docs/Web/API/InterestEvent/source)-Eigenschaft des Ereignisobjekts erhalten können.
- Wenn Interesse verloren geht, aktualisieren wir den Text des Absatzes, um zu melden, dass kein Interesse mehr gezeigt wird.

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

Versuchen Sie, Interesse an dem Button zu zeigen und zu verlieren (zum Beispiel durch Hovern oder Fokussieren), um zu sehen, wie sich der `<p>`-Text ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignis
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
