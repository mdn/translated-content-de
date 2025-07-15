---
title: float
slug: Web/CSS/float
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`float`** [CSS](/de/docs/Web/CSS)-Eigenschaft platziert ein Element auf der linken oder rechten Seite seines Containers, sodass Text und Inline-Elemente darum fließen können. Das Element wird aus dem normalen Fluss der Seite entfernt, bleibt jedoch Teil des Flusses (im Gegensatz zur [absoluten Positionierung](/de/docs/Web/CSS/position#absolute_positioning)).

{{InteractiveExample("CSS Demo: float")}}

```css interactive-example-choice
float: none;
```

```css interactive-example-choice
float: left;
```

```css interactive-example-choice
float: right;
```

```css interactive-example-choice
float: inline-start;
```

```css interactive-example-choice
float: inline-end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Float me</div>
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  width: 80%;
  line-height: normal;
}

#example-element {
  border: solid 10px #efac09;
  background-color: #040d46;
  color: white;
  padding: 1em;
  width: 40%;
}
```

Ein _schwebendes Element_ ist eines, bei dem der berechnete Wert von `float` nicht `none` ist.

Da `float` die Verwendung des Block-Layouts impliziert, ändert es den berechneten Wert der {{cssxref("display")}} Werte in einigen Fällen:

| Angegebener Wert     | Berechneter Wert |
| -------------------- | ---------------- |
| `inline`             | `block`          |
| `inline-block`       | `block`          |
| `inline-table`       | `table`          |
| `table-row`          | `block`          |
| `table-row-group`    | `block`          |
| `table-column`       | `block`          |
| `table-column-group` | `block`          |
| `table-cell`         | `block`          |
| `table-caption`      | `block`          |
| `table-header-group` | `block`          |
| `table-footer-group` | `block`          |
| `inline-flex`        | `flex`           |
| `inline-grid`        | `grid`           |
| _andere_             | _unverändert_    |

> [!NOTE]
> Beim Zugriff auf eine CSS-Eigenschaft in JavaScript über das [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Objekt werden einwortige Eigenschaftsnamen unverändert verwendet. Obwohl `float` ein reserviertes Schlüsselwort in JavaScript ist, wird die CSS-Eigenschaft `float` in modernen Browsern als `float` aufgerufen. In älteren Browsern muss `cssFloat` verwendet werden, um auf die `float`-Eigenschaft zuzugreifen. (Dies ähnelt der Art und Weise, wie auf das Attribut "class" als "className" und auf das "for"-Attribut eines `<label>`-Elements als "htmlFor" zugegriffen wird.)

## Syntax

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: revert;
float: revert-layer;
float: unset;
```

Die `float`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `left`
  - : Das Element muss auf der linken Seite seines enthaltenden Blocks schweben.
- `right`
  - : Das Element muss auf der rechten Seite seines enthaltenden Blocks schweben.
- `none`
  - : Das Element darf nicht schweben.
- `inline-start`
  - : Das Element muss auf der Startseite seines enthaltenden Blocks schweben. Das ist die linke Seite bei `ltr`-Skripten und die rechte Seite bei `rtl`-Skripten.
- `inline-end`
  - : Das Element muss auf der Endseite seines enthaltenden Blocks schweben. Das ist die rechte Seite bei `ltr`-Skripten und die linke Seite bei `rtl`-Skripten.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Wie schwebende Elemente positioniert werden

Wie oben erwähnt, wird ein Element, wenn es schwebt, aus dem normalen Dokumentfluss herausgenommen (bleibt allerdings Teil davon). Es wird nach links oder rechts verschoben, bis es den Rand seines enthaltenden Kastens _oder ein anderes schwebendes Element_ berührt.

In diesem Beispiel gibt es drei farbige Quadrate. Zwei schweben links und eines schwebt rechts. Beachten Sie, dass das zweite "linke" Quadrat rechts vom ersten platziert wird. Zusätzliche Quadrate würden weiterhin nach rechts stapeln, bis sie den enthaltenden Kasten füllen, wonach sie in die nächste Zeile umbrechen würden.

Ein schwebendes Element ist mindestens so hoch wie seine höchsten verschachtelten schwebenden Kinder. Wir haben dem Elternteil `width: 100%` gegeben und es schweben lassen, um sicherzustellen, dass es hoch genug ist, um seine schwebenden Kinder zu umschließen, und um sicherzustellen, dass es die Breite des Elternteils ausnutzt, damit wir dessen benachbartes Geschwister nicht räumen müssen.

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  box-sizing: border-box;
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### Ergebnis

{{EmbedLiveSample('How_floated_elements_are_positioned','400','190')}}

### Freiräumen von Schwebungen

Manchmal möchten Sie ein Element dazu zwingen, sich unterhalb schwebender Elemente zu bewegen. Zum Beispiel möchten Sie, dass Absätze neben Schwebungen bleiben, aber Überschriften auf ihrer eigenen Zeile stehen. Siehe {{cssxref("clear")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- Verwenden Sie {{cssxref("clear")}}, um ein Element dazu zu zwingen, sich unterhalb eines schwebenden Elements zu bewegen.
