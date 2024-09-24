---
title: "Window: parent-Eigenschaft"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`Window.parent`**-Eigenschaft ist ein Verweis auf das Elternfenster
des aktuellen Fensters oder Unterrahmens.

Wenn ein Fenster kein Elternfenster hat, ist seine `parent`-Eigenschaft ein Verweis auf
sich selbst.

Wenn ein Fenster in einem {{htmlelement("iframe")}}, {{htmlelement("object")}} oder
{{htmlelement("frame")}} geladen wird, ist sein Elternfenster das Fenster mit dem Element, das das Fenster einbettet.

## Wert

Ein `Window`- oder {{htmlelement("iframe")}}-Objekt.

## Beispiele

```js
if (window.parent !== window.top) {
  // Wir sind tiefer als ein Ebenen nach unten
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("window.frameElement")}} gibt das spezifische Element zurück (wie
  `<iframe>`), in das das `window` eingebettet ist.
- {{domxref("window.top")}} gibt einen Verweis auf das Fenster der obersten Ebene zurück.
