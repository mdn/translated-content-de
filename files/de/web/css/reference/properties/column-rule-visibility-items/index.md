---
title: "`column-rule-visibility-items` CSS property"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-visibility-items`** legt fest, ob ein column-rule-Segment in Lücken gezeichnet wird, die an leere Bereiche angrenzen.

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
    <cite>-- Dr. Seuss</cite>
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
/* Keyword values */
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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Die Spaltenlinie sollte in allen Lückensegmenten gezeichnet werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten.

- `around`
  - : Die Spaltenlinie sollte in einem Lückensegment gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist.

- `between`
  - : Die Spaltenlinie sollte in einem Lückensegment gezeichnet werden, wenn beide angrenzenden Bereiche von Elementen belegt sind.

- `normal`
  - : Bei Grid-Containern verhält sich dieser Wert wie `all`. Im Mehrspaltenlayout verhält er sich wie `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `column-rule-visibility-items` legt fest, ob ein column-rule-Segment in Spaltenlücken gezeichnet wird, die an leere Bereiche in [mehrzeiligen](/de/docs/Web/CSS/Guides/Multicol_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte angrenzen.

Die Eigenschaften `column-rule-visibility-items` und {{cssxref("row-rule-visibility-items")}} können beide mithilfe der Kurzform {{cssxref("rule-visibility-items")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel legen wir fest, dass eine Spaltenlinie zwischen zwei Grid-Bereichen gezeichnet wird, wenn mindestens einer der angrenzenden Grid-Bereiche ein Grid-Element enthält.

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container, erstellen durch Festlegen der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` 4 Spalten und 4 Zeilen und verschieben das letzte Element mithilfe der Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} in den Grid-Bereich unten rechts. Wir fügen ein {{cssxref("gap")}} von `20px` hinzu, um zwischen den Spalten genügend Platz für unsere gestrichelte Linie mit `5px` zu schaffen.

Schließlich setzen wir `column-rule-visibility-items` auf `between`, sodass eine Spaltenlinie nur dann in einer Spaltenlücke gezeichnet wird, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

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

- Kurzform {{cssxref("rule-visibility-items")}}
- {{cssxref("row-rule-visibility-items")}}
- Kurzform {{cssxref("column-rule")}}
- Kurzform {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
