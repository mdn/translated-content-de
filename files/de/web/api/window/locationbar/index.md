---
title: "Fenster: locationbar-Eigenschaft"
short-title: locationbar
slug: Web/API/Window/locationbar
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Gibt das `locationbar`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, die früher darstellte, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war oder nicht.

Aus Gründen der Privatsphäre und Interoperabilität ist der Wert der `visible`-Eigenschaft jetzt `false`, wenn dieses `Window` ein Popup ist, und `true` andernfalls.

## Wert

Ein Objekt, das eine einzelne Eigenschaft enthält:

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
