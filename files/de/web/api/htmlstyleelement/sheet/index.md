---
title: "HTMLStyleElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft der [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Schnittstelle
enthält das Stylesheet, das diesem Element zugeordnet ist.

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet) ist immer einem [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zugeordnet, es sei denn, sein `type`-Attribut ist nicht `text/css`.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt oder `null`, wenn keines mit dem Element verknüpft ist.

## Beispiele

Angenommen, der `<head>` enthält Folgendes:

```html
<style id="inline-style">
  p {
    color: blue;
  }
</style>
```

Die `sheet`-Eigenschaft des zugehörigen `HTMLStyleElement`-Objekts wird das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt, das es beschreibt, zurückgeben.

```js
const style = document.getElementById("inline-style");
console.log(style.sheet.cssRules[0].cssText); // 'p { color: blue; }'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
