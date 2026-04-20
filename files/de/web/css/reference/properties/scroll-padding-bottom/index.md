---
title: "`scroll-padding-bottom` CSS property"
short-title: scroll-padding-bottom
slug: Web/CSS/Reference/Properties/scroll-padding-bottom
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die `scroll-padding-bottom`-Eigenschaft definiert Versätze für die Unterseite der _optimalen Anzeigeregion_ des Scrollportals: die Region, die als Zielregion verwendet wird, um Elemente für den Benutzer im Blickfeld zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollportals auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollportals zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-bottom")}}

```css interactive-example-choice
scroll-padding-bottom: 0;
```

```css interactive-example-choice
scroll-padding-bottom: 20px;
```

```css interactive-example-choice
scroll-padding-bottom: 2em;
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
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Keyword values */
scroll-padding-bottom: auto;

/* <length> values */
scroll-padding-bottom: 10px;
scroll-padding-bottom: 1em;
scroll-padding-bottom: 10%;

/* Global values */
scroll-padding-bottom: inherit;
scroll-padding-bottom: initial;
scroll-padding-bottom: revert;
scroll-padding-bottom: revert-layer;
scroll-padding-bottom: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom unteren Rand des Scrollportals, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Im Allgemeinen wird dies 0px sein, aber ein Benutzeragent kann etwas anderes tun, wenn ein von Null abweichender Wert angemessener ist.

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
