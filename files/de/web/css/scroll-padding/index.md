---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-padding`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Scroll-Padding auf allen Seiten eines Elements gleichzeitig fest, ähnlich wie die {{cssxref("padding")}}-Eigenschaft dies für das Padding eines Elements tut.

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

Die `scroll-padding-*`-Eigenschaften definieren Offsets für die _optimale Anzeigeregion_ des Scrollport: die Region, die als Zielregion verwendet wird, um Dinge in den Blick des Benutzers zu rücken. Dies ermöglicht es dem Autor, Regionen des Scrollport auszuschließen, die durch andere Inhalte verdeckt sind (wie fest positionierte Werkzeugleisten oder Seitenleisten), oder um mehr Abstand zwischen einem fokussierten Element und den Rändern des Scrollport zu schaffen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand-Eigenschaft für die folgenden CSS-Eigenschaften:

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
  - : Ein inneres Offset vom entsprechenden Rand des Scrollport, als gültige {{cssxref("&lt;length&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies ist in der Regel `0px`, aber der Benutzeragent kann auch etwas anderes erkennen und tun, wenn ein anderer Wert mehr geeignet ist.

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
