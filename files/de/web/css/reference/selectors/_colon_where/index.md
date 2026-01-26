---
title: :where()
slug: Web/CSS/Reference/Selectors/:where
l10n:
  sourceCommit: 235f91c4deeb3a62492fdc82565afc56c11ec153
---

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element aus, das durch einen der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{cssxref(":is()")}} besteht darin, dass `:where()` immer eine [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten annimmt.

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

Die `:where()` Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommata getrennte Liste von einem oder mehreren Selektoren als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Nachsichtige Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list).

In CSS, wenn eine Selektorliste verwendet wird und einer der Selektoren ungültig ist, wird die gesamte Liste als ungültig betrachtet. Bei der Verwendung von `:is()` oder `:where()` wird statt der gesamten Liste von Selektoren, wenn einer nicht analysiert werden kann, der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird immer noch korrekt analysiert und `:valid` auch in Browsern gefunden, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert und illustriert den Unterschied zwischen `:where()` und `:is()`.

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, ein Aside und einen Footer enthalten. Sie unterscheiden sich durch die Klassen, mit denen die Kindelemente markiert werden.

Um die Auswahl von Links zu gruppieren und dabei die `is-styling` und `where-styling` Stile unterschiedlich zu halten, _könnten_ wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was aber, wenn wir später die Farbe von Links in den Footern mit einem zusammengesetzten Selektor ändern möchten, der aus Selektoren mit geringer Spezifität besteht?

```css
footer a {
  color: blue;
}
```

Dies funktioniert nicht für die roten Links, weil die Selektoren innerhalb von `:is()` zur Spezifität des Gesamtselektors beitragen und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Jedoch haben Selektoren innerhalb von `:where()` eine Spezifität von 0, sodass der orangefarbene Footer-Link durch unseren nur auf Typen basierenden zusammengesetzten Selektor überschrieben wird.

> [!NOTE]
> Sie finden dieses Beispiel auch auf GitHub; siehe [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":is()")}}
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Webkomponenten](/de/docs/Web/API/Web_components)
- [Nachsichtige Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) via csswg.org.
