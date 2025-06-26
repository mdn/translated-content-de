---
title: :where()
slug: Web/CSS/:where
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{CSSRef}}

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) Funktion nimmt eine Selektorliste als Argument und wählt jedes Element, das von einem der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer die Spezifität 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten annimmt.

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

Die `:where()` Pseudoklasse erfordert eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), eine durch Kommas getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Nachsichtige Selektor-Auswertung

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [nachsichtige Selektorliste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS, wenn eine Selektorliste verwendet wird, gilt die gesamte Liste als ungültig, wenn einer der Selektoren ungültig ist. Wenn `:is()` oder `:where()` verwendet wird, wird anstelle der gesamten Liste von Selektoren, die als ungültig gilt, wenn ein Fehler beim Parsen auftritt, der falsche oder nicht unterstützte Selektor ignoriert und die anderen verwendet.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird immer noch korrekt geparst und `:valid` matchen, selbst in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

## Beispiele

### Vergleich zwischen :where() und :is()

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

In diesem leicht konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, eine Randbemerkung und eine Fußzeile enthalten. Sie unterscheiden sich durch die Klassen, mit denen die untergeordneten Elemente markiert sind.

Um die Auswahl der Links zu gruppieren und gleichzeitig die Stile `is-styling` und `where-styling` getrennt zu halten, _könnten_ wir `:is()` oder `:where()` wie folgt verwenden:

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

Aber was, wenn wir später die Farbe der Links in den Fußzeilen mit einem zusammengesetzten Selektor aus niedrig spezifischen Typen überschreiben wollen?

```css
footer a {
  color: blue;
}
```

Dies funktioniert nicht für die roten Links, da die Selektoren innerhalb von `:is()` zur Spezifität des gesamten Selektors zählen und Klassenselektoren eine höhere Spezifität als Elementselektoren haben.

Selektoren innerhalb von `:where()` haben jedoch die Spezifität 0, sodass der orangefarbene Fußzeilen-Link von unserem nur aus Typen bestehenden zusammengefügten Selektor überschrieben wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden: siehe [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":is", ":is()")}}
- [Selector list](/de/docs/Web/CSS/Selector_list)
- [Web components](/de/docs/Web/API/Web_components)
