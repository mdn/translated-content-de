---
title: "Window: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

Die **`screenX`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt den horizontalen Abstand in CSS-Pixeln vom linken Rand des Browserfensters des Benutzers bis zur linken Seite des Bildschirms zurück.

> [!NOTE]
> [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) ist ein Alias der älteren `screenX`-Eigenschaft. `screenLeft` wurde ursprünglich nur in IE unterstützt, aber aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl der CSS-Pixel vom linken Rand des Browserfensters bis zum linken Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf der ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft)/[`Window.screenTop`](/de/docs/Web/API/Window/screenTop) zusammen mit [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis kontinuierlich an derselben physischen Position auf dem Bildschirm neu zu zeichnen, auch wenn die Fensterposition verschoben wird.

Siehe [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.screenLeft`](/de/docs/Web/API/Window/screenLeft)
- [`window.screenY`](/de/docs/Web/API/Window/screenY)
