---
title: "CSSKeywordValue: CSSKeywordValue() Konstruktor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSKeywordValue()`** Konstruktor erstellt ein neues [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner darstellt.

## Syntax

```js-nolint
new CSSKeywordValue(val)
```

### Parameter

- `value`
  - : Setzt oder gibt den Wert des neuen `CSSKeywordValue` zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `value`-Parameter nicht angegeben ist oder nicht vom Typ {{jsxref('String')}} ist.

## Beispiele

Das folgende Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf ihre Standardwerte zurück, indem das Inline-Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) auf `style="display: initial"` gesetzt wird, wenn es im [Entwicklerwerkzeuge-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) betrachtet wird.

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
const keyword = new CSSKeywordValue("initial");
const myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", keyword);

console.log(myElement.get("display").value); // 'initial'
console.dir(keyword);
```

{{EmbedLiveSample("Examples", 120, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
