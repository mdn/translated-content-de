---
title: "Fenster: statusbar-Eigenschaft"
short-title: statusbar
slug: Web/API/Window/statusbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Gibt das `statusbar`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten. Diese Eigenschaften wurden verwendet, um darzustellen, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft nun `false`, wenn dieses `Window` ein Popup ist, und ansonsten `true`.

## Wert

Ein Objekt, das eine einzelne Eigenschaft enthält:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, `false`, wenn dieses `Window` ein Popup ist, und ansonsten `true`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.locationbar`](/de/docs/Web/API/Window/locationbar)
- [`window.menubar`](/de/docs/Web/API/Window/menubar)
- [`window.personalbar`](/de/docs/Web/API/Window/personalbar)
- [`window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
- [`window.toolbar`](/de/docs/Web/API/Window/toolbar)
