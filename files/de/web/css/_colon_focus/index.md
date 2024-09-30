---
title: ":focus"
slug: Web/CSS/:focus
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:focus`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie zum Beispiel ein Formulareingabefeld), das den Fokus erhalten hat. Es wird im Allgemeinen ausgelöst, wenn der Benutzer auf ein Element klickt oder tippt oder es mit der <kbd>Tab</kbd>-Taste auf der Tastatur auswählt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus.html", "tabbed-shorter")}}

> [!NOTE]
> Diese Pseudoklasse wird nur auf das fokussierte Element selbst angewendet. Verwenden Sie {{CSSxRef(":focus-within")}}, wenn Sie ein Element auswählen möchten, das ein fokussiertes Element _enthält_.

## Syntax

```css
:focus {
  /* ... */
}
```

## Barrierefreiheit

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit eingeschränktem Sehvermögen gesehen werden kann. Dies kommt auch jedem zugute, der einen Bildschirm in einem hell beleuchteten Raum verwendet (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator ein Verhältnis von mindestens 3 zu 1 hat.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps für das Design nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Entfernen Sie niemals einfach das Fokus-Outlining (sichtbarer Fokusindikator), ohne es durch ein Fokus-Outlining zu ersetzen, das die Anforderungen des [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfüllt.

- Schneller Tipp: [CSS-Outlines niemals entfernen](https://www.a11yproject.com/posts/never-remove-css-outlines/)

## Beispiele

### HTML

```html
<div><input class="red-input" value="I'll be red when focused." /></div>
<div><input class="blue-input" value="I'll be blue when focused." /></div>
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
