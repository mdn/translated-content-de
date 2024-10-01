---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSKeywordValue`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren.

Der Name der Schnittstelleninstanz ist ein {{Glossary("stringifier", "stringifier")}}, was bedeutet, dass sie überall, wo ein String erwartet wird, den Wert von `CSSKeyword.value` zurückgeben wird.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)
  - : Erstellt ein neues `CSSKeywordValue`-Objekt.

## Instanzeigenschaften

- [`CSSKeywordValue.value`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Gibt den Wert des `CSSKeywordValue` zurück oder setzt ihn.

## Instanzmethoden

_Erbt Methoden von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

## Beispiele

Das folgende Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf ihre Standardwerte zurück, indem das Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) auf `style="display: initial"` gesetzt wird, wenn es im [Entwicklertools-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) betrachtet wird.

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
