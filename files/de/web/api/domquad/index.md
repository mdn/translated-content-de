---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Das Zurückgeben von `DOMQuad`s ermöglicht es `getBoxQuads()`, auch bei beliebigen 2D- oder 3D-Transformationen genaue Informationen bereitzustellen. Es besitzt ein praktisches `bounds`-Attribut, das einen `DOMRectReadOnly` zurückgibt, für den Fall, dass Sie lediglich ein achsenparalleles Begrenzungsrechteck wünschen.

## Konstruktor

- [`DOMQuad()`](/de/docs/Web/API/DOMQuad/DOMQuad)
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanz-Eigenschaften

- p1, p2, p3, p4 {{ReadOnlyInline}}
  - : sind [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekte für jede der vier Ecken des `DOMQuad`-Objekts.

## Instanz-Methoden

- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Koordinatensatz zurück.
- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad)
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Koordinatensatz zurück.
- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und den Abmessungen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
