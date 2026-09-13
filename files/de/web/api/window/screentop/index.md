---
title: "Window: screenTop-Eigenschaft"
short-title: screenTop
slug: Web/API/Window/screenTop
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

Die **`screenTop`**-Schreibgeschützte-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt den vertikalen Abstand in CSS-Pixeln vom oberen Rand des Browserfensters des Benutzers zur oberen Seite des Bildschirms zurück.

> [!NOTE]
> `screenTop` ist ein Alias der älteren [`Window.screenY`](/de/docs/Web/API/Window/screenY)-Eigenschaft. `screenTop` wurde ursprünglich nur in IE unterstützt, wurde jedoch aufgrund seiner Beliebtheit überall eingeführt.

## Wert

Eine Zahl, die der Anzahl an CSS-Pixeln vom oberen Rand des Browserfensters zum oberen Rand des Bildschirms entspricht.

## Beispiele

In unserem [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)-Beispiel sehen Sie eine Leinwand, auf die ein Kreis gezeichnet wurde. In diesem Beispiel verwenden wir `screenLeft`/`screenTop` plus [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Kreis ständig an der gleichen physischen Position auf dem Bildschirm neu zu zeichnen, selbst wenn die Fensterposition verschoben wird.

Sehen Sie [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.screenLeft`](/de/docs/Web/API/Window/screenLeft)
- [`window.screenY`](/de/docs/Web/API/Window/screenY)
