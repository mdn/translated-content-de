---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Rändern des umschließenden Blocks. Es ist eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clipping-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das ausgeschnittene Rechteck wird durch Angabe von vier Versatzwerten definiert, beginnend mit dem Versatz des oberen Randes und im Uhrzeigersinn gehend, sowie einem optionalen `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert der Entfernung des oberen, rechten, unteren oder linken Randes des Rechtecks vom oberen bzw. linken Rand des umschließenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Entfernungen vom oberen Rand des umschließenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Entfernungen vom linken Rand des umschließenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte begrenzt, um zu verhindern, dass der untere Rand über den oberen Rand und der rechte Rand über den linken Rand hinausgeht. Zum Beispiel ist `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt den Rand, für den dieser Wert verwendet wird, mit dem entsprechenden Rand des umschließenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn er für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks unter Verwendung der gleichen Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzform-Eigenschaft an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellung eines Offset-Pfads mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()` Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil innerhalb der Boxen zeigt auf den rechten Rand der Box.

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

{{EmbedLiveSample("Creating an offset-path using rect", "100%", 400)}}

- Das Rechteck des Pfads 1 gibt die Entfernungen der vier Ränder (oben, rechts, unten und links) vom umschließenden Block an. Die oberen und unteren Werte sind Entfernungen vom oberen Rand des umschließenden Blocks. Die rechten und linken Werte sind Entfernungen vom linken Rand des umschließenden Blocks. Darüber hinaus ist die Ecke des Rechtecks bei `20%` abgerundet, wodurch das rote Kästchen den abgerundeten Ecken folgt, während es sich entlang dieses Pfades bewegt. Beachten Sie, wie der Pfeil innerhalb der Box der Kurve an den Ecken des rechteckigen Pfades folgt.
- Das Rechteck des Pfads 2 ist dem Rechteck des Pfads 1 ähnlich, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dadurch passt sich der rechte Rand des Rechtecks dem rechten Rand des umschließenden Blocks an und erzeugt ein breiteres Rechteck als Pfad 1.
- Das Rechteck des Pfads 3 gibt sowohl die linken als auch die rechten Randparameter als `auto` an und lässt den `round <'border-radius'>`-Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umschließenden Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Rechtecken der Pfade 1 und 2 aufweist. Beachten Sie die Bewegung des Pfeils innerhalb dieser Box an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}} Funktion
- {{cssxref("basic-shape/xywh","xywh()")}} Funktion
- {{cssxref("clip-path")}} Eigenschaft
- {{cssxref("offset-path")}} Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}} Datentyp
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
