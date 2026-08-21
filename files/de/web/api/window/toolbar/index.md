---
title: "Window: toolbar-Eigenschaft"
short-title: toolbar
slug: Web/API/Window/toolbar
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Gibt das `toolbar`-Objekt zurück.

Dies ist eine von mehreren `Window`-Eigenschaften, die eine boolesche `visible`-Eigenschaft enthalten, die früher angab, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war oder nicht.

Aus Datenschutz- und Interoperabilitätsgründen ist der Wert der `visible`-Eigenschaft jetzt `false`, wenn dieses `Window` ein Popup ist, und `true` ansonsten.

## Wert

Ein Objekt, das eine einzelne Eigenschaft enthält:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, `false`, wenn dieses `Window` ein Popup ist, und `true` ansonsten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.locationbar`](/de/docs/Web/API/Window/locationbar)
- [`window.menubar`](/de/docs/Web/API/Window/menubar)
- [`window.personalbar`](/de/docs/Web/API/Window/personalbar)
- [`window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
- [`window.statusbar`](/de/docs/Web/API/Window/statusbar)
