---
title: ":first"
slug: Web/CSS/:first
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:first`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird, repräsentiert die erste Seite eines gedruckten Dokuments. (Siehe {{cssxref(":first-child")}} für das allgemeine erste Element eines Knotens.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Sie können mit dieser Pseudoklasse nicht alle CSS-Eigenschaften ändern. Es können nur die Ränder, {{cssxref("orphans")}}, {{cssxref("widows")}} und Seitenumbrüche des Dokuments geändert werden. Außerdem dürfen für die Definition der Ränder nur [absolute Längeneinheiten](/de/docs/Web/CSS/length#absolute_length_units) verwendet werden. Alle anderen Eigenschaften werden ignoriert.

## Syntax

```css
:first {
  /* ... */
}
```

## Beispiele

### HTML

```html
<p>First Page.</p>
<p>Second Page.</p>
<button>Print!</button>
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

Drücken Sie die Schaltfläche „Drucken!“, um das Beispiel zu drucken. Die Wörter auf der ersten Seite sollten sich ungefähr in der Mitte befinden, während der Inhalt auf anderen Seiten in der Standardposition erscheint.

{{ EmbedLiveSample('Examples', '80%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("@page")}}
- Andere seitenbezogene Pseudoklassen: {{Cssxref(":left")}}, {{Cssxref(":right")}}
