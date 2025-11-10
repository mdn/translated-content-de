---
title: scroll-padding-bottom
slug: Web/CSS/Reference/Properties/scroll-padding-bottom
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Eigenschaft `scroll-padding-bottom` definiert Versätze für den unteren Rand des _optimalen Betrachtungsbereichs_ des Scrollport: der Bereich, der als Zielregion verwendet wird, um Elemente in das Sichtfeld des Nutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein innerer Versatz vom unteren Rand des Scrollports, als gültige Länge oder ein Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies ist in der Regel 0px, ein User-Agent kann jedoch erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

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
