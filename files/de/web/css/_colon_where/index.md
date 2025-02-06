---
title: :where()
slug: Web/CSS/:where
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)-Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

## Syntax

Die `:where()`-Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf keine [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### Tolerante Selector-Parsing

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend für eine [tolerante Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS wird bei Verwendung einer Selektorliste die gesamte Liste als ungültig betrachtet, wenn einer der Selektoren ungültig ist. Bei Verwendung von `:is()` oder `:where()` wird anstelle der gesamten Liste ungültiger Selektoren nur der falsche oder nicht unterstützte Selektor ignoriert, während die anderen verwendet werden.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt geparst und stimmt mit `:valid` überein, selbst in Browsern, die `:unsupported` nicht unterstützen, wohingegen:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern, die `:unsupported` nicht unterstützen, ignoriert wird, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich zwischen :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert, und illustriert außerdem den Unterschied zwischen `:where()` und `:is()`.

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Randnotiz und einen Footer enthalten. Sie unterscheiden sich durch die Klassen, die verwendet werden, um die Kindelemente zu markieren.

Um die Auswahl von Links zu gruppieren, während die Stile `is-styling` und `where-styling` getrennt bleiben, könnten wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was aber, wenn wir später die Farbe der Links in den Fußzeilen mit einem zusammengesetzten Selektor aus Selektoren mit niedriger Spezifität ändern wollen?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des Gesamtsselectors beitragen und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Selektoren innerhalb von `:where()` haben jedoch Spezifität 0, daher wird der orangefarbene Footer-Link durch unseren ausschließlich auf Typen basierenden zusammengesetzten Selektor überschrieben.

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
- [Web-Komponenten](/de/docs/Web/API/Web_components)
