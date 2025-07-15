---
title: Verwendung von z-index
slug: Web/CSS/CSS_positioned_layout/Using_z-index
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der erste Artikel dieses Leitfadens, [Stapeln ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index), erklärt, wie das Stapeln standardmäßig angeordnet wird. Wenn Sie eine benutzerdefinierte Stapelreihenfolge erstellen möchten, können Sie die {{cssxref("z-index")}}-Eigenschaft auf ein [positioniertes](/de/docs/Web/CSS/position#types_of_positioning) Element anwenden.

Die `z-index`-Eigenschaft kann mit einem ganzzahligen Wert (positiv, null oder negativ) angegeben werden, der die Position des Elements entlang einer imaginären z-Achse darstellt. Falls Ihnen der Begriff 'z-Achse' nicht geläufig ist, stellen Sie sich die Seite als einen Stapel von Schichten vor, von denen jede eine Nummer hat. Schichten werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen liegen (_X_ steht für eine beliebige positive Ganzzahl):

| Schicht          | Beschreibung                             |
| ---------------- | ---------------------------------------- |
| Unterste Schicht | Am weitesten vom Betrachter entfernt     |
| Schicht -X       | Schichten mit negativen `z-index`-Werten |
| Schicht 0        | Standard-Rendering-Schicht               |
| Schicht X        | Schichten mit positiven `z-index`-Werten |
| Oberste Schicht  | Am nächsten am Betrachter                |

> [!NOTE]
>
> - Wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Rendering-Schicht (Schicht 0) gerendert.
> - Wenn mehrere Elemente denselben `z-index`-Wert haben (d.h. sie befinden sich auf derselben Schicht), gelten die Stapelregeln, die im Abschnitt [Stapeln ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index) erklärt werden.

## Beispiel

In diesem Beispiel wird die Stapelreihenfolge der Schichten mit `z-index` neu angeordnet. Der `z-index` von DIV #5 hat keine Wirkung, da es kein positioniertes Element ist.

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
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 400)}}

## Siehe auch

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Stapeln schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Stapeln ohne `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [CSS-positioniertes-Layout-](/de/docs/Web/CSS/CSS_positioned_layout) Modul
