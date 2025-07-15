---
title: :any-link
slug: Web/CSS/:any-link
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:any-link`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Selektor repräsentiert ein Element, das als Quellanker eines Hyperlinks fungiert, unabhängig davon, ob es besucht wurde. Mit anderen Worten, er stimmt mit jedem {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element überein, das ein `href`-Attribut hat. Somit stimmt er mit allen Elementen überein, die mit {{cssxref(":link")}} oder {{cssxref(":visited")}} übereinstimmen.

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
- Entspricht HTML-Elementen: [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) und [`<area>`](/de/docs/Web/HTML/Reference/Elements/area) mit einem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut
- Verwandte CSS-Selektoren:
  - [`:visited`](/de/docs/Web/CSS/:visited)
  - [`:link`](/de/docs/Web/CSS/:link)
