---
title: sibling-index()
slug: Web/CSS/Reference/Values/sibling-index
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`sibling-index()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt eine ganze Zahl zurück, die die Position des aktuellen Elements im DOM-Baum relativ zu allen seinen Geschwisterelementen darstellt. Der zurückgegebene Wert ist die Indexnummer der Position des Kontextkindes unter allen Geschwisterelementen innerhalb eines Elternelements, wobei das erste Kind `1` zurückgibt und das letzte Kind die `length` von [`Element.children`](/de/docs/Web/API/Element/children) zurückgibt.

> [!NOTE]
> Ähnlich wie die {{CSSxRef(":nth-child()")}} Pseudo-Klasse beginnt `sibling-index()` bei 1, nicht bei 0.

> [!NOTE]
> Die {{CSSxRef("counter()")}} Funktion liefert ein ähnliches Ergebnis, gibt aber einen `<string>` zurück (der eher für [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) geeignet ist), während `sibling-index()` ein `<integer>` zurückgibt (das für Berechnungen verwendet werden kann).

{{InteractiveExample("CSS Demo: sibling-index()")}}

```css interactive-example-choice
--width: calc(sibling-index() * 30px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 20px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 10px);
```

```css interactive-example-choice
--width: 100px;
```

```html interactive-example
<ul id="example-element">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css interactive-example
#example-element {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

#example-element > li {
  text-align: center;
  padding: 2px;
  border-radius: 8px;
  width: var(--width, calc(sibling-index() * 30px));
  color: white;
  background-color: hsl(
    calc(360deg / sibling-count() * sibling-index()) 50% 50%
  );
}
```

## Syntax

```css-nolint
sibling-index()
```

### Parameter

Die `sibling-index()` Funktion nimmt keine Parameter an.

### Rückgabewert

Ein Integer; die Position des aktuellen Elements in der Geschwisterreihenfolge des DOM-Baums.

## Beispiele

### Dynamische Listenbreite

Dieses Beispiel zeigt, wie die Breite jedes {{htmlelement("li")}}-Elements in der {{htmlelement("ul")}} dynamisch um `50px` erhöht werden kann.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 50px);
  background-color: #ffaaaa;
}
```

#### Ergebnisse

{{EmbedLiveSample("Dynamic list width", "300", "100")}}

### Sequentielle Animationen

Das Kombinieren von `sibling-index()` mit CSS-Animationen eröffnet neue Möglichkeiten. In diesem Beispiel wird die Opazität von Elementen in sequentieller Reihenfolge durch das Setzen einer {{cssxref("animation-delay")}} basierend auf ihrer Reihenfolge im DOM.

#### HTML

Wir fügen ein Container-Element mit vier Kindern hinzu:

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir wenden die `fade-in`-Animation auf jedes Element an. Wir verwenden die `sibling-index()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion, um die Dauer der `animation-delay` basierend auf der Position des Quell-Elements in der Quellreihenfolge festzulegen. Der {{cssxref("animation-fill-mode")}} wendet den `0%` Keyframe der Animation an, bis die `animation-duration` abläuft.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Sequential animations", "300", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("sibling-count()")}}
- {{cssxref("counter()")}}
