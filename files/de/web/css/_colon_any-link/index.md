---
title: ":any-link"
slug: Web/CSS/:any-link
l10n:
  sourceCommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{CSSRef}}

Der **`:any-link`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das als Quellanker eines Hyperlinks fungiert, unabhängig davon, ob es besucht wurde. Mit anderen Worten, es trifft auf jedes {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element zu, das ein `href` Attribut hat. Somit entspricht es allen Elementen, die mit {{cssxref(":link")}} oder {{cssxref(":visited")}} übereinstimmen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-any-link.html", "tabbed-shorter")}}

## Syntax

```css
:any-link {
  /* ... */
}
```

## Beispiele

### HTML

```html
<a href="https://example.com">External link</a><br />
<a href="#">Internal target link</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- Übereinstimmungen bei HTML-Elementen: [`<a>`](/de/docs/Web/HTML/Element/a) und [`<area>`](/de/docs/Web/HTML/Element/area) mit einem [`href`](/de/docs/Web/HTML/Element/a#href) Attribut
- Verwandte CSS-Selektoren:

  - [`:visited`](/de/docs/Web/CSS/:visited)
  - [`:link`](/de/docs/Web/CSS/:link)
