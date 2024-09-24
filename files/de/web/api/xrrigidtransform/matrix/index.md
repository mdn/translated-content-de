---
title: "XRRigidTransform: Matrix-Eigenschaft"
short-title: matrix
slug: Web/API/XRRigidTransform/matrix
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRRigidTransform")}}-Eigenschaft **`matrix`** gibt die durch das Objekt dargestellte Transformationsmatrix zurück. Die zurückgegebene Matrix kann dann mit einem Spaltenvektor multipliziert werden, um den Vektor durch die durch die {{domxref("XRRigidTransform.orientation", "orientation")}} spezifizierte 3D-Rotation zu drehen und ihn dann durch die {{domxref("XRRigidTransform.position", "position")}} zu verschieben.

## Wert

Ein {{jsxref("Float32Array")}} mit 16 Einträgen, das die 4x4-Transformationsmatrix darstellt, die durch die Eigenschaften {{domxref("XRRigidTransform.position", "position")}} und {{domxref("XRRigidTransform.orientation", "orientation")}} beschrieben wird.

## Verwendungshinweise

### Matrix-Format

Alle 4x4-Transformationsmatrizen, die in WebGL verwendet werden, werden in 16-Element-{{jsxref("Float32Array")}}s gespeichert. Die Werte werden in Spalten-Major-Reihenfolge im Array gespeichert; das heißt, jede Spalte wird von oben nach unten in das Array geschrieben, bevor zur nächsten Spalte rechts gewechselt und diese in das Array geschrieben wird. Daher sieht die Matrix für das Array `[a0, a1, a2, …, a13, a14, a15]` so aus:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a0</mi></mtd><mtd><mi>a4</mi></mtd><mtd><mi>a8</mi></mtd><mtd><mi>a12</mi></mtd></mtr><mtr><mtd><mi>a1</mi></mtd><mtd><mi>a5</mi></mtd><mtd><mi>a9</mi></mtd><mtd><mi>a13</mi></mtd></mtr><mtr><mtd><mi>a2</mi></mtd><mtd><mi>a6</mi></mtd><mtd><mi>a10</mi></mtd><mtd><mi>a14</mi></mtd></mtr><mtr><mtd><mi>a3</mi></mtd><mtd><mi>a7</mi></mtd><mtd><mi>a11</mi></mtd><mtd><mi>a15</mi></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} a[0] & a[4] & a[8] & a[12]\\ a[1] & a[5] & a[9] & a[13]\\ a[2] & a[6] & a[10] & a[14]\\ a[3] & a[7] & a[11] & a[15]\\ \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei der ersten Anfrage wird die `matrix` berechnet. Danach sollte sie aus Leistungsgründen zwischengespeichert werden.

### Erstellung der Matrix

In diesem Abschnitt, der für fortgeschrittene Leser gedacht ist, behandeln wir, wie die API die Matrix für die angegebene Transformation berechnet. Es beginnt mit der Zuweisung einer neuen Matrix und dem Schreiben einer 4x4-Identitätsmatrix hinein:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0\\ 0 & 0 & 1 & 0\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies ist eine Transformation, die weder die Ausrichtung noch die Position eines Punktes, Vektors oder Objekts ändert, auf das sie angewendet wird.

Als Nächstes wird die `position` in die rechte Spalte eingefügt, was zu einer Translationsmatrix führt, die ein Koordinatensystem um die angegebene Entfernung in jeder Dimension ohne Rotationsänderung transformiert. Hier sind _p<sub>x</sub>_, _p<sub>y</sub>_ und _p<sub>z</sub>_ die Werte der `x`, `y` und `z` Mitglieder des {{domxref("DOMPointReadOnly")}} `position`.

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><msub><mi>p</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><msub><mi>p</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><msub><mi>p</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 & 0 & 0 & x\\ 0 & 1 & 0 & y\\ 0 & 0 & 1 & z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dann wird eine Rotationsmatrix durch Berechnung einer Spaltenvektor-Rotationsmatrix aus dem durch `orientation` angegebenen Einheitsquaternion erstellt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) & 2(q_xq_y - q_zq_w) & 2(q_xq_z + q_yq_w) & p_x\\ 2(q_xq_y + q_zq_w) & 1 - 2(q_x^2 + q_z^2) & 2(q_yq_z - q_xq_w) & p_y\\ 2(q_xq_z - q_yq_w) & 2(q_yq_z + q_xq_w) & 1 - 2(q_x^2 + q_y^2) & p_z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die finale Transformationsmatrix `matrix` wird durch Multiplikation der Translationsmatrix mit der Rotationsmatrix in der Reihenfolge `(translation * rotation)` berechnet. Dies ergibt die endgültige Transformationsmatrix, die von `matrix` zurückgegeben wird:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) & 2(q_xq_y - q_zq_w) & 2(q_xq_z + q_yq_w) & p_x\\ 2(q_xq_y + q_zq_w) & 1 - 2(q_x^2 + q_z^2) & 2(q_yq_z - q_xq_w) & p_y\\ 2(q_xq_z - q_yq_w) & 2(q_yq_z + q_xq_w) & 1 - 2(q_x^2 + q_y^2) & p_z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

In diesem Beispiel wird eine Transformation erstellt, um eine Matrix zu erzeugen, die als Transformation während der Darstellung von WebGL-Objekten verwendet werden kann, um Objekte passend zu einem gegebenen Offset und einer gegebenen Orientierung zu platzieren. Die `matrix` wird dann in eine Bibliotheksfunktion übergeben, die WebGL verwendet, um ein Objekt mit einem gegebenen Namen unter Verwendung der angegebenen Transformationsmatrix zu rendern, die das Objekt positioniert und orientiert.

```js
let transform = new XRRigidTransform(
  { x: 0, y: 0.5, z: 0.5 },
  { x: 0, y: -0.5, z: -0.5, w: 1 },
);
drawGLObject("magic-lamp", transform.matrix);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
