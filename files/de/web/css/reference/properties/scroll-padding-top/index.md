---
title: scroll-padding-top
slug: Web/CSS/Reference/Properties/scroll-padding-top
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die **`scroll-padding-top`**-Eigenschaft definiert die Versätze für den oberen Bereich der _optimalen Anzeigeregion_ des Scrollportals: die Region, die als Zielregion verwendet wird, um Elemente im Sichtbereich des Nutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollportals auszuschließen, die durch andere Inhalte verdeckt sind (wie z.B. feste Werkzeugleisten oder Seitenleisten) oder um mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollportals zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-top")}}

```css interactive-example-choice
scroll-padding-top: 0;
```

```css interactive-example-choice
scroll-padding-top: 20px;
```

```css interactive-example-choice
scroll-padding-top: 2em;
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

## Syntax

```css
/* Keyword values */
scroll-padding-top: auto;

/* <length> values */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* Global values */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: revert-layer;
scroll-padding-top: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein nach innen gerichteter Versatz vom oberen Rand des Scrollportals, angegeben als eine gültige Länge oder ein Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein anderer Wert als 0 angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
