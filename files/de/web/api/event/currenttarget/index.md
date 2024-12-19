---
title: "Event: currentTarget Eigenschaft"
short-title: currentTarget
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`currentTarget`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle (nur lesend) identifiziert das Element, an das der Ereignishandler gebunden ist.

Dies entspricht nicht immer dem Element, auf dem das Ereignis ausgelöst wurde, da das Ereignis möglicherweise auf einem Nachkommen des Elements mit dem Handler ausgelöst wurde und dann [nach oben gebubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) ist zu dem Element mit dem Handler. Das Element, auf dem das Ereignis ausgelöst wurde, wird durch [`Event.target`](/de/docs/Web/API/Event/target) angegeben.

Bitte beachten Sie, dass der Wert von `currentTarget` nur in einem Handler für das Ereignis verfügbar ist. Außerhalb eines Ereignishandlers wird es `null` sein. Das bedeutet zum Beispiel, dass, wenn Sie in einem Ereignishandler eine Referenz auf das `Event`-Objekt nehmen und dann außerhalb des Ereignishandlers auf dessen `currentTarget`-Eigenschaft zugreifen, der Wert `null` sein wird.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das das Objekt darstellt, an das der aktuelle Ereignishandler gebunden ist.

## Beispiele

### currentTarget versus target

Dieses Beispiel verdeutlicht den Unterschied zwischen `currentTarget` und `target`.

#### HTML

Die Seite hat einen "Eltern"-{{htmlelement("div")}}, der ein "Kind" `<div>` enthält.

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

Der Ereignishandler ist an den Eltern gebunden. Er protokolliert den Wert von `event.currentTarget` und `event.target`.

Wir haben auch einen "Zurücksetzen"-Button, der einfach das Beispiel neu lädt.

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

Wenn Sie innerhalb des Kind-`<div>` klicken, identifiziert `target` das Kind. Wenn Sie innerhalb des Eltern-`<div>` klicken, identifiziert `target` den Eltern.

In beiden Fällen identifiziert `currentTarget` den Eltern, da das der Element ist, an das der Handler gebunden ist.

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Learn: Event bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
