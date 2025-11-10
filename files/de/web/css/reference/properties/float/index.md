---
title: float
slug: Web/CSS/Reference/Properties/float
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`float`**-Eigenschaft von [CSS](/de/docs/Web/CSS) platziert ein Element an der linken oder rechten Seite seines Containers, sodass Text und Inline-Elemente darum herumfließen können. Dabei wird das Element aus dem normalen Fluss der Seite entfernt, bleibt jedoch weiterhin Teil des Flusses (im Gegensatz zur [absoluten Positionierung](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning)).

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

Ein _fließendes Element_ ist eines, bei dem der berechnete Wert von `float` nicht `none` ist.

Da `float` die Verwendung des Block-Layouts impliziert, ändert es in einigen Fällen den berechneten Wert der {{cssxref("display")}}-Werte:

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
> Beim Zugriff auf eine CSS-Eigenschaft in JavaScript über das [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Objekt werden einwortige Eigenschaftsnamen unverändert verwendet. Obwohl `float` ein reserviertes Schlüsselwort in JavaScript ist, wird die CSS-Eigenschaft `float` in modernen Browsern als `float` aufgerufen. In älteren Browsern müssen Sie `cssFloat` verwenden, um auf die `float`-Eigenschaft zuzugreifen. (Dies ist ähnlich wie beim Zugriff auf das "class"-Attribut als "className" und das "for"-Attribut eines `<label>`-Elements als "htmlFor".)

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

Die `float`-Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der unten stehenden Werteliste ausgewählt wird.

### Werte

- `left`
  - : Das Element muss auf der linken Seite seines umgebenden Blocks fließen.
- `right`
  - : Das Element muss auf der rechten Seite seines umgebenden Blocks fließen.
- `none`
  - : Das Element darf nicht fließen.
- `inline-start`
  - : Das Element muss auf der Startseite seines umgebenden Blocks fließen. Das ist die linke Seite bei `ltr`-Skripten und die rechte Seite bei `rtl`-Skripten.
- `inline-end`
  - : Das Element muss auf der Endseite seines umgebenden Blocks fließen. Das ist die rechte Seite bei `ltr`-Skripten und die linke Seite bei `rtl`-Skripten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wie gefloatete Elemente positioniert werden

Wie oben erwähnt, wenn ein Element gefloatet wird, wird es aus dem normalen Dokumentenfluss herausgenommen (bleibt jedoch weiterhin Teil davon). Es wird nach links oder rechts verschoben, bis es den Rand seines umgebenden Kastens oder _ein anderes gefloatetes Element_ berührt.

In diesem Beispiel gibt es drei farbige Quadrate. Zwei sind nach links gefloatet und eines nach rechts. Beachten Sie, dass das zweite "linke" Quadrat rechts vom ersten platziert wird. Zusätzliche Quadrate würden weiterhin nach rechts gestapelt, bis sie den umgebenden Kasten füllen, danach würden sie in die nächste Zeile umbrechen.

Ein gefloatetes Element ist mindestens so hoch wie seine höchste verschachtelte gefloatete Kindelement. Wir haben dem Elternteil `width: 100%` gegeben und es gefloatet, um sicherzustellen, dass es hoch genug ist, um seine gefloateten Kinder einzuschließen, und um sicherzustellen, dass es die Breite des Elternteils einnimmt, damit wir sein benachbartes Geschwisterelement nicht freimachen müssen.

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

### Floats freigeben

Manchmal möchten Sie vielleicht ein Element zwingen, unterhalb aller gefloateten Elemente zu erscheinen. Zum Beispiel möchten Sie vielleicht, dass Absätze neben Floats verbleiben, aber Überschriften auf ihrer eigenen Linie erscheinen. Siehe {{cssxref("clear")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- Verwenden Sie {{cssxref("clear")}}, um ein Element zu zwingen, unterhalb eines gefloateten Elements zu erscheinen.
