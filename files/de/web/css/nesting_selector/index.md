---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: c6b772b874485e67bb8cf8eff8c1874deb2e66c3
---

{{CSSRef}}

Der CSS **`&` Nesting-Selektor** gibt explizit das Verhältnis zwischen Eltern- und Kindregeln an, wenn [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) verwendet wird. Er macht die verschachtelten Kindregel-Selektoren _relativ zum Elternelement_. Ohne den `&` Nesting-Selektor wählt der Kindregel-Selektor Kindelemente aus. Die Kindregel-Selektoren haben dasselbe [Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) Gewicht, als wären sie innerhalb von {{cssxref(":is", ":is()")}}.

> **Note:** _Kindregel_ bedeutet nicht _Kindelement-Selektor_. Eine Kindregel kann auf Elternelemente oder Kindelemente abzielen, abhängig von der Verwendung des `&` Nesting-Selektors.

Wird er in einer nicht verschachtelten Stilregel verwendet, repräsentiert der `&` Nesting-Selektor die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

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

Betrachten Sie den folgenden Code, bei dem das Verschachteln _ohne_ den `&` Nesting-Selektor erfolgt.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren analysiert, fügt er automatisch Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die entsprechenden nicht verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel an die übergeordnete Regel angehängt werden muss (ohne Leerzeichen), z.B. bei Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder beim Erstellen von [Compound-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&` Nesting-Selektor sofort vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, indem wir Stile anwenden, die jederzeit gelten, und auch einige Stile verschachteln, die nur bei Hover angewendet werden. Wenn der `&` Nesting-Selektor nicht enthalten ist, werden Leerzeichen hinzugefügt, und wir haben ein Regelset, das die verschachtelten Stile auf jeden _gehoverten Nachkommen des übergeordneten Regel-Selektors_ anwendet. Das ist jedoch nicht das, was wir wollen.

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

Mit dem `&` Nesting-Selektor ohne Leerzeichen werden die vom übergeordneten Regel-Selektor übereinstimmenden Elemente beim Schweben gestylt.

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

## Anhängen des `&` Nesting-Selektors

Der `&` Nesting-Selektor kann auch angehängt werden, um den Kontext der Regeln umzukehren.

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

Der `&` Nesting-Selektor kann mehrfach platziert werden:

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

## Beispiele

Beide der folgenden Beispiele führen zur gleichen Ausgabe. Das erste verwendet normale CSS-Stile und das zweite den `&` Nesting-Selektor.

### Verwendung normaler CSS-Stile

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

### Verwendung von `&` außerhalb einer verschachtelten Regel

Wird er in einer nicht verschachtelten Stilregel verwendet, repräsentiert der `&` Nesting-Selektor die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

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

- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
