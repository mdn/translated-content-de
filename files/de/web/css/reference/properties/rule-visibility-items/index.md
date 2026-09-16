---
title: "`rule-visibility-items` CSS property"
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`rule-visibility-items`** definiert, ob Liniensegmente in Zeilen- und Spaltenlücken neben leeren Bereichen gezeichnet werden.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
/* Keyword values */
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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Linien sollen in allen Lückensegmenten gezeichnet werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten.

- `around`
  - : Eine Linie soll in einem Lückensegment gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche durch ein Element belegt ist.

- `between`
  - : Eine Linie soll in einem Lückensegment nur gezeichnet werden, wenn beide angrenzenden Bereiche durch Elemente belegt sind.

- `normal`
  - : Bei Grid-Containern verhält sich dieser Wert genauso wie `all`. In mehrspaltigen Layouts verhält er sich genauso wie `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `rule-visibility-items` definiert, ob Liniensegmente in Lücken neben leeren Bereichen in den Lücken zwischen Zeilen und Spalten in [mehrzeiligen](/de/docs/Web/CSS/Guides/Multicol_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Zeile oder Spalte gezeichnet werden.

Der Wert ist ein einzelnes Schlüsselwort, das denselben Wert für die Eigenschaften {{cssxref("column-rule-visibility-items")}} und {{cssxref("row-rule-visibility-items")}} festlegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel definieren wir, dass eine Linie zwischen zwei Grid-Bereichen gezeichnet wird, wenn mindestens ein angrenzender Grid-Bereich ein Grid-Element enthält.

#### HTML

Wir fügen eine Liste dynamischer Sportduos ein:

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container, erstellen vier Spalten und vier Zeilen, indem wir sowohl die Eigenschaft {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen, und verschieben das letzte Element mithilfe der Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} in den Grid-Bereich unten rechts. Wir fügen einen {{cssxref("gap")}} von `20px` hinzu, um zwischen den Spalten genügend Platz für unsere `5px`-Linien bereitzustellen. Wir setzen die Spaltenlinien auf `dashed` und die Zeilenlinien auf `solid`.

Abschließend setzen wir `rule-visibility-items` auf `between`, sodass Zeilen- und Spaltenlinien nur gezeichnet werden, wenn beide an sie angrenzenden Grid-Bereiche ein Grid-Element enthalten.

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

- {{cssxref("column-rule-visibility-items")}}-Kurzform
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzform
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)-Modul
