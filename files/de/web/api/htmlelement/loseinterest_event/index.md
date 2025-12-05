---
title: "HTMLElement: loseinterest-Ereignis"
slug: Web/API/HTMLElement/loseinterest_event
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`loseinterest`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf dem Zielelement eines [Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn das Interesse verloren geht, wodurch Code als Reaktion ausgeführt werden kann.

Dieses Ereignis ist normalerweise [stornierbar](/de/docs/Web/API/Event/cancelable), außer wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt, um das Interesse an allen Interest Invokern im Dokument zu verlieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("loseinterest", (event) => { })

onloseinterest = (event) => { }
```

## Ereignistyp

Ein [`InterestEvent`](/de/docs/Web/API/InterestEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("InterestEvent")}}

## Beispiele

### Grundlegende Nutzung von Interest Invoker-Ereignissen

In diesem Beispiel nutzen wir die `interest`- und `loseinterest`-Ereignisse, um zu berichten, wann Interesse an einem {{htmlelement("button")}}-Element, das als Interest Invoker agiert, gezeigt und verloren wird. Dies tun wir, indem wir Nachrichten in den Textinhalt des Ziel-{{htmlelement("p")}}-Elements drucken.

#### HTML

Wir richten die Beziehung zwischen dem `<button>`-Element als Interest Invoker und seinem Ziel-`<p>`-Element ein, indem wir den Wert des `interestfor`-Attributs des `<button>`-Elements gleich dem `id`-Attribut des `<p>`-Elements setzen.

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

Wir setzen dann zwei Ereignislistener auf das Zielelement für die `interest`- und `loseinterest`-Ereignisse.

- Wenn Interesse gezeigt wird, aktualisieren wir den Textinhalt des Ziel-`<p>`-Elements, um das Ereignis zu melden und das Element anzugeben, das es ausgelöst hat; in diesem Beispiel ist das das `<button>`-Element. Beachten Sie, wie Sie über die [`source`](/de/docs/Web/API/InterestEvent/source)-Eigenschaft des Ereignisobjekts eine Referenz auf den Interest Invoker erhalten können.
- Wenn Interesse verloren geht, aktualisieren wir den Absatztext, um zu melden, dass Interesse nicht mehr gezeigt wird.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest being shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Ergebnis

Das Beispiel rendert sich wie folgt:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Versuchen Sie, Interesse an dem Button zu zeigen und zu verlieren (zum Beispiel durch Hover oder Fokus), um zu sehen, wie sich der `<p>`-Text ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignis
- [Popover-API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers)
