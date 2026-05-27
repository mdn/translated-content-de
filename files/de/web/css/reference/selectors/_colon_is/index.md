---
title: "`:is()` CSS-Pseudoklasse"
short-title: :is()
slug: Web/CSS/Reference/Selectors/:is
l10n:
  sourceCommit: 2c298f271e4f711517bff2a75611eb16fe98143f
---

Die **`:is()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion nimmt eine Selektor-Liste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann. Dies ist nützlich, um große Selektoren in kompakterer Form zu schreiben.

> [!NOTE]
> Ursprünglich `:matches()` (und `:any()`) genannt, wurde dieser Selektor in `:is()` umbenannt in [CSSWG-Problem #3258](https://github.com/w3c/csswg-drafts/issues/3258).

{{InteractiveExample("CSS Demo: :is", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

:is(ol, ul, menu:unsupported) :is(ol, ul) {
  color: green;
}

:is(ol, ul) :is(ol, ul) ol {
  list-style-type: lower-greek;
  color: chocolate;
}
```

```html interactive-example
<ol>
  <li>Saturn</li>
  <li>
    <ul>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ul>
  </li>
  <li>Uranus</li>
  <li>
    <ol>
      <li>Titania</li>
      <li>Oberon</li>
    </ol>
  </li>
</ol>
```

## Syntax

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### Parameter

Die `:is()`-Pseudoklasse erfordert eine [Selektor-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine kommagetrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Unterschied zwischen :is() und :where()

Der Unterschied zwischen den beiden besteht darin, dass `:is()` zur Spezifität des Gesamtselektors beiträgt (es nimmt die Spezifität seines spezifischsten Arguments an), während [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) einen Spezifitätswert von 0 hat. Dies wird durch das [Beispiel auf der `:where()`-Referenzseite](/de/docs/Web/CSS/Reference/Selectors/:where#examples) veranschaulicht.

### Verzeihende Selektor-Parsierung

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [verzeihende Selektor-Liste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektor-Liste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig angesehen. Bei Verwendung von `:is()` oder `:where()` wird, anstatt die gesamte Liste der Selektoren als ungültig anzusehen, wenn einer nicht geparst werden kann, der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt geparst und `:valid` matchen, auch in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern, die `:unsupported` nicht unterstützen, ignoriert wird, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vereinfachung von Listen-Selektoren

Die `:is()`-Pseudoklasse kann Ihre CSS-Selektoren erheblich vereinfachen. Zum Beispiel, nehmen Sie folgendes CSS:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,
ol ul ul,
ol menu ul,
ol ol menu,
ol ul menu,
ol menu menu,
ul ol ul,
ul ul ul,
ul menu ul,
ul ol menu,
ul ul menu,
ul menu menu,
menu ol ul,
menu ul ul,
menu menu ul,
menu ol menu,
menu ul menu,
menu menu menu {
  list-style-type: square;
}
```

Sie können es durch Folgendes ersetzen:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu) :is(ol, ul, menu) :is(ul, menu) {
  list-style-type: square;
}
```

### Vereinfachung von Abschnitts-Selektoren

Die `:is()`-Pseudoklasse ist besonders nützlich, wenn es um HTML [Abschnitte und Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) geht. Da {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, und {{HTMLElement("nav")}} häufig zusammen verschachtelt sind, kann es ohne `:is()` schwierig sein, sie einheitlich zu stylen.

Zum Beispiel, ohne `:is()`, könnte das Stylen aller {{HTMLElement("Heading_Elements", "h1")}}-Elemente in verschiedenen Tiefen sehr kompliziert werden:

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

### :is() wählt keine Pseudoelemente aus

Die `:is()`-Pseudoklasse selektiert keine Pseudoelemente. Anstatt dies:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

oder dies:

```css example-bad
:is(some-element::before, some-element::after) {
  display: block;
}
```

tun Sie stattdessen dies:

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

- {{cssxref(":where()")}} - Wie `:is()`, aber mit einer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) von 0.
- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Web-Komponenten](/de/docs/Web/API/Web_components)
