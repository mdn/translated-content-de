---
title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: 21d2342d16ed78d6c72c66a71599125eb2405a31
---

Das **`::search-text`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stile auf Suchergebnisse an, die durch die Textsuchfunktion "Finden" oder "Im Dokument suchen" des User-Agent identifiziert wurden.

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

Die meisten Browser verfügen über eine In-Page-Textsuchfunktion, die normalerweise als "Finden" oder "Im Dokument suchen" bezeichnet wird. Das `::search-text` Pseudo-Element, eines der [Highlight Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), ermöglicht es Ihnen, einen [begrenzten Satz von Stilen](#zulässige_eigenschaften) auf die Text-Ergebnisse anzuwenden, die von der Browser-Suchfunktion hervorgehoben werden.

Nicht alle Browser und Browserversionen heben Suchergebnisse mit In-Page-Highlights hervor, die mit CSS stilisiert werden können. In solchen Fällen kann `::search-text` nicht implementiert oder einfach ignoriert werden.

Die Verwendung von `::search-text` als eigenständiger Selektor wird Browser-Suchergebnisse _überall_ auf einer Seite gestalten. Wenn Sie die Browser-Suchergebnisse nur innerhalb bestimmter Elemente gestalten möchten, können Sie `::search-text` mit anderen Selektoren kombinieren, zum Beispiel `section::search-text`.

Zusätzlich kann `::search-text` mit der {{cssxref(":current")}} [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) kombiniert werden, um spezifische Stile für das aktuell fokussierte Suchergebnis bereitzustellen, zum Beispiel:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

### Vererbungsmuster

Das `::search-text` Pseudo-Element folgt einem speziellen Vererbungsmuster, das für alle Highlight Pseudo-Elemente üblich ist, wobei Stile sowohl von ihren Elternelementen als auch von den Pseudo-Elementen ihrer Eltern geerbt werden. Weitere Details dazu, wie diese Vererbung funktioniert, finden Sie im Abschnitt [Vererbung der Highlight Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

### Zulässige Eigenschaften

Ein begrenzter Satz von CSS-Eigenschaften kann mit `::search-text` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Die {{CSSxRef("text-decoration")}} Shorthand- und zugehörigen Langform-Eigenschaften:
  - {{CSSxRef("text-decoration-line")}}: Nur die Werte `grammar-error`, `spelling-error`, `line-through`, `none` und `underline`.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Barrierefreiheit

**Ändern Sie die Stile von Textsuchergebnissen sparsam**, insbesondere wenn dies aus rein ästhetischen Gründen geschieht. Für Personen mit kognitiven Beeinträchtigungen oder weniger technischer Affinität können unerwartete Änderungen dieser Stile ihr Verständnis der Funktionalität beeinträchtigen.

Ein Hauptanwendungsfall von `::search-text` ist die Erhöhung des Farbkontrasts im Vergleich zur Standard-Stilgebung des Browsers. Wenn Sie hervorgehobenen Text anpassen, ist es wichtig sicherzustellen, dass das [Kontrastverhältnis zwischen Vordergrund- und Hintergrundfarben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) groß genug ist, damit die Inhalte des hervorgehobenen Textes wahrgenommen werden können.

## Beispiele

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie Sie `::search-text` und `:current` verwenden können, um benutzerdefinierte Stile für die Suchergebnisse "Im Dokument suchen" Ihres Browsers zu erstellen.

#### HTML

Das HTML besteht aus einem einfachen Textabsatz. Wir zeigen den HTML-Quelltext nicht, sowohl der Kürze halber als auch damit es einfacher ist, die Suchergebnisse im gerenderten Beispiel zu navigieren.

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

In unserem CSS beginnen wir damit, das `::search-text` Pseudo-Element zu gestalten. Wir geben ihm benutzerdefinierte {{cssxref("background-color")}}, {{cssxref("color")}}, und {{cssxref("text-shadow")}} Stile.

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

Schließlich gestalten wir das aktuell fokussierte Suchergebnis über `::search-text:current`, indem wir ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile geben, sodass es sich von den restlichen Ergebnissen unterscheidet.

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

Versuchen Sie, über die "Im Dokument suchen"-Oberfläche des Browsers ein Wort zu finden, das mehrfach im Beispieltext vorkommt, wie "aliquam", "amet" oder "tortor". Bewegen Sie sich zwischen den vorherigen und nächsten Ergebnissen, um die `:current` Gestaltung zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":current")}}
- [Highlight Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
