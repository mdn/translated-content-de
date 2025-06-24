---
title: Beispiel für einen Stapelkontext 1
slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

## Beschreibung

Beginnen wir mit einem einfachen Beispiel. Im Stammstapelkontext gibt es zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. Innerhalb von DIV #1 befindet sich ein absolut positioniertes DIV #2, während sich in DIV #3 ein absolut positioniertes DIV #4 befindet, beide ohne `z-index`-Eigenschaften.

Der einzige Stapelkontext ist der Stammkontext. Ohne `z-index`-Werte werden Elemente in der Reihenfolge ihres Auftretens gestapelt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (ungleich null und nicht auto) `z-index`-Wert zugewiesen wird, wird es über allen anderen DIVs dargestellt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05b.png)

Wenn dann auch DIV #4 ein positiver `z-index` zugewiesen wird, der größer ist als der von DIV #2, wird es über allen anderen DIVs einschließlich DIV #2 dargestellt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05c.png)

In diesem letzten Beispiel sehen Sie, dass DIV #2 und DIV #4 keine Geschwister sind, weil sie verschiedenen Eltern in der Hierarchie der HTML-Elemente angehören. Dennoch kann die Stapelung von DIV #4 im Verhältnis zu DIV #2 durch `z-index` gesteuert werden. Da DIV #1 und DIV #3 keinen `z-index`-Wert zugewiesen bekommen, erzeugen sie keinen Stapelkontext. Dies bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum selben Stammstapelkontext gehört.

In Bezug auf Stapelkontexte werden DIV #1 und DIV #3 in das Stamm-Element integriert, und die resultierende Hierarchie ist wie folgt:

- Stammstapelkontext
  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchsichtig. Es ist wichtig zu bedenken, dass das Zuweisen einer Opazität von weniger als 1 zu einem positionierten Element implizit einen Stapelkontext erzeugt, genau wie das Hinzufügen eines `z-index`-Werts. Und dieses Beispiel zeigt, was passiert, wenn ein übergeordnetes Element keinen Stapelkontext erzeugt.

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

- [Beispiel: 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2)
- [Beispiel: 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
