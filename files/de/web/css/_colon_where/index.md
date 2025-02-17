---
title: ":where()"
slug: Web/CSS/:where
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklassenfunktion](/de/docs/Web/CSS/Pseudo-classes) nimmt eine Liste von Selektoren als Argument und wählt jedes Element aus, das durch einen der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

## Syntax

Die `:where()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf keine [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### Fehlerverzeihende Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` so, dass sie eine [fehlerverzeihende Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) akzeptieren.

In CSS gilt bei der Verwendung einer Selektorliste, dass die gesamte Liste als ungültig angesehen wird, wenn einer der Selektoren ungültig ist. Bei der Verwendung von `:is()` oder `:where()` wird jedoch, wenn ein Selektor nicht analysiert werden kann, der fehlerhafte oder nicht unterstützte Selektor ignoriert, während die anderen verwendet werden, anstatt die gesamte Liste als ungültig zu betrachten.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt analysiert und passt zu `:valid`, selbst in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert, und verdeutlicht auch den Unterschied zwischen `:where()` und `:is()`.

Folgender HTML-Code wird verwendet:

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Nebenbemerkung und einen Footer enthalten. Sie unterscheiden sich durch die Klassen, die verwendet werden, um die Kind-Elemente zu kennzeichnen.

Um die Auswahl von Links zu gruppieren und dabei die `is-styling`- und `where-styling`-Stile verschieden zu halten, könnten wir `:is()` oder `:where()` wie folgt verwenden:

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

Was ist jedoch, wenn wir später die Farbe der Links in den Footern mit einem zusammengesetzten Selektor aus Selektoren mit niedriger Spezifität überschreiben wollen?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors beitragen und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Selektoren innerhalb von `:where()` haben jedoch eine Spezifität von 0, sodass der orangefarbene Footer-Link durch unseren ausschließlich aus Typen bestehenden zusammengesetzten Selektor überschrieben wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden: [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":is", ":is()")}}
- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [Webkomponenten](/de/docs/Web/API/Web_components)
