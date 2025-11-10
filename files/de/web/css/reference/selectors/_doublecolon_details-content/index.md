---
title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`::details-content`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die aufklappbaren/einklappbaren Inhalte eines {{HTMLElement("details")}}-Elements.

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

### Grundlegendes Beispiel

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

### Beispiel mit Übergang

In diesem Beispiel wird das `::details-content` Pseudoelement verwendet, um einen {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}}-Elements zu setzen, so dass er beim Aufklappen sanft einblendet und beim Einklappen wieder ausblendet. Um dies zu erreichen, werden zwei separate Übergänge im `transition`-Kurzbefehlswert angegeben:

- Die {{cssxref("opacity")}}-Eigenschaft erhält einen grundlegenden Übergang über `600ms`, um den Einblend-/Ausblendeffekt zu erzeugen.
- Die {{cssxref("content-visibility")}}-Eigenschaft (die zwischen `hidden` und `visible` umgeschaltet wird, wenn der `<details>`-Inhalt aufgeklappt/eingeklappt wird) erhält ebenfalls einen grundlegenden `600ms` Übergang, jedoch mit dem {{cssxref("transition-behavior")}}-Wert `allow-discrete`. Dies lässt den Browser einen Übergang bei `content-visibility` starten, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) ist. Der Effekt ist, dass der Inhalt für die gesamte Dauer des Übergangs sichtbar ist, so dass andere Übergänge gesehen werden können. Wenn dieser Übergang nicht enthalten wäre, würde der Inhalt beim Einklappen des `<details>`-Inhalts sofort verschwinden — Sie würden das sanfte Ausblenden nicht sehen.

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
