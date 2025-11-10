---
title: :first
slug: Web/CSS/Reference/Selectors/:first
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`:first`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet wird, repräsentiert die erste Seite eines gedruckten Dokuments. (Siehe {{cssxref(":first-child")}} für das allgemeine erste Element eines Knotens.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Sie können nicht alle CSS-Eigenschaften mit dieser Pseudoklasse ändern. Sie können nur die Ränder, {{cssxref("orphans")}}, {{cssxref("widows")}} und Seitenumbrüche des Dokuments ändern. Darüber hinaus dürfen Sie nur [absolute-Längen](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) Einheiten verwenden, wenn Sie die Ränder definieren. Alle anderen Eigenschaften werden ignoriert.

## Syntax

```css
:first {
  /* ... */
}
```

## Beispiele

### Verwendung von `:first` für Druckstile

Drücken Sie die Schaltfläche "Drucken!", um das Beispiel zu drucken. Die Wörter auf der ersten Seite sollten sich irgendwo in der Mitte befinden, während andere Seiten ihre Inhalte an der Standardposition haben:

```html live-sample___colon-first
<p>First Page.</p>
<p>Second Page.</p>
<button>Print!</button>
```

```css live-sample___colon-first
@page :first {
  size: 8.5in 11in;
  margin-left: 3in;
  margin-top: 5in;
}

p {
  page-break-after: always;
  font: 1.2em sans-serif;
}
```

```js live-sample___colon-first
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

{{EmbedLiveSample('colon-first', '100%', , , , , , "allow-modals")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("@page")}}
- Andere seitenbezogene Pseudoklassen: {{Cssxref(":left")}}, {{Cssxref(":right")}}
