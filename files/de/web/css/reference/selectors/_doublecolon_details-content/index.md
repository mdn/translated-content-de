---
title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
l10n:
  sourceCommit: 6aa7c99917d9d6209baca3310a139cb9536da7a7
---

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den erweiterbaren/zusammenklappbaren Inhalt eines {{HTMLElement("details")}} Elements.

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

Dieses Beispiel demonstriert die grundlegende Verwendung des `::details-content` Pseudo-Elements, um den Inhalt eines {{HTMLElement("details")}} Elements zu stylen.

#### HTML

Unser `<details>` Element enthält ein {{HTMLElement("summary")}} Element, dessen Inhalt immer sichtbar sein wird. Der Detailinhalt beinhaltet ein {{HTMLElement("p")}} Element.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

Wir setzen eine {{cssxref("background-color")}} auf dem `::details-content` Pseudo-Element:

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Ergebnis

Klicken Sie auf die Zusammenfassung, um die Detailinhalte anzuzeigen.

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Übergangsbeispiel

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um einen Übergang auf den Inhalt des {{HTMLElement("details")}} Elements zu setzen, sodass er beim Erweitern sanft eingeblendet und beim Zusammenklappen ausgeblendet wird.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel.

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

Um unseren Übergang zu erreichen, spezifizieren wir zwei separate Übergänge innerhalb der {{cssxref("transition")}} Kurzform-Eigenschaft:

- Der {{cssxref("opacity")}} Eigenschaft wird ein einfacher Übergang über `600ms` gegeben, um den Ein-/Ausblendeffekt zu erzeugen.
- Der {{cssxref("content-visibility")}} Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>` Inhalt erweitert/zusammengeklappt wird) wird ein `600ms` Übergang mit dem {{cssxref("transition-behavior")}} Wert `allow-discrete` spezifiziert. Dies ermöglicht dem Browser, einen Übergang bei `content-visibility` zu starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Effekt ist, dass der Inhalt während der gesamten Dauer des Übergangs sichtbar ist, sodass andere Übergänge gesehen werden können. Wenn dieser Übergang nicht eingeschlossen wäre, würde der Inhalt sofort verschwinden, wenn der `<details>` Inhalt zusammengeklappt wird — Sie würden das sanfte Ausblenden nicht sehen.

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

Um die Animation zu sehen, schalten Sie die Sichtbarkeit der Detailinhalte ein und aus, indem Sie auf die Zusammenfassung klicken.

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<details>`](/de/docs/Web/HTML/Reference/Elements/details)
- [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)
