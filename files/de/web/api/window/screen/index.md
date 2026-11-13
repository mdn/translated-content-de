---
title: "Window: screen-Eigenschaft"
short-title: screen
slug: Web/API/Window/screen
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`screen`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt eine Referenz auf das dem Fenster zugeordnete Bildschirmobjekt zurück. Das `screen`-Objekt implementiert die Schnittstelle [`Screen`](/de/docs/Web/API/Screen) und ermöglicht es, Eigenschaften des Bildschirms abzufragen, auf dem das aktuelle Fenster dargestellt wird.

## Wert

Ein [`Screen`](/de/docs/Web/API/Screen)-Objekt.

## Beispiele

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
