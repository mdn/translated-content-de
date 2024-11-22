---
title: Beispiel für einen Stapelkontext 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

## Beschreibung

Beginnen wir mit einem einfachen Beispiel. Im Root-Stapelkontext gibt es zwei relativ positionierte `<div>` Elemente (DIV #1 und DIV #3) ohne `z-index` Eigenschaften. Innerhalb von DIV #1 befindet sich ein absolut positioniertes DIV #2, während sich in DIV #3 ein absolut positioniertes DIV #4 befindet, beide ohne `z-index` Eigenschaften.

Der einzige Stapelkontext ist der Root-Kontext. Ohne `z-index` Werte werden die Elemente in der Reihenfolge ihres Auftretens gestapelt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (nicht null und nicht automatisch) `z-index` Wert zugewiesen wird, wird es über allen anderen DIVs dargestellt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05b.png)

Wenn DIV #4 dann auch ein positiver `z-index` zugewiesen wird, der größer ist als der `z-index` von DIV #2, wird es über allen anderen DIVs einschließlich DIV #2 dargestellt.

![Beispiel für einen Stapelkontext 1](understanding_zindex_05c.png)

In diesem letzten Beispiel können Sie sehen, dass DIV #2 und DIV #4 keine Geschwisterelemente sind, da sie zu unterschiedlichen Eltern in der Hierarchie der HTML-Elemente gehören. Dennoch kann die Stapelung von DIV #4 im Verhältnis zu DIV #2 über `z-index` gesteuert werden. Da DIV #1 und DIV #3 keinen `z-index` Wert zugewiesen haben, erzeugen sie keinen Stapelkontext. Dies bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum selben Root-Stapelkontext gehört.

In Bezug auf Stapelkontexte werden DIV #1 und DIV #3 in das Root-Element integriert und die resultierende Hierarchie ist wie folgt:

- Root-Stapelkontext

  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchscheinend. Es ist wichtig zu beachten, dass das Zuweisen einer Deckkraft von weniger als 1 zu einem positionierten Element implizit einen Stapelkontext erstellt, genau wie das Hinzufügen eines `z-index` Werts. Dieses Beispiel zeigt, was passiert, wenn ein Elternelement keinen Stapelkontext erstellt.

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

- [Stapeln ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` zum Ändern der Standardstapelung verwendet wird.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel für einen Stapelkontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): HTML-Hierarchie mit zwei Ebenen, `z-index` auf allen Ebenen
- [Beispiel für einen Stapelkontext 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): HTML-Hierarchie mit drei Ebenen, `z-index` auf der zweiten Ebene
