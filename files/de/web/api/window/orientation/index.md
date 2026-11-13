---
title: "Window: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/Window/orientation
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`orientation`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt die Ausrichtung des Viewports relativ zur natürlichen Ausrichtung des Geräts in Grad zurück (in 90-Grad-Schritten).

Die einzigen möglichen Werte sind `-90`, `0`, `90` und `180`. Positive Werte stehen für eine Drehung gegen den Uhrzeigersinn, negative Werte für eine Drehung im Uhrzeigersinn.

Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die Eigenschaft [`Screen.orientation`](/de/docs/Web/API/Screen/orientation), die über [`window.screen`](/de/docs/Web/API/Window/screen) verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
