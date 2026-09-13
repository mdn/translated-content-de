---
title: "Fenster: screenLeft Eigenschaft"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

Die **`screenLeft`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window) Interfaces gibt die horizontale Entfernung in CSS-Pixeln von der linken Grenze des Browserfensters des Benutzers zur linken Seite des Bildschirms an.

> [!NOTE]
> `screenLeft` ist ein Alias der älteren [`Window.screenX`](/de/docs/Web/API/Window/screenX) Eigenschaft. `screenLeft` wurde ursprünglich nur in IE unterstützt, aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browserfensters bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn sich die Position des Fensters bewegt.

Dieses Beispiel kompensiert Änderungen an der Position des Browserfensters, jedoch nicht für Änderungen an der Position des Ansichtsfensters innerhalb des Fensters. Das Ein- oder Ausblenden einer Symbolleiste oder Seitenleiste kann daher den Kreis auf dem Bildschirm verschieben.

```js
let initialLeft = window.screenLeft + canvasElem.offsetLeft;
let initialTop = window.screenTop + canvasElem.offsetTop;

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.screenTop`](/de/docs/Web/API/Window/screenTop)
- [`window.screenX`](/de/docs/Web/API/Window/screenX)
