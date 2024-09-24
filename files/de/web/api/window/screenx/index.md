---
title: "Fenster: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`Window.screenX`** gibt den horizontalen Abstand in CSS-Pixeln von der linken Grenze des Benutzer-Browser-Viewports bis zur linken Seite des Bildschirms zurück.

> [!NOTE]
> Ein Alias von `screenX` wurde in der jüngeren Vergangenheit in modernen Browsern implementiert — {{domxref("Window.screenLeft")}}. Dieser wurde ursprünglich nur in IE unterstützt, wurde aber aufgrund seiner Popularität überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browser-Viewports zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) ([Quellcode](https://github.com/mdn/dom-examples/blob/main/screenleft-screentop/index.html)) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} zusammen mit {{domxref("Window.requestAnimationFrame()")}}, um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Auch im Code enthalten wir ein Snippet, das erkennt, ob `screenLeft` unterstützt wird, und falls nicht, `screenLeft`/`screenTop` mit `screenX`/`screenY` auffüllt.

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

- {{domxref("window.screenLeft")}}
- {{domxref("Window.screenY")}}
