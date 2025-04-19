---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Die Rückgabe von `DOMQuad`s ermöglicht es `getBoxQuads()`, auch bei beliebigen 2D- oder 3D-Transformationen genaue Informationen zurückzugeben. Es hat ein praktisches `bounds`-Attribut, das ein `DOMRectReadOnly` zurückgibt, für den Fall, dass Sie nur ein achsenparalleles Begrenzungsrechteck benötigen.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanzeigenschaften

- [`DOMQuad.p1`](/de/docs/Web/API/DOMQuad/p1) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p2`](/de/docs/Web/API/DOMQuad/p2) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p3`](/de/docs/Web/API/DOMQuad/p3) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.
- [`DOMQuad.p4`](/de/docs/Web/API/DOMQuad/p4) {{ReadOnlyInline}}
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der eine Ecke des `DOMQuad` darstellt.

## Instanzmethoden

- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und Dimensionen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Statische Methoden

- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Satz von Koordinaten zurück.
- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static)
  - : Gibt ein neues `DOMQuad`-Objekt oder einen Satz von Viereckskoordinaten basierend auf den bereitgestellten Eingaben zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
