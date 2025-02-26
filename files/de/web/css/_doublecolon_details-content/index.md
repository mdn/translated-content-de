---
title: "::details-content"
slug: Web/CSS/::details-content
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{CSSRef}}

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den erweiterbaren/zusammenklappbaren Inhalt eines {{HTMLElement("details")}} Elements.

[//]: # '{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}'

## Syntax

```css
selector::details-content
```

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um die {{cssxref("background-color")}} des Inhalts des {{HTMLElement("details")}} Elements festzulegen.

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

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um eine {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}} Elements anzuwenden, sodass es sanft in den Vordergrund tritt, wenn es erweitert wird, und wieder ausblendet, wenn es zusammenklappt. Um dies zu erreichen, werden zwei separate Übergänge innerhalb der `transition` Kurznotation spezifiziert:

- Die {{cssxref("opacity")}} Eigenschaft erhält einen einfachen Übergang über `600ms`, um den Ein- und Ausblendeffekt zu erzeugen.
- Die {{cssxref("content-visibility")}} Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>` Inhalt erweitert/zurückgezogen wird) erhält ebenfalls einen einfachen `600ms` Übergang, jedoch mit dem {{cssxref("transition-behavior")}} Wert `allow-discrete` angegeben. Dies ermöglicht es dem Browser, einen Übergang auf `content-visibility` zu starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt ist, dass der Inhalt während der gesamten Dauer des Übergangs sichtbar bleibt, wodurch andere Übergänge sichtbar sind. Würde dieser Übergang nicht hinzugefügt, würde der Inhalt sofort verschwinden, wenn der `<details>` Inhalt zurückgezogen wird — der sanfte Ausblendeffekt wäre nicht sichtbar.

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
