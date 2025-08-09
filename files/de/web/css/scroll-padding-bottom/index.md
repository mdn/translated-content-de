---
title: scroll-padding-bottom
slug: Web/CSS/scroll-padding-bottom
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-bottom` definiert Offsets für den unteren Bereich der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion verwendet wird, um Elemente im Sichtbereich des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt verdeckt werden (wie z. B. fest positionierte Werkzeugleisten oder Seitenleisten), oder um mehr Raum zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein nach innen gerichteter Offset vom unteren Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird durch den Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann etwas anderes erkennen und etwas anderes tun, wenn ein anderer Wert geeigneter ist.

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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
