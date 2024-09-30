---
title: "Window: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die schreibgeschützte **`Window.screenY`**-Eigenschaft gibt die vertikale Distanz in CSS-Pixeln von der oberen Grenze des Browser-Viewports des Benutzers zur oberen Kante des Bildschirms zurück.

> [!NOTE]
> Ein Alias von `screenY` wurde in letzter Zeit in modernen Browsern implementiert — [`Window.screenTop`](/de/docs/Web/API/Window/screenTop). Dieser wurde ursprünglich nur in IE unterstützt, aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel von der oberen Kante des Browser-Viewports zur oberen Kante des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis konstant an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Position des Fensters verschoben wird.

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

Diese funktionieren genau in derselben Weise wie `screenX`/`screenY`.

Im Code fügen wir auch einen Schnipsel ein, der erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mit Hilfe von `screenX`/`screenY` auffüllt.

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
