---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Durch die Rückgabe von `DOMQuad`s kann `getBoxQuads()` genaue Informationen liefern, selbst wenn beliebige 2D- oder 3D-Transformationen vorliegen. Es besitzt ein praktisches `bounds`-Attribut, das für diejenigen Fälle, in denen Sie lediglich ein achsenorientiertes Begrenzungsrechteck benötigen, ein `DOMRectReadOnly` zurückgibt.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erzeugt ein neues `DOMQuad`-Objekt.

## Instanz-Eigenschaften

- p1,p2,p3,p4 {{ReadOnlyInline}}
  - : sind [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekte für jede der vier Ecken des `DOMQuad`-Objekts.

## Instanz-Methoden

- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Satz von Koordinaten zurück.
- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Satz von Koordinaten zurück.
- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und Dimensionen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
