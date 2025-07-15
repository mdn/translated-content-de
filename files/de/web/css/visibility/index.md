---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder versteckt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} ausblenden.

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

Um ein Element sowohl zu verstecken _als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}} Eigenschaft auf `none` anstelle von `visibility`.

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

Die `visibility` Eigenschaft wird als einer der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Der Elementkasten ist sichtbar.
- `hidden`
  - : Der Elementkasten ist unsichtbar (nicht gezeichnet), beeinflusst aber weiterhin das Layout wie gewohnt. Nachkommen des Elements sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann nicht fokussiert werden (z.B. beim Durchlaufen von [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das `collapse` Schlüsselwort hat unterschiedliche Auswirkungen für verschiedene Elemente:
    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, Spaltengruppen und Zeilengruppen werden die Zeilen oder Spalten verborgen und der Raum, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet wäre). Dennoch wird die Größe anderer Zeilen und Spalten weiterhin berechnet, als ob die Zellen in den kollabierten Zeilen oder Spalten vorhanden wären. Dieser Wert ermöglicht die schnelle Entfernung einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Kollabierte Flex-Elemente und Ruby-Anmerkungen sind verborgen, und der Raum, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility` Wertes von `hidden` für ein Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente von Bildschirmlese-Technologien nicht mehr angekündigt werden.

## Interpolation

Wenn animiert, werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht-sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` auf `visible` abbilden und andere Werte der Übergangsfunktion (die nur am Anfang/Ende des Übergangs oder infolge `cubic-bezier()` Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt abbilden.

## Notizen

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn auf Tabellenzeilen angewendet wird, und die Tabelle Zellen ({{htmlelement("td")}} und {{htmlelement("th")}} Elemente) enthält, die sowohl in sichtbare als auch in kollabierte Zeilen hineinspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die spanne Zelle in einer kollabierten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und über eine kollabierte Zeile spannt, werden die Zellinhalte nicht neu verteilt, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Das bedeutet, dass die Inhalte größer sein können als die Zelle in der Blockgrößenrichtung. Je nach Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während in anderen Browsern die Inhalte in die nachfolgende Zeile überlaufen, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle gerendert, als wäre die Zeile nicht kollabiert, wobei alle anderen Zellen in der Zeile versteckt sind, als wäre `visibility: collapse` auf einzelne Zellen und nicht auf die Zeile selbst gesetzt.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen hat, die kollabiert sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angegeben.

## Formale Definition

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
- SVG {{SVGAttr("visibility")}} Attribut
