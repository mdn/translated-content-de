---
title: Stapeln ohne die z-index-Eigenschaft
short-title: Stapeln ohne z-index
slug: Web/CSS/CSS_positioned_layout/Stacking_without_z-index
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Wenn die {{cssxref("z-index")}}-Eigenschaft auf keinem Element angegeben ist, werden die Elemente in folgender Reihenfolge gestapelt (von unten nach oben):

1. Der Hintergrund und die Rahmen des Wurzelelements.
2. Nachfahren, die nicht positioniert sind, in der Reihenfolge ihres Erscheinens im HTML.
3. Nachfahren, die positioniert sind, in der Reihenfolge ihres Erscheinens im HTML.

Sehen Sie sich [Arten der Positionierung](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) für eine Erklärung zu positionierten und nicht positionierten Elementen an.

Beachten Sie, wenn die {{cssxref("order")}}-Eigenschaft die Darstellung von der _Reihenfolge im HTML_ in {{cssxref("flex")}}-Container ändert, beeinflusst dies ebenso die Reihenfolge für den Stapelkontext.

## Beispiel

In diesem Beispiel sind DIV #1 bis DIV #4 positionierte Elemente. DIV #5 ist statisch und wird daher unterhalb der anderen vier Elemente gezeichnet, auch wenn es später im HTML-Markup erscheint.

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
  background-color: #ffffcc;
  border-color: #999966;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #ffdddd;
  border-color: #990000;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #ccffcc;
  border-color: #669966;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffffcc;
  margin: 0px 50px;
}
```

## Ergebnis

{{EmbedLiveSample("Example", 600, 400)}}

## Siehe auch

- [z-index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stapeln von Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [CSS-Positionierungs-Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
