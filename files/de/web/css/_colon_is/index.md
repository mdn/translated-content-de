---
title: ":is()"
slug: Web/CSS/:is
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:is()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klassen-Funktion](/de/docs/Web/CSS/Pseudo-classes) nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann. Dies ist nützlich, um große Selektoren in einer kompakteren Form zu schreiben.

> [!NOTE]
> Ursprünglich als `:matches()` (und `:any()`) bezeichnet, wurde dieser Selektor in [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) in `:is()` umbenannt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-is.html", "tabbed-shorter")}}

## Syntax

Die `:is()`-Pseudo-Klasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf keine [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### Unterschied zwischen :is() und :where()

Der Unterschied zwischen den beiden ist, dass `:is()` zur Spezifität des gesamten Selektors beiträgt (es übernimmt die Spezifität seines spezifischsten Arguments), während [`:where()`](/de/docs/Web/CSS/:where) einen Spezifitätswert von 0 hat. Dies wird durch das [Beispiel auf der `:where()`-Referenzseite](/de/docs/Web/CSS/:where#examples) demonstriert.

### Fehlerverzeihende Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend für eine [fehlerverzeihende Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS wird bei der Verwendung einer Selektorliste die gesamte Liste als ungültig betrachtet, wenn einer der Selektoren ungültig ist. Bei der Verwendung von `:is()` oder `:where()` wird jedoch, anstatt die gesamte Liste zu deaktivieren, der inkorrekte oder nicht unterstützte Selektor ignoriert und die anderen werden verwendet.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Wird korrekt analysiert und wird `:valid` selbst in Browsern abgleichen, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vereinfachung von Listenselektoren

Die `:is()`-Pseudo-Klasse kann CSS-Selektoren erheblich vereinfachen. Zum Beispiel:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

Kann durch Folgendes ersetzt werden:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Vereinfachung von Abschnittsselektoren

Die `:is()`-Pseudo-Klasse ist besonders nützlich, wenn es um HTML-[Abschnitte und Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) geht. Da {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}} und {{HTMLElement("nav")}} oft zusammen verschachtelt sind, kann es ohne `:is()` schwierig sein, sie einheitlich zu stylen.

Beispielsweise kann das Styling aller {{HTMLElement("Heading_Elements", "h1")}}-Elemente in unterschiedlichen Tiefen ohne `:is()` sehr kompliziert werden:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}

/* Level 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* Level 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}

/* Level 3 */
/* don't even think about it! */
```

Mit `:is()` ist es jedoch viel einfacher:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### :is() wählt keine Pseudo-Elemente aus

Die `:is()`-Pseudo-Klasse wählt keine Pseudo-Elemente aus. Also statt:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

oder:

```css example-bad
:is(some-element::before, some-element::after) {
  display: block;
}
```

verwenden Sie:

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":where", ":where()")}} - Ähnlich wie `:is()`, aber mit einer [Spezifizität](/de/docs/Web/CSS/Specificity) von 0.
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [Web Components](/de/docs/Web/API/Web_components)
