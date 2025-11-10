---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scroll-padding`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt den Scroll-Abstand auf allen Seiten eines Elements gleichzeitig, ähnlich wie die {{cssxref("padding")}}-Eigenschaft den Abstand eines Elements festlegt.

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

Die `scroll-padding-*`-Eigenschaften definieren Abstände für den _optimalen Anzeigebereich_ des Scroll-Containers: den Bereich, der als Zielregion verwendet wird, um Elemente in den Blick des Benutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scroll-Containers auszuschließen, die durch anderen Inhalt (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Raum zwischen einem anvisierten Element und den Rändern des Scroll-Containers zu schaffen.

## Zusätzliche Eigenschaften

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
  - : Ein nach innen gerichteter Abstand von der entsprechenden Kante des Scroll-Containers, als gültige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Abstand wird vom Benutzeragenten bestimmt. In der Regel wird dies `0px` sein, aber der Benutzeragent kann auch etwas anderes tun, wenn ein nicht-Null-Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
