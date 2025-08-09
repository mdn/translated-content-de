---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Padding auf allen Seiten eines Elements gleichzeitig, ähnlich wie die {{cssxref("padding")}}-Eigenschaft das Padding eines Elements festlegt.

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

Die Eigenschaften `scroll-padding-*` definieren Versätze für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielregion verwendet wird, um Dinge im Sichtbereich des Benutzers zu positionieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fixierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Zusammengesetzte Eigenschaften

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
  - : Ein innenliegender Versatz vom entsprechenden Rand des Scrollports, als gültige {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies ist im Allgemeinen `0px`, aber der User-Agent ist frei, etwas anderes zu erkennen und anzuwenden, falls ein anderer Wert geeigneter ist.

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
