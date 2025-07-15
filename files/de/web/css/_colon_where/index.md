---
title: :where()
slug: Web/CSS/:where
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das durch einen der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

{{InteractiveExample("CSS Demo: :where", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

/* Not applied to ol, because of lower specificity */
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

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### Parameter

Die `:where()` Pseudo-Klasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommata getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Fehlerverzeihende Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [fehlerverzeihende Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektorliste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig betrachtet. Wenn `:is()` oder `:where()` verwendet wird, wird anstatt die gesamte Liste von Selektoren als ungültig zu betrachten, wenn einer nicht analysiert werden kann, der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird immer noch korrekt analysiert und passt zu `:valid` auch in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern, die `:unsupported` nicht unterstützen, ignoriert wird, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert, und illustriert auch den Unterschied zwischen `:where()` und `:is()`.

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Randnotiz und eine Fußzeile enthalten. Sie unterscheiden sich durch die Klassen, die verwendet werden, um die Kindelemente zu markieren.

Um die Auswahl von Links zu gruppieren, während die `is-styling` und `where-styling` Stile unterscheidbar bleiben, _könnten_ wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was passiert jedoch, wenn wir später die Farbe von Links in den Fußzeilen mit einem zusammengesetzten Selektor aus Typselektoren mit niedriger Spezifität überschreiben möchten?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors zählen, und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Jedoch haben Selektoren innerhalb von `:where()` Spezifität 0, sodass der orangefarbene Fußzeilen-Link von unserem ausschließlich typbasierten zusammengesetzten Selektor überschrieben wird.

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
- [Web Komponenten](/de/docs/Web/API/Web_components)
