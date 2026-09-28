---
title: Serialisierung von CSS-Werten
slug: Web/API/CSS_Object_Model/CSS_value_serialization
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{APIRef("CSSOM")}}

Einige CSSOM-APIs _serialisieren_ Eigenschaftswerte auf Grundlage ihres [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types) zu standardisierten Zeichenketten. Beispielsweise können Sie eine Farbe mit der Syntax `hsl(240 100% 50%)` festlegen. Wenn Sie den Wert jedoch über JavaScript auslesen, wird er in der gleichwertigen Syntax `"rgb(0, 0, 255)"` zurückgegeben.

CSS-Datentypen lassen sich häufig in mehreren Syntaxformen ausdrücken. Beispielsweise kann der Datentyp {{cssxref("&lt;color&gt;")}} durch benannte Farben (`red`), Hexadezimalschreibweise (`#ff0000`), Funktionsschreibweise (`rgb(255 0 0)`) und weitere Formen dargestellt werden. Diese unterschiedlichen Syntaxformen sind in jeder Phase der [Verarbeitung von CSS-Werten](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) vollkommen gleichwertig. Ähnlich kann in JavaScript dieselbe Zeichenkette mit einfachen oder doppelten Anführungszeichen und dieselbe Zahl in unterschiedlichen Formaten geschrieben werden (etwa `16`, `16.0` oder `0x10`).

Da CSS all diese Schreibweisen bei der Verarbeitung in denselben zugrunde liegenden Wert umwandelt, lässt sich die ursprüngliche Syntax aus dem bereits geparsten CSSOM oft nicht wiederherstellen. Außerdem ist eine _kanonische_ Darstellung für Skripte häufig nützlicher, weil sie Vergleiche und Berechnungen auf Grundlage der Darstellung für Benutzer ermöglicht, statt auf Grundlage der ursprünglichen Schreibweise.

## Wann und wie Werte serialisiert werden

Eine Serialisierung findet immer dann statt, wenn CSS-Eigenschaftswerte über JavaScript-APIs als Zeichenketten gelesen werden, beispielsweise durch:

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
- den direkten Zugriff auf Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekten (z. B. `element.style.backgroundColor`)

Verschiedene APIs geben `CSSStyleDeclaration`-Objekte aus unterschiedlichen Phasen der [Wertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) zurück. Ihr Serialisierungsverhalten unterscheidet sich daher geringfügig. Beispielsweise geben [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) und [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) den [aufgelösten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) von Eigenschaften zurück, während [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) _mehr oder weniger_ den [deklarierten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#declared_value) zurückgibt.

> [!NOTE]
> Die [CSS Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API) kann Einheiten und andere CSS-Syntaxformen darstellen. Stildeklarationen, die von einem Element abgerufen werden, sind jedoch bereits verarbeitet und bewahren die ursprüngliche Syntax nicht. Beispielsweise gibt `CSS.cm(1).toString()` `"1cm"` zurück, statt den Wert in Pixel zu serialisieren. Dagegen gibt `element.computedStyleMap().get("margin-left").toString()` den aufgelösten Pixelwert zurück.

Für jeden CSS-Werttyp ist in den CSS-Spezifikationen ein Serialisierungsformat definiert. Zu den häufigen Regeln gehören:

- Schlüsselwörter (wie `auto`, `block`, `none`) werden vollständig kleingeschrieben serialisiert.
- {{cssxref("angle")}}: wird in einer vom Kontext abhängigen, nicht festgelegten Winkeleinheit serialisiert. Bei `element.style` und `getComputedStyle()` ist dies `deg`.
- {{cssxref("&lt;color&gt;")}}:
  - sRGB-Farben ({{cssxref("named-color")}}, `transparent`, {{cssxref("system-color")}}, {{cssxref("hex-color")}}, `rgb`, `hsl`, `hwb`): werden in der herkömmlichen, durch Kommas getrennten Syntax `rgb(R, G, B)` oder `rgba(R, G, B, A)` serialisiert, wobei alle Argumente Zahlen sind. Die Form `rgb` wird verwendet, wenn der Alphawert genau `1` beträgt.
  - Bei Farben in `lab()`, `lch()`, `oklab()`, `oklch()` und `color()` bleibt die Funktionsform mit numerischen Argumenten erhalten.
  - Das Schlüsselwort `currentColor` wird als `currentcolor` serialisiert.
- {{cssxref("percentage")}}: bleibt als Prozentwert erhalten.
- {{cssxref("ratio")}}: wird als zwei durch `" / "` getrennte Zahlen serialisiert.
- {{cssxref("url_value", "&lt;url&gt;")}}: wird als {{cssxref("url_value", "&lt;url&gt;")}} mit Anführungszeichen (`url("...")`) serialisiert, wobei die URL zu einer absoluten URL aufgelöst wird.

Beachten Sie, dass `<percentage>`-Werte bei der Wertverarbeitung häufig in absolute Größen (wie `<length>`) umgerechnet werden. Bei der Serialisierung berechneter Stile erscheinen sie daher möglicherweise nicht als Prozentwerte. Bei Größen mit Einheiten, etwa {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;resolution&gt;")}} und {{cssxref("&lt;time&gt;")}}, hängt die serialisierte Einheit vom Kontext ab und ist nicht genau spezifiziert. `getComputedStyle()` und `element.style` serialisieren diese Werte jeweils in `Hz`, `px`, `dppx` und `s`.

Bei der Serialisierung des Werts einer Kurzschreibweise werden die zugehörigen einzelnen Eigenschaften serialisiert und gemäß den Regeln für diese Kurzschreibweise kombiniert.

> [!NOTE]
> Die Serialisierung von CSS-Eigenschaften umfasst viele komplexe Details, insbesondere bei komplexen Eigenschaften wie `font`. Manche sind in den Spezifikationen nicht festgelegt oder unterscheiden sich sogar zwischen Browsern. Sie sollten das Verhalten für Ihren konkreten Anwendungsfall testen und überprüfen.

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

{{EmbedLiveSample("", "", 400)}}

## Beispiele

### Serialisierung von Farbwerten

Farben gehören zu den Werttypen, die am häufigsten von der Serialisierung betroffen sind. Unabhängig davon, ob Sie eine Farbe mit `hsl()`, `hwb()`, einem Schlüsselwort oder einem modernen Farbraum definieren, gibt JavaScript sie üblicherweise im [herkömmlichen Format `rgb()` oder `rgba()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb#syntax) zurück.

Die folgenden Beispiele zeigen, wie unterschiedliche Farbformate beim Zugriff über JavaScript serialisiert werden.

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

Längen sind ein weiterer häufiger Fall. Relative Einheiten (wie `em` und `%`) werden bei der Serialisierung über JavaScript-APIs oft in absolute Pixelwerte aufgelöst.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

Diese Normalisierung ermöglicht es Skripten, Längen einheitlich zu vergleichen oder mit ihnen zu rechnen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
