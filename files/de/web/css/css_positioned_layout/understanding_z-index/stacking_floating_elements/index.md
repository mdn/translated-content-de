---
title: Stapeln von schwebenden Elementen
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Bei schwebenden Elementen ist die Stapelreihenfolge ein wenig anders. Schwebende Elemente werden zwischen nicht positionierten Elementen und positionierten Elementen platziert:

1. Der Hintergrund und die Ränder des Wurzelelements.
2. Nachkommende nicht positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.
3. _Schwebende Elemente_.
4. Nachkommende positionierte Elemente in der Reihenfolge ihres Erscheinens im HTML.

Siehe [Arten der Positionierung](/de/docs/Web/CSS/position#types_of_positioning) für eine Erklärung von positionierten und nicht positionierten Elementen.

> [!NOTE]
> Wenn ein `opacity`-Wert auf ein nicht positioniertes Element angewendet wird (d. h., DIV #4 im untenstehenden Beispiel), passiert etwas Merkwürdiges: Der Hintergrund und der Rand dieses Blocks erscheinen oberhalb der schwebenden Blöcke und der positionierten Blöcke. Dies liegt an einem besonderen Teil der Spezifikation: Die Anwendung eines `opacity`-Werts erzeugt einen neuen Stacking-Kontext (siehe [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Beispiel

In diesem Beispiel können Sie sehen, dass Hintergrund und Rand des nicht positionierten Elements (DIV #4) vollständig unbeeinflusst von schwebenden Elementen sind, aber der Inhalt ist betroffen. Dies passiert gemäß dem Standardverhalten von Floats, was mit einer Regel, die der obigen Liste hinzugefügt wurde, gezeigt werden kann:

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

- [Stapeln ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die angewendet werden, wenn `z-index` nicht verwendet wird.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standard-Stapelreihenfolge zu ändern.
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stacking-Kontext.
- [Beispiel für Stacking-Kontext 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, z-index auf der letzten Ebene
- [Beispiel für Stacking-Kontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, z-index auf allen Ebenen
- [Beispiel für Stacking-Kontext 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, z-index auf der zweiten Ebene
