---
title: "Element: setCapture()-Methode"
short-title: setCapture()
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

Rufen Sie diese Methode während der Behandlung eines mousedown-Ereignisses auf, um alle Mausereignisse
auf dieses Element umzuleiten, bis die Maustaste losgelassen oder {{domxref("document.releaseCapture()")}} aufgerufen wird.

> [!WARNING]
> Diese Schnittstelle hatte nie viel Unterstützung in verschiedenen Browsern, und Sie suchen wahrscheinlich stattdessen nach {{domxref("element.setPointerCapture")}} aus der Pointer Events API.

## Syntax

```js-nolint
setCapture(retargetToElement)
```

### Parameter

- `retargetToElement`
  - : Wenn `true`, werden alle Ereignisse direkt an dieses Element gerichtet; wenn
    `false`, können Ereignisse auch bei Nachkommen dieses Elements ausgelöst werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

In diesem Beispiel werden die aktuellen Mauskoordinaten gezeichnet, während Sie nach dem Klicken und Halten auf einem Element mit der Maus herumfahren.

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
      Dies ist ein Beispiel, wie man die Mausaufnahme auf Elementen in Gecko 2.0 verwendet.
    </p>
    <p><a id="myButton" href="#">Test Me</a></p>
    <div id="output">Noch keine Ereignisse</div>
  </body>
</html>
```

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## Hinweise

Das Element ist möglicherweise nicht vollständig nach oben oder unten gescrollt, je nach Layout der anderen Elemente.

## Spezifikationen

Kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("document.releaseCapture()") }}
- {{domxref("element.setPointerCapture")}}
