---
title: "& Nesting-Selektor"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der CSS-**`&`-Nesting-Selektor** legt die Beziehung zwischen Eltern- und Kindregeln beim Verwenden von [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) ausdrücklich fest. Er macht die verschachtelten Kindregel-Selektoren _relativ zum Elternelement_. Ohne den `&`-Nesting-Selektor wählt der Kindregel-Selektor Kindelemente aus. Die Kindregel-Selektoren haben die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) wie wenn sie innerhalb von {{cssxref(":is()")}} wären.

> [!NOTE]
> _Kindregel_ bedeutet nicht _Kindelement-Selektor_. Eine Kindregel kann das Elternelement oder Kindelemente anvisieren, abhängig von der Verwendung des `&`-Nesting-Selektors.

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&`-Nesting-Selektor die [Scope-Wurzel](/de/docs/Web/CSS/Reference/Selectors/:scope).

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&`-Nesting-Selektor und Leerzeichen

Betrachten Sie den folgenden Code, bei dem das Nesting _ohne_ den `&`-Nesting-Selektor durchgeführt wird.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren analysiert, fügt er automatisch Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die äquivalenten nicht-verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel (ohne Leerzeichen) an die Elternregel angefügt werden muss, z.B. beim Verwenden einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder beim Erstellen von [komplexen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector), muss der `&`-Nesting-Selektor direkt vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element gestalten möchten, indem wir Stile bereitstellen, die jederzeit angewendet werden sollen, und auch einige Stile verschachteln, die nur bei Hover angewendet werden sollen. Wenn der `&`-Nesting-Selektor nicht enthalten ist, wird ein Leerzeichen hinzugefügt und wir enden mit einem Regelset, das die verschachtelten Stile auf jeden _gehoberten Nachkommen des Elternregel-Selectors_ anwendet. Das ist jedoch nicht das, was wir wollen.

```css
.parent-rule {
  /* parent rule properties */
  :hover {
    /* child rule properties */
  }
}

/* the browser parses the above nested rules as shown below */
.parent-rule {
  /* parent rule properties */
}

.parent-rule *:hover {
  /* child rule properties */
}
```

Mit dem `&`-Nesting-Selektor ohne Leerzeichen werden die vom Elternregel-Selektor erfassten Elemente beim Hovern gestaltet.

```css
.parent-rule {
  /* parent rule properties */
  &:hover {
    /* child rule properties */
  }
}

/* the browser parses the above nested rules as shown below */
.parent-rule {
  /* parent rule properties */
}

.parent-rule:hover {
  /* child rule properties */
}
```

### Anhängen des `&`-Nesting-Selektors

Der `&`-Nesting-Selektor kann auch angehängt werden, um den Kontext der Regeln umzukehren.

```css
.card {
  /* .card styles */
  .featured & {
    /* .featured .card styles */
  }
}

/* the browser parses above nested rules as */

.card {
  /* .card styles */
}

.featured .card {
  /* .featured .card styles */
}
```

Der `&`-Nesting-Selektor kann mehrfach platziert werden:

```css
.card {
  /* .card styles */
  .featured & & & {
    /* .featured .card .card .card styles */
  }
}

/* the browser parses above nested rules as */

.card {
  /* .card styles */
}

.featured .card .card .card {
  /* .featured .card .card .card styles */
}
```

### Kann keine Pseudoelemente darstellen

Der `&`-Selektor ist gleichwertig mit dem {{cssxref(":is()")}}-Selektor und hat die gleiche Einschränkung, dass er keine Pseudoelemente darstellen kann.

Zum Beispiel wird mit der folgenden Stilregel kein generierter Inhalt rot gestylt, selbst wenn er in `<div class="important">` verschachtelt ist, weil `.important :is(.foo::before)` nichts erfassen kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules), deren Eigenschaften implizit in einem `&`-Selektor eingeschlossen sind. Zum Beispiel wird mit der folgenden Regel kein generierter Inhalt rot gestylt, auch nicht auf einem kleinen Bildschirm, weil die Eigenschaft `color: red` implizit in einem `&`-Selektor eingeschlossen ist, der in diesem Fall `:is(.foo::before)` ist.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Beide der folgenden Beispiele erzeugen das gleiche Ergebnis. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&`-Nesting-Selektor.

### Verwendung normaler CSS-Stile

Dieses Beispiel verwendet normale CSS-Stilregeln.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### Ergebnis

{{EmbedLiveSample('Original_CSS_styles','100%','65')}}

### Verwendung von `&` in verschachtelten CSS-Stilen

Dieses Beispiel verwendet verschachtelte CSS-Stilregeln.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Nested_CSS_styles','100%','65')}}

### Verwendung von `&` außerhalb der verschachtelten Regel

Wenn es nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&`-Nesting-Selektor die [Scope-Wurzel](/de/docs/Web/CSS/Reference/Selectors/:scope).

```html
<p>Hover over the output box to change document's background color.</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### Ergebnis

In diesem Fall gelten alle Stile für das [Dokument](/de/docs/Web/API/Document).

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting/Using)
- [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
