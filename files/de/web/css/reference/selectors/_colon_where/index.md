---
title: :where()
slug: Web/CSS/Reference/Selectors/:where
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`:where()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion nimmt eine Selektor-Liste als Argument und wählt jedes Element aus, das durch einen der Selektoren in dieser Liste ausgewählt werden kann.

Der Unterschied zwischen `:where()` und {{CSSxRef(":is", ":is()")}} besteht darin, dass `:where()` immer eine Spezifität von 0 hat, während `:is()` die Spezifität des spezifischsten Selektors in seinen Argumenten übernimmt.

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

Die `:where()` Pseudo-Klasse erfordert eine [Selektor-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list), eine durch Kommata getrennte Liste von einem oder mehreren Selektoren, als Argument. Die Liste darf kein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthalten, aber alle anderen einfachen, zusammengesetzten und komplexen Selektoren sind erlaubt.

### Nachsichtige Selektor-Analyse

Die Spezifikation definiert `:is()` und `:where()` als akzeptierend eine [nachsichtige Selektor-Liste](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS wird bei der Verwendung einer Selektor-Liste die ganze Liste als ungültig betrachtet, wenn einer der Selektoren ungültig ist. Bei der Verwendung von `:is()` oder `:where()` wird stattdessen der fehlerhafte oder nicht unterstützte Selektor ignoriert und die anderen verwendet, anstatt die ganze Liste der Selektoren als ungültig zu betrachten, wenn einer nicht analysiert werden kann.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Wird weiterhin korrekt analysiert und passt zu `:valid`, auch in Browsern, die `:unsupported` nicht unterstützen, während:

```css
:valid,
:unsupported {
  /* … */
}
```

In Browsern ignoriert wird, die `:unsupported` nicht unterstützen, selbst wenn sie `:valid` unterstützen.

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

In diesem etwas konstruierten Beispiel haben wir zwei Artikel, die jeweils einen Abschnitt, ein Aside und einen Footer enthalten. Sie unterscheiden sich durch die verwendeten Klassen, um die Kind-Elemente zu markieren.

Um die Auswahl von Links zu gruppieren, während die `is-styling` und `where-styling` Stile unterschiedlich bleiben, _könnten_ wir `:is()` oder `:where()` auf folgende Weise verwenden:

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

Was aber, wenn wir später die Farbe der Links in den Fußzeilen durch einen zusammengesetzten Selektor aus Typselektoren mit niedriger Spezifität überschreiben möchten?

```css
footer a {
  color: blue;
}
```

Dies wird für die roten Links nicht funktionieren, da die Selektoren innerhalb von `:is()` zur Spezifität des Gesamtselketors beitragen, und Klassen-Slektoren eine höhere Spezifität als Elementselektoren haben.

Jedoch haben Selektoren innerhalb von `:where()` eine Spezifität von 0, sodass der orange Footer-Link von unserem rein typbasierten Selektor überschrieben wird.

> [!NOTE]
> Sie finden dieses Beispiel auch auf GitHub; siehe [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":is", ":is()")}}
- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Web-Komponenten](/de/docs/Web/API/Web_components)
