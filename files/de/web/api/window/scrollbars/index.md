---
title: "Window: scrollbars-Eigenschaft"
short-title: scrollbars
slug: Web/API/Window/scrollbars
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

Gibt das `scrollbars`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, die früher angab, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war oder nicht.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft nun `false`, wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Wert

Ein Objekt, das eine einzelne Eigenschaft enthält:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, `false`, wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.locationbar`](/de/docs/Web/API/Window/locationbar)
- [`window.menubar`](/de/docs/Web/API/Window/menubar)
- [`window.personalbar`](/de/docs/Web/API/Window/personalbar)
- [`window.statusbar`](/de/docs/Web/API/Window/statusbar)
- [`window.toolbar`](/de/docs/Web/API/Window/toolbar)
