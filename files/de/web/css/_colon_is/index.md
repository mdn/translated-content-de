---
title: :is()
slug: Web/CSS/:is
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{CSSRef}}

Die **`:is()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann. Dies ist nützlich, um große Selektoren in einer kompakteren Form zu schreiben.

> [!NOTE]
> Ursprünglich `:matches()` (und `:any()`) genannt, wurde dieser Selektor in [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) in `:is()` umbenannt.

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

Die `:is()` Pseudo-Klasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommata getrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### Unterschied zwischen :is() und :where()

Der Unterschied zwischen den beiden besteht darin, dass `:is()` zur Spezifität des gesamten Selektors zählt (es nimmt die Spezifität seines spezifischsten Arguments an), während [`:where()`](/de/docs/Web/CSS/:where) einen Spezifitätswert von 0 hat. Dies wird durch das [Beispiel auf der `:where()` Referenzseite](/de/docs/Web/CSS/:where#examples) demonstriert.

### Tolerante Selektor-Parsen

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [tolerante Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektorliste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig betrachtet. Bei der Verwendung von `:is()` oder `:where()` wird, anstatt die gesamte Liste der Selektoren als ungültig zu betrachten, wenn ein Selektor nicht geparst werden kann, der fehlerhafte oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt geparst und passt zu `:valid`, selbst in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vereinfachung von Listenselektoren

Die `:is()` Pseudo-Klasse kann Ihre CSS-Selektoren erheblich vereinfachen. Zum Beispiel, nehmen Sie das folgende CSS:

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

Sie können es durch Folgendes ersetzen:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Vereinfachung von Abschnittsselektoren

Die `:is()` Pseudo-Klasse ist besonders nützlich, wenn man mit HTML [Abschnitten und Überschriften](/de/docs/Web/HTML/Element/Heading_Elements) arbeitet. Da {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, und {{HTMLElement("nav")}} häufig zusammen verschachtelt sind, kann es ohne `:is()` schwierig sein, sie so zu gestalten, dass sie zueinander passen.

Ohne `:is()` könnte das Styling aller {{HTMLElement("Heading_Elements", "h1")}} Elemente in unterschiedlichen Tiefen sehr kompliziert sein:

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

Mit `:is()` geht es jedoch viel einfacher:

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

Die `:is()` Pseudo-Klasse passt nicht zu Pseudoelementen. Stattdessen sollten Sie nicht dies tun:

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

sondern folgendes tun:

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

- {{CSSxRef(":where", ":where()")}} - Wie `:is()`, aber mit 0 [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [Webkomponenten](/de/docs/Web/API/Web_components)
