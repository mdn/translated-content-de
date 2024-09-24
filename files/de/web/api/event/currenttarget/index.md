---
title: "Event: Eigenschaft currentTarget"
short-title: currentTarget
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`currentTarget`**-Eigenschaft des {{domxref("Event")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die das Element identifiziert, an das der Ereignishandler gebunden ist.

Dies ist nicht immer dasselbe Element, auf dem das Ereignis ausgelöst wurde, da das Ereignis möglicherweise auf einem Nachfahren des Elements mit dem Handler ausgelöst wurde und dann [nach oben gebubbled](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) ist zum Element mit dem Handler. Das Element, auf dem das Ereignis ausgelöst wurde, wird durch {{domxref("Event.target")}} angegeben.

Beachten Sie, dass der Wert von `currentTarget` nur in einem Handler für das Ereignis verfügbar ist. Außerhalb eines Ereignishandlers ist er `null`. Das bedeutet zum Beispiel, dass, wenn Sie innerhalb eines Ereignishandlers eine Referenz auf das `Event`-Objekt nehmen und seine `currentTarget`-Eigenschaft außerhalb des Ereignishandlers zugreifen, sein Wert `null` sein wird.

## Wert

Ein {{domxref("EventTarget")}}, das das Objekt repräsentiert, an das der aktuelle Ereignishandler gebunden ist.

## Beispiele

### currentTarget versus target

Dieses Beispiel zeigt den Unterschied zwischen `currentTarget` und `target`.

#### HTML

Die Seite enthält ein "Eltern"-{{htmlelement("div")}}, das ein "Kind"-`<div>` enthält.

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

Wir haben auch eine "Reset"-Schaltfläche, die einfach das Beispiel neu lädt.

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

Wenn Sie in das Kind-`<div>` klicken, identifiziert `target` das Kind. Wenn Sie in das Eltern-`<div>` klicken, identifiziert `target` das Elternteil.

In beiden Fällen identifiziert `currentTarget` das Elternteil, da das der Knoten ist, an dem der Handler angebracht ist.

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignis-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
