---
title: ":where()"
slug: Web/CSS/:where
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten annimmt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

## Syntax

Die `:where()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### Nachgiebige Selektorparsing

Die Spezifikation definiert `:is()` und `:where()` als akzeptierende [nachgiebige Selektorlisten](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektorliste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig angesehen. Bei Verwendung von `:is()` oder `:where()` wird anstelle der gesamten Liste von Selektoren, die ungültig ist, wenn ein Selektor nicht geparst werden kann, der fehlerhafte oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird dennoch korrekt geparst und stimmt mit `:valid` überein, selbst in Browsern, die `:unsupported` nicht unterstützen, wohingegen:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, auch wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert und illustriert auch den Unterschied zwischen `:where()` und `:is()`.

Nehmen Sie das folgende HTML:

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Randbemerkung und eine Fußzeile enthalten. Sie unterscheiden sich durch die Klassen, die zur Markierung der Kindelemente verwendet werden.

Um das Auswählen der Links darin einfacher, aber dennoch deutlich zu machen, könnten wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was ist jedoch, wenn wir später die Farbe der Links in den Fußzeilen mit einem einfachen Selektor überschreiben möchten?

```css
footer a {
  color: blue;
}
```

Dies wird nicht für die roten Links funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors beitragen und Klassenselektoren eine höhere Spezifität haben als Elementselektoren.

Selektoren innerhalb von `:where()` hingegen haben eine Spezifität von 0, sodass der orangefarbene Fußzeilenlink von unserem einfachen Selektor überschrieben wird.

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
- [Webkomponenten](/de/docs/Web/API/Web_components)
