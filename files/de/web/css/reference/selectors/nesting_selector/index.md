---
title: "&-Verschachtelungsselektor"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Der CSS **`&`-Verschachtelungsselektor** gibt die Beziehung zwischen Eltern- und Kindregeln bei der Verwendung von [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) explizit an. Er macht die verschachtelten Kindregelsselektoren relativ zum Elternelement. Ohne den `&`-Verschachtelungsselektor würden die Kindregelsselektoren Kindelemente auswählen. Die Kindregelsselektoren haben das gleiche [Spezifitätsgewicht](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) wie wenn sie sich innerhalb von {{cssxref(":is", ":is()")}} befänden.

> [!NOTE]
> _Kindregel_ bedeutet nicht _Kindelementselektor_. Eine Kindregel kann sowohl das Elternelement als auch Kindelemente je nach Verwendung des `&`-Verschachtelungsselektors anvisieren.

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, stellt der `&`-Verschachtelungsselektor die [Scoping-Root](/de/docs/Web/CSS/Reference/Selectors/:scope) dar.

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&`-Verschachtelungsselektor und Leerzeichen

Betrachten Sie den folgenden Code, bei dem die Verschachtelung _ohne_ den `&`-Verschachtelungsselektor erfolgt.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren parst, fügt er automatisch Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die äquivalenten nicht-verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel mit (ohne Leerzeichen) der Elternregel angehängt werden muss, wie beispielsweise bei der Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder beim Erstellen von [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&`-Verschachtelungsselektor unmittelbar vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element gestalten möchten, wobei die Stile jederzeit angewendet werden, und auch einige Stile verschachteln, die nur bei Hover angewendet werden sollen. Wenn der `&`-Verschachtelungsselektor nicht enthalten ist, werden Leerzeichen hinzugefügt, und wir enden mit einem Regelsatz, der die verschachtelten Stile auf jeden _gehoverten Nachkommen des Elternelements_ anwendet. Dies ist jedoch nicht das, was wir wollen.

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

Mit dem `&`-Verschachtelungsselektor, der ohne Leerzeichen hinzugefügt wird, werden die vom Elternelement übereinstimmenden Elemente beim Hover gestaltet.

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

Der `&`-Selektor ist äquivalent zum {{cssxref(":is", ":is()")}}-Selektor und hat die gleiche Einschränkung, dass er keine Pseudoelemente darstellen kann.

Zum Beispiel wird mit der folgenden Stilregel kein generierter Inhalt rot gestaltet, selbst wenn er in `<div class="important">` verschachtelt ist, da `.important :is(.foo::before)` nichts übereinstimmen kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte @-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules), deren Eigenschaften implizit in einem `&`-Selektor eingeschlossen sind. Zum Beispiel wird mit der folgenden Regel kein generierter Inhalt rot gestaltet, selbst auf einem kleinen Bildschirm, da die `color: red`-Eigenschaft implizit in einem `&`-Selektor eingeschlossen ist, der in diesem Fall `:is(.foo::before)` ist.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Beide der folgenden Beispiele erzeugen die gleiche Ausgabe. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&`-Verschachtelungsselektor.

### Verwendung normaler CSS-Stile

Dieses Beispiel verwendet normale CSS-Stilgestaltung.

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

Dieses Beispiel verwendet verschachtelte CSS-Stilgestaltung.

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

### Verwendung von `&` außerhalb verschachtelter Regeln

Wenn nicht in einer verschachtelten Stilregel verwendet, stellt der `&`-Verschachtelungsselektor die [Scoping-Root](/de/docs/Web/CSS/Reference/Selectors/:scope) dar.

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

In diesem Fall werden alle Stile auf das [Dokument](/de/docs/Web/API/Document) angewendet.

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
