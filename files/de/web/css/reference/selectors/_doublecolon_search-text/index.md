---
title: "`::search-text` CSS pseudo-element"
short-title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{SeeCompatTable}}

Das **`::search-text`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stilvorlagen auf Suchergebnisse an, die durch die Textsuchfunktion "Suchen" oder "Auf der Seite suchen" des Benutzeragenten identifiziert werden.

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

Die meisten Browser beinhalten irgendeine Art von Textsuchfunktion auf der Seite, üblicherweise bezeichnet als "Suchen" oder "Auf der Seite suchen". Das `::search-text`-Pseudo-Element, eines der [Highlight-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), erlaubt es Ihnen, einen [begrenzten Satz von Stilen](#erlaubte_eigenschaften) auf die Text-Ergebnisse anzuwenden, die durch die Browsersuchfunktion hervorgehoben werden.

Nicht alle Browser und Browserversionen heben Suchergebnisse durch hervorhebende Stile auf der Seite hervor, die durch CSS stilisiert werden können. In solchen Fällen könnte `::search-text` nicht implementiert oder einfach ignoriert werden.

Die Verwendung von `::search-text` allein als Selektor wird Browsersuchergebnisse _überall_ auf einer Seite stylen. Wenn Sie nur Browsersuchergebnisse innerhalb bestimmter Elemente stylen möchten, können Sie `::search-text` mit anderen Selektoren kombinieren, zum Beispiel `section::search-text`.

Zusätzlich kann `::search-text` mit der {{cssxref(":current")}} [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) kombiniert werden, um spezielle Stile für das derzeit fokussierte Suchergebnis bereitzustellen, beispielsweise:

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

Das `::search-text`-Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Highlight-Pseudo-Elementen gemeinsam ist, bei dem Stile sowohl von ihren Eltern-Elementen als auch den Pseudo-Elementen ihrer Eltern geerbt werden. Für weitere Details zur Funktionsweise dieser Vererbung siehe den Abschnitt [Highlight-Pseudo-Elemente Vererbung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

### Erlaubte Eigenschaften

Ein begrenzter Satz von CSS-Eigenschaften kann mit `::search-text` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Die {{CSSxRef("text-decoration")}} Kurzschreibweise und verwandte langschreibige Eigenschaften:
  - {{CSSxRef("text-decoration-line")}}: nur die Werte `grammar-error`, `spelling-error`, `line-through`, `none`, und `underline`.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Barrierefreiheit

**Überschreiben Sie die Stilvorlagen von Textsuchergebnissen nur sparsam**, insbesondere wenn dies aus rein ästhetischen Gründen geschieht. Für Personen mit kognitiven Einschränkungen oder geringerer Technologiekompetenz könnten unerwartete Änderungen dieser Stile das Verständnis der Funktionalität beeinträchtigen.

Ein primärer Anwendungsfall von `::search-text` ist die Erhöhung des Farbkontrasts im Vergleich zur Standard-Browser-Stilierung. Wenn Sie hervorgehobenen Text anpassen, ist es wichtig sicherzustellen, dass das [Kontrastverhältnis zwischen den Vorder- und Hintergrundfarben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) groß genug ist, damit die Inhalte des hervorgehobenen Textes wahrgenommen werden können.

## Beispiele

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie `::search-text` und `:current` verwendet werden, um benutzerdefinierte Stile für Ihre Browserfunktion "Auf der Seite suchen" zu erstellen.

#### HTML

Das HTML besteht aus einem einfachen Absatz von Text. Wir zeigen den HTML-Quelltext nicht, sowohl aus Gründen der Kürze, als auch damit es einfacher ist, die Suchergebnisse im gerenderten Beispiel zu navigieren.

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

In unserem CSS beginnen wir damit, das `::search-text`-Pseudo-Element zu stylen. Wir geben ihm benutzerdefinierte {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}} Stile.

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

Schließlich stylen wir das derzeit fokussierte Suchergebnis über `::search-text:current`, indem wir ihm eine andere `background-color` und einige {{cssxref("text-decoration")}} Stile geben, sodass es sich von den anderen Ergebnissen unterscheidet.

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

Versuchen Sie, die "Auf der Seite suchen"-Schnittstelle des Browsers zu verwenden, um ein Wort zu finden, das mehrmals im Beispieltext vorkommt, wie "aliquam", "amet" oder "tortor". Bewegen Sie sich zwischen den vorherigen und nächsten Ergebnissen, um das `:current`-Styling zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":current")}}
- [Highlight-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
