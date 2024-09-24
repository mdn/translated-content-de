---
title: "Window: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die schreibgeschützte **`Window.screenY`**-Eigenschaft liefert die vertikale Entfernung in CSS-Pixeln von der oberen Grenze des Browser-Viewports des Benutzers bis zum oberen Rand des Bildschirms.

> [!NOTE]
> Ein Alias von `screenY` wurde kürzlich in modernen Browsern implementiert — {{domxref("Window.screenTop")}}. Dies wurde ursprünglich nur in IE unterstützt, aber aufgrund der Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel von der oberen Grenze des Browser-Viewports bis zum oberen Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) Beispiel sehen Sie eine Leinwand, auf der ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} plus {{domxref("Window.requestAnimationFrame()")}}, um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Diese arbeiten genau auf die gleiche Weise wie `screenX`/`screenY`.

Auch im Code enthalten wir einen Ausschnitt, der erkennt, ob `screenLeft` unterstützt wird und, falls nicht, `screenLeft`/`screenTop` mit `screenX`/`screenY` auffüllt.

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

- {{domxref("window.screenTop")}}
- {{domxref("window.screenX")}}
