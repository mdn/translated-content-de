---
title: "Event: eventPhase-Eigenschaft"
short-title: eventPhase
slug: Web/API/Event/eventPhase
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`eventPhase`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt an, welche Phase des Ereignisflusses derzeit ausgewertet wird.

## Wert

Gibt einen ganzzahligen Wert zurück, der die aktuelle Auswertungsphase des Ereignisflusses angibt. Mögliche Werte sind:

- `Event.NONE` (0)
  - : Das Ereignis wird zu diesem Zeitpunkt nicht verarbeitet.
- `Event.CAPTURING_PHASE` (1)
  - : Das Ereignis wird durch die Vorfahrenobjekte des Ziels weitergeleitet.
    Dieser Prozess beginnt mit dem [`Window`](/de/docs/Web/API/Window), dann dem [`Document`](/de/docs/Web/API/Document),
    dann dem [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement) und so weiter durch die Elemente,
    bis der Elternteil des Ziels erreicht wird.
    [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener),
    die im Capture-Modus registriert wurden, als [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen wurde, werden in dieser Phase ausgelöst.
- `Event.AT_TARGET` (2)
  - : Das Ereignis hat [das Ziel des Ereignisses](/de/docs/Web/API/EventTarget) erreicht.
    Ereignis-Listener, die für diese Phase registriert wurden, werden zu diesem Zeitpunkt aufgerufen. Wenn
    [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) `false` ist, wird die Verarbeitung
    nach Abschluss dieser Phase beendet.
- `Event.BUBBLING_PHASE` (3)
  - : Das Ereignis wird in umgekehrter Reihenfolge wieder zurück durch die Vorfahren des Ziels propagiert,
    beginnend mit dem Elternteil und schließlich das umgebende [`Window`](/de/docs/Web/API/Window) erreicht.
    Dies ist als _Bubbling_ bekannt und tritt nur auf, wenn [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) `true` ist.
    [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener), die für diese Phase registriert wurden, werden während dieses Prozesses ausgelöst.

## Beispiel

### HTML

```html
<h4>Event Propagation Chain</h4>
<ul>
  <li>Click 'd1'</li>
  <li>Analyze event propagation chain</li>
  <li>Click next div and repeat the experience</li>
  <li>Change Capturing mode</li>
  <li>Repeat the experience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Use Capturing</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false;
const divInfo = document.getElementById("divInfo");
const divs = document.getElementsByTagName("div");
const chCapture = document.getElementById("chCapture");

chCapture.addEventListener("click", () => {
  removeListeners();
  addListeners();
  clearDivs();
});
clearDivs();
addListeners();

function removeListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      div.removeEventListener("click", onDivClick, true);
      div.removeEventListener("click", onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      if (chCapture.checked) {
        div.addEventListener("click", onDivClick, true);
      } else {
        div.addEventListener("click", onDivClick, false);
        div.onmousemove = () => {
          clear = true;
        };
      }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase === 2) {
    e.currentTarget.style.backgroundColor = "red";
  }
  const level =
    ["none", "capturing", "target", "bubbling"][e.eventPhase] ?? "error";
  const para = document.createElement("p");
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id !== "divInfo") {
      divs[i].style.backgroundColor = i % 2 !== 0 ? "#f6eedb" : "#cceeff";
    }
  }
  divInfo.textContent = "";
}
```

### Ergebnis

{{ EmbedLiveSample('Example', '', '700') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
