---
title: "Window: length-Eigenschaft"
short-title: length
slug: Web/API/Window/length
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`length`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt die Anzahl der Frames ({{HTMLElement("frame")}}- oder {{HTMLElement("iframe")}}-Elemente) im Fenster zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.length) {
  // this is a document with subframes
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
