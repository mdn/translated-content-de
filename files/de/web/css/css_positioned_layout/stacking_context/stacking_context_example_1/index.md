---
title: Stacking-Kontext Beispiel 1
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

## Beschreibung

Lassen Sie uns mit einem grundlegenden Beispiel beginnen. Im Wurzel-Stacking-Kontext gibt es zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. Innerhalb von DIV #1 befindet sich ein absolut positioniertes DIV #2, während in DIV #3 ein absolut positioniertes DIV #4 enthalten ist, beide ohne `z-index`-Eigenschaften.

Der einzige Stacking-Kontext ist der Wurzelkontext. Ohne `z-index`-Werte werden die Elemente in Reihenfolge ihres Auftretens gestapelt.

![Stacking-Kontext Beispiel 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (nicht-null und nicht-auto) `z-index`-Wert zugewiesen wird, wird es über allen anderen DIVs gerendert.

![Stacking-Kontext Beispiel 1](understanding_zindex_05b.png)

Wenn DIV #4 ebenfalls ein positiver `z-index` zugewiesen wird, der größer ist als der `z-index` von DIV #2, wird DIV #4 über allen anderen DIVs einschließlich DIV #2 gerendert.

![Stacking-Kontext Beispiel 1](understanding_zindex_05c.png)

In diesem letzten Beispiel sehen Sie, dass DIV #2 und DIV #4 keine Geschwister sind, weil sie zu unterschiedlichen Eltern in der Hierarchie der HTML-Elemente gehören. Dennoch kann die Stapelung von DIV #4 in Bezug auf DIV #2 durch `z-index` gesteuert werden. Es geschieht, dass, da DIV #1 und DIV #3 kein `z-index`-Wert zugewiesen sind, sie keinen Stacking-Kontext erstellen. Das bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum selben Wurzel-Stacking-Kontext gehört.

Im Hinblick auf Stacking-Kontexte werden DIV #1 und DIV #3 in das Wurzelelement assimiliert, und die resultierende Hierarchie ist die folgende:

- Wurzel-Stacking-Kontext
  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht transparent. Es ist wichtig zu beachten, dass die Zuweisung einer Opazität kleiner als 1 zu einem positionierten Element implizit einen Stacking-Kontext erstellt, genau wie das Hinzufügen eines `z-index`-Werts. Und dieses Beispiel zeigt, was passiert, wenn ein Elternelement keinen Stacking-Kontext erstellt.

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

- [Beispiel: 2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2)
- [Beispiel: 3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS Positionierungs-Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
