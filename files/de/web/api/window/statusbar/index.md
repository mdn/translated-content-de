---
title: "Window: statusbar-Eigenschaft"
short-title: statusbar
slug: Web/API/Window/statusbar
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Gibt das `statusbar`-Objekt zurück.

Dies ist eine Eigenschaft aus einer Gruppe von `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, die früher darstellte, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war oder nicht.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft jetzt `false`, wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Wert

Ein Objekt mit einer einzigen Eigenschaft:

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
- [`window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
- [`window.toolbar`](/de/docs/Web/API/Window/toolbar)
