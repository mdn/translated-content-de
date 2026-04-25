---
title: "`visibility` CSS property"
short-title: visibility
slug: Web/CSS/Reference/Properties/visibility
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Die Eigenschaft kann auch Reihen oder Spalten in einem {{HTMLElement("table")}} verbergen.

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

Um ein Element sowohl _zu verbergen als auch aus dem Dokument-Layout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none`, anstatt `visibility` zu verwenden.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwerte angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachfolgende Elemente sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (wie z.B. beim Navigieren durch [tab indexes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das `collapse`-Schlüsselwort hat unterschiedliche Auswirkungen auf verschiedene Elemente:
    - Für Reihen, Spalten, Spaltengruppen und Zeilengruppen von {{HTMLElement("table")}}, werden die Reihe(n) oder Spalte(n) verborgen, und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Reihe der Tabelle angewendet würde). Die Größe anderer Reihen und Spalten wird jedoch weiterhin so berechnet, als ob die Zellen in der zusammengebrochenen Reihe(n) oder Spalte(n) vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Reihe oder Spalte aus einer Tabelle, ohne die Neuberechnung der Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Zusammengebrochene Flex-Items und Ruby-Anmerkungen werden verborgen, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Bei anderen Elementen wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Wertes von `hidden` auf einem Element entfernt es aus dem [Zugänglichkeit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine untergeordneten Elemente nicht mehr von Bildschirmlesetechnologien angekündigt werden.

## Interpolation

Bei Animationen werden Sichtbarkeitswerte zwischen _visible_ und _not-visible_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, ansonsten kann keine {{Glossary("interpolation", "Interpolation")}} stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` auf `visible` gemappt werden und andere Werte der Übergangsfunktion (die nur am Anfang/Ende des Übergangs oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt gemappt werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Sie wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn auf Tabellenzeilen angewendet, enthält die Tabelle Zellen ({{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente), die sowohl sichtbare als auch kollabierte Reihen überspannen, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die überspannende Zelle in einer kollabierten Reihe definiert ist, wird die Tabellenzelle von den Browsern nicht gerendert, als ob die Zellen in darauf folgenden Reihen mit `visibility: collapse` versehen wären. Wenn die Zelle in einer sichtbaren Reihe definiert ist und eine kollabierte Reihe überspannt, wird der Inhalt der Zelle nicht neu geflossen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser verkleinern die Blockgröße der Zelle um die Blockgröße der verborgenen Reihe. Das bedeutet, dass der Inhalt in die Blockgrößenrichtung größer als die Zelle sein kann. Je nach Browser werden die überfließenden Inhalte entweder beschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die folgende Reihe in anderen Browsern hineinfließt, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle angezeigt, als ob die Reihe nicht zusammengebrochen wäre, wobei alle anderen Zellen der Reihe verborgen sind, als ob `visibility: collapse` auf individuelle Zellen anstatt auf die gesamte Reihe gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle geschachtelte Tabellen innerhalb der Zellen enthält, die zusammengebrochen sind, es sei denn, `visibility: visible` ist explizit auf geschachtelten Tabellen angegeben.

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
  <tbody>
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
  </tbody>
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
