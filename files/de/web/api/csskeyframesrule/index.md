---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Das **`CSSKeyframesRule`**-Interface beschreibt ein Objekt, das eine komplette Reihe von Keyframes für eine CSS-Animation repräsentiert. Es entspricht dem Inhalt einer ganzen {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.name`](/de/docs/Web/API/CSSKeyframesRule/name)
  - : Stellt den Namen der Keyframes dar, der von der Eigenschaft {{cssxref("animation-name")}} verwendet wird.
- [`CSSKeyframesRule.cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der Keyframes in der Liste zurück.
- [`CSSKeyframesRule.length`](/de/docs/Web/API/CSSKeyframesRule/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Keyframes in der Liste zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule)
  - : Fügt eine neue Keyframe-Regel in das aktuelle CSSKeyframesRule ein. Der Parameter ist ein String, der ein Keyframe im gleichen Format wie ein Eintrag einer {{cssxref("@keyframes")}}-At-Regel enthält. Wenn es mehr als eine Keyframe-Regel enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst.
- [`CSSKeyframesRule.deleteRule()`](/de/docs/Web/API/CSSKeyframesRule/deleteRule)
  - : Löscht eine Keyframe-Regel aus der aktuellen CSSKeyframesRule. Der Parameter ist der Index des zu löschenden Keyframes, ausgedrückt als String, der als Zahl zwischen `0%` und `100%` aufgelöst wird.
- [`CSSKeyframesRule.findRule()`](/de/docs/Web/API/CSSKeyframesRule/findRule)
  - : Gibt eine Keyframe-Regel zurück, die dem angegebenen Schlüssel entspricht. Der Schlüssel ist ein String, der einen Index des zurückzugebenden Keyframes enthält und als Prozentsatz zwischen `0%` und `100%` aufgelöst wird. Wenn ein solches Keyframe nicht existiert, gibt `findRule` `null` zurück.

## Beispiel

### Verwendung von CSSKeyframesRule

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein `CSSKeyframesRule`-Objekt zurück.

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // a CSSKeyframesRule
```

### Zugriff auf Indizes

`CSSKeyframesRule` kann wie ein Array indiziert werden und funktioniert ähnlich wie seine [`cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules)-Eigenschaft.

```js
const keyframes = document.styleSheets[0].cssRules[0];

for (let i = 0; i < keyframes.length; i++) {
  console.log(keyframes[i].keyText);
}

// Output:
// 0%
// 100%
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule)
