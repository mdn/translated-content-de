---
title: Serialisierung von CSS-Werten
slug: Web/API/CSS_Object_Model/CSS_value_serialization
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("CSSOM")}}

Einige CSSOM-APIs _serialisieren_ Eigenschaftswerte zu standardisierten Zeichenfolgen, die vom [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) des Werts abhängen. Beispielsweise können Sie eine Farbe mit der Syntax `hsl(240 100% 50%)` festlegen. Wenn Sie den Wert über JavaScript auslesen, wird er jedoch in der gleichwertigen Syntax `"rgb(0, 0, 255)"` zurückgegeben.

CSS-Datentypen lassen sich häufig in mehreren Syntaxformen ausdrücken. Beispielsweise kann der Datentyp {{cssxref("&lt;color&gt;")}} durch benannte Farben (`red`), hexadezimale Schreibweise (`#ff0000`), funktionale Schreibweise (`rgb(255 0 0)`) und weitere Formen dargestellt werden. Diese unterschiedlichen Syntaxformen sind in jeder Phase der [Verarbeitung von CSS-Werten](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) vollständig gleichwertig – ähnlich wie in JavaScript dieselbe Zeichenfolge mit einfachen oder doppelten Anführungszeichen oder dieselbe Zahl in verschiedenen Formaten (etwa `16`, `16.0` oder `0x10`) geschrieben werden kann.

Da CSS all diese Darstellungsformen bei der Wertverarbeitung in denselben zugrunde liegenden Wert umwandelt, lässt sich die ursprüngliche Syntax aus dem bereits geparsten CSSOM häufig nicht mehr rekonstruieren. Außerdem ist eine _kanonische_ Darstellung für Skripte oft nützlicher, weil sie Vergleiche und Berechnungen anhand der Darstellung für die Benutzer ermöglicht statt anhand der ursprünglichen Schreibweise.

## Wann und wie Werte serialisiert werden

Die Serialisierung erfolgt immer dann, wenn CSS-Eigenschaftswerte über JavaScript-APIs als Zeichenfolgen ausgelesen werden, beispielsweise durch:

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
- Direkten Zugriff auf Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekten (z. B. `element.style.backgroundColor`)

