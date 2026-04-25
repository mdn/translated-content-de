---
title: "`:where()` CSS-Pseudoklasse"
short-title: :where()
slug: Web/CSS/Reference/Selectors/:where
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:where()`**-Funktion der [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) nimmt eine Selektorliste als Argument und selektiert jedes Element, das von einem der Selektoren in dieser Liste ausgewählt werden kann.

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

Die Pseudoklasse `:where()` erfordert eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber andere einfache, zusammengesetzte und komplexe Selektoren sind erlaubt.

### Nachsichtige Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list).

In CSS, beim Verwenden einer Selektorliste, wird die gesamte Liste als ungültig betrachtet, wenn einer der Selektoren ungültig ist. Beim Verwenden von `:is()` oder `:where()` wird anstatt die gesamte Selktorliste als ungültig zu betrachten, wenn einer fehlschlägt, der fehlerhafte oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt analysiert und `:valid` entsprechen, auch in Browsern, die `:unsupported` nicht unterstützen, wohingegen:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich von :where() und :is()

Dieses Beispiel zeigt, wie `:where()` funktioniert, und veranschaulicht auch den Unterschied zwischen `:where()` und `:is()`.

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, ein Seitenelement und einen Footer enthalten. Sie unterscheiden sich durch die Klassen, die verwendet werden, um die Kindelemente zu markieren.

Um die Auswahl von Links zu gruppieren, während wir die `is-styling` und `where-styling` Stile unterscheiden, könnten wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was aber, wenn wir später die Farbe der Links in den Footern mit einem zusammengesetzten Selektor aus Typselektoren mit niedriger Spezifität überschreiben wollen?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, weil die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors zählen und Klassenselektoren eine höhere Spezifität haben als Elementselektoren.

Allerdings haben Selektoren innerhalb von `:where()` die Spezifität 0, sodass der orange Footer-Link von unserem ausschließlich aus Typen bestehenden zusammengesetzten Selektor überschrieben wird.

> [!NOTE]
> Dieses Beispiel finden Sie auch auf GitHub; siehe [is-where](https://mdn.github.io/css-examples/is-where/).

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
