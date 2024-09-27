---
title: "CSSKeywordValue: CSSKeywordValue() Konstruktor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSKeywordValue()`**-Konstruktor
erstellt ein neues [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und
andere Bezeichner repräsentiert.

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

Das folgende Beispiel setzt die CSS-Eigenschaft {{cssxref('display')}} auf ihre Standardwerte zurück,
indem das inline
[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut
auf `style="display: initial"` gesetzt wird, wenn es im [Entwicklerwerkzeuge-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) betrachtet wird.

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
