---
title: Stapeln von Floatelementen
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Bei Floatelementen unterscheidet sich die Stapelreihenfolge etwas. Floatelemente werden zwischen nicht positionierten und positionierten Elementen platziert:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachfahren nicht positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.
3. _Floatelemente_.
4. Nachfahren positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.

Sehen Sie sich [Arten der Positionierung](/de/docs/Web/CSS/position#types_of_positioning) an, um eine Erklärung von positionierten und nicht positionierten Elementen zu erhalten.

> [!NOTE]
> Wenn ein `opacity`-Wert auf ein nicht positioniertes Element angewendet wird (d.h. DIV #4 im untenstehenden Beispiel), passiert etwas Merkwürdiges: Der Hintergrund und der Rand dieses Blocks tauchen über den schwebenden und den positionierten Blöcken auf. Dies liegt an einem eigenartigen Teil der Spezifikation: Das Anwenden eines `opacity`-Werts erzeugt einen neuen Stapelkontext (siehe [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Beispiel

In diesem Beispiel können Sie sehen, dass der Hintergrund und der Rand des nicht positionierten Elements (DIV #4) völlig unbeeinflusst von den Floatelementen bleibt, aber der Inhalt wird beeinflusst. Dies geschieht gemäß dem Standardverhalten von Floats, das mit einer zur obigen Liste hinzugefügten Regel gezeigt werden kann:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachfahren nicht positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.
3. Floatelemente.
4. _Nachfahren nicht positionierter Inline-Elemente_.
5. Nachfahren positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.

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

- [Stapelung ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-Ebenen HTML-Hierarchie, z-index auf der letzten Ebene
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-Ebenen HTML-Hierarchie, z-index auf allen Ebenen
- [Stapelkontext-Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-Ebenen HTML-Hierarchie, z-index auf der zweiten Ebene
