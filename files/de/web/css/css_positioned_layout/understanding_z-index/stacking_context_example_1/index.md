---
title: Beispiel für Stapelkontext 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

## Beschreibung

Beginnen wir mit einem grundlegenden Beispiel. Im übergeordneten Stapelkontext gibt es zwei relativ positionierte `<div>`-Elemente (DIV #1 und DIV #3) ohne `z-index`-Eigenschaften. Innerhalb von DIV #1 gibt es ein absolut positioniertes DIV #2, während in DIV #3 ein absolut positioniertes DIV #4 vorhanden ist, beide ohne `z-index`-Eigenschaften.

Der einzige Stapelkontext ist der übergeordnete Kontext. Ohne `z-index`-Werte werden Elemente in der Reihenfolge ihres Vorkommens gestapelt.

![Beispiel für Stapelkontext 1](understanding_zindex_05a.png)

Wenn DIV #2 ein positiver (ungleich null und nicht automatisch) `z-index`-Wert zugewiesen wird, wird es über allen anderen DIVs dargestellt.

![Beispiel für Stapelkontext 1](understanding_zindex_05b.png)

Wenn DIV #4 dann auch ein positiver `z-index` zugewiesen wird, der größer ist als der `z-index` von DIV #2, wird es über allen anderen DIVs einschließlich DIV #2 dargestellt.

![Beispiel für Stapelkontext 1](understanding_zindex_05c.png)

In diesem letzten Beispiel sehen Sie, dass DIV #2 und DIV #4 keine Geschwister sind, da sie unterschiedlichen Eltern in der HTML-Element-Hierarchie angehören. Trotzdem kann die Stapelung von DIV #4 im Verhältnis zu DIV #2 durch `z-index` gesteuert werden. Es passiert, dass, da DIV #1 und DIV #3 kein `z-index`-Wert zugewiesen ist, sie keinen Stapelkontext erzeugen. Das bedeutet, dass all deren Inhalte, einschließlich DIV #2 und DIV #4, zum selben übergeordneten Stapelkontext gehören.

In Bezug auf Stapelkontexte werden DIV #1 und DIV #3 in das Haupt-Element assimiliert, und die resultierende Hierarchie ist folgende:

- Übergeordneter Stapelkontext

  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 und DIV #3 sind nicht durchsichtig. Es ist wichtig zu bedenken, dass durch die Zuweisung einer Opazität von weniger als 1 an ein positioniertes Element implizit ein Stapelkontext ebenso wie durch Hinzufügen eines `z-index`-Werts erstellt wird. Und dieses Beispiel zeigt, was passiert, wenn ein übergeordnetes Element keinen Stapelkontext erstellt.

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
- [Stapeln schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stapeln umgegangen wird.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standard-Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.
- [Beispiel für Stapelkontext 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Beispiel für Stapelkontext 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
