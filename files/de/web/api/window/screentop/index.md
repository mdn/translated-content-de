---
title: "Window: screenTop-Eigenschaft"
short-title: screenTop
slug: Web/API/Window/screenTop
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`Window.screenTop`** gibt die vertikale Entfernung in CSS-Pixeln von der oberen Grenze des Benutzer-Browser-Viewports zur oberen Seite des Bildschirms zurück.

> **Note:** `screenTop` ist ein Alias für die ältere
> [`Window.screenY`](/de/docs/Web/API/Window/screenY)-Eigenschaft. `screenTop` wurde ursprünglich nur in IE unterstützt, war jedoch aufgrund seiner Beliebtheit überall eingeführt worden.

## Wert

Eine Zahl, die der Anzahl von CSS-Pixeln vom oberen Rand des Browser-Viewports zum oberen Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit
[`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Im Code finden Sie auch einen Ausschnitt, der erkennt, ob `screenLeft` unterstützt wird, und falls nicht, werden `screenLeft`/`screenTop` mithilfe von
[`Window.screenX`](/de/docs/Web/API/Window/screenX)/[`Window.screenY`](/de/docs/Web/API/Window/screenY) ergänzt.

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
