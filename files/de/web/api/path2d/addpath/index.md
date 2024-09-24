---
title: "Path2D: addPath()-Methode"
short-title: addPath()
slug: Web/API/Path2D/addPath
l10n:
  sourceCommit: bee00a5446184d5ef1cd338b980210c676186a30
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`Path2D.addPath()`**-Methode
der Canvas 2D API fügt ein {{domxref("Path2D")}}-Objekt zu einem anderen
`Path2D`-Objekt hinzu.

## Syntax

```js-nolint
addPath(path)
addPath(path, transform)
```

### Parameter

- `path`
  - : Ein {{domxref("Path2D")}}-Pfad, der hinzugefügt werden soll.
- `transform` {{optional_inline}}
  - : Eine {{domxref("DOMMatrix")}}, die als Transformationsmatrix für den hinzugefügten Pfad verwendet wird. (Technisch ein Objekt, das die gleichen Eigenschaften wie ein `DOMMatrix`-Objekt besitzt.)

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Pfad zu einem bestehenden Pfad hinzufügen

Dieses Beispiel fügt einen Pfad zu einem anderen hinzu.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Zuerst erstellen wir zwei separate {{domxref("Path2D")}}-Objekte, die jeweils ein
Rechteck enthalten, das mit der Methode {{domxref("CanvasRenderingContext2D.rect()", "rect()")}} erzeugt wurde. Dann erstellen wir eine Matrix mit {{Domxref("DOMMatrix.DOMMatrix", "DOMMatrix()")}}. Wir fügen dann den zweiten Pfad dem ersten hinzu, indem wir
`addPath()` verwenden und die Matrix anwenden, um den zweiten Pfad nach rechts zu verschieben.
Zum Schluss zeichnen wir den ersten Pfad (der nun beide Rechtecke enthält) mit
{{domxref("CanvasRenderingContext2D.fill()", "fill()")}}.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Erster Pfad erstellen und ein Rechteck hinzufügen
let p1 = new Path2D();
p1.rect(0, 0, 100, 150);

// Zweiter Pfad erstellen und ein Rechteck hinzufügen
let p2 = new Path2D();
p2.rect(0, 0, 100, 75);

// Transformationsmatrix erstellen, die 200 Punkte nach rechts verschiebt
let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// Zweiten Pfad zum ersten Pfad hinzufügen
p1.addPath(p2, m);

// Ersten Pfad zeichnen
ctx.fill(p1);
```

#### Ergebnis

{{ EmbedLiveSample('Adding_a_path_to_an_existing_path', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("Path2D")}}
