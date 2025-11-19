---
title: Serialisierung von CSS-Werten
slug: Web/API/CSS_Object_Model/CSS_value_serialization
l10n:
  sourceCommit: fdd310ad3477ab07a9072b802a3adc92e5c52856
---

{{APIRef("CSSOM")}}

Einige CSSOM-APIs _serialisieren_ Eigenschaftswerte in standardisierte Zeichenfolgendarstellungen basierend auf dem [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) des Wertes. Sie könnten zum Beispiel eine Farbe mit der `hsl(240 100% 50%)`-Syntax festlegen, aber beim Zugriff über JavaScript wird der Wert im entsprechenden `"rgb(0, 0, 255)"`-Format zurückgegeben.

CSS-Datentypen können oft in mehreren Syntaxen ausgedrückt werden. Zum Beispiel kann der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp mit benannten Farben (`red`), hexadezimaler Notation (`#ff0000`), funktionaler Notation (`rgb(255 0 0)`) und mehr dargestellt werden. Diese unterschiedlichen Syntaxen sind in jeder Phase der [Verarbeitung von CSS-Werten](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) exakt gleichwertig, ähnlich wie in JavaScript derselbe String mit einfachen oder doppelten Anführungszeichen geschrieben werden kann oder dieselbe Zahl in verschiedenen Formaten (wie `16`, `16.0` oder `0x10`) geschrieben werden kann.

Da CSS all diese Oberflächenrepräsentationen während der Wertverarbeitung in denselben zugrunde liegenden Wert umwandelt, ist es oft unmöglich, die ursprüngliche Syntax aus dem bereits geparsten CSSOM zurückzugewinnen. Darüber hinaus ist eine _kanonische_ Darstellung für Skripte nützlicher, da sie Vergleiche und Berechnungen basierend auf der Darstellung des Inhalts für den Benutzer ermöglicht, anstatt darauf, wie er ursprünglich erstellt wurde.

## Wann und wie Werte serialisiert werden

Die Serialisierung erfolgt, wann immer CSS-Eigenschaftswerte über JavaScript-APIs als Zeichenfolgen gelesen werden, wie beispielsweise:

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
- Direkter Zugriff auf Eigenschaften in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekten (z. B. `element.style.backgroundColor`)

Verschiedene APIs geben `CSSStyleDeclaration`-Objekte in verschiedenen Stadien der [Wertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) zurück, die leicht unterschiedliche Serialisierungsverhalten aufweisen. Zum Beispiel geben [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) und [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) den [aufgelösten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) von Eigenschaften zurück, während [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) _mehr oder weniger_ den [deklarierten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#declared_value) zurückgibt.

> [!NOTE]
> Die [CSS Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API) kann Einheiten und andere CSS-Syntaxen darstellen; jedoch werden von einem Element abgerufene Stildeklarationen immer noch verarbeitet und behalten nicht die ursprüngliche Syntax bei. Zum Beispiel gibt `CSS.cm(1).toString()` `„1cm“` zurück, anstatt in Pixel zu serialisieren, aber `element.computedStyleMap().get("margin-left").toString()` gibt den aufgelösten Pixelwert zurück.

Jeder CSS-Werttyp hat ein zugehöriges Serialisierungsformat, das durch die CSS-Spezifikationen definiert ist. Einige allgemeine Regeln beinhalten:

- Schlüsselwörter (wie `auto`, `block`, `none`) werden in Kleinbuchstaben serialisiert.
- [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle): wird in eine Winkel-Einheit serialisiert, abhängig vom Kontext (nicht spezifiziert). Für `element.style` und `getComputedStyle()` ist dies `deg`.
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value):
  - Für sRGB-Farben ({{cssxref("named-color")}}, `transparent`, {{cssxref("system-color")}}, {{cssxref("hex-color")}}, `rgb`, `hsl`, `hwb`): serialisiert im alten, durch Komma getrennten Syntax `rgb(R, G, B)` oder `rgba(R, G, B, A)`, wobei alle Argumente Zahlen sind. Die `rgb`-Form wird gewählt, wenn der Alpha-Wert genau `1` ist.
  - Für `lab()`, `lch()`, `oklab()`, `oklch()`, und `color()`-Farben: Die Funktionsform wird beibehalten, mit numerischen Argumenten.
  - Das Schlüsselwort `currentColor` wird als `currentcolor` serialisiert.
- [`<percentage>`](/de/docs/Web/CSS/Reference/Values/percentage): wird als Prozentwert beibehalten.
- [`<ratio>`](/de/docs/Web/CSS/Reference/Values/ratio): wird als zwei durch `" / "` getrennte Zahlen serialisiert.
- [`<url>`](/de/docs/Web/CSS/Reference/Values/url_value): wird als zitierter {{cssxref("&lt;url&gt;")}} (`url("...")`) serialisiert, wobei die URL zu einer absoluten URL aufgelöst wird.

Beachten Sie, dass `<percentage>`-Werte oft in absolute Dimensionen (wie `\<length>`) während der Wertverarbeitung umgerechnet werden, sodass sie möglicherweise nicht als Prozentsätze erscheinen, wenn sie aus berechneten Stilen serialisiert werden. Für Dimensionen mit Einheiten, wie {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;resolution&gt;")}}, und {{cssxref("&lt;time&gt;")}}, hängt die serialisierte Einheit vom Kontext ab und ist nicht gut spezifiziert. `getComputedStyle()` und `element.style` serialisieren sie in `Hz`, `px`, `dppx` und `s` jeweils.

Beim Serialisieren des Wertes für Kurzschrift-Eigenschaften werden die zugehörigen Langschreib-Eigenschaften gemäß der Regeln für diese Kurzschrift serialisiert und kombiniert.

> [!NOTE]
> Es gibt viele komplexe Details dazu, wie CSS-Eigenschaften serialisiert werden, insbesondere für komplexe Eigenschaften wie `font`. Diese könnten in den Spezifikationen ungenau oder sogar zwischen verschiedenen Browsern inkonsistent sein. Sie müssen das Verhalten für Ihren speziellen Anwendungsfall testen und überprüfen.

```html
<div>Example Element</div>
```

```css
div {
  position: absolute; /* keyword */
  rotate: 1rad; /* <angle> */
  color: hsl(240 100% 50%); /* <color> */
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

Farben sind eine der häufigsten Typen, die von der Serialisierung betroffen sind. Unabhängig davon, ob Sie eine Farbe mit `hsl()`, `hwb()`, einem Schlüsselwort oder einem modernen Farbraum definieren, gibt JavaScript sie normalerweise im [alten `rgb()`- oder `rgba()`-Format](/de/docs/Web/CSS/Reference/Values/color_value/rgb#syntax) zurück.

Die folgenden Beispiele zeigen, wie verschiedene Farbformate serialisiert werden, wenn über JavaScript darauf zugegriffen wird.

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
  background-color: hsl(240 100% 50%);
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

{{EmbedLiveSample("Farbwert-Serialisierung", , 400)}}

### Serialisierung von Längenwerten

Längen sind ein weiterer häufiger Fall. Relative Einheiten (wie `em`, `%`) werden oft in absolute Pixel umgerechnet, wenn sie über JavaScript-APIs serialisiert werden.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

Diese Normalisierung ermöglicht es Skripten, Längen konsistent zu vergleichen oder zu berechnen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
