---
title: "Window: Eigenschaft parent"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`Window.parent`**-Eigenschaft ist eine Referenz auf das übergeordnete Objekt
des aktuellen Fensters oder Unterframes.

Wenn ein Fenster kein übergeordnetes Objekt hat, ist seine `parent`-Eigenschaft eine Referenz auf
sich selbst.

Wenn ein Fenster in einem {{htmlelement("iframe")}}, {{htmlelement("object")}} oder
{{htmlelement("frame")}} geladen wird, ist das übergeordnete Objekt das Fenster mit dem Element, das
das Fenster einbettet.

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
