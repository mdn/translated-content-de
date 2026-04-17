---
title: "`::details-content` CSS pseudo-element"
short-title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den erweiterbaren/zusammenklappbaren Inhalt eines {{HTMLElement("details")}}-Elements.

{{InteractiveExample("CSS Demo: ::details-content", "tabbed-shorter")}}

```css interactive-example
details[open]::details-content {
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
}
```

```html interactive-example
<details open>
  <summary>Example summary</summary>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>
    Architecto cupiditate ea optio modi quas sequi, esse libero asperiores
    debitis eveniet commodi hic ad.
  </p>
</details>
```

## Syntax

```css
selector::details-content
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung des Pseudoelements `::details-content`, um den Inhalt eines {{HTMLElement("details")}}-Elements zu stylen.

#### HTML

Unser `<details>`-Element enthält ein {{HTMLElement("summary")}}-Element, dessen Inhalte immer sichtbar sein werden. Der Detailinhalt enthält ein {{HTMLElement("p")}}-Element.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

Wir setzen eine {{cssxref("background-color")}} auf das Pseudoelement `::details-content`:

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Ergebnis

Klicken Sie auf die Zusammenfassung, um die Detailinhalte anzuzeigen.

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Übergangsbeispiel

In diesem Beispiel wird das Pseudoelement `::details-content` verwendet, um einen Übergang auf den Inhalt des {{HTMLElement("details")}}-Elements zu setzen, sodass es sanft eingeblendet wird, wenn es erweitert wird, und wieder ausblendet, wenn es zusammengeklappt wird.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

Um unseren Übergang zu erreichen, spezifizieren wir zwei separate Übergänge innerhalb der {{cssxref("transition")}} Kurzform-Eigenschaft:

- Der {{cssxref("opacity")}}-Eigenschaft wird ein einfacher Übergang über `600ms` zugewiesen, um den Ein-/Ausblendeffekt zu erzeugen.
- Der {{cssxref("content-visibility")}}-Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>`-Inhalt erweitert/eingeklappt wird) wird ein `600ms` Übergang mit dem {{cssxref("transition-behavior")}}-Wert `allow-discrete` zugewiesen. Dies erlaubt es dem Browser, einen Übergang auf `content-visibility` zu starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Effekt ist, dass der Inhalt für die gesamte Dauer des Übergangs sichtbar ist, wodurch andere Übergänge zu sehen sind. Wenn dieser Übergang nicht enthalten wäre, würde der Inhalt sofort verschwinden, wenn der `<details>`-Inhalt eingeklappt wird — Sie würden das sanfte Ausblenden nicht sehen.

```css
details::details-content {
  opacity: 0;
  transition:
    opacity 600ms,
    content-visibility 600ms allow-discrete;
}

details[open]::details-content {
  opacity: 1;
}
```

#### Ergebnis

Um die Animation zu sehen, ändern Sie die Sichtbarkeit der Detailinhalte, indem Sie auf die Zusammenfassung klicken.

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<details>`](/de/docs/Web/HTML/Reference/Elements/details)
- [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)
