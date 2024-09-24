---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

Die **`CSSStyleDeclaration`**-Schnittstelle repräsentiert ein Objekt, das einen CSS-Deklarationsblock darstellt, und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften an.

Ein `CSSStyleDeclaration`-Objekt kann über drei verschiedene APIs verfügbar gemacht werden:

- Über {{DOMxRef("HTMLElement.style")}}, welches sich mit den Inline-Stilen eines einzelnen Elements befasst (z.B. `<div style="…">`).
- Über die {{DOMxRef("CSSStyleSheet")}} API. Zum Beispiel gibt `document.styleSheets[0].cssRules[0].style` ein `CSSStyleDeclaration`-Objekt für die erste CSS-Regel im ersten Stylesheet des Dokuments zurück.
- Über {{DOMxRef("Window.getComputedStyle()")}}, welches das `CSSStyleDeclaration`-Objekt als eine **schreibgeschützte** Schnittstelle zur Verfügung stellt.

## Attribute

- {{DOMxRef("CSSStyleDeclaration.cssText")}}
  - : Textuelle Darstellung des Deklarationsblocks, aber nur wenn es über {{DOMxRef("HTMLElement.style")}} verfügbar gemacht wird. Das Setzen dieses Attributs ändert den Inline-Stil. Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks möchten, können Sie diese mit `JSON.stringify()` erhalten.
- {{DOMxRef("CSSStyleDeclaration.length")}} {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften. Siehe die {{DOMxRef("CSSStyleDeclaration.item()", 'item()')}} Methode unten.
- {{DOMxRef("CSSStyleDeclaration.parentRule")}} {{ReadOnlyInline}}
  - : Die enthaltende {{DOMxRef("CSSRule")}}.

### CSS-Eigenschaften

- {{DOMxRef("CSSStyleDeclaration.cssFloat", "CSSStyleDeclaration.cssFloat")}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Gepunktete und camelCase-Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- {{DOMxRef("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Gibt die optionale Priorität, "important", zurück.
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}
  - : Gibt den Eigenschaftswert zu einem Eigenschaftsnamen zurück.
- {{DOMxRef("CSSStyleDeclaration.item()")}}
  - : Gibt einen CSS-Eigenschaftsnamen nach seinem Index zurück oder den leeren String, wenn der Index außerhalb des Bereichs liegt.
- {{DOMxRef("CSSStyleDeclaration.removeProperty()")}}
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- {{DOMxRef("CSSStyleDeclaration.setProperty()")}}
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- {{DOMxRef("CSSStyleDeclaration.getPropertyCSSValue()")}} {{deprecated_inline}}
  - : **Nur über getComputedStyle in Firefox unterstützt.** Gibt den Eigenschaftswert als {{DOMxRef("CSSPrimitiveValue")}} oder `null` für [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties) zurück.

## Beispiel

```js
const styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (let i = styleObj.length; i--; ) {
  const nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
