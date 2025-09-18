---
title: "Element: setCapture() Methode"
short-title: setCapture()
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

Rufen Sie diese Methode während der Behandlung eines `mousedown`-Ereignisses auf, um alle Mausereignisse auf dieses Element umzuleiten, bis die Maustaste losgelassen wird oder [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) aufgerufen wird.

> [!WARNING]
> Diese Schnittstelle hatte nie viel Unterstützung in verschiedenen Browsern und Sie suchen wahrscheinlich nach [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture),
> aus der Pointer Events API.

## Syntax

```js-nolint
setCapture(retargetToElement)
```

### Parameter

- `retargetToElement`
  - : Wenn `true`, werden alle Ereignisse direkt auf dieses Element gezielt; wenn `false`, können Ereignisse auch bei Nachkommen dieses Elements ausgelöst werden.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel werden die aktuellen Mauskoordinaten gezeichnet, während Sie umherfahren, nachdem Sie auf ein Element geklickt haben und die Maustaste gedrückt halten.

```html
<p>This is an example of how to use mouse capture on elements in Gecko 2.0.</p>
<p><a id="myButton" href="#">Test Me</a></p>
<div id="output">No events yet</div>
```

```css
#myButton {
  border: solid black 1px;
  color: black;
  padding: 2px;
  box-shadow: black 2px 2px;
}
```

```js
function mouseDown(e) {
  e.target.setCapture();
  e.target.addEventListener("mousemove", mouseMoved);
}

function mouseUp(e) {
  e.target.removeEventListener("mousemove", mouseMoved);
}

function mouseMoved(e) {
  const output = document.getElementById("output");
  output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
}

const btn = document.getElementById("myButton");
if (btn.setCapture) {
  btn.addEventListener("mousedown", mouseDown);
  btn.addEventListener("mouseup", mouseUp);
} else {
  document.getElementById("output").textContent =
    "Sorry, there appears to be no setCapture support on this browser";
}
```

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Anmerkungen

Das Element ist möglicherweise nicht vollständig nach oben oder unten gescrollt, abhängig vom Layout anderer Elemente.

## Spezifikationen

Kein Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)
- [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture)
