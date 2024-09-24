---
title: "Event: Methode stopImmediatePropagation()"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopImmediatePropagation()`**-Methode des
{{domxref("Event")}}-Interfaces verhindert, dass andere Listener des gleichen Ereignisses aufgerufen werden.

Wenn mehrere Listener an dasselbe Element für den gleichen Ereignistyp angehängt sind, werden sie in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Wenn `stopImmediatePropagation()` während eines solchen Aufrufs aufgerufen wird, werden keine verbleibenden Listener aufgerufen, weder auf diesem Element noch auf einem anderen Element.

## Syntax

```js-nolint
event.stopImmediatePropagation()
```

## Beispiele

### Vergleich von ereignisunterbrechenden Funktionen

Das folgende Beispiel enthält drei Schaltflächen innerhalb von drei verschachtelten divs. Jede Schaltfläche hat drei Event-Listener, die für Klickereignisse registriert sind, und jedes div hat ebenfalls einen Event-Listener, der für Klickereignisse registriert ist.

- Die obere Schaltfläche erlaubt die normale Ereignisweitergabe.
- Die mittlere Schaltfläche ruft `stopPropagation()` in ihrem ersten Event-Handler auf.
- Die untere Schaltfläche ruft `stopImmediatePropagation()` in ihrem ersten Event-Handler auf.

#### HTML

```html
<h2>Klicken Sie auf die Schaltflächen</h2>
<div>
  äußeres div<br />
  <div>
    mittleres div<br />
    <div>
      inneres div<br />
      <button>Weitergabe erlauben</button><br />
      <button id="stopPropagation">Weitergabe stoppen</button><br />
      <button id="stopImmediatePropagation">Weitergabe sofort stoppen</button>
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

Jeder Klick-Event-Handler zeigt eine Statusmeldung an, wenn er aufgerufen wird. Wenn Sie die mittlere Schaltfläche drücken, sehen Sie, dass `stopPropagation()` alle Event-Handler zulässt, die für Klicks auf dieser Schaltfläche registriert sind, aber die Ausführung der Klick-Event-Handler für die divs verhindert, die normalerweise folgen würden. Wenn Sie jedoch die untere Schaltfläche drücken, stoppt `stopImmediatePropagation()` jegliche Weitergabe nach dem Ereignis, das es aufgerufen hat.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
