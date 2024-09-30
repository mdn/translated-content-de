---
title: "Path2D: Path2D() Konstruktor"
short-title: Path2D()
slug: Web/API/Path2D/Path2D
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`Path2D()`** Konstruktor gibt ein neu instanziiertes
`Path2D` Objekt zurück, optional mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einem String, der aus [SVG-Pfad](/de/docs/Web/SVG/Tutorial/Paths)-Daten besteht.

## Syntax

```js-nolint
new Path2D()
new Path2D(path)
new Path2D(d)
```

### Parameter

- `path` {{optional_inline}}
  - : Bei Aufruf mit einem anderen `Path2D` Objekt wird eine Kopie des
    `path`-Arguments erstellt.
- `d` {{optional_inline}}
  - : Bei Aufruf mit einem String, der aus [SVG-Pfad](/de/docs/Web/SVG/Tutorial/Paths)-Daten besteht, wird ein neuer Pfad
    aus dieser Beschreibung erstellt.

## Beispiele

### Erstellen und Kopieren von Pfaden

Dieses Beispiel erstellt und kopiert einen `Path2D` Pfad.

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

### Verwenden von SVG-Pfaden

Dieses Beispiel erstellt einen `Path2D` Pfad unter Verwendung von [SVG-Pfad-Daten](/de/docs/Web/SVG/Tutorial/Paths). Der Pfad bewegt sich zu
Punkt (`M10 10`) und dann 80 Punkte horizontal nach rechts
(`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links
(`h -80`) und schließlich zurück zum Start (`Z`).

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
