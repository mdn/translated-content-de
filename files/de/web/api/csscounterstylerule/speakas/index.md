---
title: "CSSCounterStyleRule: speakAs-Eigenschaft"
short-title: speakAs
slug: Web/API/CSSCounterStyleRule/speakAs
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`speakAs`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/speak-as","speak-as")}}-Descriptors ab und setzt ihn. Wenn der Deskriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `speakAs` gibt uns den Wert "bullets" zurück.

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  speak-as: bullets;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].speakAs); // "bullets"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
