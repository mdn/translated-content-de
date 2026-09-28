---
title: "HTMLStyleElement: Eigenschaft sheet"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`sheet`** der Schnittstelle [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) enthält das Stylesheet, das diesem Element zugeordnet ist.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt oder `null`, wenn dem Element kein Stylesheet zugeordnet ist.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<style id="inline-style">
  p {
    color: blue;
  }
</style>
```

Die Eigenschaft `sheet` des zugehörigen `HTMLStyleElement`-Objekts gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das das Stylesheet beschreibt.

```js
const style = document.getElementById("inline-style");
console.log(style.sheet.cssRules[0].cssText); // 'p { color: blue; }'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
