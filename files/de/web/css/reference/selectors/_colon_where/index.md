---
title: :where()
slug: Web/CSS/Reference/Selectors/:where
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das von einem der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{cssxref(":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

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

Die `:where()`-Pseudo-Klasse erfordert eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Nachsichtige Selektoranalyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [nachsichtige Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektorliste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig angesehen. Bei der Verwendung von `:is()` oder `:where()` wird statt die gesamte Selektorliste als ungültig zu betrachten, wenn einer nicht analysiert werden kann, der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird immer noch korrekt analysiert und passt zu `:valid`, selbst in Browsern, die `:unsupported` nicht unterstützen, während:

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Seite und eine Fußzeile enthalten. Sie unterscheiden sich durch die Klassen, die zur Kennzeichnung der Kindelemente verwendet werden.

Um die Auswahl der Links zu gruppieren, während die `is-styling` und `where-styling` Stile getrennt bleiben, _könnten_ wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was aber, wenn wir später die Farbe der Links in den Fußzeilen mit einem zusammengesetzten Selektor aus niedrig spezifischen Typselektoren überschreiben wollen?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des allgemeinen Selektors beitragen, und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Jedoch haben Selektoren innerhalb von `:where()` eine Spezifität von 0, sodass der orangefarbene Footer-Link durch unseren typbasierten zusammengesetzten Selektor überschrieben wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden; siehe [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":is()")}}
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Web Components](/de/docs/Web/API/Web_components)
