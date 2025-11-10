---
title: "DOMQuad: fromQuad() statische Methode"
short-title: fromQuad()
slug: Web/API/DOMQuad/fromQuad_static
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromQuad()`** statische Methode der [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Schnittstelle gibt ein neues `DOMQuad`-Objekt basierend auf dem angegebenen Satz von Koordinaten in der Form eines anderen `DOMQuad`-Objekts zurück.

## Syntax

```js-nolint
DOMQuad.fromQuad()
DOMQuad.fromQuad(quad)
```

### Parameter

- `quad` {{optional_inline}}
  - : Ein [`DOMQuad`](/de/docs/Web/API/DOMQuad) oder ein Objekt mit denselben Eigenschaften. Alle Eigenschaften haben standardmäßig `(0, 0, 0, 1)`. Die Eigenschaften sind:
    - [`p1`](/de/docs/Web/API/DOMQuad/p1) {{optional_inline}}, [`p2`](/de/docs/Web/API/DOMQuad/p2) {{optional_inline}}, [`p3`](/de/docs/Web/API/DOMQuad/p3) {{optional_inline}}, [`p4`](/de/docs/Web/API/DOMQuad/p4) {{optional_inline}}
      - : Jeder ist ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder ein Objekt mit denselben Eigenschaften, das eine Ecke des Quads darstellt.

    Dieses Objekt sollte normalerweise eine andere [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Instanz oder ein bestehendes Objekt, das aus einer Datenspeicherung abgerufen wurde, sein. Wenn Sie dieses Objekt von Grund auf neu erstellen, sollten Sie den [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)-Konstruktor verwenden, der die vier Punkte separat akzeptiert und die Erstellung des Zwischenobjekts vermeidet.

### Rückgabewert

Ein [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekt.

## Beispiele

### Erstellen eines Quads aus einem bestehenden DOMQuad

Dieses Beispiel zeigt, wie man ein neues `DOMQuad` aus einem bestehenden erstellt.

```js
const originalQuad = new DOMQuad(
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 50, y: 50 },
  { x: 0, y: 50 },
);

const newQuad = DOMQuad.fromQuad(originalQuad);

console.log(newQuad.p1.x, newQuad.p1.y); // 0 0
console.log(newQuad.p2.x, newQuad.p2.y); // 50 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad) Konstruktor
- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMRect`](/de/docs/Web/API/DOMRect)
