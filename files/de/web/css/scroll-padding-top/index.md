---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`scroll-padding-top`** Eigenschaft definiert Versätze für die Oberseite des _optimalen Anzeigebereichs_ des Scrollport: der Bereich, der als Zielbereich verwendet wird, um Dinge in das Blickfeld des Benutzers zu bringen. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die von anderem Inhalt verdeckt sind (wie fest positionierte Symbolleisten oder Seitenleisten) oder mehr Abstand zwischen einem gezielten Element und den Rändern des Scrollports schaffen.

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
  - : Ein nach innen gerichteter Versatz von der oberen Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein nicht-null Wert passender ist.

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
