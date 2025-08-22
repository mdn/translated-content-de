---
title: sibling-index()
slug: Web/CSS/sibling-index
l10n:
  sourceCommit: 9ccdb2ddd0d46e6d203044c3fffb50a784528c8c
---

{{SeeCompatTable}}

Die **`sibling-index()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine ganze Zahl zurück, die die Position des aktuellen Elements im DOM-Baum relativ zu allen seinen Geschwisterelementen darstellt. Der zurückgegebene Wert ist die Indexnummer der Position des kontextbezogenen Kindes unter allen Geschwisterelementen innerhalb eines Elternelements, wobei das erste Kind `1` zurückgibt und das letzte Kind [`Element.children`](/de/docs/Web/API/Element/children).length zurückgibt.

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
> Wie die {{CSSxRef(":nth-child()")}} Pseudoklasse beginnt `sibling-index()` bei 1, nicht bei 0.

## Syntax

```css-nolint
sibling-index()
```

### Parameter

Die `sibling-index()` Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine ganze Zahl; die Position des aktuellen Elements in der Geschwister-Reihenfolge des DOM-Baums.

## Beispiele

### Dynamische Listenbreite

Dieses Beispiel zeigt, wie die Breite jedes {{htmlelement("li")}} Elements in der {{htmlelement("ul")}} dynamisch um `50px` erhöht werden kann.

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

### Geordnete Liste

Dieses Beispiel zeigt, wie eine geordnete Liste ohne Verwendung des {{htmlelement("ol")}} Elements mit `sibling-index()` erstellt werden kann. Verwenden Sie immer das semantisch passendste Element für den Kontext; dieses Beispiel zeigt, was mit CSS gemacht werden kann, wenn Sie das HTML nicht ändern können.

#### HTML

Wir fügen einen {{htmlelement("nav")}} Container und mehrere {{htmlelement("div")}} Kind-Elemente ein.

```html
<nav aria-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

Wir lassen es visuell wie eine nummerierte Liste aussehen, indem der `sibling-index` vor jedem {{htmlelement("div")}} Element mit dem {{CSSxRef("::before")}} Pseudoelement angezeigt wird. Dabei wird der {{CSSxRef("content")}} auf die von der `sibling-index()` Funktion zurückgegebene ganze Zahl gesetzt.

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

### Sequentielle Animationen

Durch die Kombination von `sibling-index()` mit CSS-Animationen eröffnen sich neue Möglichkeiten. In diesem Beispiel wird die Deckkraft von Elementen in der Reihenfolge des DOM durch Setzen einer {{cssxref("animation-delay")}} basierend auf ihrer Reihenfolge verändert.

#### HTML

Wir fügen ein Containerelement mit vier Kind-Elementen ein:

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir wenden die `fade-in` Animation auf jedes Element an. Wir verwenden die `sibling-index()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion, um die Dauer der `animation-delay` basierend auf der Position des Quell-Elements im Quellauftrag festzulegen. Der {{cssxref("animation-fill-mode")}} wendet den `0%` Keyframe der Animation an, bis die `animation-duration` abgelaufen ist.

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
