---
title: "Window: screenY-Eigenschaft"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

Die **`screenY`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces ist eine nur-lesbare Eigenschaft, die den vertikalen Abstand in CSS-Pixeln vom oberen Rand des Browserfensters des Benutzers zur oberen Seite des Bildschirms zurückgibt.

> [!NOTE]
> [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) ist ein Alias der älteren `screenY`-Eigenschaft. `screenTop` wurde ursprünglich nur in IE unterstützt, aber überall eingeführt aufgrund seiner Beliebtheit.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom oberen Rand des Browserfensters bis zum oberen Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig in derselben physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

Weitere Informationen finden Sie unter [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.screenTop`](/de/docs/Web/API/Window/screenTop)
- [`window.screenX`](/de/docs/Web/API/Window/screenX)
