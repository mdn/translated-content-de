---
title: CSSFontFaceDescriptors
slug: Web/API/CSSFontFaceDescriptors
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("CSSOM")}}

Die **`CSSFontFaceDescriptors`** Schnittstelle repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Jeder Deskriptor im Körper der entsprechenden {{cssxref("@font-face")}} At-Regel kann entweder über seinen Eigenschaftsnamen im Kebab-Case in [Klammernotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) oder die Camel-Case-Version des Eigenschaftsnamens in [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) zugegriffen werden. Zum Beispiel kann der `font-family` CSS-Deskriptor als `style["font-family"]` oder `style.fontFamily` abgerufen werden, wobei `style` eine `CSSFontFaceDescriptors`-Instanz ist.

> [!NOTE]
> Die [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule) Schnittstelle repräsentiert eine {{cssxref("@font-face")}} At-Regel, und die [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen in Kebab-Case (abgerufen mit Klammernotation) und Camel-Case (abgerufen mit Punktnotation) stellen jeweils den Wert eines Deskriptors in der entsprechenden `@font-face` At-Regel dar:

- `font-display` oder `fontDisplay`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-display", "font-display")}} Deskriptors repräsentiert.
- `font-family` oder `fontFamily`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-family", "font-family")}} Deskriptors repräsentiert.
- `font-feature-settings` oder `fontFeatureSettings`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}} Deskriptors repräsentiert.
- `font-stretch` oder `fontStretch`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptors repräsentiert.
- `font-style` oder `fontStyle`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-style", "font-style")}} Deskriptors repräsentiert.
- `font-weight` oder `fontWeight`
  - : Ein String, der den Wert des {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptors repräsentiert.
- `font-width` oder `fontWidth` {{experimental_inline}}
  - : Ein String, der den Wert des {{cssxref("@font-face/font-width", "font-width")}} Deskriptors repräsentiert.
- `size-adjust` oder `sizeAdjust`
  - : Ein String, der den Wert des {{cssxref("@font-face/size-adjust", "size-adjust")}} Deskriptors repräsentiert.
- `src`
  - : Ein String, der den Wert des {{cssxref("@font-face/src", "src")}} Deskriptors repräsentiert.
- `unicode-range` oder `unicodeRange`
  - : Ein String, der den Wert des {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptors repräsentiert.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Zugriff auf @font-face Deskriptorwerte

Dieses Beispiel definiert eine {{cssxref("@font-face")}} Regel und verwendet dann `CSSFontFaceDescriptors`, um die Deskriptorwerte wieder auszulesen.

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
