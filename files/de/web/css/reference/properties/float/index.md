---
title: "`float` CSS property"
short-title: float
slug: Web/CSS/Reference/Properties/float
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`float`** [CSS](/de/docs/Web/CSS)-Eigenschaft platziert ein Element auf der linken oder rechten Seite seines Containers und erlaubt es, dass Text und Inline-Elemente darum herumfließen. Das Element wird aus dem normalen Fluss der Seite entfernt, bleibt jedoch weiterhin Teil des Flusses (im Gegensatz zur [absoluten Positionierung](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning)).

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

Da `float` die Verwendung des Block-Layouts impliziert, ändert es den berechneten Wert der {{cssxref("display")}}-Werte in einigen Fällen:

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
> Wenn auf eine CSS-Eigenschaft in JavaScript über das [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Objekt zugegriffen wird, werden einwortige Eigenschaftsnamen wie sie sind verwendet. Obwohl `float` ein reserviertes Schlüsselwort in JavaScript ist, wird die CSS-`float`-Eigenschaft in modernen Browsern als `float` angesprochen. In älteren Browsern müssen Sie `cssFloat` verwenden, um auf die `float`-Eigenschaft zuzugreifen. (Dies ist ähnlich wie der Zugriff auf das "class"-Attribut als "className" und das "for"-Attribut eines `<label>`-Elements als "htmlFor".)

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

Die `float`-Eigenschaft wird als ein einziges Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `left`
  - : Das Element muss auf der linken Seite seines umschließenden Blocks fließen.
- `right`
  - : Das Element muss auf der rechten Seite seines umschließenden Blocks fließen.
- `none`
  - : Das Element darf nicht fließen.
- `inline-start`
  - : Das Element muss auf der Startseite seines umschließenden Blocks fließen. Das heißt, die linke Seite bei `ltr`-Schriften und die rechte Seite bei `rtl`-Schriften.
- `inline-end`
  - : Das Element muss auf der Endeseite seines umschließenden Blocks fließen. Das heißt, die rechte Seite bei `ltr`-Schriften und die linke Seite bei `rtl`-Schriften.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wie gefloatete Elemente positioniert werden

Wie oben erwähnt, wird ein Element, wenn es gefloatet wird, aus dem normalen Fluss des Dokuments entfernt (bleibt jedoch weiterhin Teil davon). Es wird nach links oder rechts verschoben, bis es den Rand seines umschließenden Kastens oder ein anderes gefloatetes Element berührt.

In diesem Beispiel gibt es drei farbige Quadrate. Zwei sind links gefloatet, und eines ist rechts gefloatet. Beachten Sie, dass das zweite "linke" Quadrat rechts vom ersten platziert ist. Weitere Quadrate würden sich weiter rechts stapeln, bis sie den umschließenden Kasten füllen, danach würden sie auf die nächste Zeile umbrechen.

Ein gefloatetes Element ist mindestens so hoch wie seine höchsten verschachtelten gefloateten Kinder. Wir haben dem übergeordneten Element `width: 100%` gegeben und es gefloatet, um sicherzustellen, dass es hoch genug ist, um seine gefloateten Kinder zu umfassen, und um sicherzustellen, dass es die Breite des übergeordneten Elements einnimmt, sodass wir sein angrenzendes Geschwisterelement nicht freigeben müssen.

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

Manchmal möchten Sie vielleicht ein Element zwingen, unterhalb aller gefloateten Elemente zu liegen. Beispielsweise möchten Sie, dass Absätze an Floats angrenzen, aber Überschriften auf ihrer eigenen Zeile sind. Siehe {{cssxref("clear")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block-Formatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- Verwenden Sie {{cssxref("clear")}}, um ein Element zu zwingen, sich unterhalb eines gefloateten Elements zu bewegen.
