---
title: CSS-Funktion `rect()`
short-title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Funktion **`rect()`** erstellt ein Rechteck in festgelegten Abständen von der oberen und linken Kante des umschließenden Blocks. Sie ist eine Funktion für Grundformen des [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types) {{cssxref("basic-shape")}}. Sie können `rect()` in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um einen rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, in {{cssxref("clip-path")}}, um die Form des Beschneidungsbereichs festzulegen, und in {{cssxref("border-shape")}}, um die Form des Rahmens eines Elements zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
border-shape: rect(10px 500px 130px 20px round 20px);
```

### Werte

Das Rechteck wird durch vier Versatzwerte definiert, beginnend an der oberen Kante und weiter im Uhrzeigersinn. Optional können Sie das Schlüsselwort `round` mit dem Parameter `border-radius` angeben, um die Ecken des Rechtecks abzurunden. Jeder Versatzwert kann ein `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt als {{cssxref("&lt;length-percentage&gt;")}}-Wert den Abstand der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umschließenden Blocks an. Der erste (obere) und der dritte (untere) Wert sind Abstände von der oberen Kante des umschließenden Blocks; der zweite (rechte) und der vierte (linke) Wert sind Abstände von dessen linker Kante. Der zweite (rechte) beziehungsweise dritte (untere) Wert wird durch den vierten (linken) beziehungsweise ersten (oberen) Wert begrenzt. Dadurch kann die untere Kante nicht oberhalb der oberen Kante und die rechte Kante nicht links von der linken Kante liegen. Beispielsweise wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt die betreffende Kante mit der entsprechenden Kante des umschließenden Blocks zusammenfallen. Wird `auto` für den ersten (oberen) oder vierten (linken) Wert verwendet, entspricht es `0`. Beim zweiten (rechten) oder dritten (unteren) Wert entspricht es `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an. Dabei gilt dieselbe Syntax wie für die CSS-Kurzschreibweise {{cssxref("border-radius")}}. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen offset-path mit rect() erstellen

In diesem Beispiel verwendet die Eigenschaft {{cssxref("offset-path")}} die Funktion `rect()`, um die Form des Pfads festzulegen, entlang dessen sich ein Element – hier ein rotes Kästchen – bewegt. Gezeigt werden drei Varianten mit unterschiedlichen Werten für `rect()`. Der Pfeil in den Kästchen zeigt zur rechten Kante des jeweiligen Kästchens.

```html
<div class="container">
  Rectangular path 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Rectangular path 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("creating_offset-path_using_rect", "100%", 400)}}

- Das Rechteck von Pfad 1 legt die Abstände aller vier Kanten (oben, rechts, unten und links) vom umschließenden Block fest. Die Werte für oben und unten sind Abstände von dessen oberer Kante; die Werte für rechts und links sind Abstände von dessen linker Kante. Außerdem sind die Ecken des Rechtecks mit `20%` abgerundet, sodass das rote Kästchen beim Bewegen entlang des Pfads den abgerundeten Ecken folgt. Beachten Sie, wie der Pfeil im Kästchen an den Ecken der Kurve folgt.
- Das Rechteck von Pfad 2 ähnelt dem von Pfad 1. Allerdings ist der rechte Wert `auto`, was `100%` entspricht. Dadurch fällt die rechte Kante des Rechtecks mit der rechten Kante des umschließenden Blocks zusammen, und das Rechteck ist breiter als bei Pfad 1.
- Beim Rechteck von Pfad 3 sind sowohl der linke als auch der rechte Wert `auto`; der Parameter `round <'border-radius'>` fehlt. Dadurch entsteht ein Rechteck, das so breit wie der umschließende Block ist und im Gegensatz zu den Rechtecken von Pfad 1 und Pfad 2 nicht abgerundete Ecken hat. Beachten Sie, wie sich der Pfeil im Kästchen an den Ecken bewegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Funktion {{cssxref("basic-shape/inset","inset()")}}
- Funktion {{cssxref("basic-shape/xywh","xywh()")}}
- Eigenschaft {{cssxref("border-shape")}}
- Eigenschaft {{cssxref("clip-path")}}
- Eigenschaft {{cssxref("offset-path")}}
- Datentyp {{cssxref("basic-shape")}}
- Modul [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
