---
title: Schichtung von schwebenden Elementen
slug: Web/CSS/CSS_positioned_layout/Stacking_floating_elements
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Für schwebende Elemente ist die Stapelreihenfolge etwas anders. Schwebende Elemente werden zwischen nicht positionierten Elementen und positionierten Elementen platziert:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachkommende nicht positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.
3. _Schwebende Elemente_.
4. Nachkommende positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.

Siehe [Arten der Positionierung](/de/docs/Web/CSS/position#types_of_positioning) für eine Erklärung von positionierten und nicht positionierten Elementen.

> [!NOTE]
> Wenn ein `opacity`-Wert auf ein nicht positioniertes Element angewendet wird (d.h. DIV #4 im unten stehenden Beispiel), passiert etwas Merkwürdiges: Der Hintergrund und die Ränder dieses Blocks erscheinen über den schwebenden Blöcken und den positionierten Blöcken. Dies liegt an einem merkwürdigen Teil der Spezifikation: Durch das Anwenden eines `opacity`-Wertes wird ein neuer Stapelkontext erstellt (siehe [Was Ihnen niemand über Z-Index erzählt hat](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Beispiel

In diesem Beispiel sehen Sie, dass der Hintergrund und die Ränder des nicht positionierten Elements (DIV #4) von schwebenden Elementen völlig unberührt bleiben, der Inhalt jedoch betroffen ist. Dies geschieht gemäß dem Standardverhalten von Float, das mit einer zur obigen Liste hinzugefügten Regel gezeigt werden kann:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachkommende nicht positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.
3. Schwebende Elemente.
4. _Nachkommende nicht positionierte Inline-Elemente_.
5. Nachkommende positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.

### HTML

```html
<div id="abs1"><strong>DIV #1</strong><br />position: absolute;</div>

<div id="flo1"><strong>DIV #2</strong><br />float: left;</div>

<div id="flo2"><strong>DIV #3</strong><br />float: right;</div>

<br />

<div id="sta1"><strong>DIV #4</strong><br />no positioning</div>

<div id="abs2"><strong>DIV #5</strong><br />position: absolute;</div>

<div id="rel1"><strong>DIV #6</strong><br />position: relative;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}

#rel1 {
  position: relative;
  border: 1px dashed #996;
  background-color: #cff;
  margin: 0px 10px 0px 10px;
  text-align: left;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Schichtung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Anmerkungen zum Stapelkontext.
- [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, z-index auf der letzten Ebene
- [Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, z-index auf allen Ebenen
- [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-stufige HTML-Hierarchie, z-index auf der zweiten Ebene
