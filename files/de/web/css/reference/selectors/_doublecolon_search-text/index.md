---
title: "`::search-text` CSS pseudo-element"
short-title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Das **`::search-text`**-[CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stile auf Suchergebnisse an, die über die Textsuchfunktion „Suchen“ oder „Auf Seite suchen“ des Browsers gefunden wurden.

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

## Zulässige Eigenschaften

Mit `::search-text` kann nur eine begrenzte Auswahl an CSS-Eigenschaften verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- Die Kurzschreibweise {{CSSxRef("text-decoration")}} und die zugehörigen Einzeleigenschaften:
  - {{CSSxRef("text-decoration-line")}}: nur die Werte `grammar-error`, `spelling-error`, `line-through`, `none` und `underline`.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Syntax

```css
::search-text {
  /* ... */
}
```

## Beschreibung

Die meisten Browser verfügen über eine Textsuchfunktion innerhalb der Seite, die üblicherweise „Suchen“ oder „Auf Seite suchen“ heißt. Mit dem Pseudoelement `::search-text`, einem der [Hervorhebungs-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), können Sie eine [begrenzte Auswahl an Stilen](#zulässige-eigenschaften) auf die von der Browsersuche hervorgehobenen Textstellen anwenden.

Nicht alle Browser und Browserversionen heben Suchergebnisse innerhalb der Seite so hervor, dass sie mit CSS gestaltet werden können. In solchen Fällen ist `::search-text` möglicherweise nicht implementiert oder wird ignoriert.

Wenn Sie `::search-text` allein als Selektor verwenden, werden Suchergebnisse des Browsers _überall_ auf der Seite gestaltet. Wenn Sie nur Suchergebnisse innerhalb bestimmter Elemente gestalten möchten, können Sie `::search-text` mit anderen Selektoren kombinieren, beispielsweise `section::search-text`.

Außerdem können Sie `::search-text` mit der [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(":current")}} kombinieren, um das aktuell fokussierte Suchergebnis gezielt zu gestalten, beispielsweise:

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

Das Pseudoelement `::search-text` folgt einem besonderen Vererbungsmodell, das allen Hervorhebungs-Pseudoelementen gemeinsam ist: Stile werden sowohl von den Elternelementen als auch von deren Pseudoelementen geerbt. Weitere Einzelheiten finden Sie im Abschnitt [Vererbung von Hervorhebungs-Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Barrierefreiheit

**Überschreiben Sie die Stile von Textsuchergebnissen nur zurückhaltend**, insbesondere wenn Sie dies aus rein ästhetischen Gründen tun. Für Menschen mit kognitiven Einschränkungen oder geringer technischer Erfahrung können unerwartete Änderungen dieser Stile das Verständnis der Suchfunktion erschweren.

Ein wichtiger Anwendungsfall für `::search-text` ist die Erhöhung des Farbkontrasts gegenüber der Standarddarstellung des Browsers. Wenn Sie hervorgehobenen Text anpassen, achten Sie darauf, dass das [Kontrastverhältnis zwischen Vordergrund- und Hintergrundfarbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) hoch genug ist, damit der hervorgehobene Text gut erkennbar bleibt.

## Beispiele

### Benutzerdefinierte Stile für Textsuchergebnisse

Dieses Beispiel zeigt, wie Sie mit `::search-text` und `:current` die Ergebnisse der Browserfunktion „Auf Seite suchen“ individuell gestalten können.

#### HTML

Das HTML besteht aus einem einfachen Textabsatz. Wir zeigen den HTML-Quelltext nicht, um das Beispiel kurz zu halten und die Navigation durch die Suchergebnisse im gerenderten Beispiel zu erleichtern.

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

Im CSS gestalten wir zunächst das Pseudoelement `::search-text`. Wir legen dafür eigene Werte für {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("text-shadow")}} fest.

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

Abschließend gestalten wir das aktuell fokussierte Suchergebnis über `::search-text:current`. Dafür legen wir eine andere `background-color` und einige Werte für {{cssxref("text-decoration")}} fest, damit es sich von den übrigen Ergebnissen unterscheidet.

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

{{EmbedLiveSample("custom-search-results", "100%", 300)}}

Suchen Sie über die Suchfunktion Ihres Browsers nach einem Wort, das im Beispieltext mehrfach vorkommt, etwa „aliquam“, „amet“ oder „tortor“. Wechseln Sie zwischen den vorherigen und nächsten Treffern, um die Gestaltung mit `:current` zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":current")}}
- [Hervorhebungs-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements)
