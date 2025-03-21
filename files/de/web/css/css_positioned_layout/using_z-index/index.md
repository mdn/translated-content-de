---
title: Verwendung von z-index
slug: Web/CSS/CSS_positioned_layout/Using_z-index
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Der erste Artikel dieses Leitfadens, [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index), erklärt, wie das Stapeln standardmäßig angeordnet wird. Wenn Sie eine benutzerdefinierte Stapelreihenfolge erstellen möchten, können Sie die {{cssxref("z-index")}}-Eigenschaft auf ein [positioniertes](/de/docs/Web/CSS/position#types_of_positioning) Element anwenden.

Die `z-index`-Eigenschaft kann mit einem ganzzahligen Wert (positiv, null oder negativ) angegeben werden, der die Position des Elements entlang einer imaginären z-Achse darstellt. Wenn Sie mit dem Begriff 'z-Achse' nicht vertraut sind, stellen Sie sich die Seite als einen Stapel von Ebenen vor, von denen jede eine Nummer hat. Ebenen werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen liegen (_X_ steht für eine beliebige positive ganze Zahl):

| Ebene          | Beschreibung                          |
| -------------- | ------------------------------------- |
| Unterste Ebene | Weit entfernt vom Betrachter          |
| Ebene -X       | Ebenen mit negativen `z-index`-Werten |
| Ebene 0        | Standard-Rendering-Ebene              |
| Ebene X        | Ebenen mit positiven `z-index`-Werten |
| Oberste Ebene  | Am nächsten beim Betrachter           |

> [!NOTE]
>
> - Wenn keine `z-index`-Eigenschaft angegeben ist, werden Elemente auf der Standard-Rendering-Ebene (Ebene 0) gerendert.
> - Wenn mehrere Elemente denselben `z-index`-Wert haben (d.h. sie befinden sich auf derselben Ebene), gelten die Stapelregeln, die im Abschnitt [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index) erklärt werden.

## Beispiel

In diesem Beispiel wird die Stapelreihenfolge der Ebenen mithilfe von `z-index` neu angeordnet. Der `z-index` von DIV #5 hat keine Wirkung, da es kein positioniertes Element ist.

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

- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelnde Floating-Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie Floating-Elemente beim Stapeln behandelt werden.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Hinweise zum Stapelkontext.
- [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, z-index auf der letzten Ebene
- [Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, z-index auf allen Ebenen
- [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-stufige HTML-Hierarchie, z-index auf der zweiten Ebene
