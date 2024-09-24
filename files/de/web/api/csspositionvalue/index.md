---
title: CSSPositionValue
slug: Web/API/CSSPositionValue
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Die **`CSSPositionValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte für Eigenschaften, die eine Position erfordern, zum Beispiel {{cssxref('object-position')}}.

## Konstruktor

- {{domxref("CSSPositionValue.CSSPositionValue", "CSSPositionValue()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Erstellt ein neues `CSSPositionValue` Objekt.

## Instanz-Eigenschaften

- {{domxref('CSSPositionValue.x')}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt die Position des Elements entlang der horizontalen Achse der Webseite zurück.
- {{domxref('CSSPositionValue.y')}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt die Position des Elements entlang der vertikalen Achse zurück.

## Instanz-Methoden

Keine.

## Beispiele

Im folgenden Beispiel wird ein Container-`<div>` 5 Pixel von oben und 10 Pixel von links der Seite positioniert.

```js
const replacedEl = document.getElementById("image");
const position = new CSSPositionValue(CSS.px(35), CSS.px(40));

replacedEl.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
console.log(replacedEl.computedStyleMap().get("object-position"));
```

Wir setzen die {{cssxref('object-position')}}-Eigenschaft und überprüfen die zurückgegebenen Werte.

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
  Überprüfen Sie die Entwicklertools, um das Protokoll in der Konsole zu sehen und das
  Stilattribut auf dem Bild zu inspizieren.
</p>
<img id="image" src="mdn.svg" alt="MDN Logo" />
```

{{EmbedLiveSample("Examples", 300, 300)}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
