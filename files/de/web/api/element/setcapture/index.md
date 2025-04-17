---
title: "Element: setCapture() Methode"
short-title: setCapture()
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: 6ff298b95fb0b5be1524d8f7737184533c0b28eb
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

Rufen Sie diese Methode während der Verarbeitung eines `mousedown`-Ereignisses auf, um alle Mausereignisse auf dieses Element umzuleiten, bis die Maustaste losgelassen oder [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) aufgerufen wird.

> [!WARNING]
> Diese Schnittstelle hatte nie viel plattformübergreifende Unterstützung und Sie suchen wahrscheinlich stattdessen nach [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture) aus der Pointer Events API.

## Syntax

```js-nolint
setCapture(retargetToElement)
```

### Parameter

- `retargetToElement`
  - : Wenn `true`, werden alle Ereignisse direkt auf dieses Element gerichtet; wenn `false`, können Ereignisse auch auf Nachkommen dieses Elements auftreten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel werden die aktuellen Mauskoordinaten gezeichnet, während Sie nach einem Klick und Halten auf einem Element die Maus bewegen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Mouse Capture Example</title>
    <style>
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        box-shadow: black 2px 2px;
      }
    </style>

    <script>
      function init() {
        const btn = document.getElementById("myButton");
        if (btn.setCapture) {
          btn.addEventListener("mousedown", mouseDown, false);
          btn.addEventListener("mouseup", mouseUp, false);
        } else {
          document.getElementById("output").textContent =
            "Sorry, there appears to be no setCapture support on this browser";
        }
      }

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
    </script>
  </head>
  <body onload="init()">
    <p>
      This is an example of how to use mouse capture on elements in Gecko 2.0.
    </p>
    <p><a id="myButton" href="#">Test Me</a></p>
    <div id="output">No events yet</div>
  </body>
</html>
```

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Hinweise

Das Element wird möglicherweise nicht vollständig nach oben oder unten gescrollt, abhängig von der Anordnung anderer Elemente.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)
- [`element.setPointerCapture`](/de/docs/Web/API/Element/setPointerCapture)
