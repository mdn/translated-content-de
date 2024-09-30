---
title: "Window: personalbar-Eigenschaft"
short-title: personalbar
slug: Web/API/Window/personalbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Gibt das `personalbar`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, welche früher darstellte, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft jetzt `false`, wenn dieses `Window` ein Popup ist, und `true` in allen anderen Fällen.

## Wert

Ein Objekt, das eine einzige Eigenschaft enthält:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, `false`, wenn dieses `Window` ein Popup ist, und `true` in allen anderen Fällen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.locationbar`](/de/docs/Web/API/Window/locationbar)
- [`window.menubar`](/de/docs/Web/API/Window/menubar)
- [`window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
- [`window.statusbar`](/de/docs/Web/API/Window/statusbar)
- [`window.toolbar`](/de/docs/Web/API/Window/toolbar)
