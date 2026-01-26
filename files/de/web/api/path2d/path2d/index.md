---
title: "Path2D: Path2D() Konstruktor"
short-title: Path2D()
slug: Web/API/Path2D/Path2D
l10n:
  sourceCommit: df440f2a6c405f27bfa4c0d0960f2c02ff217d67
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`Path2D()`** Konstruktor gibt ein neu instanziiertes `Path2D` Objekt zurück, wahlweise mit einem anderen Pfad als Argument (erstellt eine Kopie) oder optional mit einem String, der aus [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) Daten besteht.

## Syntax

```js-nolint
new Path2D()
new Path2D(path)
new Path2D(d)
```

### Parameter

- `path` {{optional_inline}}
  - : Wenn er mit einem anderen `Path2D` Objekt aufgerufen wird, wird eine Kopie des `path`-Arguments erstellt.
- `d` {{optional_inline}}
  - : Wenn er mit einem String, der aus [SVG-Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) Daten besteht, aufgerufen wird, wird ein neuer Pfad aus dieser Beschreibung erstellt.

## Beispiele

### Erstellen und Kopieren von Pfaden

Dieses Beispiel erstellt und kopiert einen `Path2D` Pfad. Zuerst ist `path1` ein rechteckiger Pfad. Dann kopieren wir `path1` in `path2` und fügen einen Kreis hinzu. Schließlich ziehen wir `path2`, das sowohl das Rechteck als auch den Kreis enthält. Beachten Sie, dass `path1` unverändert bleibt, obwohl wir es nie auf die Leinwand zeichnen. Sein einziger Zweck ist zu zeigen, wie Sie einen komplexen Pfad aufbauen können, indem Sie auf bestehenden Pfaden aufbauen.

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const path1 = new Path2D();
path1.rect(10, 10, 100, 100);

const path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

{{ EmbedLiveSample('Creating_and_copying_paths', 700, 180) }}

### Verwendung von SVG-Pfaden

Dieses Beispiel erstellt einen `Path2D` Pfad unter Verwendung von [SVG-Pfad Daten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths). Der Pfad bewegt sich zu Punkt (`M10 10`) und dann horizontal 80 Punkte nach rechts (`h 80`), dann 80 Punkte nach unten (`v 80`), dann 80 Punkte nach links (`h -80`) und dann zurück zum Anfang (`Z`).

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
```

{{ EmbedLiveSample('Using_SVG_paths', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Path2D`](/de/docs/Web/API/Path2D), die Schnittstelle, zu der dieser Konstruktor gehört
