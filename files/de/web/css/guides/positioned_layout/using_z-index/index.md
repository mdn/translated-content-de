---
title: Verwendung von z-index
slug: Web/CSS/Guides/Positioned_layout/Using_z-index
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der erste Artikel dieses Leitfadens, [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index), erklärt, wie Stapel standardmäßig angeordnet sind. Wenn Sie eine benutzerdefinierte Stapelreihenfolge erstellen möchten, können Sie die {{cssxref("z-index")}}-Eigenschaft auf ein [positioniertes](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Element anwenden.

Die `z-index`-Eigenschaft kann mit einem ganzzahligen Wert (positiv, null oder negativ) angegeben werden, der die Position des Elements entlang einer imaginären z-Achse darstellt. Wenn der Begriff 'z-Achse' Ihnen nicht vertraut ist, stellen Sie sich die Seite als Stapel von Schichten vor, von denen jede eine Nummer hat. Schichten werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen liegen (_X_ repräsentiert eine beliebige positive Ganzzahl):

| Schicht       | Beschreibung                             |
| ------------- | ---------------------------------------- |
| Unterste Schicht | Am weitesten vom Beobachter entfernt    |
| Schicht -X    | Schichten mit negativen `z-index`-Werten |
| Schicht 0     | Standard-Rendering-Schicht               |
| Schicht X     | Schichten mit positiven `z-index`-Werten |
| Oberste Schicht | Dem Beobachter am nächsten                |

> [!NOTE]
>
> - Wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Rendering-Schicht (Schicht 0) gerendert.
> - Wenn mehrere Elemente denselben `z-index`-Wert haben (d.h., sie befinden sich auf derselben Schicht), gelten die Stapelregeln, die im Abschnitt [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index) erklärt werden.

## Beispiel

In diesem Beispiel wird die Stapelreihenfolge der Schichten mithilfe von `z-index` neu angeordnet. Der `z-index` von DIV #5 hat keinen Effekt, da es sich nicht um ein positioniertes Element handelt.

### HTML

```html
<div id="abs1">
  <strong>DIV #1</strong>
  <br />position: absolute; <br />z-index: 5;
</div>

<div id="rel1">
  <strong>DIV #2</strong>
  <br />position: relative; <br />z-index: 3;
</div>

<div id="rel2">
  <strong>DIV #3</strong>
  <br />position: relative; <br />z-index: 2;
</div>

<div id="abs2">
  <strong>DIV #4</strong>
  <br />position: absolute; <br />z-index: 1;
</div>

<div id="sta1">
  <strong>DIV #5</strong>
  <br />no positioning <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  margin: 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  margin: 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin: 0px 50px;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 400)}}

## Siehe auch

- [Verstehen von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [Stapeln ohne `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [CSS Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
