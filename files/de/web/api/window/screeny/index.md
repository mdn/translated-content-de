---
title: "Window: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`Window.screenY`** gibt die vertikale Entfernung in CSS-Pixeln von der oberen Kante des Browser-Viewports des Nutzers zur oberen Kante des Bildschirms zurück.

> [!NOTE]
> Ein Alias von `screenY` wurde in letzter Zeit in modernen Browsern implementiert — [`Window.screenTop`](/de/docs/Web/API/Window/screenTop). Dies wurde ursprünglich nur in IE unterstützt, aber aufgrund seiner Popularität überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel von der oberen Kante des Browser-Viewports zur oberen Kante des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) sowie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis kontinuierlich an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Diese funktionieren genau so wie `screenX`/`screenY`.

Auch im Code enthalten wir ein Snippet, das erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mithilfe von `screenX`/`screenY` polyfillt.

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
