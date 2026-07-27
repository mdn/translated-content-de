---
title: "`rule-visibility-items` CSS property"
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die CSS-Kurzschreibweise **`rule-visibility-items`** definiert, ob Regelabschnitte in sowohl Reihen- als auch Spaltenabständen neben leeren Bereichen gezeichnet werden.

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule-visibility-items")}}

{{InteractiveExample("CSS Demo: rule-visibility-items")}}

```css interactive-example-choice
rule-visibility-items: all;
```

```css interactive-example-choice
rule-visibility-items: around;
```

```css interactive-example-choice
rule-visibility-items: between;
```

```css interactive-example-choice
rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss</cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  rule: solid 5px red;
  gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
cite {
  grid-row: 3;
  grid-column: 3;
}
```

## Syntax

```css
/* Keywords */
rule-visibility-items: all;
rule-visibility-items: around;
rule-visibility-items: between;
rule-visibility-items: normal;

/* Global values */
rule-visibility-items: inherit;
rule-visibility-items: initial;
rule-visibility-items: revert;
rule-visibility-items: revert-layer;
rule-visibility-items: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Regeln sollten in allen Abschnitten der Abstände gezeichnet werden, unabhängig davon, ob die angrenzenden Bereiche ein Element enthalten oder nicht.

- `around`
  - : Eine Regel sollte in einem Abschnitt der Abstände gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element besetzt ist.

- `between`
  - : Eine Regel sollte in einem Abschnitt der Abstände nur gezeichnet werden, wenn beide angrenzenden Bereiche von Elementen besetzt sind.

- `normal`
  - : Bei Grid-Containern verhält sich wie `all`. Im Mehrspalten-Layout verhält sich wie `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `rule-visibility-items` definiert, ob Regelabschnitte in Abständen neben leeren Bereichen in den Abständen zwischen Reihen und Spalten in [mehrreihigen](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Reihe oder Spalte gezeichnet werden.

Der Wert ist ein einzelnes Schlüsselwort, das denselben Wert für sowohl die Eigenschaften {{cssxref("column-rule-visibility-items")}} als auch {{cssxref("row-rule-visibility-items")}} festlegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine Regel, die zwischen zwei Grid-Bereichen gezeichnet werden soll, wenn mindestens ein angrenzender Grid-Bereich ein Grid-Element enthält.

#### HTML

Wir fügen eine Liste dynamischer Sport-Duos hinzu:

```html
<ol>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ol>
```

#### CSS

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container und erstellen 4 Spalten und 4 Reihen, indem wir sowohl die Eigenschaften {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen. Wir verschieben das letzte Element in den unten rechts liegenden Grid-Bereich, indem wir die Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} verwenden. Wir fügen einen {{cssxref("gap")}} von `20px` ein, um genügend Platz zwischen den Spalten für unsere `5px`-Regeln zu schaffen. Wir setzen die Spaltenregeln auf `dashed` und die Reihenregeln auf `solid`.

Schließlich setzen wir `rule-visibility-items` auf `between`, damit Reihen- und Spaltenregeln nur gezeichnet werden, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  column-rule: dashed 5px blue;
  row-rule: solid 5px red;

  rule-visibility-items: around;
}
li:last-child {
  grid-row: 4;
  grid-column: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the rule-visibility-items shorthand";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-visibility-items")}} Kurzschreibweise
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("rule")}} Kurzschreibweise
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
