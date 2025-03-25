---
title: Anordnung von schwebenden Elementen
slug: Web/CSS/CSS_positioned_layout/Stacking_floating_elements
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{CSSRef}}

Bei schwebenden Elementen ist die Anordnung etwas anders. Schwebende Elemente werden zwischen nicht positionierten Elementen und positionierten Elementen platziert:

1. Der Hintergrund und die Rahmen des Wurzelelements.
2. Nachkommen nicht positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.
3. _Schwebende Elemente_.
4. Nachkommen positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.

Sehen Sie [Arten der Positionierung](/de/docs/Web/CSS/position#types_of_positioning) für eine Erklärung zu positionierten und nicht positionierten Elementen.

> [!NOTE]
> Wenn einem nicht positionierten Element (d.h. DIV #4 im unten stehenden Beispiel) ein `opacity`-Wert zugewiesen wird, geschieht etwas Merkwürdiges: Der Hintergrund und der Rahmen dieses Blocks erscheinen über den schwebenden Blöcken und den positionierten Blöcken. Dies liegt an einem besonderen Teil der Spezifikation: Die Zuweisung eines `opacity`-Wertes erzeugt einen neuen Stapelkontext (siehe [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Beispiel

In diesem Beispiel können Sie sehen, dass der Hintergrund und der Rahmen des nicht positionierten Elements (DIV #4) von schwebenden Elementen völlig unbeeinflusst bleiben, aber der Inhalt ist betroffen. Dies geschieht gemäß dem standardmäßigen Verhalten von schwebenden Elementen, das durch eine zur obigen Liste hinzugefügte Regel veranschaulicht werden kann:

1. Der Hintergrund und die Rahmen des Wurzelelements.
2. Nachkommen nicht positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.
3. Schwebende Elemente.
4. _Nachkommen nicht positionierter Inline-Elemente_.
5. Nachkommen positionierter Elemente, in der Reihenfolge ihres Erscheinens im HTML.

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

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stapelungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- Modul [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)
