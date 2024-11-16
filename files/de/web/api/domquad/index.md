---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f1efcbb10e9d5bea6df19f18e670230dc7d87f18
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Die Rückgabe von `DOMQuad`s ermöglicht es `getBoxQuads()`, genaue Informationen auch bei beliebigen 2D- oder 3D-Transformationen bereitzustellen. Es verfügt über ein praktisches `bounds`-Attribut, das ein `DOMRectReadOnly` zurückgibt, für die Fälle, in denen Sie nur ein achsenbündiges Begrenzungsrechteck benötigen.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanz-Eigenschaften

- [`DOMQuad.p1`](/de/docs/Web/API/DOMQuad/p1) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` repräsentiert.
- [`DOMQuad.p2`](/de/docs/Web/API/DOMQuad/p2) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` repräsentiert.
- [`DOMQuad.p3`](/de/docs/Web/API/DOMQuad/p3) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` repräsentiert.
- [`DOMQuad.p4`](/de/docs/Web/API/DOMQuad/p4) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` repräsentiert.

## Instanz-Methoden

- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Koordinatensatz zurück.
- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Koordinatensatz zurück.
- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und Dimensionen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
