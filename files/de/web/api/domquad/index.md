---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: 525ae099185446f58b200ac59b2c423ad319a2f0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Die Rückgabe von `DOMQuad`s ermöglicht es `getBoxQuads()`, genaue Informationen bereitzustellen, selbst wenn beliebige 2D- oder 3D-Transformationen vorhanden sind. Es hat ein praktisches `bounds`-Attribut, das einen `DOMRectReadOnly` zurückgibt, für die Fälle, in denen Sie nur ein achsenparallel ausgerichtetes Begrenzungsrechteck benötigen.

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

- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf den übergebenen Koordinatensätzen zurück.
- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad)
  - : Gibt ein neues `DOMQuad`-Objekt oder einen Satz von Viereckskoordinaten basierend auf der bereitgestellten Eingabe zurück.
- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und Abmessungen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
