---
title: "Window: locationbar-Eigenschaft"
short-title: locationbar
slug: Web/API/Window/locationbar
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`locationbar`** des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das `locationbar`-Objekt zurück.

Sie gehört zu einer Gruppe von `Window`-Eigenschaften mit einer booleschen Eigenschaft `visible`. Diese gab ursprünglich an, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war.

Aus Gründen des Datenschutzes und der Interoperabilität ist der Wert von `visible` nun `false`, wenn dieses `Window` ein Popup ist, und andernfalls `true`.

## Wert

Ein Objekt mit einer einzigen Eigenschaft:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, die `false` ist, wenn dieses `Window` ein Popup ist, und andernfalls `true`.

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
