---
title: scroll-padding-right
slug: Web/CSS/Reference/Properties/scroll-padding-right
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die Eigenschaft `scroll-padding-right` definiert Versätze für den rechten Rand der _optimalen Anzeigeregion_ des Scrollbereichs: die Region, die als Zielregion verwendet wird, um Elemente in die Sicht des Benutzers zu bringen. Dies ermöglicht es dem Autor, Regionen des Scrollbereichs auszuschließen, die durch anderen Inhalt verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollbereichs zu schaffen.

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
  - : Ein nach innen gerichteter Versatz vom oberen Rand des Scrollbereichs, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird in der Regel 0px sein, aber ein Benutzeragent ist in der Lage, etwas anderes zu erkennen und zu tun, wenn ein nicht-nuller Wert passender ist.

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
- [Präzise Kontrolle über das Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
