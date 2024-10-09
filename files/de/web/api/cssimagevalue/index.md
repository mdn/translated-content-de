---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSImageValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die ein Bild erfordern, wie beispielsweise {{cssxref('background-image')}}, {{cssxref('list-style-image')}} oder {{cssxref('border-image-source')}}.

Das CSSImageValue-Objekt stellt ein [`<image>`](/de/docs/Web/CSS/image) dar, das eine URL enthält, wie [`url()`](/de/docs/Web/CSS/url_function) oder [`image()`](/de/docs/Web/CSS/image), jedoch nicht [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) oder [`element()`](/de/docs/Web/CSS/element).

{{InheritanceDiagram}}

## Instanzeigenschaften

Keine.

## Instanzmethoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

Wir erstellen ein Element

```html
<button>Magic Wand</button>
```

Wir fügen einige CSS-Stile hinzu, einschließlich eines Hintergrundbildes, das eine Binärdatei anfordert:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url(magic-wand.png) aqua;
}
```

Wir erhalten die Stilkarte des Elements. Anschließend rufen wir das Hintergrundbild aus der Stilkarte ab und konvertieren es in einen String:

```js
// get the element
const button = document.querySelector("button");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// Return the CSSImageValue Example
console.log(allComputedStyles.get("background-image"));
console.log(allComputedStyles.get("background-image").toString());
```

{{EmbedLiveSample("Beispiele", 120, 300)}}

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
