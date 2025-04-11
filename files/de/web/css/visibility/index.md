---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder versteckt ein Element, ohne das Layout eines Dokuments zu ändern. Diese Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} ausblenden.

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

Um ein Element sowohl zu verstecken _als auch aus dem Dokumentlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none` anstelle der Verwendung von `visibility`.

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
  - : Die Elementbox ist sichtbar.
- `hidden`
  - : Die Elementbox ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie üblich. Nachfahren des Elements werden sichtbar sein, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann nicht den Fokus erhalten (z.B. bei der Navigation durch [Tab-Indizes](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Raum, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengeklappten(n) Zeile(n) oder Spalte(n) vorhanden wären. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden ausgeblendet, und der Raum, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` genauso behandelt wie `hidden`.

## Barrierefreiheit

Die Verwendung eines `visibility`-Werts von `hidden` für ein Element entfernt dieses aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Nachfahrelemente nicht mehr von Bildschirmlesetechnologien angekündigt werden.

## Interpolation

Bei Animationen werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Anfangs- oder Endwerte muss daher `visible` sein, sonst kann keine {{Glossary("interpolation", "Interpolation")}} erfolgen. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Easing-Funktion zwischen `0` und `1` auf `visible` abgebildet werden und andere Werte der Easing-Funktion (die nur am Anfang/Ende der Transition oder infolge von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1]) auf den näheren Endpunkt abgebildet werden.

## Anmerkungen

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird, und wenn die Tabelle Zellen ({{htmlelement("td")}} {{htmlelement("tr")}}-Elemente) enthält, die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die Spannzelle in einer zusammengeklappten Zeile definiert ist, rendern die Browser die Tabellenzelle nicht, als ob die Zellen in den nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, wird der Inhalt der Zelle nicht umgebrochen, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Dies bedeutet, dass die Inhalte größer als die Zelle in der Blockgrößenrichtung sein können. Je nach Browser werden die überstehenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in anderen Browsern in die nachfolgende Zeile hineinfließt, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle so gerendert, als ob die Zeile nicht zusammengeklappt wäre, wobei alle anderen Zellen in der Zeile versteckt sind, als ob `visibility: collapse` auf einzelne Zellen anstelle der Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengeklappt sind, es sei denn, `visibility: visible` wird ausdrücklich auf verschachtelte Tabellen angewendet.

## Formale Definition

{{CSSInfo}}

## Formelle Syntax

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
