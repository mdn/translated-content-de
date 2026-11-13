---
title: "Window: top-Eigenschaft"
short-title: top
slug: Web/API/Window/top
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`top`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück.

## Wert

Eine Referenz auf das oberste Fenster.

## Hinweise

Während die Eigenschaft [`window.parent`](/de/docs/Web/API/Window/parent) das unmittelbar übergeordnete Fenster des aktuellen Fensters zurückgibt, gibt `window.top` das oberste Fenster in der Hierarchie der Fensterobjekte zurück.

Diese Eigenschaft ist besonders nützlich, wenn sich ein Fenster in einem Unterframe eines oder mehrerer übergeordneter Fenster befindet und Sie auf das Frameset der obersten Ebene zugreifen möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
