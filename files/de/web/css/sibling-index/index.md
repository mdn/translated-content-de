---
title: sibling-index()
slug: Web/CSS/sibling-index
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{SeeCompatTable}}

Die **`sibling-index()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) liefert eine ganze Zahl, die die Position des aktuellen Elements im DOM-Baum relativ zu allen seinen Geschwisterelementen darstellt. Der zurückgegebene Wert ist die Indexnummer der Position des kontextuellen Kindes unter allen Geschwisterelementen innerhalb eines Elternelements, wobei das erste Kind `1` zurückgibt und das letzte Kind die Länge von [`Element.children`](/de/docs/Web/API/Element/children).length zurückgibt.

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

> [!NOTE]
> Wie die Pseudo-Klasse {{CSSxRef(":nth-child()")}} beginnt `sibling-index()` bei 1 und nicht bei 0.

## Syntax

```css-nolint
sibling-index()
```

### Parameter

Die `sibling-index()`-Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine ganze Zahl; die Position des aktuellen Elements in der Geschwisterreihenfolge des DOM-Baums.

## Beispiele

### Dynamische Listenbreite

Dieses Beispiel zeigt, wie die Breite jedes {{htmlelement("li")}}-Elements in der {{htmlelement("ul")}} um `50px` dynamisch erhöht werden kann.

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

### Nummerierte Liste

Dieses Beispiel zeigt, wie eine nummerierte Liste unter Verwendung von `sibling-index()` erstellt wird, ohne das {{htmlelement("ol")}}-Element zu verwenden. Verwenden Sie immer das semantisch passendste Element für den Kontext; dieses Beispiel ist enthalten, um zu zeigen, was mit CSS möglich ist, wenn Sie das HTML nicht ändern können.

#### HTML

Wir fügen einen {{htmlelement("nav")}}-Container und mehrere {{htmlelement("div")}}-Kinderelemente hinzu.

```html
<nav aria-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

Wir lassen es als nummerierte Liste erscheinen, indem wir den sibling-index vor jedem {{htmlelement("div")}}-Element mit dem {{CSSxRef("::before")}}-Pseudo-Element anzeigen und den {{CSSxRef("content")}}-Wert auf die von der `sibling-index()` Funktion zurückgegebene Zahl setzen.

```css
div {
  --list-index: sibling-index();
  display: flex;
  gap: 1ch;
}

div::before {
  content: var(--list-index);
}
```

#### Ergebnisse

{{EmbedLiveSample("Ordered List", "300", "100")}}

### Sequenzielle Animationen

Die Kombination von `sibling-index()` mit CSS-Animationen eröffnet neue Möglichkeiten. In diesem Beispiel wird die Deckkraft von Elementen in sequentieller Reihenfolge angepasst, indem eine {{cssxref("animation-delay")}} basierend auf ihrer Reihenfolge im DOM gesetzt wird.

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

Wir wenden die `fade-in`-Animation auf jedes Element an. Wir nutzen die `sibling-index()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion, um die Dauer der `animation-delay` basierend auf der Position des Quell-Elements in der Quellordnung festzulegen. Die {{cssxref("animation-fill-mode")}} wendet den `0%`-Keyframe der Animation an, bis die `animation-duration` abläuft.

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

- {{CSSxRef("sibling-count", "sibling-count()")}}
