---
title: Stapeln von schwebenden Elementen
slug: Web/CSS/CSS_positioned_layout/Stacking_floating_elements
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Für schwebende Elemente ist die Stapelreihenfolge etwas anders. Schwebende Elemente werden zwischen nicht positionierten Elementen und positionierten Elementen platziert:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachkommende nicht positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.
3. _Schwebende Elemente_.
4. Nachkommende positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.

Siehe [Arten der Positionierung](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) für eine Erklärung von positionierten und nicht positionierten Elementen.

> [!NOTE]
> Wenn ein `opacity`-Wert auf ein nicht positioniertes Element angewendet wird (d.h. DIV #4 im unten stehenden Beispiel), passiert etwas Seltsames: Der Hintergrund und der Rand dieses Blocks erscheinen über den schwebenden und den positionierten Blöcken. Dies liegt an einem besonderen Teil der Spezifikation: Das Anwenden eines `opacity`-Wertes erzeugt einen neuen Stacking-Kontext (siehe [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Beispiel

In diesem Beispiel können Sie sehen, dass der Hintergrund und der Rand des nicht positionierten Elements (DIV #4) völlig unbeeinflusst von den schwebenden Elementen ist, aber der Inhalt ist betroffen. Dies geschieht gemäß dem Standardverhalten von schwebenden Elementen, das durch eine Regel in der obigen Liste gezeigt werden kann:

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
  border: 1px dashed #990000;
  background-color: #ffdddd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin: 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #009900;
  background-color: #ccffcc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #009900;
  background-color: #ccffcc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #999900;
  background-color: #ffdddd;
}

#rel1 {
  position: relative;
  border: 1px dashed #999966;
  background-color: #ccffff;
  margin: 0px 10px;
  text-align: left;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 250)}}

## Siehe auch

- [Understanding z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stacking without the `z-index` property](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [Using z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- [Stacking context](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- Modul für [CSS positioned layout](/de/docs/Web/CSS/Guides/Positioned_layout)
