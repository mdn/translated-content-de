---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Die Eigenschaft kann auch Zeilen oder Spalten in einer {{HTMLElement("table")}} verbergen.

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

Um ein Element sowohl zu verbergen _als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none`, anstatt `visibility` zu verwenden.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Die Elementbox ist sichtbar.
- `hidden`
  - : Die Elementbox ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachkommenelemente sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann nicht fokussiert werden (zum Beispiel bei der Navigation durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen für verschiedene Elemente:
    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in den zusammengeklappten Zeilen oder Spalten vorhanden wären. Dieser Wert ermöglicht die schnelle Entfernung einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden versteckt, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` genauso behandelt wie `hidden`.

## Barrierefreiheit

Die Verwendung eines `visibility`-Werts von `hidden` auf einem Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachkommen nicht mehr durch Bildschirmlesetechnologien angesagt werden.

## Interpolation

Bei Animationen werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Daher muss einer der Start- oder Endwerte `visible` sein, da sonst keine {{Glossary("interpolation", "Interpolation")}} erfolgen kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Entspannungsfunktion zwischen `0` und `1` auf `visible` abgebildet werden, und andere Werte der Entspannungsfunktion (die nur zu Beginn/Ende der Transition oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1\] auftreten) auf den nächstgelegenen Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` ist in einigen modernen Browsern unvollständig oder teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` auf andere Elemente als Tabellenzeilen und -spalten angewendet.
- Wenn es auf Tabellenzeilen angewendet wird und die Tabelle Zellen ({{htmlelement("td")}} und {{htmlelement("th")}}-Elemente) enthält, die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die überspannende Zelle in einer zusammengeklappten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, werden die Zellinhalte nicht neu geflossen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Das bedeutet, dass die Inhalte in Richtung der Blockgrößenrichtung größer als die Zelle sein können. Je nach Browser werden die überfließenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während in anderen Browsern die Inhalte in die nachfolgende Zeile überfließen, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle gerendert, als ob die Zeile nicht zusammengeklappt wäre, wobei alle anderen Zellen in der Zeile verborgen sind, als ob `visibility: collapse` auf einzelne Zellen statt auf die gesamte Zeile gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengeklappt sind, es sei denn, `visibility: visible` wird ausdrücklich auf verschachtelte Tabellen angewendet.

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
- SVG-Attribut {{SVGAttr("visibility")}}
