---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframesRule`**-Schnittstelle beschreibt ein Objekt, das eine vollständige Gruppe von Keyframes für eine CSS-Animation darstellt. Sie entspricht dem Inhalt eines gesamten {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.name`](/de/docs/Web/API/CSSKeyframesRule/name)
  - : Repräsentiert den Namen der Keyframes, der von der {{cssxref("animation-name")}}-Eigenschaft verwendet wird.
- [`CSSKeyframesRule.cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules) {{ReadOnlyInline}}
  - : Gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) der Keyframes in der Liste zurück.
- [`CSSKeyframesRule.length`](/de/docs/Web/API/CSSKeyframesRule/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Keyframes in der Liste zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule)
  - : Fügt der aktuellen CSSKeyframesRule eine neue Keyframe-Regel hinzu. Der Parameter ist ein String, der ein Keyframe im gleichen Format wie ein Eintrag einer {{cssxref("@keyframes")}}-At-Regel enthält. Wenn er mehr als eine Keyframe-Regel enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst.
- [`CSSKeyframesRule.deleteRule()`](/de/docs/Web/API/CSSKeyframesRule/deleteRule)
  - : Löscht eine Keyframe-Regel aus der aktuellen CSSKeyframesRule. Der Parameter ist der Index des zu löschenden Keyframes, ausgedrückt als ein String, der sich als Zahl zwischen `0%` und `100%` auflöst.
- [`CSSKeyframesRule.findRule()`](/de/docs/Web/API/CSSKeyframesRule/findRule)
  - : Gibt eine Keyframe-Regel zurück, die dem angegebenen Schlüssel entspricht. Der Schlüssel ist ein String, der einen Index des zurückzugebenden Keyframes enthält, aufgelöst zu einem Prozentsatz zwischen `0%` und `100%`. Wenn kein solches Keyframe existiert, gibt `findRule` `null` zurück.

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

### Zugreifen auf Indizes

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
