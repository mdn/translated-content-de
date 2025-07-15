---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der CSS **`&` nesting selector** legt explizit die Beziehung zwischen übergeordneten und untergeordneten Regeln beim Verwenden von [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) fest. Er macht die selektierten verschachtelten Kindregeln _relativ zum übergeordneten Element_. Ohne den `&` nesting selector selektiert die Kindregel-Selektor Kinderlemente. Die Kindregel-Selektoren haben dasselbe [Spezifitätsgewicht](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity), als ob sie innerhalb von {{cssxref(":is", ":is()")}} wären.

> [!NOTE]
> _Kindregel_ bedeutet nicht _Kindelement-Selektor_. Eine Kindregel kann das übergeordnete Element oder Kindelemente anvisieren, abhängig von der Verwendung des `&` nesting selectors.

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&` nesting selector die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&` nesting selector und Leerzeichen

Betrachten Sie den folgenden Code, in dem das Nesting _ohne_ den `&` nesting selector erfolgt.

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

Wenn die verschachtelte Regel an die übergeordnete Regel angehängt werden muss (ohne Leerzeichen), z. B. bei Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder der Erstellung von [kombinierten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&` nesting selector unmittelbar vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, indem wir Stile bereitstellen, die jederzeit angewendet werden, und auch einige Stile verschachteln, die nur bei Hover angewendet werden sollen. Wenn der `&` nesting selector nicht enthalten ist, wird ein Leerzeichen hinzugefügt, und wir erhalten ein Regelset, das die verschachtelten Stile auf jeden _gehoverten Nachkommen des übergeordneten Regel-Selektors_ anwendet. Dies ist jedoch nicht das, was wir wollen.

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

Mit dem `&` nesting selector ohne Leerzeichen werden die durch die übergeordnete Regel übereinstimmenden Elemente beim Hover gestylt.

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

## Anhängen des `&` nesting selector

Der `&` nesting selector kann auch angehängt werden, um den Kontext der Regeln umzukehren.

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

Der `&` nesting selector kann mehrfach platziert werden:

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

Beide der folgenden Beispiele erzeugen dasselbe Ergebnis. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&` nesting selector.

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

### Verwendung von `&` außerhalb der verschachtelten Regel

Wenn er nicht in einer verschachtelten Stilregel verwendet wird, repräsentiert der `&` nesting selector die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

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
