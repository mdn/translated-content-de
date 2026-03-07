---
title: CSSFontFaceDescriptors
slug: Web/API/CSSFontFaceDescriptors
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Das **`CSSFontFaceDescriptors`**-Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@font-face")}}-[@-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Jeder Deskriptor im Körper der entsprechenden {{cssxref("@font-face")}}-@-Regel kann entweder über seinen Kebab-Case-Eigenschaftsnamen in der [Bracket-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) oder die Camel-Case-Version des Eigenschaftsnamens in der [Dot-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) zugegriffen werden. Zum Beispiel können Sie auf den `font-family`-CSS-Deskriptor als `style["font-family"]` oder `style.fontFamily` zugreifen, wobei `style` eine Instanz von `CSSFontFaceDescriptors` ist.

> [!NOTE]
> Die [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle repräsentiert eine {{cssxref("@font-face")}}-@-Regel, und die [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style)-Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen in Kebab-Case (zugänglich über die Bracket-Notation) und Camel-Case (zugänglich über die Dot-Notation) stellen jeweils den Wert eines Deskriptors in der entsprechenden `@font-face`-@-Regel dar:

- `font-display` oder `fontDisplay` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-display", "font-display")}}-Deskriptors repräsentiert.
- `font-family` oder `fontFamily` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-family", "font-family")}}-Deskriptors repräsentiert.
- `font-feature-settings` oder `fontFeatureSettings` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}-Deskriptors repräsentiert.
- `font-stretch` oder `fontStretch` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptors repräsentiert.
- `font-style` oder `fontStyle` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-style", "font-style")}}-Deskriptors repräsentiert.
- `font-weight` oder `fontWeight` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptors repräsentiert.
- `font-width` oder `fontWidth` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-width", "font-width")}}-Deskriptors repräsentiert.
- `size-adjust` oder `sizeAdjust` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/size-adjust", "size-adjust")}}-Deskriptors repräsentiert.
- `src` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/src", "src")}}-Deskriptors repräsentiert.
- `unicode-range` oder `unicodeRange` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptors repräsentiert.

## Instanz-Methoden

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
