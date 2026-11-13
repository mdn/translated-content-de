---
title: "Window: parent-Eigenschaft"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`parent`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ist eine Referenz auf das übergeordnete Fenster des aktuellen Fensters oder Subframes.

Wenn ein Fenster kein übergeordnetes Fenster hat, verweist seine Eigenschaft `parent` auf das Fenster selbst.

Wenn ein Fenster in einem {{htmlelement("iframe")}}, {{htmlelement("object")}} oder {{htmlelement("frame")}} geladen wird, ist sein übergeordnetes Fenster das Fenster, das das einbettende Element enthält.

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

- [`window.frameElement`](/de/docs/Web/API/Window/frameElement) gibt das Element zurück (zum Beispiel `<iframe>`), in das `window` eingebettet ist.
- [`window.top`](/de/docs/Web/API/Window/top) gibt eine Referenz auf das Fenster der obersten Ebene zurück.
