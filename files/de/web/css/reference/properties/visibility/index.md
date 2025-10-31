---
title: visibility
slug: Web/CSS/Reference/Properties/visibility
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt ein Element an oder versteckt es, ohne das Layout eines Dokuments zu verändern. Diese Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verstecken.

{{InteractiveExample("CSS Demo: visibility")}}

```css interactive-example-choice
visibility: visible;
```

```css interactive-example-choice
visibility: hidden;
```

```css interactive-example-choice
visibility: collapse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Hide me</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

Um sowohl ein Element zu verstecken _als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft stattdessen auf `none` anstelle von `visibility`.

## Syntax

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

Die `visibility`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Der Elementkasten ist sichtbar.
- `hidden`
  - : Der Elementkasten ist unsichtbar (nicht gezeichnet), beeinflusst jedoch das Layout wie gewohnt. Nachkommenelemente sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (beispielsweise beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das `collapse`-Schlüsselwort hat unterschiedliche Effekte für verschiedene Elemente:
    - Für {{HTMLElement("table")}}-Zeilen, Spalten, Spaltengruppen und Zeilengruppen werden die Zeilen oder Spalten verborgen und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet wurde). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin so berechnet, als ob die Zellen in den zusammengeklappten Zeilen oder Spalten vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung der Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Zusammengedrückte Flex-Elemente und Ruby-Anmerkungen werden verborgen, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Wertes von `hidden` für ein Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente nicht mehr von Screenreader-Technologien angekündigt werden.

## Interpolation

Bei der Animation werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht-sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Beschleunigungsfunktion zwischen `0` und `1` auf `visible` abgebildet werden, und andere Werte der Beschleunigungsfunktion (die nur am Start/Ende des Übergangs oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1\] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird, und die Tabelle Zellen ({{htmlelement("td")}} und {{htmlelement("th")}}-Elemente) enthält, die sich über sichtbare und zusammengeklappte Zeilen erstrecken, kann die Zelle auf unerwartete Weise angezeigt werden. Wenn die Spaltzelle in einer zusammengeklappten Reihe definiert ist, rendern Browser die Zellen wie in nachfolgenden Zeilen unsichtbar, als ob `visibility: collapse` angewendet wurde. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, werden die Zellinhalte nicht umgebrochen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser verkleinern die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Dies bedeutet, dass die Inhalte in Richtung der Blockgröße möglicherweise größer als die Zelle sind. Je nach Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die nachfolgende Zeile in anderen Browsern übergreift, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle so dargestellt, als wäre die Zeile nicht zusammengeklappt, wobei alle anderen Zellen in der Zeile verborgen sind, als ob `visibility: collapse` auf individuelle Zellen anstelle der Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle geschachtelte Tabellen innerhalb der zusammengeklappten Zellen enthält, es sei denn, `visibility: visible` wird ausdrücklich auf die geschachtelten Tabellen angewendet.

## Formal Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p class="visible">The first paragraph is visible.</p>
<p class="not-visible">The second paragraph is NOT visible.</p>
<p class="visible">
  The third paragraph is visible. Notice the second paragraph is still occupying
  space.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('Basic_example')}}

### Tabellenbeispiel

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('Table_example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("display")}}
- SVG-Attribut {{SVGAttr("visibility")}}
