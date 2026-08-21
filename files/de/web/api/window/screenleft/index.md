---
title: "Window: screenLeft-Eigenschaft"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Window.screenLeft`** gibt den horizontalen Abstand in CSS-Pixeln von der linken Grenze des Browser-Viewports des Benutzers zur linken Seite des Bildschirms zurück.

> [!NOTE]
> `screenLeft` ist ein Alias der älteren [`Window.screenX`](/de/docs/Web/API/Window/screenX)-Eigenschaft. `screenLeft` wurde ursprünglich nur in IE unterstützt, wurde jedoch aufgrund ihrer Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browser-Viewports bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet ist. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Im Code fügen wir auch einen Ausschnitt ein, der erkennt, ob `screenLeft` unterstützt wird. Wenn nicht, wird `screenLeft`/`screenTop` durch [`Window.screenX`](/de/docs/Web/API/Window/screenX)/[`Window.screenY`](/de/docs/Web/API/Window/screenY) polyfilliert.

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
