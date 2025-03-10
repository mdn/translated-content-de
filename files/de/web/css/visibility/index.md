---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

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

Um ein Element _sowohl zu verbergen als auch aus dem Dokumentlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none`, anstatt `visibility` zu verwenden.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachfahren des Elements werden sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (zum Beispiel beim Navigieren durch [Tab-Indexe](/de/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) ausgeblendet und der Raum, den sie belegt hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengeklappten Zeile(n) oder Spalte(n) vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Breiten und Höhen der gesamten Tabelle neu zu berechnen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden ausgeblendet, und der Raum, den sie belegt hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Wenn `visibility` auf einen Wert von `hidden` gesetzt wird, wird das Element aus dem [Zugänglichkeitstree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernt. Dies führt dazu, dass das Element und alle seine Nachfahren nicht mehr von Bildschirmlesetechnologien angekündigt werden.

## Interpolation

Beim Animieren werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, sonst kann keine {{Glossary("interpolation", "Interpolation")}} stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Easing-Funktion zwischen `0` und `1` zu `visible` und andere Werte der Easing-Funktion (die nur am Anfang/Ende der Transition oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) zum näher gelegenen Endpunkt mappen.

## Hinweise

- Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise inkorrekt. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn auf Tabellenzeilen angewendet, und die Tabelle Zellen enthält ({{htmlelement("td")}} {{htmlelement("tr")}}-Elemente), die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die überspannende Zelle in einer zusammengeklappten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in den nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, werden die Zellinhalte nicht umgebrochen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Das bedeutet, dass die Inhalte in der Blockgrößenrichtung größer als die Zelle sein können. Je nach Browser werden die überlappenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während in anderen Browsern die Inhalte in die nachfolgende Zeile übergehen, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle gerendert, als wäre die Zeile nicht zusammengeklappt, wobei alle anderen Zellen in der Zeile ausgeblendet werden, als ob `visibility: collapse` auf einzelne Zellen anstatt auf die Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen in den zusammengeklappten Zellen enthält, es sei denn, `visibility: visible` wird explizit auf verschachtelten Tabellen angegeben.

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
- SVG {{SVGAttr("visibility")}} Attribut
