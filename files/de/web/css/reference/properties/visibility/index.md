---
title: visibility
slug: Web/CSS/Reference/Properties/visibility
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

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

Um ein Element _zu verbergen und es gleichzeitig aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none` anstelle von `visibility`.

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

Die `visibility`-Eigenschaft wird als eines der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (wird nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachkommenelemente des Elements sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (z. B. beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Das `collapse`-Schlüsselwort hat unterschiedliche Auswirkungen auf verschiedene Elemente:
    - Für Zeilen, Spalten, Spaltengruppen und Zeilengruppen einer {{HTMLElement("table")}} werden die Zeilen oder Spalten ausgeblendet und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in den zusammengeklappten Zeilen oder Spalten vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne dass die Breiten und Höhen der gesamten Tabelle neu berechnet werden müssen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden ausgeblendet, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` genauso behandelt wie `hidden`.

## Barrierefreiheit

Wenn der Wert `visibility: hidden` auf ein Element angewendet wird, wird es aus dem [Accessibility Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernt. Dies führt dazu, dass das Element und alle seine Nachkommen nicht mehr von Screenreader-Technologien angesagt werden.

## Interpolation

Bei Animationen werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht-sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Easing-Funktion zwischen `0` und `1` auf `visible` abgebildet werden, und andere Werte der Easing-Funktion (die nur zu Beginn/Ende der Transition oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird und die Tabellenzellen ({{htmlelement("td")}} und {{htmlelement("th")}}-Elemente) enthält, die sich über sowohl sichtbare als auch zusammengeklappte Zeilen erstrecken, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die sich erstreckende Zelle in einer zusammengeschobenen Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und sich über eine zusammengeklappte Zeile erstreckt, wird der Inhalt der Zelle nicht neu geflossen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Das bedeutet, dass der Inhalt größer sein kann als die Zelle in Richtung der Blockgröße. Je nach Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die nachfolgende Zeile in anderen Browsern hineinfließt, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle so gerendert, als ob die Zeile nicht zusammengeklappt wäre, wobei alle anderen Zellen in der Zeile ausgeblendet sind, als ob `visibility: collapse` auf einzelne Zellen anstelle der Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen in den Zellen enthält, die zusammengeschoben sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angewendet.

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

### Tabellensbeispiel

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
- SVG {{SVGAttr("visibility")}}-Attribut
