---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-padding`**-[Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt den Scrollabstand auf allen Seiten eines Elements gleichzeitig, ähnlich wie die {{cssxref("padding")}}-Eigenschaft den Abstand innerhalb eines Elements definiert.

{{InteractiveExample("CSS Demo: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

Die `scroll-padding-*` Eigenschaften definieren Versätze für die _optimale Anzeigeregion_ des Scrollportals: die Region, die als Zielregion dient, um Objekte in den Sichtbereich des Benutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollportals auszuschließen, die durch andere Inhalte (wie fixierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollportals zu schaffen.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein in den Scrollport einwärts gerichteter Versatz als gültige {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Im Allgemeinen ist dies `0px`, aber der User-Agent kann einen anderen Wert bestimmen, wenn ein nicht nullwertiger Wert passender ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
