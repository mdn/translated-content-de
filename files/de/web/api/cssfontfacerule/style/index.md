---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 4fb9722796c7e24041ec7f4060d5da19d4e8c404
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Interfaces gibt ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt zurück, das die im Körper der {{cssxref("@font-face")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt.

Obwohl die `style`-Eigenschaft selbst schreibgeschützt ist, da Sie das `CSSFontFaceDescriptors`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft ist.
Sie können das `CSSFontFaceDescriptors`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) modifizieren.

## Beispiele

### Grundlegende Verwendung

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
    const descriptors = rule.style;
    if (descriptors instanceof CSSStyleDeclaration) {
      log(`rule.style is a CSSStyleDeclaration.`);
    } else {
      log(`rule.style is a CSSFontFaceDescriptors.`);
    }
    log("Descriptors:");
    log(` font-family: ${descriptors.fontFamily}`);
    log(` src: ${descriptors.src}`);
    log(` font-weight: ${descriptors["font-weight"]}`);
    log(` font-style: ${descriptors.fontStyle}`);
    log(` font-display: ${descriptors["font-display"]}`);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "100%", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
