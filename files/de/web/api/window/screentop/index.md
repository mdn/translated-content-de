---
title: "Window: screenTop-Eigenschaft"
short-title: screenTop
slug: Web/API/Window/screenTop
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

Die **`Window.screenTop`** Leseeigenschaft gibt die vertikale Entfernung, in CSS-Pixeln, von der oberen Begrenzung des Browser-Viewports des Benutzers bis zur oberen Seite des Bildschirms zurück.

> [!NOTE] > `screenTop` ist ein Alias der älteren
> [`Window.screenY`](/de/docs/Web/API/Window/screenY) Eigenschaft. `screenTop` wurde ursprünglich nur im IE unterstützt, wurde aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel von der oberen Kante des Browser-Viewports bis zur oberen Kante des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, auch wenn die Fensterposition verschoben wird.

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

Ebenfalls im Code enthalten ist ein Ausschnitt, der erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mithilfe von [`Window.screenX`](/de/docs/Web/API/Window/screenX)/[`Window.screenY`](/de/docs/Web/API/Window/screenY) polyfillt.

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
