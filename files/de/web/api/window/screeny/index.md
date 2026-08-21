---
title: "Window: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte **`Window.screenY`**-Eigenschaft gibt die vertikale Distanz in CSS-Pixeln von der oberen Grenze des Browser-Viewports des Benutzers bis zur oberen Kante des Bildschirms zurück.

> [!NOTE]
> Ein Alias von `screenY` wurde in den letzten Jahren in modernen Browsern implementiert — [`Window.screenTop`](/de/docs/Web/API/Window/screenTop). Ursprünglich wurde dies nur in IE unterstützt, aber aufgrund der Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel von der oberen Kante des Browser-Viewports bis zur oberen Kante des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf der ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Diese funktionieren genau wie `screenX`/`screenY`.

Außerdem haben wir im Code ein Schnipsel eingefügt, das erkennt, ob `screenLeft` unterstützt wird. Falls nicht, wird `screenLeft`/`screenTop` mit `screenX`/`screenY` durch einen Polyfill bereitgestellt.

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

- [`window.screenTop`](/de/docs/Web/API/Window/screenTop)
- [`window.screenX`](/de/docs/Web/API/Window/screenX)
