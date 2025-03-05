---
title: ":where()"
slug: Web/CSS/:where
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das durch einen der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

{{InteractiveExample("CSS Demo: :where", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

/* Not applied to ol, because of lower specificity */
/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
:where(ol, ul, menu:unsupported) :where(ol, ul) {
  color: green;
}

:where(ol, ul) :where(ol, ul) ol {
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

Die `:where()` Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### Nachsichtige Selektorensyntax

Die Spezifikation definiert `:is()` und `:where()` so, dass sie eine [nachsichtige Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) akzeptieren.

In CSS gilt eine Selektorliste als ungültig, wenn einer der Selektoren ungültig ist. Bei der Verwendung von `:is()` oder `:where()` wird jedoch nicht die gesamte Liste ungültig, wenn einer nicht geparst werden kann. Der falsche oder nicht unterstützte Selektor wird ignoriert, und die anderen werden verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird trotzdem korrekt geparst und `:valid` wird übereinstimmen, selbst in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert und veranschaulicht auch den Unterschied zwischen `:where()` und `:is()`.

Betrachten Sie das folgende HTML:

```html
<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>

<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>
```

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Nebenbemerkung und einen Footer enthalten. Sie unterscheiden sich durch die Klassen, die verwendet werden, um die Kindelemente zu kennzeichnen.

Um die Auswahl von Links zu gruppieren und dabei die `is-styling`- und `where-styling`-Stile zu unterscheiden, könnten wir `:is()` oder `:where()` folgendermaßen verwenden:

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

Aber was, wenn wir später die Farbe der Links in den Footern mit einem zusammengesetzten Selektor aus niedrig-spezifischen Typselektoren überschreiben möchten?

```css
footer a {
  color: blue;
}
```

Das wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors beitragen, und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Jedoch haben Selektoren innerhalb von `:where()` eine Spezifität von 0, sodass der orangefarbene Footer-Link von unserem nur-typischen zusammengesetzten Selektor überschrieben wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden; siehe [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":is", ":is()")}}
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [Web Components](/de/docs/Web/API/Web_components)
