---
title: "::details-content"
slug: Web/CSS/::details-content
l10n:
  sourceCommit: 19f054333148427b21bfe98e33d5c3ab1d28a516
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

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um eine {{cssxref("background-color")}} auf den Inhalt des {{HTMLElement("details")}} Elements zu setzen.

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

#### Resultat

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### Transition Beispiel

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um eine {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}} Elements zu setzen, sodass dieser reibungslos eingeblendet wird, wenn er erweitert wird und wieder ausblendet, wenn er zusammengeklappt wird. Um dies zu erreichen, werden zwei separate Übergänge innerhalb der `transition` Kurzform-Eigenschaft spezifiziert:

- Die {{cssxref("opacity")}} Eigenschaft erhält einen grundlegenden Übergang über `600ms`, um den Ein-/Ausblendeffekt zu erzeugen.
- Die {{cssxref("content-visibility")}} Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>` Inhalt erweitert/zusammengeklappt wird) erhält ebenfalls einen grundlegenden `600ms` Übergang, aber mit dem {{cssxref("transition-behavior")}} Wert `allow-discrete` angegeben. Dies ermöglicht dem Browser, einen Übergang auf `content-visibility` zu starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt ist, dass der Inhalt während der gesamten Dauer des Übergangs sichtbar ist, sodass andere Übergänge sichtbar werden. Wäre dieser Übergang nicht enthalten, würde der Inhalt sofort verschwinden, wenn der `<details>` Inhalt zusammengeklappt würde — Sie würden das sanfte Ausblenden nicht sehen.

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

#### Resultat

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<details>`](/de/docs/Web/HTML/Element/details)
- [`<summary>`](/de/docs/Web/HTML/Element/summary)
