---
title: :is()
slug: Web/CSS/:is
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die Funktion **`:is()`** der [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann. Dies ist nützlich, um große Selektoren in einer kompakteren Form zu schreiben.

> [!NOTE]
> Ursprünglich als `:matches()` (und `:any()`) bekannt, wurde dieser Selektor in [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) in `:is()` umbenannt.

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

Die `:is()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### Unterschied zwischen :is() und :where()

Der Unterschied zwischen den beiden besteht darin, dass `:is()` zur Spezifität des gesamten Selektors beiträgt (es nimmt die Spezifität seines spezifischsten Arguments an), während [`:where()`](/de/docs/Web/CSS/:where) einen Spezifitätswert von 0 hat. Dies wird im [Beispiel auf der `:where()` Referenzseite](/de/docs/Web/CSS/:where#examples) demonstriert.

### Verzeihende Selektor-Passung

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [verzeihende Selektor-Liste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS wird bei der Verwendung einer Selektorliste, wenn einer der Selektoren ungültig ist, die gesamte Liste als ungültig angesehen. Wenn `:is()` oder `:where()` verwendet wird, wird nicht die gesamte Liste von Selektoren als ungültig angesehen, wenn einer nicht geparst werden kann, stattdessen wird der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Wird auch in Browsern, die `:unsupported` nicht unterstützen, korrekt geparst und passt zu `:valid`, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern, die `:unsupported` nicht unterstützen, ignoriert wird, auch wenn sie `:valid` unterstützen.

## Beispiele

### Vereinfachung von Listenselektoren

Die `:is()`-Pseudoklasse kann Ihre CSS-Selektoren erheblich vereinfachen. Zum Beispiel nehmen Sie das folgende CSS:

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

Sie können es ersetzen durch:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Vereinfachung von Abschnittsselektoren

Die `:is()`-Pseudoklasse ist besonders nützlich bei der Arbeit mit HTML-[Abschnitten und Überschriften](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Da {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, und {{HTMLElement("nav")}} häufig zusammen verschachtelt sind, kann es schwierig sein, sie ohne `:is()` aufeinander abzustimmen.

Zum Beispiel, ohne `:is()`, könnte das Styling aller {{HTMLElement("Heading_Elements", "h1")}}-Elemente in verschiedenen Tiefen sehr kompliziert sein:

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

Die `:is()`-Pseudoklasse passt nicht zu Pseudoelementen. Also anstelle von:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

oder folgendem:

```css example-bad
:is(some-element::before, some-element::after) {
  display: block;
}
```

machen Sie stattdessen:

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
