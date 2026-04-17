---
title: "`:focus` CSS-Pseudoklasse"
short-title: :focus
slug: Web/CSS/Reference/Selectors/:focus
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:focus`**-Pseudoklasse [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element (wie ein Formulareingabefeld), das den Fokus erhalten hat. Sie wird im Allgemeinen ausgelöst, wenn der Benutzer auf ein Element klickt oder tippt oder es mit der <kbd>Tab</kbd>-Taste der Tastatur auswählt.

{{InteractiveExample("CSS Demo: :focus", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus {
  background-color: lightblue;
}

select:focus {
  background-color: ivory;
}
```

```html interactive-example
<form>
  <p>Which flavor would you like to order?</p>
  <label>Full Name: <input name="firstName" type="text" /></label>
  <label
    >Flavor:
    <select name="flavor">
      <option>Cherry</option>
      <option>Green Tea</option>
      <option>Moose Tracks</option>
      <option>Mint Chip</option>
    </select>
  </label>
</form>
```

> [!NOTE]
> Diese Pseudoklasse gilt nur für das fokussierte Element selbst. Verwenden Sie {{CSSxRef(":focus-within")}}, wenn Sie ein Element auswählen möchten, das _ein_ fokussiertes Element _enthält_.

## Syntax

```css
:focus {
  /* ... */
}
```

## Barrierefreiheit

Stellen Sie sicher, dass der visuelle Fokusindikator von Menschen mit eingeschränktem Sehvermögen gesehen werden kann. Dies wird auch jedem helfen, der einen Bildschirm in einem hell erleuchteten Raum verwendet (z. B. außerhalb in der Sonne). [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt, dass der visuelle Fokusindikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps zum Entwurf nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Entfernen Sie niemals einfach den Fokusrahmen (sichtbarer Fokusindikator), ohne ihn durch einen Fokusrahmen zu ersetzen, der die [WCAG 2.1 SC 1.4.11 Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfüllt.

- Schneller Tipp: [Entfernen Sie niemals CSS-Rahmen](https://www.a11yproject.com/posts/never-remove-css-outlines/)

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
