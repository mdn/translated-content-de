---
title: "Window: toolbar-Eigenschaft"
short-title: toolbar
slug: Web/API/Window/toolbar
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`toolbar`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das `toolbar`-Objekt zurück.

Sie gehört zu einer Gruppe von `Window`-Eigenschaften mit einer booleschen Eigenschaft `visible`. Diese gab früher an, ob ein bestimmter Teil der Benutzeroberfläche des Webbrowsers sichtbar war.

Aus Gründen des Datenschutzes und der Interoperabilität ist der Wert der Eigenschaft `visible` jetzt `false`, wenn dieses `Window` ein Popup ist, andernfalls `true`.

## Wert

Ein Objekt mit einer einzigen Eigenschaft:

- `visible` {{ReadOnlyInline}}
  - : Eine boolesche Eigenschaft, die `false` ist, wenn dieses `Window` ein Popup ist, andernfalls `true`.

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
