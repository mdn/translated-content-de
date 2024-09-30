---
title: "Window: screenLeft-Eigenschaft"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Die schreibgeschützte **`Window.screenLeft`**-Eigenschaft gibt die horizontale Entfernung in CSS-Pixeln von der linken Begrenzung des Browser-Viewports des Benutzers bis zur linken Seite des Bildschirms zurück.

> **Note:** `screenLeft` ist ein Alias der älteren
> [`Window.screenX`](/de/docs/Web/API/Window/screenX)-Eigenschaft. `screenLeft` wurde ursprünglich
> nur in IE unterstützt, aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browser-Viewports bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [Beispiel screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)
sehen Sie eine Leinwand, auf der ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit
[`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig in derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Im Code haben wir auch einen Abschnitt enthalten, der erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mithilfe von [`Window.screenX`](/de/docs/Web/API/Window/screenX)/[`Window.screenY`](/de/docs/Web/API/Window/screenY) polyfillt.

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
- [`Window.screenX`](/de/docs/Web/API/Window/screenX)
