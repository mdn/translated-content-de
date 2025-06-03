---
title: "Element: setCapture() Methode"
short-title: setCapture()
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

Rufen Sie diese Methode während der Bearbeitung eines `mousedown`-Ereignisses auf, um alle Mausereignisse auf dieses Element umzuleiten, bis die Maustaste losgelassen oder [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) aufgerufen wird.

> [!WARNING]
> Diese Schnittstelle hatte nie breite Unterstützung in verschiedenen Browsern, und Sie suchen wahrscheinlich nach [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture) aus der Pointer Events API.

## Syntax

```js-nolint
setCapture(retargetToElement)
```

### Parameter

- `retargetToElement`
  - : Wenn `true`, werden alle Ereignisse direkt auf dieses Element gerichtet; wenn `false`, können Ereignisse auch bei Nachkommen dieses Elements ausgelöst werden.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel werden die aktuellen Mauskoordinaten gezeichnet, während Sie die Maus bewegen, nachdem Sie auf ein Element geklickt und die Maustaste gedrückt gehalten haben.

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
  e.target.addEventListener("mousemove", mouseMoved, false);
}

function mouseUp(e) {
  e.target.removeEventListener("mousemove", mouseMoved, false);
}

function mouseMoved(e) {
  const output = document.getElementById("output");
  output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
}

const btn = document.getElementById("myButton");
if (btn.setCapture) {
  btn.addEventListener("mousedown", mouseDown, false);
  btn.addEventListener("mouseup", mouseUp, false);
} else {
  document.getElementById("output").textContent =
    "Sorry, there appears to be no setCapture support on this browser";
}
```

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Hinweise

Das Element ist möglicherweise nicht vollständig nach oben oder unten gescrollt, abhängig von der Anordnung anderer Elemente.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)
- [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture)
