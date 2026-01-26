---
title: CSS-Wertserialisierung
slug: Web/API/CSS_Object_Model/CSS_value_serialization
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM")}}

Einige CSSOM-APIs _serialisieren_ Eigenschaftswerte in standardisierte Zeichenfolgenrepräsentationen basierend auf dem [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) des Wertes. Zum Beispiel könnte man eine Farbe mit der `hsl(240 100% 50%)`-Syntax festlegen, aber bei Zugriff über JavaScript wird der Wert in der entsprechenden `"rgb(0, 0, 255)"`-Syntax zurückgegeben.

CSS-Datentypen können oft in mehreren Syntaxen ausgedrückt werden. Zum Beispiel kann der {{cssxref("&lt;color&gt;")}} Datentyp mit benannten Farben (`red`), hexadezimaler Notation (`#ff0000`), funktionaler Notation (`rgb(255 0 0)`) und mehr dargestellt werden. Diese unterschiedlichen Syntaxen sind auf jeder Stufe der [CSS-Wertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) genau gleichwertig, ähnlich wie im JavaScript derselbe String mit einfachen oder doppelten Anführungszeichen geschrieben werden kann oder dieselbe Zahl in unterschiedlichen Formaten geschrieben werden kann (wie `16`, `16.0` oder `0x10`).

Da CSS all diese Oberflächenrepräsentationen während der Wertverarbeitung in denselben zugrunde liegenden Wert umwandelt, ist es oft unmöglich, die ursprüngliche Syntax aus dem bereits analysierten CSSOM wiederherzustellen. Außerdem ist eine _kanonische_ Darstellung oft nützlicher für Skripte, da sie Vergleiche und Berechnungen basierend darauf ermöglicht, wie der Inhalt dem Benutzer präsentiert wird, anstatt wie er ursprünglich verfasst wurde.

## Wann und wie Werte serialisiert werden

Serialisierung passiert immer dann, wenn CSS-Eigenschaftswerte als Zeichenfolgen über JavaScript-APIs gelesen werden, wie zum Beispiel:

- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
- Direktzugriff auf Eigenschaften auf [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekten (z.B. `element.style.backgroundColor`)

Verschiedene APIs geben `CSSStyleDeclaration`-Objekte in unterschiedlichen Stadien der [Wertverarbeitung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing) zurück, die leicht unterschiedliche Serialisierungsverhalten haben. Zum Beispiel geben [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) und [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) den [aufgelösten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) von Eigenschaften zurück, während [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) _mehr oder weniger_ den [deklarierten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#declared_value) zurückgibt.

> [!NOTE]
> Die [CSS Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API) kann Einheiten und andere CSS-Syntaxen darstellen; jedoch werden Stile, die aus einem Element abgerufen werden, weiterhin verarbeitet und bewahren nicht die ursprüngliche Syntax. Zum Beispiel gibt `CSS.cm(1).toString()` `"1cm"` zurück, anstatt in Pixel zu serialisieren, aber `element.computedStyleMap().get("margin-left").toString()` gibt den aufgelösten Pixelwert zurück.

Jeder CSS-Werttyp hat ein zugehöriges Serialisierungsformat, das durch die CSS-Spezifikationen definiert ist. Einige allgemeine Regeln sind:

- Schlüsselwörter (wie `auto`, `block`, `none`) werden in Kleinbuchstaben serialisiert.
- {{cssxref("angle")}}: wird in eine Winkelmaßeinheit serialisiert, abhängig vom Kontext (nicht spezifiziert). Für `element.style` und `getComputedStyle()` ist das `deg`.
- {{cssxref("&lt;color&gt;")}}:
  - Für sRGB-Farben ({{cssxref("named-color")}}, `transparent`, {{cssxref("system-color")}}, {{cssxref("hex-color")}}, `rgb`, `hsl`, `hwb`): serialisiert in die veraltete kommaseparierte Syntax `rgb(R, G, B)` oder `rgba(R, G, B, A)`, wobei alle Argumente Zahlen sind. Die `rgb`-Form wird ausgewählt, wenn der Alpha-Wert genau `1` ist.
  - Für `lab()`, `lch()`, `oklab()`, `oklch()` und `color()` Farben: die Funktionsform bleibt erhalten, mit numerischen Argumenten.
  - Das Schlüsselwort `currentColor` wird als `currentcolor` serialisiert.
- {{cssxref("percentage")}}: bleibt als Prozentwert erhalten.
- {{cssxref("ratio")}}: wird in zwei durch `" / "` getrennte Zahlen serialisiert.
- {{cssxref("url_value", "&lt;url&gt;")}}: wird als ein zitierter {{cssxref("url_value", "&lt;url&gt;")}} (`url("...")`) serialisiert, wobei die URL in eine absolute URL aufgelöst wird.

Beachten Sie, dass `<percentage>`-Werte oft in absolute Dimensionen (wie `<length>`) während der Wertverarbeitung umgewandelt werden, sodass sie möglicherweise nicht als Prozentsätze erscheinen, wenn sie aus berechneten Stilen serialisiert werden. Bei Dimensionen mit Einheiten, wie {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;resolution&gt;")}}, und {{cssxref("&lt;time&gt;")}}, hängt die serialisierte Einheit vom Kontext ab und ist nicht gut spezifiziert. `getComputedStyle()` und `element.style` serialisieren sie in `Hz`, `px`, `dppx` und `s` jeweils.

Bei der Serialisierung des Wertes für Kurzschreibweiseigenschaften werden seine konstituierenden Langform-Eigenschaften gemäß den Regeln für diese Kurzform serialisiert und kombiniert.

> [!NOTE]
> Es gibt viele komplexe Details darüber, wie CSS-Eigenschaften serialisiert werden, insbesondere bei komplexen Eigenschaften wie `font`. Sie können in den Spezifikationen nicht spezifiziert oder sogar inkonsistent zwischen Browsern sein. Es ist notwendig, das Verhalten für Ihren speziellen Anwendungsfall zu testen und zu überprüfen.

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

### Farbwertserialisierung

Farben gehören zu den am häufigsten von der Serialisierung betroffenen Typen. Unabhängig davon, ob man eine Farbe mit `hsl()`, `hwb()`, einem Schlüsselwort oder einem modernen Farbraum definiert, gibt JavaScript sie normalerweise im [veralteten `rgb()`- oder `rgba()`-Format](/de/docs/Web/CSS/Reference/Values/color_value/rgb#syntax) zurück.

Die folgenden Beispiele zeigen, wie verschiedene Farbformate serialisiert werden, wenn darauf über JavaScript zugegriffen wird.

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

{{EmbedLiveSample("Farbwertserialisierung", , 400)}}

### Längenwertserialisierung

Längen sind ein weiterer häufiger Fall. Relative Einheiten (wie `em`, `%`) werden oft in absolute Pixel umgerechnet, wenn sie durch JavaScript-APIs serialisiert werden.

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
- {{cssxref("&lt;color&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
