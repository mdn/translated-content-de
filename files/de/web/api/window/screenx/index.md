---
title: "Window: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Window.screenX`** gibt die horizontale Entfernung in CSS-Pixeln vom linken Rand des Browser-Viewports des Nutzers bis zur linken Seite des Bildschirms zurück.

> [!NOTE]
> Ein Alias von `screenX` wurde in letzter Zeit in modernen Browsern implementiert — [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft). Dies wurde ursprünglich nur in IE unterstützt, aber aufgrund der Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browser-Viewports bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) ([Quellcode](https://github.com/mdn/dom-examples/blob/main/screenleft-screentop/index.html)) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) sowie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Im Code haben wir auch ein Snippet enthalten, das erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mittels `screenX`/`screenY` ergänzt.

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
