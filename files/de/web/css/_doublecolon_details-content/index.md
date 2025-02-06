---
title: ::details-content
slug: Web/CSS/::details-content
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::details-content`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die ein- und ausklappbaren Inhalte eines {{HTMLElement("details")}}-Elements.

[//]: # '{{EmbedInteractiveExample("pages/tabbed/pseudo-element-details-content.html", "tabbed-shorter")}}'

## Syntax

```css
selector::details-content
```

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird das `::details-content`-Pseudoelement verwendet, um eine {{cssxref("background-color")}} für den Inhalt des {{HTMLElement("details")}}-Elements festzulegen.

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

In diesem Beispiel wird das `::details-content`-Pseudoelement verwendet, um einen {{cssxref("transition")}} auf den Inhalt des {{HTMLElement("details")}}-Elements festzulegen, sodass es beim Öffnen sanft eingeblendet und beim Schließen wieder ausgeblendet wird. Um dies zu erreichen, werden zwei separate Übergänge innerhalb der `transition`-Kurznotation angegeben:

- Die {{cssxref("opacity")}}-Eigenschaft erhält einen Basisübergang über `600ms`, um den Ein- und Ausblendeffekt zu erzeugen.
- Die {{cssxref("content-visibility")}}-Eigenschaft (die beim Erweitern/Reduzieren des `<details>`-Inhalts zwischen `hidden` und `visible` umgeschaltet wird) erhält ebenfalls einen grundlegenden `600ms`-Übergang, jedoch mit dem Wert {{cssxref("transition-behavior")}} `allow-discrete`. Dieser signalisiert dem Browser, dass ein Übergang für `content-visibility` gestartet werden soll, dessen Animationsverhalten [diskret](/de/docs/Web/CSS/CSS_animated_properties#discrete) ist. Der Effekt besteht darin, dass der Inhalt während der gesamten Dauer des Übergangs sichtbar bleibt, sodass andere Übergänge beobachtbar sind. Wenn dieser Übergang nicht enthalten wäre, würde der Inhalt sofort verschwinden, sobald der `<details>`-Inhalt reduziert wird — das sanfte Ausblenden wäre nicht sichtbar.

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
