---
title: Beispiel eines Stapelkontexts 1
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

## Beschreibung

Beginnen wir mit einem einfachen Beispiel. Im Wurzel-Stapelkontext gibt es zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. In DIV #1 befindet sich ein absolut positioniertes DIV #2, während sich in DIV #3 ein absolut positioniertes DIV #4 befindet, beide ebenfalls ohne `z-index`-Eigenschaften.

Der einzige Stapelkontext ist der Wurzelkontext. Ohne `z-index`-Werte werden die Elemente in der Reihenfolge ihres Auftretens gestapelt.

![Beispiel eines Stapelkontexts 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (nicht null und nicht auto) `z-index`-Wert zugewiesen wird, wird es über allen anderen DIVs gerendert.

![Beispiel eines Stapelkontexts 1](understanding_zindex_05b.png)

Wenn DIV #4 ebenfalls ein positiver `z-index` zugewiesen wird, der größer als der `z-index` von DIV #2 ist, wird es über allen anderen DIVs inklusive DIV #2 gerendert.

![Beispiel eines Stapelkontexts 1](understanding_zindex_05c.png)

In diesem letzten Beispiel können Sie sehen, dass DIV #2 und DIV #4 keine Geschwister sind, da sie zu unterschiedlichen Eltern in der Hierarchie der HTML-Elemente gehören. Trotzdem kann das Stapeln von DIV #4 in Bezug auf DIV #2 durch `z-index` gesteuert werden. Da DIV #1 und DIV #3 keinen `z-index`-Wert zugewiesen bekommen, erzeugen sie keinen Stapelkontext. Das bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum selben Wurzel-Stapelkontext gehört.

In Bezug auf die Stapelkontexte werden DIV #1 und DIV #3 in das Wurzelelement aufgenommen, und die resultierende Hierarchie ist die folgende:

- Wurzel-Stapelkontext

  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchscheinend. Es ist wichtig, sich daran zu erinnern, dass das Zuweisen einer Opazität von weniger als 1 zu einem positionierten Element implizit einen Stapelkontext erzeugt, genauso wie das Hinzufügen eines `z-index`-Werts. Und dieses Beispiel zeigt, was passiert, wenn ein Elternelement keinen Stapelkontext erzeugt.

## Beispiel

### HTML

```html
<div id="div1">
  <br /><span class="bold">DIV #1</span> <br />position: relative;
  <div id="div2">
    <br /><span class="bold">DIV #2</span> <br />position: absolute;
    <br />z-index: 1;
  </div>
</div>

<br />

<div id="div3">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
  <div id="div4">
    <br /><span class="bold">DIV #4</span> <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>
```

### CSS

```css
.bold {
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 80px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

## Ergebnis

{{ EmbedLiveSample('Example', '', '300') }}

## Siehe auch

- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Umgang mit schwebenden Elementen beim Stapeln.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Anleitung zur Verwendung von `z-index` zur Änderung des Standard-Stapelns.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel eines Stapelkontexts 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Beispiel eines Stapelkontexts 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
