---
title: ":first"
slug: Web/CSS/:first
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:first`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule), repräsentiert die erste Seite eines gedruckten Dokuments. (Siehe {{cssxref(":first-child")}} für das allgemeine erste Element eines Knotens.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> Sie können mit dieser Pseudo-Klasse nicht alle CSS-Eigenschaften ändern. Sie können nur die Ränder, {{cssxref("orphans")}}, {{cssxref("widows")}} und Seitenumbrüche des Dokuments ändern. Außerdem dürfen Sie beim Festlegen der Ränder nur [absolute-Längeneinheiten](/de/docs/Web/CSS/length#absolute_length_units) verwenden. Alle anderen Eigenschaften werden ignoriert.

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

Drücken Sie die "Drucken!"-Taste, um das Beispiel zu drucken. Die Wörter auf der ersten Seite sollten sich irgendwo in der Nähe der Mitte befinden, während andere Seiten ihre Inhalte an der Standardposition haben.

{{ EmbedLiveSample('Examples', '80%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("@page")}}
- Andere seitenbezogene Pseudo-Klassen: {{Cssxref(":left")}}, {{Cssxref(":right")}}
