---
title: float
slug: Web/CSS/float
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`float`** [CSS](/de/docs/Web/CSS)-Eigenschaft platziert ein Element auf der linken oder rechten Seite seines Containers, wodurch Text und inline-Elemente darum herumfließen können. Das Element wird aus dem normalen Fluss der Seite entfernt, bleibt jedoch Teil des Flusses (im Gegensatz zur [absoluten Positionierung](/de/docs/Web/CSS/position#absolute_positioning)).

{{EmbedInteractiveExample("pages/css/float.html")}}

Ein _fließendes Element_ ist eines, bei dem der berechnete Wert von `float` nicht `none` ist.

Da `float` die Verwendung des Block-Layouts impliziert, modifiziert es den berechneten Wert der {{cssxref("display")}}-Werte in einigen Fällen:

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
| _anderer_            | _unverändert_    |

> [!NOTE]
> Wenn Sie über das {{domxref("HTMLElement.style")}}-Objekt in JavaScript auf eine CSS-Eigenschaft zugreifen, werden einwortige Eigenschaftsnamen unverändert verwendet. Obwohl `float` ein reserviertes Schlüsselwort in JavaScript ist, wird die CSS `float`-Eigenschaft in modernen Browsern als `float` zugegriffen. In älteren Browsern müssen Sie `cssFloat` verwenden, um auf die `float`-Eigenschaft zuzugreifen. (Dies ist ähnlich wie der Zugriff auf das "class"-Attribut als "className" und das "for"-Attribut eines `<label>`-Elements als "htmlFor".)

## Syntax

```css
/* Schlüsselwortwerte */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Globale Werte */
float: inherit;
float: initial;
float: revert;
float: revert-layer;
float: unset;
```

Die `float`-Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `left`
  - : Das Element muss auf der linken Seite seines umgebenden Blocks fließen.
- `right`
  - : Das Element muss auf der rechten Seite seines umgebenden Blocks fließen.
- `none`
  - : Das Element darf nicht fließen.
- `inline-start`
  - : Das Element muss auf der Anfangsseite seines umgebenden Blocks fließen. Das ist die linke Seite bei `ltr`-Skripten und die rechte Seite bei `rtl`-Skripten.
- `inline-end`
  - : Das Element muss auf der Endseite seines umgebenden Blocks fließen. Das ist die rechte Seite bei `ltr`-Skripten und die linke Seite bei `rtl`-Skripten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wie gefloatete Elemente positioniert werden

Wie oben erwähnt, wird ein Element, wenn es gefloatet wird, aus dem normalen Dokumentenfluss herausgenommen (bleibt jedoch Teil davon). Es wird nach links oder rechts verschoben, bis es den Rand seines umgebenden Kastens _oder ein anderes gefloatetes Element_ berührt.

In diesem Beispiel gibt es drei farbige Quadrate. Zwei sind nach links gefloatet, und eines ist nach rechts gefloatet. Beachten Sie, dass das zweite "linke" Quadrat rechts vom ersten platziert wird. Zusätzliche Quadrate würden weiterhin nach rechts stapeln, bis sie den umgebenden Kasten füllen, danach würden sie zur nächsten Zeile umschlagen.

Ein gefloatetes Element ist mindestens so hoch wie seine höchsten verschachtelten gefloateten Kinder. Wir haben dem Elternteil `width: 100%` gegeben und es gefloatet, um sicherzustellen, dass es hoch genug ist, um seine gefloateten Kinder zu umfassen, und um sicherzustellen, dass es die Breite des Elternteils einnimmt, sodass wir sein benachbartes Geschwister nicht freimachen müssen.

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

### Floats aufheben

Manchmal möchten Sie, dass ein Element gezwungen wird, unterhalb von etwaigen gefloateten Elementen zu erscheinen. Beispielsweise möchten Sie vielleicht, dass Absätze an Floats angrenzen, aber Überschriften auf ihrer eigenen Zeile stehen. Siehe {{cssxref("clear")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- Verwenden Sie {{cssxref("clear")}}, um ein Element zu erzwingen, sich unter ein gefloatetes Element zu bewegen.
