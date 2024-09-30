---
title: "Window: parent-Eigenschaft"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`Window.parent`**-Eigenschaft ist eine Referenz auf das übergeordnete
Fenster oder Unterrahmen des aktuellen Fensters.

Wenn ein Fenster kein übergeordnetes Element hat, ist seine `parent`-Eigenschaft eine Referenz
auf sich selbst.

Wenn ein Fenster in einem {{htmlelement("iframe")}}, {{htmlelement("object")}} oder
{{htmlelement("frame")}} geladen wird, ist sein übergeordnetes Element das Fenster mit dem Element, das das
Fenster einbettet.

## Wert

Ein `Window`- oder {{htmlelement("iframe")}}-Objekt.

## Beispiele

```js
if (window.parent !== window.top) {
  // We're deeper than one down
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.frameElement`](/de/docs/Web/API/Window/frameElement) gibt das spezifische Element zurück (wie
  `<iframe>`), in das das `window` eingebettet ist.
- [`window.top`](/de/docs/Web/API/Window/top) gibt eine Referenz auf das oberste Fenster zurück.
