---
title: "Event: currentTarget-Eigenschaft"
short-title: currentTarget
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`currentTarget`** Leseeigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces identifiziert das Element, an das der Ereignishandler angehängt wurde.

Dies ist nicht immer dasselbe Element, auf dem das Ereignis ausgelöst wurde, da das Ereignis möglicherweise auf einem Nachfahren des Elements mit dem Handler ausgelöst wurde und dann nach oben zum Element mit dem Handler [gebubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) ist. Das Element, auf dem das Ereignis ausgelöst wurde, wird durch [`Event.target`](/de/docs/Web/API/Event/target) angegeben.

Beachten Sie, dass der Wert von `currentTarget` nur in einem Handler für das Ereignis verfügbar ist. Außerhalb eines Ereignis-Handlers ist es `null`. Das bedeutet zum Beispiel, dass wenn Sie innerhalb eines Ereignis-Handlers eine Referenz auf das `Event`-Objekt nehmen und dessen `currentTarget`-Eigenschaft außerhalb des Ereignis-Handlers zugreifen, sein Wert `null` sein wird.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das das Objekt repräsentiert, an welches der aktuelle Ereignis-Handler angehängt ist.

## Beispiele

### currentTarget versus target

Dieses Beispiel veranschaulicht den Unterschied zwischen `currentTarget` und `target`.

#### HTML

Die Seite hat einen "Übergeordneten" {{htmlelement("div")}}, der ein "Kind"-`<div>` enthält.

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

Der Ereignishandler ist an den übergeordneten Teil angehängt. Er protokolliert den Wert von `event.currentTarget` und `event.target`.

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

Wenn Sie in das Kind-`<div>` klicken, identifiziert `target` das Kind. Wenn Sie in das übergeordnete `<div>` klicken, identifiziert `target` das übergeordnete.

In beiden Fällen identifiziert `currentTarget` das Übergeordnete, da das der Element ist, an das der Handler angehängt ist.

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
