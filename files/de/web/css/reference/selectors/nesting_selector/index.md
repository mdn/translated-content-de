---
title: "&-Verschachtelungsselektor"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 5249290f5d1191482d679f74ee0efdcc108ead9c
---

Der CSS-**`&`-Verschachtelungsselektor** gibt bei der Verwendung von [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) explizit die Beziehung zwischen übergeordneten und untergeordneten Regeln an. Er macht die Selektoren der verschachtelten untergeordneten Regel _relativ zum übergeordneten Element_. Ohne den `&`-Verschachtelungsselektor wählt der Selektor der untergeordneten Regel untergeordnete Elemente aus. Die Selektoren der untergeordneten Regel haben dieselbe [Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) wie innerhalb von {{cssxref(":is()")}}.

> [!NOTE]
> _Untergeordnete Regel_ bedeutet nicht _Selektor für untergeordnete Elemente_. Eine untergeordnete Regel kann abhängig von der Verwendung des `&`-Verschachtelungsselektors das übergeordnete Element oder untergeordnete Elemente adressieren.

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, stellt der `&`-Verschachtelungsselektor die [Scope-Wurzel](/de/docs/Web/CSS/Reference/Selectors/:scope) dar.

## Syntax

```css-nolint
/* Nested directly — adds whitespace (descendant) */
parentRule {
  & childRule { }
}

/* Attached to parent — no whitespace (e.g., pseudo-class, compound selector) */
parentRule {
  &:pseudo-class { }
}

/* Reversed context — & placed after another selector */
parentRule {
  otherRule & { }
}
```

## Beschreibung

### `&`-Verschachtelungsselektor und Leerraum

Betrachten Sie den folgenden Code, bei dem die Verschachtelung _ohne_ den `&`-Verschachtelungsselektor erfolgt.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren parst, fügt er automatisch Leerraum zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die entsprechenden nicht verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel ohne Leerraum an die übergeordnete Regel angefügt werden muss, etwa bei der Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder beim Erstellen von [zusammengesetzten Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector), muss der `&`-Verschachtelungsselektor unmittelbar vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element formatieren möchten, indem Stile bereitgestellt werden, die jederzeit angewendet werden, und zusätzlich einige Stile verschachtelt werden, die nur beim Überfahren mit der Maus angewendet werden. Wenn der `&`-Verschachtelungsselektor nicht enthalten ist, wird Leerraum hinzugefügt, und wir erhalten ein Regelwerk, das die verschachtelten Stile auf jeden _überfahrenen Nachfahren des Selektors der übergeordneten Regel_ anwendet. Dies ist jedoch nicht das gewünschte Ergebnis.

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

Wenn der `&`-Verschachtelungsselektor ohne Leerraum hinzugefügt wird, werden die von der übergeordneten Regel gefundenen Elemente beim Überfahren mit der Maus formatiert.

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

### Anhängen des `&`-Verschachtelungsselektors

Der `&`-Verschachtelungsselektor kann auch angehängt werden, um den Kontext der Regeln umzukehren.

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

Der `&`-Verschachtelungsselektor kann mehrfach platziert werden:

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

Der `&`-Selektor entspricht dem {{cssxref(":is()")}}-Selektor und unterliegt derselben Einschränkung, dass er keine Pseudoelemente darstellen kann.

Beispielsweise wird mit der folgenden Stilregel kein generierter Inhalt rot formatiert, selbst wenn er in `<div class="important">` verschachtelt ist, da `.important :is(.foo::before)` nichts finden kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules), deren Eigenschaften implizit in einen `&`-Selektor eingeschlossen werden. Mit der folgenden Regel wird beispielsweise kein generierter Inhalt rot formatiert, selbst auf einem kleinen Bildschirm, da die Eigenschaft `color: red` implizit in einen `&`-Selektor eingeschlossen wird, der in diesem Fall `:is(.foo::before)` ist.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Die folgenden beiden Beispiele erzeugen dieselbe Ausgabe. Das erste verwendet normale CSS-Stile und das zweite den `&`-Verschachtelungsselektor.

### Verwendung normaler CSS-Stile

Dieses Beispiel verwendet normales CSS-Styling.

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

Dieses Beispiel verwendet verschachteltes CSS-Styling.

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

### Verwendung von `&` außerhalb einer verschachtelten Regel

Wenn `&` nicht in einer verschachtelten Stilregel verwendet wird, stellt es die [Scope-Wurzel](/de/docs/Web/CSS/Reference/Selectors/:scope) dar. In diesem Fall gelten alle Stile für das [Dokument](/de/docs/Web/API/Document).

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

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)-Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul
