---
title: "Event: stopImmediatePropagation()-Methode"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopImmediatePropagation()`**-Methode der
[`Event`](/de/docs/Web/API/Event)-Schnittstelle verhindert, dass andere Listener desselben Ereignisses aufgerufen werden.

Wenn mehrere Listener an dasselbe Element für denselben Ereignistyp angehängt sind, werden sie in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Wenn `stopImmediatePropagation()` während eines solchen Aufrufs verwendet wird, werden keine verbleibenden Listener mehr aufgerufen, weder an diesem Element noch an einem anderen Element.

## Syntax

```js-nolint
stopImmediatePropagation()
```

## Beispiele

### Vergleich von Methoden, die Ereignisse stoppen

Das folgende Beispiel enthält drei Buttons innerhalb von drei geschachtelten `div`s. Jeder Button hat drei Event-Listener, die für Klickereignisse registriert sind, und jeder `div` hat ebenfalls einen Event-Listener für Klickereignisse registriert.

- Der obere Button ermöglicht normale Ereignisausbreitung.
- Der mittlere Button ruft `stopPropagation()` in seinem ersten Event-Handler auf.
- Der untere Button ruft `stopImmediatePropagation()` in seinem ersten Event-Handler auf.

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

Jeder Klick-Event-Handler zeigt eine Statusmeldung an, wenn er aufgerufen wird. Wenn Sie den mittleren Button drücken, sehen Sie, dass `stopPropagation()` alle Event-Handler, die für Klicks auf diesen Button registriert sind, ausführen lässt, die Ausführung der Klick-Event-Handler für die `div`s, die normalerweise folgen würden, jedoch verhindert. Wenn Sie jedoch den unteren Button drücken, stoppt `stopImmediatePropagation()` alle Weiterleitungen nach dem Ereignis, das es aufgerufen hat.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
