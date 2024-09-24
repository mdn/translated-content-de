---
title: "Window: screenLeft-Eigenschaft"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Die **`Window.screenLeft`** schreibgeschützte Eigenschaft gibt die horizontale Distanz, in CSS-Pixeln, von der linken Grenze des Browser-Viewports des Nutzers bis zur linken Seite des Bildschirms zurück.

> **Note:** `screenLeft` ist ein Alias der älteren
> {{domxref("Window.screenX")}}-Eigenschaft. `screenLeft` wurde ursprünglich nur in IE unterstützt, aber aufgrund der Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browser-Viewports bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)
Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` sowie
{{domxref("Window.requestAnimationFrame()")}}, um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

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

Auch im Code fügen wir ein Snippet ein, das überprüft, ob `screenLeft` unterstützt wird, und, falls nicht, `screenLeft`/`screenTop` mithilfe von
{{domxref("Window.screenX")}}/{{domxref("Window.screenY")}} ergänzt.

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
- {{domxref("Window.screenX")}}
