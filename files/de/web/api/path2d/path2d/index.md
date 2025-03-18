---
title: "Path2D: Path2D() Konstruktor"
short-title: Path2D()
slug: Web/API/Path2D/Path2D
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`Path2D()`** Konstruktor gibt ein neu instanziiertes
`Path2D`-Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine
Kopie) oder optional mit einer Zeichenkette, die aus [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) besteht.

## Syntax

```js-nolint
new Path2D()
new Path2D(path)
new Path2D(d)
```

### Parameter

- `path` {{optional_inline}}
  - : Wenn mit einem anderen `Path2D`-Objekt aufgerufen, wird eine Kopie des
    `path`-Arguments erstellt.
- `d` {{optional_inline}}
  - : Wenn mit einer Zeichenkette, die aus [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) besteht, aufgerufen, wird ein neuer Pfad
    aus dieser Beschreibung erstellt.

## Beispiele

### Erstellen und Kopieren von Pfaden

Dieses Beispiel erstellt und kopiert einen `Path2D`-Pfad.

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let path1 = new Path2D();
path1.rect(10, 10, 100, 100);

let path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

{{ EmbedLiveSample('Creating_and_copying_paths', 700, 180) }}

### Verwendung von SVG-Pfaden

Dieses Beispiel erstellt einen `Path2D`-Pfad unter Verwendung von [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths). Der Pfad wird zum Punkt (`M10 10`) bewegt und dann horizontal 80 Punkte nach rechts
(`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links
(`h -80`) und dann zurück zum Start (`Z`).

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
```

{{ EmbedLiveSample('Using_SVG_paths', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Path2D`](/de/docs/Web/API/Path2D), das Interface, zu dem dieser Konstruktor gehört
