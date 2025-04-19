---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: bac820248c1f5d220fc40dc32de699ebaf578e20
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

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

Um sowohl ein Element zu verbergen _als auch aus dem Dokumenten-Layout zu entfernen_, setzen Sie die {{cssxref("display")}} Eigenschaft auf `none` anstelle von `visibility`.

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

Die `visibility` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Der Elementrahmen ist sichtbar.
- `hidden`
  - : Der Elementrahmen ist unsichtbar (nicht gezeichnet), beeinflusst aber dennoch das Layout wie gewohnt. Nachkommen des Elements werden sichtbar sein, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (z.B. beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}} Zeilen, Spalten, Spaltengruppen und Zeilengruppen werden die Reihe(n) oder Spalte(n) ausgeblendet und der von ihnen eingenommene Raum wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Reihe der Tabelle angewendet würde). Die Größe anderer Reihen und Spalten wird jedoch immer noch so berechnet, als ob die Zellen in der zusammengebrochenen Reihe(n) oder Spalte(n) vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Berechnung der Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Zusammengedrückte Flex-Elemente und Ruby-Anmerkungen sind versteckt und der Raum, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility` Wertes von `hidden` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine untergeordneten Elemente nicht mehr von Bildschirmlesetechnologien angesagt werden.

## Interpolation

Bei Animation werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, ansonsten kann keine {{Glossary("interpolation", "Interpolation")}} stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` auf `visible` abgebildet werden und andere Werte der Übergangsfunktion (die nur am Anfang/Ende des Übergangs oder als Ergebnis von `cubic-bezier()` Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näher gelegenen Endpunkt abgebildet werden.

## Anmerkungen

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird, und die Tabelle Zellen ({{htmlelement("td")}} und {{htmlelement("th")}} Elemente) enthält, die sowohl sichtbare als auch zusammengebrochene Zeilen umspannen, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die umspannende Zelle in einer zusammengebrochenen Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` versehen wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengebrochene Zeile überspannt, werden die Zellinhalte nicht umgeformt, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Das bedeutet, dass die Inhalte in Richtung der Blockgröße größer als die Zelle sein können. Je nach Browser werden die überfließenden Inhalte entweder beschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die nachfolgende Zeile in anderen Browsern überblutet, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle gerendert, als ob die Zeile nicht zusammengebrochen wäre, wobei alle anderen Zellen in der Zeile ausgeblendet werden, als ob `visibility: collapse` auf einzelne Zellen anstatt auf die Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen hat, die zusammengebrochen sind, es sei denn, `visibility: visible` wird ausdrücklich auf verschachtelte Tabellen angewendet.

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
