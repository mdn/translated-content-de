---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die Eigenschaft `scroll-padding-inline-end` definiert Offsets für die Endkante in der Inline-Dimension des _optimalen Anzeigebereichs_ des Scrollports: Der Bereich, der als Zielregion verwendet wird, um Inhalte in das Sichtfeld des Benutzers zu bringen. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die von anderen Inhalten verdeckt werden (wie z.B. fest positionierte Symbolleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports schaffen.

{{InteractiveExample("CSS Demo: scroll-padding-inline-end")}}

```css interactive-example-choice
scroll-padding-inline-end: 0;
```

```css interactive-example-choice
scroll-padding-inline-end: 20px;
```

```css interactive-example-choice
scroll-padding-inline-end: 2em;
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
scroll-padding-inline-end: auto;

/* <length> values */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* Global values */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: revert-layer;
scroll-padding-inline-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Offset von der Inline-Endkante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird vom User-Agent bestimmt. Dies wird in der Regel 0px sein, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null geeigneter ist.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
