---
title: "`visibility` CSS property"
short-title: visibility
slug: Web/CSS/Reference/Properties/visibility
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`visibility`** zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einer {{HTMLElement("table")}} verbergen.

Um ein Element sowohl zu verbergen _als auch aus dem Dokumentlayout zu entfernen_, setzen Sie die Eigenschaft {{cssxref("display")}} auf `none`, anstatt `visibility` zu verwenden.

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

Die Eigenschaft `visibility` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (wird nicht gezeichnet), beeinflusst aber weiterhin das Layout wie üblich. Nachfahren des Elements sind sichtbar, wenn für sie `visibility` auf `visible` gesetzt ist. Das Element kann keinen Fokus erhalten (etwa bei der Navigation über [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das Schlüsselwort `collapse` hat für verschiedene Elemente unterschiedliche Auswirkungen:
    - Für Zeilen, Spalten, Spaltengruppen und Zeilengruppen von {{HTMLElement("table")}} werden die Zeile(n) oder Spalte(n) verborgen und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin so berechnet, als wären die Zellen in den eingeklappten Zeile(n) oder Spalte(n) vorhanden. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Eingeklappte Flex-Elemente und Ruby-Anmerkungen werden verborgen, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` genauso wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Werts von `hidden` für ein Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch werden das Element und alle seine Nachfahren nicht mehr von Screenreader-Technologien angekündigt.

## Interpolation

Bei Animationen werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, andernfalls kann keine {{Glossary("interpolation", "Interpolation")}} stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Easing-Funktion zwischen `0` und `1` auf `visible` abgebildet werden und andere Werte der Easing-Funktion (die nur am Anfang/Ende des Übergangs oder infolge von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt in einigen modernen Browsern oder ist teilweise fehlerhaft. Bei anderen Elementen als Tabellenzeilen und -spalten wird es möglicherweise nicht korrekt wie `visibility: hidden` behandelt.
- Wenn es auf Tabellenzeilen angewendet wird und die Tabelle Zellen ({{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente) enthält, die sowohl sichtbare als auch eingeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die überspannende Zelle in einer eingeklappten Zeile definiert ist, stellen Browser die Tabellenzelle nicht dar, als wären die Zellen in nachfolgenden Zeilen vorhanden und auf sie `visibility: collapse` angewendet. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine eingeklappte Zeile überspannt, wird der Zelleninhalt nicht umbrochen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser verringern die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Das bedeutet, dass der Inhalt in Blockgrößenrichtung größer als die Zelle sein kann. Je nach Browser wird der überlaufende Inhalt entweder abgeschnitten, als wäre `overflow: hidden` gesetzt, während der Inhalt in anderen Browsern in die nachfolgende Zeile hineinragt, als wäre `overflow: visible` gesetzt. In wieder anderen Browsern wird die Zelle so dargestellt, als wäre die Zeile nicht eingeklappt, wobei alle anderen Zellen in der Zeile verborgen werden, als wäre `visibility: collapse` auf einzelne Zellen statt auf die Zeile selbst gesetzt.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der eingeklappten Zellen enthält, sofern für verschachtelte Tabellen nicht explizit `visibility: visible` angegeben ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegendes Beispiel

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
- SVG-Attribut {{SVGAttr("visibility")}}
