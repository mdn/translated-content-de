---
title: "HTMLElement: interest event"
slug: Web/API/HTMLElement/interest_event
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`interest`**-Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird auf dem Ziel-Element eines [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn Interesse gezeigt wird, und ermöglicht es, Code als Reaktion auszuführen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("interest", (event) => { })

oninterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Nutzung von interest invoker-Ereignissen

In diesem Beispiel verwenden wir die `interest`- und `loseinterest`-Ereignisse, um zu berichten, wenn Interesse auf einem {{htmlelement("button")}}-Element gezeigt und verloren wird, das als interest invoker fungiert. Wir tun dies, indem wir Nachrichten in die Textinhalte des Ziel-{{htmlelement("p")}}-Elements drucken.

#### HTML

Wir richten die Beziehung zwischen dem `<button>`-Element interest invoker und seinem Ziel-`<p>`-Element ein, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements gleich der `id` des `<p>`-Elements setzen.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">No interest being shown currently.</p>
```

#### JavaScript

Wir erhalten eine Referenz auf das `<button>`-Element und sein Ziel-Element über die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement)-Eigenschaft.

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

Dann setzen wir zwei Ereignislistener auf das Ziel-Element, für die `interest`- und `loseinterest`-Ereignisse.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des Ziel-`<p>`-Elements, um das Ereignis zu melden und das auslösende Element einzuschließen; in diesem Beispiel ist das das `<button>`-Element. Beachten Sie, wie Sie über die [`source`](/de/docs/Web/API/InterestEvent/source)-Eigenschaft des Ereignisobjekts eine Referenz auf den interest invoker erhalten können.
- Wenn Interesse verloren geht, aktualisieren wir den Absatztext, um zu melden, dass Interesse nicht mehr gezeigt wird.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Ergebnis

Das Beispiel wird folgendermaßen dargestellt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse zu zeigen und zu verlieren (zum Beispiel durch Überfahren oder Fokussieren der Schaltfläche), um zu sehen, wie sich der `<p>`-Text ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignis
- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
