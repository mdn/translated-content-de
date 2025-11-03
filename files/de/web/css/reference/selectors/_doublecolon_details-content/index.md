---
title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die erweiterbaren/zuklappbaren Inhalte eines {{HTMLElement("details")}}-Elements.

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

In diesem Beispiel wird das `::details-content` Pseudoelement verwendet, um eine {{cssxref("background-color")}} auf den Inhalt des {{HTMLElement("details")}}-Elements zu setzen.

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

In diesem Beispiel wird das `::details-content` Pseudoelement verwendet, um einen {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}}-Elements zu setzen, sodass es beim Erweitern sanft eingeblendet und beim Zuklappen wieder ausgeblendet wird. Um dies zu erreichen, werden zwei separate Übergänge innerhalb der Kurznotationseigenschaft `transition` angegeben:

- Der {{cssxref("opacity")}}-Eigenschaft wird ein einfacher Übergang über `600ms` gegeben, um den Ein-/Ausblendeffekt zu erzeugen.
- Der {{cssxref("content-visibility")}}-Eigenschaft (die zwischen `hidden` und `visible` gewechselt wird, wenn der `<details>`-Inhalt erweitert/zugeklappt wird) wird ebenfalls ein einfacher `600ms` Übergang mit dem {{cssxref("transition-behavior")}}-Wert `allow-discrete` zugewiesen. Dadurch wird dem Browser gestattet, einen Übergang bei `content-visibility` zu starten, dessen Animationseigenschaft [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt ist, dass der Inhalt während der gesamten Dauer der Transition sichtbar ist, wodurch andere Transitionen sichtbar werden. Ohne diesen Übergang würde der Inhalt sofort verschwinden, wenn der `<details>`-Inhalt zugeklappt wird — Sie würden das sanfte Ausblenden nicht sehen.

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
