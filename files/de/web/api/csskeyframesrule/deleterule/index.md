---
title: "CSSKeyframesRule: deleteRule()-Methode"
short-title: deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`deleteRule()`**-Methode des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Interfaces löscht die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule), die dem angegebenen Keyframe-Selektor entspricht.

## Syntax

```js-nolint
deleteRule(select)
```

### Parameter

- `select`

  - : Ein String, der den Keyframe-Selektor der zu löschenden Regel enthält, der folgende Kriterien erfüllen muss:

    - Eine kommagetrennte Liste von Prozentwerten zwischen 0% und 100%;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der Ziel-Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Wenn die `cssRules`-Eigenschaft zurückgegeben wird, würde eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit zwei Regeln zurückgegeben.

Nach dem Löschen einer Regel mit `deleteRule()` gibt die `cssRules`-Eigenschaft eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit einer Regel zurück.

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
keyframes.deleteRule("to");
console.log(keyframes.cssRules); // a CSSRuleList object with one rule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
