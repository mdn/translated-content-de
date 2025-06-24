---
title: "&-Verschachtelungsselektor"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Der CSS **`&`-Verschachtelungsselektor** gibt explizit die Beziehung zwischen Eltern- und Kindregeln beim Verwenden von [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) an. Er macht die verschachtelten Kindregel-Selektoren _relativ zum Elternelement_. Ohne den `&`-Verschachtelungsselektor wählen die Kindregel-Selektoren Kind-Elemente aus. Die Kindregel-Selektoren haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) wie wenn sie innerhalb von {{cssxref(":is", ":is()")}} wären.

> [!NOTE]
> Eine _Kindregel_ bedeutet nicht _Kind-Element-Selektor_. Eine Kindregel kann abhängig von der Verwendung des `&`-Verschachtelungsselektors das Elternelement oder Kind-Elemente anvisieren.

Wird er nicht in einer verschachtelten Stilregel verwendet, repräsentiert der `&`-Verschachtelungsselektor die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

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

Betrachten Sie den folgenden Code, bei dem das Verschachteln _ohne_ den `&`-Verschachtelungsselektor erfolgt.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren analysiert, fügt er zwischen den Selektoren automatisch Leerzeichen hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die äquivalenten nicht verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel an die Elternregel angefügt werden muss (ohne Leerzeichen), zum Beispiel bei Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder bei der Erstellung von [Kombinationsselektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&`-Verschachtelungsselektor direkt vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, indem wir Stile anwenden, die jederzeit aktiviert sind, und einige Stile verschachteln, die nur bei Hover angewendet werden. Wenn der `&`-Verschachtelungsselektor nicht enthalten ist, wird ein Leerzeichen hinzugefügt und wir erhalten einen Satz von Regeln, der die verschachtelten Stile auf jeden _gehoverten Nachfahren des Elternregel-Selektors_ anwendet. Das ist jedoch nicht das, was wir wollen.

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

Mit dem `&`-Verschachtelungsselektor, der ohne Leerzeichen hinzugefügt wird, werden die durch die Elternregel ausgewählten Elemente beim Hover gestylt.

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

## Anhängen des `&`-Verschachtelungsselektors

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

## Beispiele

Beide der folgenden Beispiele erzeugen die gleiche Ausgabe. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&`-Verschachtelungsselektor.

### Verwendung normaler CSS-Stile

Dieses Beispiel verwendet normale CSS-Stilgebung.

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

Wird er nicht in einer verschachtelten Stilregel verwendet, repräsentiert der `&`-Verschachtelungsselektor die [Scoping-Wurzel](/de/docs/Web/CSS/:scope).

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

- [Verwendung der CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
