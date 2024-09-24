---
title: "Window: screen Eigenschaft"
short-title: screen
slug: Web/API/Window/screen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("CSSOM")}}

Die Eigenschaft **`screen`** des {{DOMxRef("Window")}} Objekts gibt eine Referenz auf das Bildschirmobjekt zurück, das mit dem Fenster verknüpft ist. Das `screen` Objekt, das die {{DOMxRef("Screen")}}-Schnittstelle implementiert, ist ein spezielles Objekt zur Überprüfung von Eigenschaften des Bildschirms, auf dem das aktuelle Fenster gerendert wird.

## Wert

Ein {{DOMxRef("Screen")}} Objekt.

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
