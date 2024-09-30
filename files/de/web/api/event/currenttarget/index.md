---
title: "Event: currentTarget-Eigenschaft"
short-title: currentTarget
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`currentTarget`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das Element identifiziert, an das der Ereignishandler angehängt wurde.

Dies entspricht nicht immer dem Element, auf dem das Ereignis ausgelöst wurde, da das Ereignis möglicherweise auf einem Nachfahren des Elements mit dem Handler ausgelöst wurde und dann bis zu dem Element mit dem Handler nach oben [geblubbert](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) ist. Das Element, auf dem das Ereignis ausgelöst wurde, wird durch [`Event.target`](/de/docs/Web/API/Event/target) angegeben.

Beachten Sie, dass der Wert von `currentTarget` nur in einem Handler für das Ereignis verfügbar ist. Außerhalb eines Ereignishandlers ist er `null`. Das bedeutet zum Beispiel, dass, wenn Sie innerhalb eines Ereignishandlers eine Referenz auf das `Event`-Objekt nehmen und dann außerhalb des Ereignishandlers auf dessen `currentTarget`-Eigenschaft zugreifen, der Wert `null` ist.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das das Objekt darstellt, an das der aktuelle Ereignishandler angehängt ist.

## Beispiele

### currentTarget versus target

Dieses Beispiel veranschaulicht den Unterschied zwischen `currentTarget` und `target`.

#### HTML

Die Seite enthält ein "Elternteil"-{{htmlelement("div")}}, das ein "Kind"-`<div>` enthält.

```html
<div id="parent">
  Click parent
  <div id="child">Click child</div>
</div>

<button id="reset">Reset</button>
<pre id="output"></pre>
```

```css hidden
button,
div,
pre {
  margin: 0.5rem;
}

div {
  padding: 1rem;
  border: 1px solid black;
}
```

#### JavaScript

Der Ereignishandler ist an das Elternteil angehängt. Er protokolliert den Wert von `event.currentTarget` und `event.target`.

Wir haben auch eine "Zurücksetzen"-Schaltfläche, die nur das Beispiel neu lädt.

```js
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

Wenn Sie innerhalb des Kind-`<div>` klicken, identifiziert `target` das Kind. Wenn Sie innerhalb des Elternteil-`<div>` klicken, identifiziert `target` das Elternteil.

In beiden Fällen identifiziert `currentTarget` das Elternteil, da das der Element ist, an das der Handler angehängt ist.

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
