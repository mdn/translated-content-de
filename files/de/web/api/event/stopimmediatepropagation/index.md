---
title: "Event: stopImmediatePropagation() Methode"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopImmediatePropagation()`**-Methode des [`Event`](/de/docs/Web/API/Event)-Interfaces verhindert, dass andere Listener desselben Ereignisses aufgerufen werden.

Wenn mehrere Listener für dasselbe Element und denselben Ereignistyp registriert sind, werden sie in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Wenn `stopImmediatePropagation()` während eines solchen Aufrufs aufgerufen wird, werden keine verbleibenden Listener aufgerufen, weder auf diesem Element noch auf einem anderen Element.

## Syntax

```js-nolint
stopImmediatePropagation()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Vergleich von Funktionen zur Ereignisunterbrechung

Das Beispiel unten enthält drei Schaltflächen innerhalb von drei verschachtelten Div-Elementen. Jede Schaltfläche hat drei Event-Listener, die für Klick-Ereignisse registriert sind, und jedes Div hat einen Event-Listener, der ebenfalls für Klick-Ereignisse registriert ist.

- Die obere Schaltfläche erlaubt die normale Ereignisweiterleitung.
- Die mittlere Schaltfläche ruft `stopPropagation()` in ihrem ersten Event-Handler auf.
- Die untere Schaltfläche ruft `stopImmediatePropagation()` in ihrem ersten Event-Handler auf.

#### HTML

```html
<h2>Click on the buttons</h2>
<div>
  outer div<br />
  <div>
    middle div<br />
    <div>
      inner div<br />
      <button>allow propagation</button><br />
      <button id="stopPropagation">stop propagation</button><br />
      <button id="stopImmediatePropagation">immediate stop propagation</button>
    </div>
  </div>
</div>
<pre></pre>
```

#### CSS

```css
div {
  display: inline-block;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  margin: 10px;
}

button {
  width: 100px;
  color: #008;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  margin: 5px;
}
```

#### JavaScript

```js
const outElem = document.querySelector("pre");

/* Clear the output */
document.addEventListener(
  "click",
  () => {
    outElem.textContent = "";
  },
  true,
);

/* Set event listeners for the buttons */
document.querySelectorAll("button").forEach((elem) => {
  for (let i = 1; i <= 3; i++) {
    elem.addEventListener("click", (evt) => {
      /* Do any propagation stopping in first event handler */
      if (i === 1 && elem.id) {
        evt[elem.id]();
        outElem.textContent += `Event handler for event 1 calling ${elem.id}()\n`;
      }

      outElem.textContent += `Click event ${i} processed on "${elem.textContent}" button\n`;
    });
  }
});

/* Set event listeners for the divs */
document
  .querySelectorAll("div")
  .forEach((elem) =>
    elem.addEventListener(
      "click",
      (evt) =>
        (outElem.textContent += `Click event processed on "${elem.firstChild.data.trim()}"\n`),
    ),
  );
```

#### Ergebnis

Jeder Klick-Event-Handler zeigt einen Statusbericht an, wenn er aufgerufen wird. Wenn Sie die mittlere Schaltfläche drücken, sehen Sie, dass `stopPropagation()` alle Event-Handler, die für Klicks auf dieser Schaltfläche registriert sind, ausführt, aber die Ausführung der Klick-Event-Handler für die Divs verhindert, die normalerweise folgen würden. Wenn Sie jedoch die untere Schaltfläche drücken, stoppt `stopImmediatePropagation()` alle Weiterleitungen nach dem Ereignis, das es aufgerufen hat.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
