---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Durch das Zurückgeben von `DOMQuad`s ermöglicht `getBoxQuads()` genaue Informationen auch bei beliebigen 2D- oder 3D-Transformationen. Es verfügt über ein praktisches `bounds`-Attribut, das in den Fällen, in denen Sie nur ein achsenparallel ausgerichtetes Begrenzungsrechteck benötigen, ein `DOMRectReadOnly` zurückgibt.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanzeigenschaften

- p1,p2,p3,p4 {{ReadOnlyInline}}
  - : sind [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekte für jede der vier Ecken des `DOMQuad`-Objekts.

## Instanzmethoden

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
