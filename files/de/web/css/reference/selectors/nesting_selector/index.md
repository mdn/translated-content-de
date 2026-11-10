---
title: "& Verschachtelungsselektor"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Der CSS-**Verschachtelungsselektor `&`** gibt bei der Verwendung von [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) ausdrücklich die Beziehung zwischen übergeordneten und untergeordneten Regeln an. Er macht die Selektoren der verschachtelten untergeordneten Regel _relativ zum übergeordneten Element_. Ohne den Verschachtelungsselektor `&` wählt der Selektor der untergeordneten Regel untergeordnete Elemente aus. Die Selektoren der untergeordneten Regel haben dieselbe [Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity), als stünden sie innerhalb von {{cssxref(":is()")}}.

> [!NOTE]
> _Untergeordnete Regel_ bedeutet nicht _Selektor für untergeordnete Elemente_. Je nach Verwendung des Verschachtelungsselektors `&` kann eine untergeordnete Regel das übergeordnete Element oder untergeordnete Elemente auswählen.

Wird der Verschachtelungsselektor `&` nicht in einer verschachtelten Stilregel verwendet, steht er für die [Gültigkeitsbereichswurzel](/de/docs/Web/CSS/Reference/Selectors/:scope).

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

### Verschachtelungsselektor `&` und Leerzeichen

Betrachten Sie den folgenden Code, in dem _ohne_ den Verschachtelungsselektor `&` verschachtelt wird.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Beim Verarbeiten der verschachtelten Selektoren fügt der Browser automatisch ein Leerzeichen zwischen ihnen ein, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die entsprechenden nicht verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Wenn die verschachtelte Regel ohne Leerzeichen direkt an die übergeordnete Regel angefügt werden muss, etwa bei der Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder beim Erstellen [zusammengesetzter Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector), muss der Verschachtelungsselektor `&` unmittelbar vorangestellt werden.

Betrachten Sie ein Beispiel, in dem ein Element sowohl dauerhaft geltende Stile als auch verschachtelte Stile erhalten soll, die nur beim Darüberfahren mit dem Mauszeiger gelten. Ohne den Verschachtelungsselektor `&` wird ein Leerzeichen eingefügt. Dadurch entsteht eine Regel, die die verschachtelten Stile auf jedes _untergeordnete Element anwendet, über dem sich der Mauszeiger befindet_. Das ist jedoch nicht beabsichtigt.

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

Wird der Verschachtelungsselektor `&` ohne Leerzeichen hinzugefügt, erhalten die von der übergeordneten Regel ausgewählten Elemente die Stile, wenn sich der Mauszeiger über ihnen befindet.

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

### Den Verschachtelungsselektor `&` anhängen

Der Verschachtelungsselektor `&` kann auch angehängt werden, um den Kontext der Regeln umzukehren.

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

Der Verschachtelungsselektor `&` kann mehrfach verwendet werden:

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

### Kann keine Pseudoelemente repräsentieren

Der Selektor `&` entspricht dem Selektor {{cssxref(":is()")}} und unterliegt derselben Einschränkung: Er kann keine Pseudoelemente repräsentieren.

Bei der folgenden Stilregel wird beispielsweise kein generierter Inhalt rot dargestellt, selbst wenn er in `<div class="important">` verschachtelt ist, da `.important :is(.foo::before)` auf nichts zutreffen kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules), deren Eigenschaften implizit in einen `&`-Selektor eingeschlossen werden. Bei der folgenden Regel wird beispielsweise selbst auf einem kleinen Bildschirm kein generierter Inhalt rot dargestellt, da die Eigenschaft `color: red` implizit in einen `&`-Selektor eingeschlossen wird. Dieser entspricht hier `:is(.foo::before)`.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Die beiden folgenden Beispiele erzeugen dieselbe Ausgabe. Das erste verwendet normale CSS-Stile, das zweite den Verschachtelungsselektor `&`.

### Normale CSS-Stile verwenden

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

{{EmbedLiveSample('using_normal_css_styles','100%','65')}}

### `&` in verschachtelten CSS-Stilen verwenden

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

{{EmbedLiveSample('using_in_nested_css_styles','100%','65')}}

### `&` außerhalb einer verschachtelten Regel verwenden

Wird `&` nicht in einer verschachtelten Stilregel verwendet, steht es für die [Gültigkeitsbereichswurzel](/de/docs/Web/CSS/Reference/Selectors/:scope). In diesem Fall gelten alle Stile für das [Dokument](/de/docs/Web/API/Document).

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

{{EmbedLiveSample('using_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verschachtelung verwenden](/de/docs/Web/CSS/Guides/Nesting/Using)
- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
