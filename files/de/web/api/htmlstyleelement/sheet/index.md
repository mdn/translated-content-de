---
title: "HTMLStyleElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft der [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Schnittstelle
enthält das Stylesheet, das mit diesem Element verknüpft ist.

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet) ist immer mit einem [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) verknüpft, es sei denn, sein `type`-Attribut ist nicht `text/css`.

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

Die `sheet`-Eigenschaft des zugehörigen `HTMLStyleElement`-Objekts gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das es beschreibt.

```js
const style = document.getElementById("inline-style");
console.log(style.sheet.cssRules[0].cssText); // 'p { color: blue; }'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
