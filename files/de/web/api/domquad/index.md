---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`-Objekten, die die Ecken eines beliebigen Vierecks definieren. Durch die Rückgabe von `DOMQuad`-Objekten kann `getBoxQuads()` auch dann genaue Informationen liefern, wenn beliebige 2D- oder 3D-Transformationen vorliegen. Die Methode `getBounds()` gibt ein `DOMRect` für Fälle zurück, in denen Sie lediglich ein achsenparalleles Begrenzungsrechteck benötigen.

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

## Statische Methoden

- [`DOMQuad.fromQuad()`](/de/docs/Web/API/DOMQuad/fromQuad_static)
  - : Gibt ein neues `DOMQuad`-Objekt auf Grundlage der angegebenen Koordinaten eines anderen `DOMQuad`-Objekts zurück.
- [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static)
  - : Gibt ein neues `DOMQuad`-Objekt auf Grundlage der angegebenen Koordinaten eines [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekts zurück.

## Instanzmethoden

- [`DOMQuad.getBounds()`](/de/docs/Web/API/DOMQuad/getBounds)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt mit den Koordinaten und Abmessungen des `DOMQuad`-Objekts zurück.
- [`DOMQuad.toJSON()`](/de/docs/Web/API/DOMQuad/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMQuad`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
