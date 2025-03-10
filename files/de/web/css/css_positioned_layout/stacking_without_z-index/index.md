---
title: Stapeln ohne die z-index-Eigenschaft
slug: Web/CSS/CSS_positioned_layout/Stacking_without_z-index
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Wenn die {{cssxref("z-index")}}-Eigenschaft bei keinem Element angegeben ist, werden die Elemente in der folgenden Reihenfolge gestapelt (von unten nach oben):

1. Der Hintergrund und die Rahmen des Wurzelelements.
2. Nachkommende nicht positionierte Elemente, in der Reihenfolge ihres Erscheinens im HTML.
3. Nachkommende positionierte Elemente, in der Reihenfolge ihres Erscheinens im HTML.

Siehe [Arten der Positionierung](/de/docs/Web/CSS/position#types_of_positioning) für eine Erklärung zu positionierten und nicht positionierten Elementen.

Beachten Sie, wenn die {{cssxref("order")}}-Eigenschaft die Darstellung von der _Reihenfolge im HTML_ innerhalb von {{cssxref("flex")}}-Containern ändert, beeinträchtigt dies ebenso die Reihenfolge im Stapelkontext.

## Beispiel

In diesem Beispiel sind DIV #1 bis DIV #4 positionierte Elemente. DIV #5 ist statisch und wird daher unterhalb der anderen vier Elemente gezeichnet, obwohl es später im HTML-Markup vorkommt.

### HTML

```html
<div id="abs1" class="absolute">
  <strong>DIV #1</strong><br />position: absolute;
</div>
<div id="rel1" class="relative">
  <strong>DIV #2</strong><br />position: relative;
</div>
<div id="rel2" class="relative">
  <strong>DIV #3</strong><br />position: relative;
</div>
<div id="abs2" class="absolute">
  <strong>DIV #4</strong><br />position: absolute;
</div>
<div id="sta1" class="static">
  <strong>DIV #5</strong><br />position: static;
</div>
```

### CSS

```css
strong {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 400)}}

## Siehe auch

- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente im Stapel behandelt werden.
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Anleitung zur Nutzung von `z-index`, um das standardmäßige Stapeln zu ändern.
- [Stapeln im Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Anmerkungen zum Stapelkontext.
- [Stapeln im Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-stufige HTML-Hierarchie, z-index auf der letzten Ebene
- [Stapeln im Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-stufige HTML-Hierarchie, z-index auf allen Ebenen
- [Stapeln im Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-stufige HTML-Hierarchie, z-index auf der zweiten Ebene
