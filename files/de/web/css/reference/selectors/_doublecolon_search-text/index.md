---
title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{SeeCompatTable}}

Der **`::search-text`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stile auf Suchergebnisse an, die durch die Textsuchfunktion "Suchen" oder "Auf Seite suchen" des Benutzeragenten identifiziert werden.

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

Die meisten Browser bieten eine Art von Textsuche innerhalb der Seite, die normalerweise als "Suchen" oder "Auf Seite suchen" bezeichnet wird. Das `::search-text`-Pseudoelement, eines der [Hervorhebungs-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), ermöglicht es Ihnen, einen [begrenzten Satz von Stilen](#erlaubte_eigenschaften) auf die Textsuchergebnisse anzuwenden, die durch die Suchfunktion des Browsers hervorgehoben werden.

Nicht alle Browser und Browserversionen heben Suchergebnisse mit hervorgehobenen Texten hervor, die mit CSS gestaltet werden können. In solchen Fällen kann `::search-text` nicht implementiert oder einfach ignoriert werden.

Die Verwendung von `::search-text` als eigenem Selektor wird Browser-Suchergebnisse _überall_ auf einer Seite gestalten. Wenn Sie nur die Suchergebnisse in bestimmten Elementen gestalten möchten, können Sie `::search-text` mit anderen Selektoren kombinieren, zum Beispiel `section::search-text`.

Zusätzlich kann `::search-text` mit der {{cssxref(":current")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) kombiniert werden, um spezifische Stile für das momentan fokussierte Suchergebnis bereitzustellen, beispielsweise:

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

Das `::search-text`-Pseudoelement folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudoelementen gemein ist, bei dem Stile von sowohl ihren Elternelementen als auch den Pseudoelementen ihrer Eltern geerbt werden. Für weitere Details, wie diese Vererbung funktioniert, siehe den Abschnitt [Highlight-Pseudoelement-Vererbung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

### Erlaubte Eigenschaften

Ein begrenzter Satz von CSS-Eigenschaften kann mit `::search-text` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Die {{CSSxRef("text-decoration")}} Kurzschrift und zugehörige Langhandschriften:
  - {{CSSxRef("text-decoration-line")}}: nur die Werte `grammar-error`, `spelling-error`, `line-through`, `none` und `underline`.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Barrierefreiheit

**Überschreiben Sie die Stile der Textsuchergebnisse nur sparsam**, insbesondere wenn dies aus rein ästhetischen Gründen geschieht. Für Personen mit kognitiven Beeinträchtigungen oder die weniger technikaffin sind, können unerwartete Änderungen dieser Stile ihr Verständnis der Funktionalität beeinträchtigen.

Ein Hauptanwendungsfall von `::search-text` besteht darin, den Farbkontrast im Vergleich zur Standardbrowserdarstellung zu erhöhen. Bei der Anpassung von hervorgehobenem Text ist es wichtig sicherzustellen, dass das [Kontrastverhältnis zwischen Vorder- und Hintergrundfarben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) groß genug ist, damit Benutzer den Inhalt des hervorgehobenen Textes wahrnehmen können.

## Beispiele

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie Sie `::search-text` und `:current` verwenden können, um benutzerdefinierte Stile für die "Auf Seite suchen"-Ergebnisse Ihres Browsers zu erstellen.

#### HTML

Der HTML-Code besteht aus einem einfachen Absatz von Text. Wir werden den HTML-Quellcode nicht zeigen, sowohl der Kürze halber als auch damit es einfacher ist, die Suchergebnisse im gerenderten Beispiel zu navigieren.

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

In unserem CSS beginnen wir damit, das `::search-text`-Pseudoelement zu stilisieren. Wir geben ihm benutzerdefinierte {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}} Stile.

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
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

Abschließend gestalten wir das aktuell fokussierte Suchergebnis über `::search-text:current`, indem wir ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile zuweisen, sodass es von den restlichen Ergebnissen unterscheidbar ist.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Versuchen Sie, die "Auf Seite suchen"-Schnittstelle des Browsers zu verwenden, um ein Wort zu finden, das mehrmals im Beispieltext vorkommt, wie "aliquam", "amet" oder "tortor". Bewegen Sie sich zwischen den vorherigen und nächsten Ergebnissen, um das `:current`-Styling zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":current")}}
- [Hervorhebungs-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