Verschiedene APIs geben `CSSStyleDeclaration`-Objekte aus unterschiedlichen Phasen der [Wertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) zurück. Ihr Verhalten bei der Serialisierung unterscheidet sich daher geringfügig. Beispielsweise geben [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) und [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) den [aufgelösten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) von Eigenschaften zurück, während [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) _mehr oder weniger_ den [deklarierten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#declared_value) zurückgibt.

> [!NOTE]
> Die [CSS Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API) kann Einheiten und andere CSS-Syntaxformen darstellen. Stildeklarationen, die von einem Element abgerufen werden, sind jedoch bereits verarbeitet und bewahren die ursprüngliche Syntax nicht. Beispielsweise gibt `CSS.cm(1).toString()` `"1cm"` zurück, statt den Wert in Pixel zu serialisieren. `element.computedStyleMap().get("margin-left").toString()` gibt dagegen den aufgelösten Pixelwert zurück.

Für jeden CSS-Werttyp legen die CSS-Spezifikationen ein Serialisierungsformat fest. Einige häufige Regeln sind:

- Schlüsselwörter (wie `auto`, `block`, `none`) werden vollständig in Kleinbuchstaben serialisiert.
- {{cssxref("angle")}}: wird in einer Winkeleinheit serialisiert, die vom Kontext abhängt (nicht genauer festgelegt). Bei `element.style` und `getComputedStyle()` ist dies `deg`.
- {{cssxref("&lt;color&gt;")}}:
  - sRGB-Farben ({{cssxref("named-color")}}, `transparent`, {{cssxref("system-color")}}, {{cssxref("hex-color")}}, `rgb`, `hsl`, `hwb`): werden in der herkömmlichen, durch Kommas getrennten Syntax `rgb(R, G, B)` oder `rgba(R, G, B, A)` serialisiert, wobei alle Argumente Zahlen sind. Die Form `rgb` wird verwendet, wenn der Alphawert genau `1` ist.
  - Bei Farben mit `lab()`, `lch()`, `oklab()`, `oklch()` und `color()` bleibt die Funktionsform mit numerischen Argumenten erhalten.
  - Das Schlüsselwort `currentColor` wird als `currentcolor` serialisiert.
- {{cssxref("percentage")}}: bleibt als Prozentwert erhalten.
- {{cssxref("ratio")}}: wird als zwei Zahlen serialisiert, die durch `" / "` getrennt sind.
- {{cssxref("url_value", "&lt;url&gt;")}}: wird als {{cssxref("url_value", "&lt;url&gt;")}} mit Anführungszeichen (`url("...")`) serialisiert, wobei die URL zu einer absoluten URL aufgelöst wird.

Beachten Sie, dass `<percentage>`-Werte bei der Wertverarbeitung häufig in absolute Größen (wie `<length>`) umgerechnet werden. Daher erscheinen sie bei der Serialisierung berechneter Stile möglicherweise nicht mehr als Prozentwerte. Bei Größen mit Einheiten, etwa {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;resolution&gt;")}} und {{cssxref("&lt;time&gt;")}}, hängt die serialisierte Einheit vom Kontext ab und ist nicht genau spezifiziert. `getComputedStyle()` und `element.style` serialisieren diese Werte jeweils in `Hz`, `px`, `dppx` und `s`.

Bei der Serialisierung des Werts einer Kurzschreibweise werden die zugehörigen Langschreibweise-Eigenschaften serialisiert und nach den Regeln der jeweiligen Kurzschreibweise zusammengeführt.

> [!NOTE]
> Die Serialisierung von CSS-Eigenschaften umfasst viele komplexe Details, insbesondere bei komplexen Eigenschaften wie `font`. Diese Details sind in den Spezifikationen möglicherweise nicht festgelegt oder unterscheiden sich sogar zwischen Browsern. Testen und überprüfen Sie das Verhalten für Ihren konkreten Anwendungsfall.

```html
<div>Example Element</div>
```

```css
div {
  position: absolute; /* keyword */
  rotate: 1rad; /* <angle> */
  color: hsl(240 50% 50%); /* <color> */
  background-color: hsl(120 50% 50% / 0.3); /* <color> with alpha */
  border-color: lab(10 -120 -120); /* <color> in non-sRGB space */
  margin: 2em; /* relative <length> */
  padding: 2cm; /* absolute <length> */
  font-size: calc(1em + 2px); /* complex expression */
  left: 50%; /* <percentage> */
  animation-duration: 500ms; /* <time> */
}
```

```js
const element = document.querySelector("div");
const table = document.createElement("table");
const elemStyle = getComputedStyle(element);
const ruleStyle = document.getElementById("css-output").sheet.cssRules[0].style;
const head = table.createTHead().insertRow();
["Property", "getComputedStyle()", "CSSStyleRule"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  head.appendChild(th);
});
for (const property of [
  "position",
  "rotate",
  "color",
  "background-color",
  "border-color",
  "margin",
  "padding",
  "font-size",
  "left",
  "animation-duration",
]) {
  const row = document.createElement("tr");
  const propCell = document.createElement("td");
  const valueCell = document.createElement("td");
  const ruleCell = document.createElement("td");
  propCell.textContent = property;
  valueCell.textContent = elemStyle.getPropertyValue(property);
  ruleCell.textContent = ruleStyle.getPropertyValue(property);
  row.appendChild(propCell);
  row.appendChild(valueCell);
  row.appendChild(ruleCell);
  table.appendChild(row);
}
document.body.appendChild(table);
```

{{EmbedLiveSample("when_and_how_values_are_serialized", "", 400)}}

## Beispiele

### Serialisierung von Farbwerten

Farben gehören zu den häufigsten Werttypen, die von der Serialisierung betroffen sind. Unabhängig davon, ob Sie eine Farbe mit `hsl()`, `hwb()`, einem Schlüsselwort oder einem modernen Farbraum definieren, gibt JavaScript sie normalerweise im [herkömmlichen Format `rgb()` oder `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#syntax) zurück.

Die folgenden Beispiele zeigen, wie verschiedene Farbformate beim Zugriff über JavaScript serialisiert werden.

```html
<div class="example hsl">HSL Color</div>
<div class="example lab">LAB Color</div>
<div class="example named">Named Color</div>
<div class="example alpha">Transparent Color</div>
<pre id="output"></pre>
```

```css
.example {
  padding: 10px;
  margin: 5px;
  color: white;
}

.hsl {
  background-color: hsl(240 50% 50%);
}

.lab {
  background-color: lab(100% 0 0);
}

.named {
  background-color: blue;
}

.alpha {
  background-color: hsl(120 50% 50% / 0.3);
}
```

```js
const examples = document.querySelectorAll(".example");
const output = document.getElementById("output");

examples.forEach((element) => {
  const style = getComputedStyle(element);
  output.textContent += `${element.className}: ${style.getPropertyValue("background-color")}\n`;
});
```

{{EmbedLiveSample("Color value serialization", , 400)}}

### Serialisierung von Längenwerten

Längen sind ein weiterer häufiger Fall. Relative Einheiten (wie `em` und `%`) werden bei der Serialisierung über JavaScript-APIs häufig in absolute Pixelwerte aufgelöst.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

Diese Normalisierung ermöglicht es Skripten, Längen konsistent zu vergleichen oder mit ihnen zu rechnen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
