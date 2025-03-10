---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Polster auf allen Seiten eines Elements gleichzeitig, ähnlich wie die {{cssxref("padding")}}-Eigenschaft das Polster eines Elements setzt.

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
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

Die `scroll-padding-*`-Eigenschaften definieren Abstände für den _optimalen Betrachtungsbereich_ des Scrollbereichs: den Bereich, der als Zielbereich verwendet wird, um Dinge in den Blick des Benutzers zu rücken. Dies ermöglicht es dem Autor, Bereiche des Scrollbereichs auszuschließen, die von anderem Inhalt verdeckt werden (wie z.B. fixierte Werkzeugleisten oder Seitenleisten), oder um mehr Raum zwischen einem angezielten Element und den Rändern des Scrollbereichs zu schaffen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Ein nach innen gerichteter Abstand von der entsprechenden Kante des Scrollbereichs, als gültige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Abstand wird durch den User-Agent bestimmt. Dies ist in der Regel `0px`, jedoch kann der User-Agent auch etwas anderes bestimmen, wenn ein anderer Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS-Scroll-Snap](https://web.dev/articles/css-scroll-snap)
