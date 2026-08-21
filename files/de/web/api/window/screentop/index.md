---
title: "Window: screenTop-Eigenschaft"
short-title: screenTop
slug: Web/API/Window/screenTop
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Window.screenTop`** gibt den vertikalen Abstand in CSS-Pixeln von der oberen Grenze des Browser-Viewports des Benutzers zur Oberkante des Bildschirms zurück.

> [!NOTE]
> `screenTop` ist ein Alias der älteren
> [`Window.screenY`](/de/docs/Web/API/Window/screenY)-Eigenschaft. `screenTop` wurde ursprünglich
> nur in IE unterstützt, aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom oberen Rand des Browser-Viewports bis zum oberen Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0 0 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent = `Window.screenLeft: ${window.screenLeft}, Window.screenTop: ${window.screenTop}`;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

Im Code enthalten wir auch einen Ausschnitt, der erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` unter Verwendung von [`Window.screenX`](/de/docs/Web/API/Window/screenX)/[`Window.screenY`](/de/docs/Web/API/Window/screenY) polyfillt.

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.screenLeft`](/de/docs/Web/API/Window/screenLeft)
- [`Window.screenY`](/de/docs/Web/API/Window/screenY)
