---
title: "Window: locationbar-Eigenschaft"
short-title: locationbar
slug: Web/API/Window/locationbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Gibt das `locationbar`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, die früher darstellte, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war oder nicht.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft jetzt `false`, wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Wert

Ein Objekt mit einer einzigen Eigenschaft:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, `false` wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.menubar`](/de/docs/Web/API/Window/menubar)
- [`window.personalbar`](/de/docs/Web/API/Window/personalbar)
- [`window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
- [`window.statusbar`](/de/docs/Web/API/Window/statusbar)
- [`window.toolbar`](/de/docs/Web/API/Window/toolbar)
