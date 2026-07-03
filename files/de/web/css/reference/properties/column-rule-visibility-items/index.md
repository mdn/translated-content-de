---
title: "`column-rule-visibility-items` CSS property"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 34838ae7d32e78bfe01dbf2c266257ef0f8305c4
---

Die **`column-rule-visibility-items`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert, ob ein "column-rule"-Segment in Lücken, die an leere Bereiche angrenzen, gezeichnet wird.

{{InteractiveExample("CSS Demo: column-rule-visibility-items")}}

```css interactive-example-choice
column-rule-visibility-items: all;
```

```css interactive-example-choice
column-rule-visibility-items: around;
```

```css interactive-example-choice
column-rule-visibility-items: between;
```

```css interactive-example-choice
column-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss<cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  column-rule: solid 5px red;
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
column-rule-visibility-items: all;
column-rule-visibility-items: around;
column-rule-visibility-items: between;
column-rule-visibility-items: normal;

/* Global values */
column-rule-visibility-items: inherit;
column-rule-visibility-items: initial;
column-rule-visibility-items: revert;
column-rule-visibility-items: revert-layer;
column-rule-visibility-items: unset;
```

### Werte

- `all`
  - : Die "column rule" sollte in allen Lückensegmenten gezeichnet werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten.

- `around`
  - : Die "column rule" sollte in einem Lückensegment gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist.

- `between`
  - : Die "column rule" sollte in einem Lückensegment gezeichnet werden, wenn beide angrenzenden Bereiche von Elementen belegt sind.

- `normal`
  - : Bei Gitter-Containern verhält sie sich wie `all`. Im "Multicol"-Layout verhält sie sich wie `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `column-rule-visibility-items` definiert, ob ein "column-rule"-Segment in Spaltenlücken gezeichnet wird, die an leere Bereiche in [multireihigen](/de/docs/Web/CSS/Guides/Multicol_layout) und [Gitter-](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte angrenzen.

Die Eigenschaften `column-rule-visibility-items` und {{cssxref("row-rule-visibility-items")}} können beide mithilfe der Abkürzung {{cssxref("rule-visibility-items")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine "column rule", die zwischen zwei Gitterbereichen gezeichnet wird, wenn mindestens ein angrenzender Gitterbereich ein Gitterelement enthält.

#### HTML

Wir fügen eine Liste von dynamischen Sportduos ein:

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Gitter-Container und erstellen 4 Spalten und 4 Reihen, indem wir sowohl die Eigenschaften {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen, und verschieben das letzte Element in den unten-rechten Gitterbereich, indem wir die Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} verwenden. Wir fügen einen {{cssxref("gap")}} von `20px` hinzu, um ausreichend Platz zwischen den Spalten für unsere `5px` gestrichelte Linie zu schaffen.

Schließlich setzen wir `column-rule-visibility-items` auf `between`, damit eine "column rule" nur dann in einer Spaltenlücke gezeichnet wird, wenn beide angrenzenden Gitterbereiche ein Gitterelement enthalten.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  column-rule: dashed 5px blue;
  column-rule-visibility-items: between;
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
  @supports not (column-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the column-rule-visibility-items property";
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

- {{cssxref("rule-visibility-items")}} Abkürzung
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("column-rule")}} Abkürzung
- {{cssxref("rule")}} Abkürzung
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
