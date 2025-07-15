---
title: :first
slug: Web/CSS/:first
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:first`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet wird, repräsentiert die erste Seite eines gedruckten Dokuments. (Siehe {{cssxref(":first-child")}} für das allgemeine erste Element eines Knotens.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Sie können mit dieser Pseudoklasse nicht alle CSS-Eigenschaften ändern. Sie können nur die Ränder, {{cssxref("orphans")}}, {{cssxref("widows")}} und Seitenumbrüche des Dokuments ändern. Darüber hinaus dürfen Sie beim Definieren der Ränder nur [absolute Längen](/de/docs/Web/CSS/length#absolute_length_units) verwenden. Alle anderen Eigenschaften werden ignoriert.

## Syntax

```css
:first {
  /* ... */
}
```

## Beispiele

### Verwendung von `:first` für Druckstile von Seiten

Drücken Sie die "Drucken!"-Taste, um das Beispiel zu drucken. Die Wörter auf der ersten Seite sollten sich ungefähr in der Mitte befinden, während andere Seiten ihren Inhalt an der Standardposition haben werden:

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
