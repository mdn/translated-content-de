---
title: "CSSCounterStyleRule: speakAs-Eigenschaft"
short-title: speakAs
slug: Web/API/CSSCounterStyleRule/speakAs
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`speakAs`**-Eigenschaft der Schnittstelle [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) ruft den Wert des Deskriptors {{cssxref("@counter-style/speak-as","speak-as")}} ab und setzt ihn. Wenn für den Deskriptor kein Wert festgelegt ist, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

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
