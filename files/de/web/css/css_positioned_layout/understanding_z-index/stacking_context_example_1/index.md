---
title: Stacking context example 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Beginnen wir mit einem einfachen Beispiel. Im Root-Stapelnkontext befinden sich zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. Innerhalb von DIV #1 gibt es ein absolut positioniertes DIV #2, während in DIV #3 ein absolut positioniertes DIV #4 vorhanden ist, beide ohne `z-index`-Eigenschaften.

Der einzige Stapelnkontext ist der Root-Kontext. Ohne `z-index`-Werte werden die Elemente in der Reihenfolge ihrer Auftretens gestapelt.

![Beispiel für Stapelnkontexte 1](understanding_zindex_05a.png)

Wird DIV #2 ein positiver (nicht null und nicht auto) `z-index`-Wert zugewiesen, wird es über allen anderen DIVs gerendert.

![Beispiel für Stapelnkontexte 1](understanding_zindex_05b.png)

Wenn dann DIV #4 auch ein positiver `z-index`-Wert zugewiesen wird, der größer ist als der `z-index` von DIV #2, wird es über allen anderen DIVs einschließlich DIV #2 gerendert.

![Beispiel für Stapelnkontexte 1](understanding_zindex_05c.png)

In diesem letzten Beispiel sehen Sie, dass DIV #2 und DIV #4 keine Geschwister sind, da sie zu unterschiedlichen Eltern in der HTML-Elemente-Hierarchie gehören. Trotzdem kann die Stapelung von DIV #4 in Bezug auf DIV #2 durch `z-index` gesteuert werden. Es passiert, dass, da DIV #1 und DIV #3 keinen `z-index`-Wert zugewiesen bekommen, sie keinen Stapelnkontext erstellen. Das bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zum gleichen Root-Stapelnkontext gehört.

In Bezug auf Stapelnkontexte werden DIV #1 und DIV #3 in das Root-Element aufgenommen, und die resultierende Hierarchie ist die folgende:

- Root-Stapelnkontext

  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchsichtig. Es ist wichtig zu beachten, dass das Zuweisen einer Opazität von weniger als 1 zu einem positionierten Element implizit einen Stapelnkontext erstellt, genau wie das Hinzufügen eines `z-index`-Wertes. Und dieses Beispiel zeigt, was passiert, wenn ein Elternelement keinen Stapelnkontext erstellt.

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

- [Stapeln ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um das Standard-Stapeln zu ändern.
- [Stapelnkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelnkontext.
- [Beispiel für Stapelnkontexte 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Beispiel für Stapelnkontexte 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
