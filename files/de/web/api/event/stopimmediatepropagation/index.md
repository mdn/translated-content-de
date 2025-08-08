---
title: "Event: stopImmediatePropagation() Methode"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopImmediatePropagation()`**-Methode des [`Event`](/de/docs/Web/API/Event) Interfaces verhindert, dass andere Listener desselben Ereignisses aufgerufen werden.

Wenn mehrere Listener an dasselbe Element für denselben Ereignistyp angehängt sind, werden sie in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Wenn `stopImmediatePropagation()` während eines solchen Aufrufs aktiviert wird, werden keine verbleibenden Listener aufgerufen, weder bei diesem Element noch bei einem anderen Element.

## Syntax

```js-nolint
stopImmediatePropagation()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Vergleich von Funktionen zur Ereignisbeendigung

Das folgende Beispiel enthält drei Schaltflächen innerhalb von drei verschachtelten `div`-Elementen. Jede Schaltfläche hat drei Event-Listener, die für Klickereignisse registriert sind, und jedes `div` hat ebenfalls einen Event-Listener, ebenfalls für Klickereignisse registriert.

- Die oberste Schaltfläche ermöglicht normale Ereignisausbreitung.
- Die mittlere Schaltfläche ruft `stopPropagation()` in ihrem ersten Ereignishandler auf.
- Die unterste Schaltfläche ruft `stopImmediatePropagation()` in ihrem ersten Ereignishandler auf.

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
  background-color: white;
  border: 2px solid black;
  margin: 10px;
}

button {
  width: 100px;
  color: #008;
  padding: 5px;
  background-color: white;
  border: 2px solid black;
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

Jeder Klick-Ereignishandler zeigt eine Statusmeldung an, wenn er aufgerufen wird. Wenn Sie die mittlere Schaltfläche drücken, sehen Sie, dass `stopPropagation()` alle für Klicks auf dieser Schaltfläche registrierten Ereignishandler die Ausführung erlaubt, aber die Ausführung der Klick-Ereignishandler für die `divs` verhindert, die normalerweise folgen würden. Wenn Sie jedoch die unterste Schaltfläche drücken, stoppt `stopImmediatePropagation()` alle weiteren Ausbreitungen nach dem Ereignis, das sie aufgerufen hat.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
