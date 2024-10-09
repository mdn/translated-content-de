---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframesRule`**-Schnittstelle beschreibt ein Objekt, das eine vollständige Reihe von Keyframes für eine CSS-Animation darstellt. Sie entspricht dem Inhalt einer gesamten {{cssxref("@keyframes")}}-[@-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.name`](/de/docs/Web/API/CSSKeyframesRule/name)
  - : Repräsentiert den Namen der Keyframes, die durch die {{cssxref("animation-name")}}-Eigenschaft verwendet wird.
- [`CSSKeyframesRule.cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der Keyframes in der Liste zurück.
- [`CSSKeyframesRule.length`](/de/docs/Web/API/CSSKeyframesRule/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Keyframes in der Liste zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule)
  - : Fügt eine neue Keyframe-Regel in die aktuelle CSSKeyframesRule ein. Der Parameter ist ein String, der ein Keyframe im gleichen Format wie ein Eintrag einer {{cssxref("@keyframes")}}-@-Regel enthält. Wenn er mehr als eine Keyframe-Regel enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst.
- [`CSSKeyframesRule.deleteRule()`](/de/docs/Web/API/CSSKeyframesRule/deleteRule)
  - : Löscht eine Keyframe-Regel aus der aktuellen CSSKeyframesRule. Der Parameter ist der Index des zu löschenden Keyframes, ausgedrückt als String, der sich als Zahl zwischen `0%` und `100%` auflöst.
- [`CSSKeyframesRule.findRule()`](/de/docs/Web/API/CSSKeyframesRule/findRule)
  - : Gibt eine Keyframe-Regel entsprechend dem angegebenen Schlüssel zurück. Der Schlüssel ist ein String, der einen Index des zurückzugebenden Keyframes enthält, der sich zu einem Prozentsatz zwischen `0%` und `100%` auflöst. Wenn kein solches Keyframe existiert, gibt `findRule` `null` zurück.

## Beispiel

### Verwendung von CSSKeyframesRule

Das CSS enthält eine @keyframes-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
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

`CSSKeyframesRule` kann ähnlich wie ein Array indiziert werden und funktioniert ähnlich wie seine [`cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules)-Eigenschaft.

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
- [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule)
