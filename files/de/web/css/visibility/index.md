---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

Um ein Element sowohl zu verbergen _als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}} Eigenschaft auf `none` anstelle von `visibility`.

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

Die `visibility` Eigenschaft wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `visible`
  - : Die Elementbox ist sichtbar.
- `hidden`
  - : Die Elementbox ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachkommen des Elements werden sichtbar sein, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann den Fokus nicht erhalten (z.B. beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das Schlüsselwort `collapse` hat unterschiedliche Effekte für verschiedene Elemente:
    - Für Zeilen, Spalten, Spaltengruppen und Zeilengruppen in einem {{HTMLElement("table")}}, werden die Zeilen oder Spalten verborgen und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin so berechnet, als ob die Zellen in den zusammengeklappten Zeilen oder Spalten vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne eine Neuberechnung der Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden verborgen, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` genauso behandelt wie `hidden`.

## Barrierefreiheit

Die Verwendung eines `visibility` Wertes von `hidden` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommenelemente nicht mehr von Bildschirmlesetechnologie angekündigt werden.

## Interpolation

Wenn `visibility` animiert wird, interpolieren sich die Werte zwischen _sichtbar_ und _nicht sichtbar_. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` zu `visible` abgebildet werden, und andere Werte der Übergangsfunktion (die nur zu Beginn/Ende des Übergangs oder als Ergebnis von `cubic-bezier()` Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise falsch. Es wird möglicherweise nicht korrekt wie `visibility: hidden` auf andere Elemente als Tabellenzeilen und -spalten behandelt.
- Wenn auf Tabellenzeilen angewendet, und die Tabelle Zellen ({{htmlelement("td")}} und {{htmlelement("th")}} Elemente) enthält, die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die übergreifende Zelle in einer zusammengeklappten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, wird der Inhalt der Zelle nicht neugeflossen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Dies bedeutet, dass der Inhalt möglicherweise größer als die Zelle in der Blockrichtungsrichtung ist. Abhängig vom Browser wird der übergroße Inhalt entweder abgeschnitten, als wäre `overflow: hidden` gesetzt, während bei anderen Browsern der Inhalt in die nachfolgende Zeile überläuft, als wäre `overflow: visible` gesetzt. In anderen Browsern wird die Zelle so gerendert, als wäre die Zeile nicht zusammengeklappt, wobei alle anderen Zellen in der Zeile wie `visibility: collapse` auf individuelle Zellen anstatt der Zeile selbst gesetzt versteckt sind.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengeklappt sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angegeben.

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
