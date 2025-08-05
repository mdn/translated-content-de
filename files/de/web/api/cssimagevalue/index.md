---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSImageValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die ein Bild erfordern, wie zum Beispiel {{cssxref('background-image')}}, {{cssxref('list-style-image')}} oder {{cssxref('border-image-source')}}.

Das CSSImageValue-Objekt repräsentiert ein [`<image>`](/de/docs/Web/CSS/image), das eine URL involviert, wie [`url()`](/de/docs/Web/CSS/url_function) oder [`image()`](/de/docs/Web/CSS/image), aber nicht [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) oder [`element()`](/de/docs/Web/CSS/element).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

Wir erstellen ein Element

```html
<button>Magic Wand</button>
```

Wir fügen etwas CSS hinzu, einschließlich eines Hintergrundbildes, das eine Binärdatei anfordert:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url("magic-wand.png") aqua;
}
```

Wir erhalten die Style-Map des Elements. Dann holen wir das `background-image` aus der Style-Map und wandeln es in einen String um:

```js
// get the element
const button = document.querySelector("button");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// Return the CSSImageValue Example
console.log(allComputedStyles.get("background-image"));
console.log(allComputedStyles.get("background-image").toString());
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
