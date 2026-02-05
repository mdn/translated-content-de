---
title: Stapelkontext-Beispiel 1
short-title: Beispiel 1
slug: Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1
l10n:
  sourceCommit: c1bbbf977b4fd477104265cd87f74cdf42616b0d
---

## Beschreibung

Beginnen wir mit einem einfachen Beispiel. Im Wurzel-Stapelkontext gibt es zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. Innerhalb von DIV #1 gibt es ein absolut positioniertes DIV #2, während in DIV #3 ein absolut positioniertes DIV #4 existiert, beide ebenfalls ohne `z-index`-Eigenschaften.

Der einzige Stapelkontext ist der Wurzelkontext. Ohne `z-index`-Werte werden Elemente in der Reihenfolge ihres Auftretens gestapelt.

![Stapelkontext-Beispiel 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (nicht null und nicht automatisch) `z-index`-Wert zugewiesen wird, wird es über allen anderen DIVs gerendert.

![Stapelkontext-Beispiel 1](understanding_zindex_05b.png)

Wenn DIV #4 ebenfalls ein positiver `z-index`, größer als der `z-index` von DIV #2, zugewiesen wird, wird es über allen anderen DIVs einschließlich DIV #2 gerendert.

![Stapelkontext-Beispiel 1](understanding_zindex_05c.png)

In diesem letzten Beispiel können Sie sehen, dass DIV #2 und DIV #4 keine Geschwister sind, da sie zu verschiedenen Eltern in der Hierarchie der HTML-Elemente gehören. Trotzdem kann das Stapeln von DIV #4 in Bezug auf DIV #2 durch `z-index` gesteuert werden. Da DIV #1 und DIV #3 keinen `z-index`-Wert oder andere [Merkmale, die einen Stapelkontext erzeugen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context#features_creating_stacking_contexts) zugewiesen haben, erzeugen sie keinen Stapelkontext. Das bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum selben Wurzel-Stapelkontext gehört.

In Bezug auf Stapelkontexte werden DIV #1 und DIV #3 in das Wurzelelement integriert, und die resultierende Hierarchie ist folgende:

- Wurzel-Stapelkontext
  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchscheinend. Es ist wichtig, sich daran zu erinnern, dass das Zuweisen eines Opazitätswerts von weniger als `1` zu einem Element implizit einen Stapelkontext erzeugt, ebenso wie das Hinzufügen eines `z-index`-Werts zu einem positionierten Element. Dieses Beispiel zeigt auch, was passiert, wenn ein Elternelement keinen Stapelkontext erzeugt.

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
  font-family: "Arial";
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

- [Beispiel: 2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2)
- [Beispiel: 3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3)
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
