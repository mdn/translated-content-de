---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSKeywordValue`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

Der Instanzname der Schnittstelle ist ein {{Glossary("stringifier", "stringifier")}}, was bedeutet, dass er überall, wo ein String erwartet wird, den Wert von `CSSKeyword.value` zurückgibt.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)
  - : Erstellt ein neues `CSSKeywordValue` Objekt.

## Instanz-Eigenschaften

- [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Gibt den Wert von `CSSKeywordValue` zurück oder setzt ihn.

## Instanz-Methoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

Das folgende Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf ihre Standardwerte zurück und setzt das inline [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut auf `style="display: initial"`, wenn es im [Entwicklerwerkzeuge-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) betrachtet wird.

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  Check the developer tools to see the log in the console and to inspect the
  style attribute on this div.
</div>
```

```js
let myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", new CSSKeywordValue("initial"));

console.log(myElement.get("display").value); // 'initial'
```

{{EmbedLiveSample("Examples", 120, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
