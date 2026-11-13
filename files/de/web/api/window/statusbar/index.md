---
title: "Window: statusbar-Eigenschaft"
short-title: statusbar
slug: Web/API/Window/statusbar
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`statusbar`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das `statusbar`-Objekt zurück.

Sie gehört zu einer Gruppe von `Window`-Eigenschaften mit einer booleschen Eigenschaft `visible`. Diese gab früher an, ob ein bestimmter Teil der Benutzeroberfläche eines Webbrowsers sichtbar war.

Aus Gründen des Datenschutzes und der Interoperabilität ist der Wert der Eigenschaft `visible` jetzt `false`, wenn dieses `Window` ein Popup ist, und andernfalls `true`.

## Wert

Ein Objekt mit einer einzigen Eigenschaft:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, die `false` ist, wenn dieses `Window` ein Popup ist, und andernfalls `true`.

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
