---
title: CSSFontFaceDescriptors
slug: Web/API/CSSFontFaceDescriptors
l10n:
  sourceCommit: 1d5c902cab960d469baba95eb12cd421769b9111
---

{{APIRef("CSSOM")}}

Das **`CSSFontFaceDescriptors`**-Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@font-face")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Jeder Deskriptor im Körper der entsprechenden {{cssxref("@font-face")}}-At-Regel kann entweder mit seinem Eigenschaftsnamen im Kebab-Case in [Klammernotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) oder der Eigenschaft im Camel-Case in [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) zugegriffen werden. Zum Beispiel kann auf den `font-family` CSS-Deskriptor als `style["font-family"]` oder `style.fontFamily` zugegriffen werden, wobei `style` eine Instanz von `CSSFontFaceDescriptors` ist.

> [!NOTE]
> Das [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Interface repräsentiert eine {{cssxref("@font-face")}}-At-Regel, und die [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style)-Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen im Kebab-Case (Zugriff über Klammernotation) und Camel-Case (Zugriff über Punktnotation) repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@font-face`-At-Regel:

- `font-display` oder `fontDisplay`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-display", "font-display")}}-Deskriptors repräsentiert.
- `font-family` oder `fontFamily`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-family", "font-family")}}-Deskriptors repräsentiert.
- `font-feature-settings` oder `fontFeatureSettings`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}-Deskriptors repräsentiert.
- `font-stretch` oder `fontStretch`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptors repräsentiert.
- `font-style` oder `fontStyle`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-style", "font-style")}}-Deskriptors repräsentiert.
- `font-weight` oder `fontWeight`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptors repräsentiert.
- `font-width` oder `fontWidth`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-width", "font-width")}}-Deskriptors repräsentiert.
- `size-adjust` oder `sizeAdjust`
  - : Ein String, der den Wert des {{cssxref("@font-face/size-adjust", "size-adjust")}}-Deskriptors repräsentiert.
- `src`
  - : Ein String, der den Wert des {{cssxref("@font-face/src", "src")}}-Deskriptors repräsentiert.
- `unicode-range` oder `unicodeRange`
  - : Ein String, der den Wert des {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptors repräsentiert.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Zugriff auf @font-face-Deskriptorwerte

Dieses Beispiel definiert eine {{cssxref("@font-face")}}-Regel und verwendet dann `CSSFontFaceDescriptors`, um die Deskriptorwerte auszulesen.

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"),
    local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    const style = rule.style; // a CSSFontFaceDescriptors
    log(`font-family: ${style.fontFamily}`);
    log(`src: ${style.src}`);
    log(`font-weight: ${style["font-weight"]}`);
    log(`font-style: ${style.fontStyle}`);
    log(`font-display: ${style["font-display"]}`);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Accessing @font-face descriptor values", "100%", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style)
- {{cssxref("@font-face")}}
