---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSImageValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die ein Bild benötigen, zum Beispiel {{cssxref('background-image')}}, {{cssxref('list-style-image')}} oder {{cssxref('border-image-source')}}.

Das CSSImageValue-Objekt repräsentiert ein {{cssxref("image")}}, das eine URL beinhaltet, wie zum Beispiel {{cssxref("url_function", "url()")}} oder {{cssxref("image()")}}, jedoch nicht {{cssxref("gradient/linear-gradient", "linear-gradient()")}} oder {{cssxref("element()")}}.

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

Wir fügen etwas CSS hinzu, einschließlich eines Hintergrundbilds, das eine Binärdatei anfordert:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url("magic-wand.png") aqua;
}
```

Wir erhalten die Stilkarte des Elements. Dann rufen wir get() für das Hintergrundbild von der Stilkarte auf und konvertieren es in einen String:

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
