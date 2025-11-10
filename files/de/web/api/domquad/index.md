---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Die Rückgabe von `DOMQuad`s ermöglicht es, dass `getBoxQuads()` genaue Informationen liefert, selbst wenn beliebige 2D- oder 3D-Transformationen vorliegen. Es verfügt über ein praktisches `bounds`-Attribut, das ein `DOMRectReadOnly` zurückgibt, für die Fälle, in denen Sie nur ein achsenparallel ausgerichtetes Begrenzungsrechteck benötigen.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanz-Eigenschaften

- [`DOMQuad.p1`](/de/docs/Web/API/DOMQuad/p1) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p2`](/de/docs/Web/API/DOMQuad/p2) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p3`](/de/docs/Web/API/DOMQuad/p3) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p4`](/de/docs/Web/API/DOMQuad/p4) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.

## Instanz-Methoden

- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt mit den Koordinaten und Dimensionen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Statische Methoden

- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem bereitgestellten Koordinatensatz in der Form eines anderen `DOMQuad`-Objekts zurück.
- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem bereitgestellten Koordinatensatz in der Form eines [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
