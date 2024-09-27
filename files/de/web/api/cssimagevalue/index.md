---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSImageValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die ein Bild akzeptieren, beispielsweise {{cssxref('background-image')}}, {{cssxref('list-style-image')}} oder {{cssxref('border-image-source')}}.

Das CSSImageValue-Objekt stellt ein [`<image>`](/de/docs/Web/CSS/image) dar, das eine URL beinhaltet, wie zum Beispiel [`url()`](/de/docs/Web/CSS/url_function) oder [`image()`](/de/docs/Web/CSS/image), jedoch nicht [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) oder [`element()`](/de/docs/Web/CSS/element).

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

Wir fügen ein wenig CSS hinzu, einschließlich eines Hintergrundbildes, das eine Binärdatei anfordert:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url(magicwand.png) aqua;
}
```

Wir holen die Style-Map des Elements ab. Dann holen wir das Hintergrundbild aus der Style-Map mit `get()` und konvertieren es in einen String:

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
