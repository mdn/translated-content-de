---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 4fb9722796c7e24041ec7f4060d5da19d4e8c404
---

{{APIRef("CSSOM")}}

Das **`CSSFontFaceRule`**-Interface repräsentiert eine {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt zurück, das das Lesen und Setzen der Deskriptoren der zugehörigen {{cssxref("@font-face")}}-At-Regel ermöglicht.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugriff auf @font-face-Eigenschaften

Dieses Beispiel definiert eine {{cssxref("@font-face")}}-Regel und iteriert dann über die Regeln auf der Seite, bis die zugehörige `CSSFontFaceRule` gefunden wird. Anschließend werden einige der Eigenschaften protokolliert.

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
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

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    log(`this: ${rule}`);
    log(` cssText: ${rule.cssText}`);
    log(` parentRule: ${rule.parentRule}`);
    log(` parentStyleSheet: ${rule.parentStyleSheet}`);
    log(` type: ${rule.type}`);
    log(` style: ${rule.style}`);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Accessing @font-face properties", "100%", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
