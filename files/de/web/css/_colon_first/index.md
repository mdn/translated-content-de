---
title: ":first"
slug: Web/CSS/:first
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:first`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird, repräsentiert die erste Seite eines gedruckten Dokuments. (Siehe {{cssxref(":first-child")}} für das allgemeine erste Element eines Knotens.)

```css
/* Wählt die erste Seite beim Drucken aus */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Sie können nicht alle CSS-Eigenschaften mit dieser Pseudoklasse ändern. Sie können nur die Ränder, {{cssxref("orphans")}}, {{cssxref("widows")}}, und Seitenumbrüche des Dokuments ändern. Darüber hinaus dürfen Sie nur [absolute Längeneinheiten](/de/docs/Web/CSS/length#absolute_length_units) verwenden, wenn Sie die Ränder definieren. Alle anderen Eigenschaften werden ignoriert.

## Syntax

```css
:first {
  /* ... */
}
```

## Beispiele

### HTML

```html
<p>Erste Seite.</p>
<p>Zweite Seite.</p>
<button>Drucken!</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

### Ergebnis

Drücken Sie den "Drucken!"-Knopf, um das Beispiel zu drucken. Die Wörter auf der ersten Seite sollten sich ungefähr in der Mitte befinden, während andere Seiten ihren Inhalt in der Standardposition haben.

{{ EmbedLiveSample('Examples', '80%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("@page")}}
- Andere seitenspezifische Pseudoklassen: {{Cssxref(":left")}}, {{Cssxref(":right")}}
