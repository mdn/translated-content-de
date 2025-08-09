---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-right` definiert Versätze für die rechte Seite des _optimalen Anzeigebereichs_ des Scrollports: der Bereich, der als Zielregion für das Platzieren von Elementen im Sichtbereich des Nutzers dient. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch anderen Inhalt verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-right")}}

```css interactive-example-choice
scroll-padding-right: 0;
```

```css interactive-example-choice
scroll-padding-right: 20px;
```

```css interactive-example-choice
scroll-padding-right: 2em;
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
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
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
scroll-padding-right: auto;

/* <length> values */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Global values */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom oberen Rand des Scrollports, entweder als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird in der Regel 0px sein, aber ein Benutzeragent kann einsehen und eine andere Entscheidung treffen, wenn ein Wert ungleich Null angemessener ist.

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
