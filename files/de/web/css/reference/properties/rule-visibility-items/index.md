---
title: "`rule-visibility-items` CSS property"
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{SeeCompatTable}}

Die **`rule-visibility-items`** [CSS](/de/docs/Web/CSS) Kurzschreibweise definiert, ob Regel-Segmente in sowohl Zeilen- als auch Spaltenabständen, die an leere Bereiche angrenzen, gezeichnet werden.

## Bestandteilseigenschaften

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

- `all`
  - : Regeln sollten in allen Abstandsegmenten gezeichnet werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten.

- `around`
  - : Eine Regel sollte in einem Abstandsegment gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element besetzt ist.

- `between`
  - : Eine Regel sollte in einem Abstandsegment nur dann gezeichnet werden, wenn beide angrenzenden Bereiche von Elementen besetzt sind.

- `normal`
  - : Bei Raster-Containern verhält es sich wie `all`. Im Mehrspalten-Layout verhält es sich wie `between`. Dies ist der Standardwert.

## Beschreibung

Die `rule-visibility-items` Eigenschaft definiert, ob Regel-Segmente in Abständen gezeichnet werden, die an leere Bereiche in den Lücken zwischen Zeilen und Spalten in [mehrzeiligen](/de/docs/Web/CSS/Guides/Multicol_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile oder Spalte angrenzen.

Der Wert ist ein einzelnes Schlüsselwort, das denselben Wert für sowohl die {{cssxref("column-rule-visibility-items")}} als auch die {{cssxref("row-rule-visibility-items")}} Eigenschaften setzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine Regel, die zwischen zwei Rasterbereichen gezeichnet wird, wenn mindestens ein angrenzender Rasterbereich ein Rasterelement enthält.

#### HTML

Wir schließen eine Liste dynamischer Sport-Duos ein:

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als ein Raster-Container, der 4 Spalten und 4 Zeilen erzeugt, indem wir sowohl die Eigenschaften {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen, und verschieben das letzte Element auf den unteren rechten Rasterbereich mithilfe der Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}}. Wir fügen einen {{cssxref("gap")}} von `20px` hinzu, um genügend Platz zwischen den Spalten für unsere `5px` Regeln zu schaffen. Wir setzen die Spaltenregeln auf `dashed` und die Zeilenregeln auf `solid`.

Schließlich setzen wir `rule-visibility-items` auf `between`, sodass Zeilen- und Spaltenregeln nur dann gezeichnet werden, wenn beide angrenzenden Rasterbereiche ein Rasterelement enthalten.

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
