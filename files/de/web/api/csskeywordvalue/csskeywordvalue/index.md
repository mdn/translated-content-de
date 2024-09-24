---
title: "CSSKeywordValue: CSSKeywordValue()-Konstruktor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSKeywordValue()`**-Konstruktor
erstellt ein neues {{domxref("CSSKeywordValue")}}-Objekt, das CSS-Schlüsselwörter und
andere Bezeichner darstellt.

## Syntax

```js-nolint
new CSSKeywordValue(val)
```

### Parameter

- `value`
  - : Legt den Wert des neuen `CSSKeywordValue` fest oder gibt ihn zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `value` nicht angegeben ist oder nicht vom Typ {{jsxref('String')}} ist.

## Beispiele

Das folgende Beispiel setzt die CSS-{{cssxref('display')}}-Eigenschaft auf ihre Standardwerte zurück
und setzt das inline
[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut
auf `style="display: initial"`, wenn es im [Entwicklerwerkzeug-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) angezeigt wird.

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  Überprüfen Sie die Entwicklerwerkzeuge, um die Protokollierung in der Konsole zu sehen und das
  style-Attribut auf diesem div zu inspizieren.
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

## Kompatibilität der Browser

{{Compat}}
