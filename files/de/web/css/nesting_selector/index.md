---
title: "& Verschachtelungsselektor"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: cae447a47784a9f899c4879ab8f9ff9a94ddd46c
---

Der CSS **`&` Verschachtelungsselektor** gibt explizit die Beziehung zwischen Eltern- und Kindregeln an, wenn Sie [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verwenden. Er macht die verschachtelten Kindregel-Selektoren _relativ zum Elternelement_. Ohne den `&` Verschachtelungsselektor wählen die Kindregel-Selektoren Kindelemente aus. Die Kindregel-Selektoren haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) wie innerhalb von {{cssxref(":is", ":is()")}}.

> [!NOTE]
> _Kindregel_ bedeutet nicht _Kindelement-Selektor_. Eine Kindregel kann das Elternelement oder Kindelemente anvisieren, abhängig von der Verwendung des `&` Verschachtelungsselektors.

Wird er nicht in einer verschachtelten Stilregel verwendet, repräsentiert der `&` Verschachtelungsselektor die [Bereichs-Wurzel](/de/docs/Web/CSS/:scope).

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&` Verschachtelungsselektor und Leerzeichen

Betrachten Sie den folgenden Code, bei dem die Verschachtelung _ohne_ den `&` Verschachtelungsselektor durchgeführt wird.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}
```

Wenn der Browser die verschachtelten Selektoren analysiert, fügt er automatisch Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorregel zu erstellen. Der folgende Code zeigt die äquivalenten nicht verschachtelten Regeln:

```css
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

Muss die verschachtelte Regel an die Elternregel angehängt werden (ohne Leerzeichen), beispielsweise bei der Verwendung einer {{cssxref('Pseudo-classes', 'Pseudoklasse')}} oder der Erstellung von [zusammengesetzten Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&` Verschachtelungsselektor direkt vorangestellt werden, um den gewünschten Effekt zu erzielen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, indem wir Stile anwenden, die jederzeit gelten sollen, und auch einige Stile, die nur beim Hover angewendet werden sollen, verschachteln. Wenn der `&` Verschachtelungsselektor nicht enthalten ist, wird ein Leerzeichen hinzugefügt, und wir erhalten einen Regelsatz, der die verschachtelten Stile auf einen beliebigen _gehoverten Nachkommen des Elternelementselektors_ anwendet. Dies ist jedoch nicht das, was wir wollen.

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

Mit dem `&` Verschachtelungsselektor, der ohne Leerzeichen hinzugefügt wird, werden die durch die Elternregel übereinstimmenden Elemente bei Hover gestylt.

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

### Anhängen des `&` Verschachtelungsselektors

Der `&` Verschachtelungsselektor kann auch angehängt werden, um den Kontext der Regeln umzukehren.

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

Der `&` Verschachtelungsselektor kann mehrfach platziert werden:

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

Der `&` Selektor ist dem {{cssxref(":is", ":is()")}} Selektor gleichwertig und hat die gleiche Einschränkung, dass er keine Pseudo-Elemente darstellen kann.

Zum Beispiel wird mit der folgenden Stilregel kein generierter Inhalt rot gestylt, selbst wenn er in `<div class="important">` verschachtelt ist, da `.important :is(.foo::before)` nichts zuordnen kann.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Diese Einschränkung gilt auch für [verschachtelte At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules), deren Eigenschaften implizit in einen `&` Selektor eingeschlossen sind. Zum Beispiel wird mit der folgenden Regel kein generierter Inhalt rot gestylt, selbst auf einem kleinen Bildschirm, da die `color: red` Eigenschaft implizit in einen `&` Selektor eingeschlossen ist, was in diesem Fall `:is(.foo::before)` ist.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Beispiele

Beide der folgenden Beispiele erzeugen die gleiche Ausgabe. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&` Verschachtelungsselektor.

### Verwendung von normalen CSS-Stilen

Dieses Beispiel verwendet normale CSS-Formatierung.

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

Dieses Beispiel verwendet verschachtelte CSS-Formatierung.

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

Wird er nicht in einer verschachtelten Stilregel verwendet, repräsentiert der `&` Verschachtelungsselektor die [Bereichs-Wurzel](/de/docs/Web/CSS/:scope).

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

In diesem Fall gelten alle Stilregeln für das [Dokument](/de/docs/Web/API/Document).

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
