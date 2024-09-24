---
title: "CSSKeyframesRule: Methode deleteRule()"
short-title: deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`deleteRule()`**-Methode der {{domxref("CSSKeyframeRule")}}-Schnittstelle löscht die {{domxref("CSSKeyFrameRule")}}, die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
deleteRule(select)
```

### Parameter

- `select`

  - : Ein String, der den Keyframe-Selektor der zu löschenden Regel enthält. Dieser muss folgende Kriterien erfüllen:

    - eine durch Kommas getrennte Liste von Prozentwerten zwischen 0% und 100%;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der anvisierten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das CSS enthält ein Keyframes-At-Regel. Dies wird die erste {{domxref("CSSRule")}}, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}}-Objekt zurück. Die Rückgabe der `cssRules`-Eigenschaft würde eine {{domxref("CSSRuleList")}} mit zwei Regeln zurückgeben.

Nach dem Löschen einer Regel mit `deleteRule()` gibt die `cssRules`-Eigenschaft eine {{domxref("CSSRuleList")}} mit einer Regel zurück.

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
let keyframes = myRules[0]; // ein CSSKeyframesRule
keyframes.deleteRule("to");
console.log(keyframes.cssRules); // ein CSSRuleList-Objekt mit einer Regel
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
