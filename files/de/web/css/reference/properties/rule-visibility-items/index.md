---
title: "`rule-visibility-items` CSS property"
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: f1e792d66f656c235b3c91a905b58cc7f7f1cca0
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-visibility-items`** legt fest, ob Trennliniensegmente in Zeilen- und Spaltenabständen neben leeren Bereichen gezeichnet werden.

## Zugehörige Eigenschaften

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Trennlinien werden in allen Abstandssegmenten gezeichnet, unabhängig davon, ob die angrenzenden Bereiche ein Element enthalten.

- `around`
  - : Eine Trennlinie wird in einem Abstandssegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält.

- `between`
  - : Eine Trennlinie wird in einem Abstandssegment nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten.

- `normal`
  - : Bei Grid-Containern entspricht das Verhalten `all`. In mehrspaltigen Layouts entspricht es `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `rule-visibility-items` legt fest, ob Trennliniensegmente in Abständen neben leeren Bereichen zwischen Zeilen und Spalten in [mehrzeiligen](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile oder Spalte gezeichnet werden.

Der Wert ist ein einzelnes Schlüsselwort, das für die Eigenschaften {{cssxref("column-rule-visibility-items")}} und {{cssxref("row-rule-visibility-items")}} denselben Wert festlegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir fest, dass zwischen zwei Grid-Bereichen eine Trennlinie gezeichnet wird, wenn mindestens einer der angrenzenden Grid-Bereiche ein Grid-Element enthält.

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container und erstellen vier Spalten und vier Zeilen, indem wir sowohl {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen. Mit den Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} verschieben wir das letzte Element in den Grid-Bereich unten rechts. Wir legen einen {{cssxref("gap")}} von `20px` fest, damit zwischen den Spalten genügend Platz für die `5px` breiten Trennlinien bleibt. Die Spaltentrennlinien setzen wir auf `dashed`, die Zeilentrennlinien auf `solid`.

Schließlich setzen wir `rule-visibility-items` auf `between`, sodass Zeilen- und Spaltentrennlinien nur gezeichnet werden, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

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

{{EmbedLiveSample("Basic", "", "380")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-visibility-items")}}-Kurzschreibweise
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
