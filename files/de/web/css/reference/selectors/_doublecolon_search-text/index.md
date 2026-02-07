---
title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{SeeCompatTable}}

Das **`::search-text`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stile auf Suchergebnisse an, die durch die Textsuchfunktion "Finden" oder "Auf der Seite suchen" des User-Agents identifiziert werden.

{{InteractiveExample("CSS Demo: ::search-text", "tabbed-shorter")}}

```css interactive-example
p::search-text {
  color: crimson;
  background-color: wheat;
}
```

```html interactive-example
<p>
  Using your browser's "Find in page" functionality, find a word or phrase that
  appears in this sentence, and note how, in supporting browsers, each result is
  highlighted using the specified custom styles.
</p>
```

## Syntax

```css
::search-text {
  /* ... */
}
```

## Beschreibung

Die meisten Browser beinhalten eine Art der Textsuche innerhalb der Seite, die normalerweise als "Finden" oder "Auf der Seite suchen" bezeichnet wird. Das `::search-text` Pseudo-Element, eines der [Highlight-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), ermöglicht es Ihnen, eine [eingeschränkte Menge von Stilen](#erlaubte_eigenschaften) auf die Text-Ergebnisse anzuwenden, die durch die Browser-Suchfunktion hervorgehoben werden.

Nicht alle Browser und Browserversionen heben Suchergebnisse mit auf der Seite stilisierbaren Highlights hervor. In solchen Fällen könnte `::search-text` nicht implementiert oder einfach ignoriert sein.

Die Verwendung von `::search-text` als alleiniger Selektor wird alle Browser-Suchergebnisse _überall_ auf einer Seite stilisieren. Wenn Sie nur die Browser-Suchergebnisse innerhalb bestimmter Elemente stilisieren möchten, können Sie `::search-text` mit anderen Selektoren kombinieren, zum Beispiel `section::search-text`.

Zusätzlich kann `::search-text` mit der {{cssxref(":current")}} [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) kombiniert werden, um spezielle Stile für das aktuell fokussierte Suchergebnis bereitzustellen, zum Beispiel:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

### Vererbungsmodell

Das `::search-text` Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Highlight-Pseudo-Elementen gemeinsam ist, wobei Stile sowohl von ihren Elternelementen als auch von den Pseudo-Elementen ihrer Eltern geerbt werden. Für mehr Details zur Funktionsweise dieser Vererbung siehe den Abschnitt [Highlight-Pseudo-Elemente-Vererbung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

### Erlaubte Eigenschaften

Eine eingeschränkte Teilmenge von CSS-Eigenschaften kann mit `::search-text` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Die {{CSSxRef("text-decoration")}} Kurzschreibweise und die zugehörigen Langschreibweisen:
  - {{CSSxRef("text-decoration-line")}}: nur die Werte `grammar-error`, `spelling-error`, `line-through`, `none` und `underline`.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Barrierefreiheit

**Überschreiben Sie die Stile von Textsuchergebnissen sparsam**, insbesondere wenn dies aus rein ästhetischen Gründen geschieht. Für Menschen mit kognitiven Einschränkungen oder diejenigen, die technisch weniger versiert sind, können unerwartete Änderungen dieser Stile das Verständnis der Funktionalität beeinträchtigen.

Ein primärer Anwendungsfall von `::search-text` ist die Erhöhung des Farbkontrasts im Vergleich zur Standard-Browser-Stilgestaltung. Beim Anpassen von hervorgehobenem Text ist es wichtig, sicherzustellen, dass das [Kontrastverhältnis zwischen Vorder- und Hintergrundfarben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) groß genug ist, damit Menschen den Inhalt des hervorgehobenen Textes wahrnehmen können.

## Beispiele

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie man `::search-text` und `:current` verwendet, um benutzerdefinierte Stile für die Suchergebnisse "Auf der Seite suchen" Ihres Browsers zu erstellen.

#### HTML

Das HTML besteht aus einem einfachen Absatz mit Text. Wir zeigen den HTML-Quellcode nicht, sowohl der Kürze halber als auch um es einfacher zu machen, die Suchergebnisse im gerenderten Beispiel zu navigieren.

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

In unserem CSS beginnen wir damit, das `::search-text` Pseudo-Element zu stylen. Wir geben ihm benutzerdefinierte {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}} Stile.

```css hidden live-sample___custom-search-results
html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}
@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(:current) {
    body::before {
      content: "Your browser doesn't support the :current pseudo-class.";
    }
  }
  @supports not selector(::search-text) {
    body::before {
      content: "Your browser doesn't support the ::search-text pseudo-element.";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

Schließlich stylen wir das aktuell fokussierte Suchergebnis über `::search-text:current` und geben ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile, damit es von den restlichen Ergebnissen unterscheidbar ist.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Versuchen Sie, die Suchfunktion Ihres Browsers auf der Seite zu verwenden, um ein Wort zu finden, das mehrmals im Beispieltext vorkommt, z.B. "aliquam", "amet" oder "tortor". Wechseln Sie zwischen den vorherigen und nächsten Ergebnissen, um das `:current` Styling zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":current")}}
- [Highlight-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
