---
title: CSSKeyframesRule
slug: Web/API/CSSKeyframesRule
l10n:
  sourceCommit: b3ade406be0ad8a0dcbff00889d9a48d77f8dff1
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframesRule`**-Schnittstelle beschreibt ein Objekt, das eine vollständige Sammlung von Keyframes für eine CSS-Animation darstellt. Sie entspricht dem Inhalt einer ganzen {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSKeyframesRule.name")}}
  - : Stellt den Namen der Keyframes dar, der von der {{cssxref("animation-name")}}-Eigenschaft verwendet wird.
- {{domxref("CSSKeyframesRule.cssRules")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("CSSRuleList")}} der Keyframes in der Liste zurück.
- {{domxref("CSSKeyframesRule.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Keyframes in der Liste zurück.

## Instanzenmethoden

_Erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSKeyframesRule.appendRule()")}}
  - : Fügt eine neue Keyframe-Regel in die aktuelle CSSKeyframesRule ein. Der Parameter ist ein String, der ein Keyframe im selben Format wie ein Eintrag einer {{cssxref("@keyframes")}}-At-Regel enthält. Wenn es mehr als eine Keyframe-Regel enthält, wird eine {{domxref("DOMException")}} mit einem `SYNTAX_ERR` ausgelöst.
- {{domxref("CSSKeyframesRule.deleteRule()")}}
  - : Löscht eine Keyframe-Regel aus der aktuellen CSSKeyframesRule. Der Parameter ist der Index des zu löschenden Keyframes, ausgedrückt als String, der als Zahl zwischen `0%` und `100%` aufgelöst wird.
- {{domxref("CSSKeyframesRule.findRule()")}}
  - : Gibt eine Keyframe-Regel zurück, die dem angegebenen Schlüssel entspricht. Der Schlüssel ist ein String, der einen Index des zurückzugebenden Keyframes enthält und zu einem Prozentsatz zwischen `0%` und `100%` aufgelöst wird. Wenn kein solches Keyframe existiert, gibt `findRule` `null` zurück.

## Beispiel

### Verwendung von CSSKeyframesRule

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein `CSSKeyframesRule`-Objekt zurück.

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
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // a CSSKeyframesRule
```

### Zugreifen auf Indizes

`CSSKeyframesRule` kann wie ein Array indiziert werden und funktioniert ähnlich wie seine {{domxref("CSSKeyframesRule.cssRules", "cssRules")}}-Eigenschaft.

```js
const keyframes = document.styleSheets[0].cssRules[0];

for (let i = 0; i < keyframes.length; i++) {
  console.log(keyframes[i].keyText);
}

// Ausgabe:
// 0%
// 100%
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFrameRule")}}
