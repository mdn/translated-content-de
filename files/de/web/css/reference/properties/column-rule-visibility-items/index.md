---
title: "`column-rule-visibility-items` CSS property"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{SeeCompatTable}}

Die **`column-rule-visibility-items`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert, ob ein Column-Rule-Segment in Lücken neben leeren Bereichen gezeichnet wird.

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
  - : Die Column-Rule sollte in allen Segmenten der Lücke gezeichnet werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten oder nicht.

- `around`
  - : Die Column-Rule sollte in einem Segment der Lücke gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist.

- `between`
  - : Die Column-Rule sollte in einem Segment der Lücke gezeichnet werden, wenn beide angrenzenden Bereiche von Elementen belegt sind.

- `normal`
  - : Bei Grid-Containern verhält sich dies wie `all`. Im Mehrspalten-Layout verhält es sich wie `between`. Dies ist der Standardwert.

## Beschreibung

Die `column-rule-visibility-items`-Eigenschaft definiert, ob ein Column-Rule-Segment in Lücken von Spalten neben leeren Bereichen in [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte gezeichnet wird.

Die Eigenschaften `column-rule-visibility-items` und {{cssxref("row-rule-visibility-items")}} können beide mit der Kurzform {{cssxref("rule-visibility-items")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine Column-Rule, die zwischen zwei Grid-Bereichen gezeichnet wird, wenn mindestens ein angrenzender Grid-Bereich ein Grid-Element enthält.

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container, indem wir 4 Spalten und 4 Zeilen erstellen, indem sowohl die {{cssxref("grid-template-columns")}}- als auch die {{cssxref("grid-template-rows")}}-Eigenschaften auf `repeat(4, 1fr)` gesetzt werden. Dann verschieben wir das letzte Element in den unten rechts gelegenen Grid-Bereich mit den Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}}. Wir fügen einen {{cssxref("gap")}} von `20px` hinzu, um genügend Platz zwischen den Spalten zu schaffen und unsere `5px` gepunktete Linie unterzubringen.

Schließlich setzen wir `column-rule-visibility-items` auf `between`, sodass eine Column-Rule nur in einer Spaltenlücke gezeichnet wird, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

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

- {{cssxref("rule-visibility-items")}} Kurzform
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("rule")}} Kurzform
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
