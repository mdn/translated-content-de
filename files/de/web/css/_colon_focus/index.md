---
title: :focus
slug: Web/CSS/:focus
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:focus`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (zum Beispiel ein Formulareingabefeld), das den Fokus erhalten hat. Sie wird normalerweise ausgelöst, wenn der Benutzer auf ein Element klickt oder tippt oder es mit der <kbd>Tab</kbd>-Taste auf der Tastatur auswählt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus.html", "tabbed-shorter")}}

> [!NOTE]
> Diese Pseudoklasse gilt nur für das fokussierte Element selbst. Verwenden Sie {{CSSxRef(":focus-within")}}, wenn Sie ein Element auswählen möchten, das _ein_ fokussiertes Element _enthält_.

## Syntax

```css
:focus {
  /* ... */
}
```

## Barrierefreiheit

Stellen Sie sicher, dass der visuelle Fokusindikator für Menschen mit Sehbehinderungen erkennbar ist. Dies kommt auch jedem zugute, der einen Bildschirm in einem hell beleuchteten Raum (z. B. draußen in der Sonne) verwendet. [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) fordert, dass der visuelle Fokusindikator mindestens einen Kontrast von 3:1 hat.

- Barrierefreie visuelle Fokusindikatoren: [Give Your Site Some Focus! Tipps für die Gestaltung nützlicher und brauchbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Entfernen Sie niemals einfach den Fokusrahmen (sichtbaren Fokusindikator), ohne ihn durch einen Fokusrahmen zu ersetzen, der den [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfüllt.

- Schneller Tipp: [Entfernen Sie niemals CSS-Outlines](https://www.a11yproject.com/posts/never-remove-css-outlines/)

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
