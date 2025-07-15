---
title: ::details-content
slug: Web/CSS/::details-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den erweiterbaren/zusammenklappbaren Inhalt eines {{HTMLElement("details")}} Elements.

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

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um eine {{cssxref("background-color")}} auf den Inhalt des {{HTMLElement("details")}} Elements festzulegen.

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

In diesem Beispiel wird das `::details-content` Pseudo-Element verwendet, um einen {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}} Elements festzulegen, sodass es beim Erweitern sanft einblendet und beim Zusammenklappen wieder ausblendet. Um dies zu erreichen, werden zwei separate Übergänge im `transition` Kurzschreibweise-Attribut angegeben:

- Die {{cssxref("opacity")}} Eigenschaft erhält einen einfachen Übergang über `600ms`, um den Ein-/Ausblendeffekt zu erzeugen.
- Die {{cssxref("content-visibility")}} Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>` Inhalt erweitert/zusammengeklappt wird) erhält ebenfalls einen einfachen `600ms` Übergang, jedoch mit dem {{cssxref("transition-behavior")}} Wert `allow-discrete` spezifiziert. Dies ermöglicht dem Browser, einen Übergang bei `content-visibility` zu starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt ist, dass der Inhalt für die gesamte Dauer des Übergangs sichtbar bleibt, was es ermöglicht, andere Übergänge zu sehen. Wenn dieser Übergang nicht eingeschlossen wäre, würde der Inhalt sofort verschwinden, wenn der `<details>` Inhalt zusammengeklappt würde — der sanfte Ausblendeffekt wäre nicht sichtbar.

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

- [`<details>`](/de/docs/Web/HTML/Reference/Elements/details)
- [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)
