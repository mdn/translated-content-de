---
title: page-break-inside
slug: Web/CSS/page-break-inside
l10n:
  sourceCommit: cebc05cfe508d5cd8c6a98359a3913cf19a707d3
---

{{CSSRef}}{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-inside")}} ersetzt.

Die **`page-break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _innerhalb_ des aktuellen Elements an.

{{EmbedInteractiveExample("pages/css/page-break-inside.html")}}

## Syntax

```css
/* Keyword values */
page-break-inside: auto;
page-break-inside: avoid;

/* Global values */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: revert-layer;
page-break-inside: unset;
```

### Werte

- `auto`
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `avoid`
  - : Vermeidet Seitenumbrüche innerhalb des Elements.

## Seitenumbruch-Aliasnamen

Die Eigenschaft `page-break-inside` ist nun eine veraltete Eigenschaft, ersetzt durch {{cssxref("break-inside")}}.

Aus Kompatibilitätsgründen sollte `page-break-inside` von Browsern als Alias von `break-inside` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-inside` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Seitenumbrüchen innerhalb von Elementen

#### HTML

```html
<div class="page">
  <p>This is the first paragraph.</p>
  <section class="list">
    <span>A list</span>
    <ol>
      <li>one</li>
      <!-- <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
    <!-- <li>two</li> -->
  </ul>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph, it contains more text.</p>
  <p>
    This is the fourth paragraph. It has a little bit more text than the third
    one.
  </p>
</div>
```

#### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Avoiding_page_breaks_inside_elements", 400, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-before")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
