---
title: CSSPositionValue
slug: Web/API/CSSPositionValue
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Das **`CSSPositionValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die eine Position einnehmen, zum Beispiel {{cssxref('object-position')}}.

## Konstruktor

- [`CSSPositionValue()`](/de/docs/Web/API/CSSPositionValue/CSSPositionValue) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Erstellt ein neues `CSSPositionValue` Objekt.

## Instanzeigenschaften

- [`CSSPositionValue.x`](/de/docs/Web/API/CSSPositionValue/x) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt die Position des Elements entlang der horizontalen Achse der Webseite zurück.
- [`CSSPositionValue.y`](/de/docs/Web/API/CSSPositionValue/y) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt die Position des Elements entlang der vertikalen Achse zurück.

## Instanzmethoden

Keine.

## Beispiele

Im folgenden Beispiel wird ein `<div>` Container 5 Pixel von oben und 10 Pixel von links der Seite positioniert.

```js
const replacedEl = document.getElementById("image");
const position = new CSSPositionValue(CSS.px(35), CSS.px(40));

replacedEl.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
console.log(replacedEl.computedStyleMap().get("object-position"));
```

Wir setzen die {{cssxref('object-position')}} Eigenschaft und überprüfen die zurückgegebenen Werte.

```css hidden
#image {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  background-color: #dededf;
  object-fit: none;
}
```

```html hidden
<p>
  Check the developer tools to see the log in the console and to inspect the
  style attribute on the image.
</p>
<img id="image" src="mdn.svg" alt="MDN Logo" />
```

{{EmbedLiveSample("Examples", 300, 300)}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
