---
title: :any-link
slug: Web/CSS/:any-link
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Der **`:any-link`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das als Quellanker eines Hyperlinks fungiert, unabhängig davon, ob es besucht wurde. Anders ausgedrückt, er passt auf jedes {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element, das ein `href`-Attribut besitzt. Somit stimmt es mit allen Elementen überein, die zu {{cssxref(":link")}} oder {{cssxref(":visited")}} passen.

{{InteractiveExample("CSS Demo: :any-link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:any-link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages that you might have visited:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/YouTube">Google</a>
  </li>
</ul>
<p>Pages unlikely to be in your history:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-3">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-3">Random Example page</a>
  </li>
</ul>
```

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

- [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links)
- Passt zu HTML-Elementen: [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) und [`<area>`](/de/docs/Web/HTML/Reference/Elements/area) mit einem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut
- Verwandte CSS-Selektoren:

  - [`:visited`](/de/docs/Web/CSS/:visited)
  - [`:link`](/de/docs/Web/CSS/:link)
