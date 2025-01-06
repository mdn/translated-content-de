---
title: "::details-content"
slug: Web/CSS/::details-content
l10n:
  sourceCommit: 9c15368794c97a0b9ae38059551b71420a3d0222
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den erweiterbaren/zusammenklappbaren Inhalt eines {{HTMLElement("details")}} Elements.

[//]: # '{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}'

## Syntax

```css
selector::details-content
```

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird das Pseudoelement `::details-content` genutzt, um eine {{cssxref("background-color")}} auf den Inhalt des {{HTMLElement("details")}} Elements anzuwenden.

#### HTML

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Übergangsbeispiel

In diesem Beispiel wird das Pseudoelement `::details-content` verwendet, um eine {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}} Elements zu setzen, sodass es sanft ein- und ausblendet, wenn es erweitert bzw. zusammengeklappt wird. Um dies zu erreichen, werden zwei separate Übergänge innerhalb der Kurzform-Eigenschaft `transition` angegeben:

- Der Eigenschaft {{cssxref("opacity")}} wird ein einfacher Übergang über `600ms` zugewiesen, um den Effekt des Ein- und Ausblendens zu erzeugen.
- Der Eigenschaft {{cssxref("content-visibility")}} (die zwischen `hidden` und `visible` geschaltet wird, wenn der `<details>`-Inhalt erweitert/zusammengeklappt wird) wird ebenfalls ein einfacher `600ms` Übergang zugewiesen, jedoch mit dem {{cssxref("transition-behavior")}} Wert `allow-discrete`. Damit wird der Browser in die Lage versetzt, einen Übergang auf `content-visibility` zu starten, wobei das Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt ist, dass der Inhalt für die gesamte Dauer des Übergangs sichtbar ist, wodurch andere Übergänge gesehen werden können. Wenn dieser Übergang nicht enthalten wäre, würde der Inhalt sofort verschwinden, wenn der `<details>`-Inhalt zusammengeklappt wird — man würde das sanfte Ausblenden nicht sehen.

#### HTML

```html
<details>
  <summary>Click me</summary>
  <p>Here is some content</p>
</details>
```

#### CSS

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

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<details>`](/de/docs/Web/HTML/Element/details)
- [`<summary>`](/de/docs/Web/HTML/Element/summary)
