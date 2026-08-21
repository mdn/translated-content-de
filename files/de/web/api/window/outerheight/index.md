---
title: "Window: outerHeight-Eigenschaft"
short-title: outerHeight
slug: Web/API/Window/outerHeight
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`Window.outerHeight`** gibt die Höhe des gesamten Browserfensters in Pixeln zurück, einschließlich einer Seitenleiste, Fensterelementen und Fensterränder/-griffe zum Anpassen der Größe.

## Hinweise

Um die Größe eines Fensters zu ändern, siehe [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy) und [`window.resizeTo()`](/de/docs/Web/API/Window/resizeTo).

Um die innere Höhe eines Fensters zu erhalten, d.h. die Höhe der angezeigten Seite, siehe [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight).

### Grafisches Beispiel

Die folgende Abbildung zeigt den Unterschied zwischen `outerHeight` und `innerHeight`.

![Illustration von innerHeight vs. outerHeight](firefoxinnervsouterheight2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
- [`window.innerWidth`](/de/docs/Web/API/Window/innerWidth)
- [`window.outerWidth`](/de/docs/Web/API/Window/outerWidth)
- [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
- [`window.resizeTo()`](/de/docs/Web/API/Window/resizeTo)
