---
title: "`row-rule-visibility-items` CSS property"
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{SeeCompatTable}}

Die **`row-rule-visibility-items`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, ob ein Abschnitt der Linienregel in Lücken neben leeren Bereichen gezeichnet wird.

{{InteractiveExample("CSS Demo: row-rule-visibility-items")}}

```css interactive-example-choice
row-rule-visibility-items: all;
```

```css interactive-example-choice
row-rule-visibility-items: around;
```

```css interactive-example-choice
row-rule-visibility-items: between;
```

```css interactive-example-choice
row-rule-visibility-items: normal;
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
  row-rule: solid 5px red;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
cite {
  grid-column: 3;
  grid-row: 3;
}
```

## Syntax

```css
/* Keywords */
row-rule-visibility-items: all;
row-rule-visibility-items: around;
row-rule-visibility-items: between;
row-rule-visibility-items: normal;

/* Global values */
row-rule-visibility-items: inherit;
row-rule-visibility-items: initial;
row-rule-visibility-items: revert;
row-rule-visibility-items: revert-layer;
row-rule-visibility-items: unset;
```

### Werte

- `all`
  - : Die Linienregel sollte in allen Lückenabschnitten gezeichnet werden, unabhängig davon, ob benachbarte Bereiche ein Element enthalten.

- `around`
  - : Die Linienregel sollte in einem Lückenabschnitt gezeichnet werden, wenn mindestens einer der beiden benachbarten Bereiche von einem Element belegt ist.

- `between`
  - : Die Linienregel sollte in einem Lückenabschnitt gezeichnet werden, wenn beide benachbarten Bereiche von Elementen belegt sind.

- `normal`
  - : Verhält sich wie `all`. Dies ist der Standardwert.

## Beschreibung

Die `row-rule-visibility-items` Eigenschaft definiert, ob in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Zeile Linieregelabschnitte in den Lücken zwischen zwei benachbarten Bereichen gezeichnet werden, wenn einer oder beide Bereiche leer sind.

Die Eigenschaften `row-rule-visibility-items` und {{cssxref("column-rule-visibility-items")}} können beide mit dem Kurzschreibwert {{cssxref("rule-visibility-items")}} auf dieselben Werte gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir Zeilenregeln, die zwischen zwei Grid-Bereichen gezeichnet werden, wenn mindestens ein benachbarter Grid-Bereich Grid-Elemente enthält.

#### HTML

Wir fügen eine Liste von dynamischen Sport-Duos hinzu:

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container und erstellen 4 Zeilen und 4 Spalten, indem wir sowohl die Eigenschaften {{cssxref("grid-template-rows")}} als auch {{cssxref("grid-template-columns")}} auf `repeat(4, 1fr)` setzen. Das letzte Element wird mit Hilfe von {{cssxref("grid-row")}} und {{cssxref("grid-column")}} in den unten rechts gelegenen Grid-Bereich verschoben. Wir fügen eine {{cssxref("gap")}} von `20px` hinzu, um genug Platz zwischen den Zeilen für unsere `5px` gestrichelte Regel zu schaffen.

Schließlich setzen wir `row-rule-visibility-items` auf `around`, sodass ein Abschnitt der Zeilenregel nur in einer Zeilenlücke gezeichnet wird, wenn einer oder beide benachbarte Grid-Bereiche ein Grid-Element enthalten.

```css
ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  row-rule: dashed 5px blue;
  row-rule-visibility-items: around;
}
li:last-child {
  grid-column: 4;
  grid-row: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (row-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the row-rule-visibility-items property";
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

- {{cssxref("rule-visibility-items")}} Kurzschreibweise
- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule")}} Kurzschreibweise
- {{cssxref("rule")}} Kurzschreibweise
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
