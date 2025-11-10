---
title: "&-Nesting-Selektor"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der CSS **`&`-Nesting-Selektor** gibt explizit die Beziehung zwischen Eltern- und Kindregeln an, wenn [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) verwendet wird. Er sorgt dafür, dass die verschachtelten Kindregel-Selektoren relativ zum Elternelement gestaltet werden. Ohne den `&`-Nesting-Selektor wählen die Kindregel-Selektoren Kindelemente aus. Die Kindregel-Selektoren haben dasselbe [Spezifitäts](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)-Gewicht, als ob sie innerhalb von {{cssxref(":is", ":is()")}} wären.

> [!NOTE] > _Kindregel_ bedeutet nicht _Kindelement-Selektor_. Eine Kindregel kann das Elternelement oder Kindelemente abhängig von der Verwendung des `&`-Nesting-Selektors anvisieren.

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&`-Nesting-Selektor die [Scoping-Root](/de/docs/Web/CSS/Reference/Selectors/:scope).

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&` Nesting-Selektor und Leerzeichen

Betrachten Sie den folgenden Code, bei dem das Nesting _ohne_ den `&`-Nesting-Selektor erfolgt.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren analysiert, fügt er automatisch Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die entsprechenden nicht-verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel (ohne Leerzeichen) an die Elternregel angefügt werden muss, beispielsweise bei der Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder bei der Erstellung von [Kompositionsselektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector), muss der `&`-Nesting-Selektor unmittelbar vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, das immer gestylt sein soll, und einige Stile verschachteln, die nur bei Hover angewendet werden sollen. Wenn der `&`-Nesting-Selektor nicht enthalten ist, wird ein Leerzeichen hinzugefügt und wir erhalten ein Regelset, das die verschachtelten Stile auf jedes schwebende Nachkommenelement des Elternelement-Selektors anwendet. Dies ist jedoch nicht das, was wir möchten.

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

Mit dem hinzugefügten `&`-Nesting-Selektor ohne Leerzeichen werden die vom Elternelement-Selektor identifizierten Elemente beim Hover gestylt.

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

### Anfügen des `&`-Nesting-Selektors

Der `&`-Nesting-Selektor kann auch angefügt werden, um den Kontext der Regeln umzukehren.

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

### Kann keine Pseudo-Elemente darstellen

Der `&`-Selektor ist dem {{cssxref(":is", ":is()")}}-Selektor gleichwertig und hat die gleiche Einschränkung, dass er keine Pseudo-Elemente darstellen kann.

Zum Beispiel wird bei der folgenden Stilregel kein generierter Inhalt rot gefärbt, auch wenn er in `<div class="important">` verschachtelt ist, da `.important :is(.foo::before)` nichts treffen kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte At-Rules](/de/docs/Web/CSS/Guides/Nesting/At-rules), deren Eigenschaften implizit in einen `&`-Selektor eingewickelt sind. Zum Beispiel wird bei der folgenden Regel kein generierter Inhalt rot gefärbt, selbst auf einem kleinen Bildschirm, da die `color: red`-Eigenschaft implizit in einen `&`-Selektor eingewickelt ist, der in diesem Fall `:is(.foo::before)` ist.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Beide der folgenden Beispiele produzieren dasselbe Ergebnis. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&`-Nesting-Selektor.

### Verwendung von normalen CSS-Stilen

Dieses Beispiel verwendet normale CSS-Stile.

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

Dieses Beispiel verwendet verschachtelte CSS-Stile.

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

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&`-Nesting-Selektor die [Scoping-Root](/de/docs/Web/CSS/Reference/Selectors/:scope).

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
