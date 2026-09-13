---
title: "XRRay: XRRay() Konstruktor"
short-title: XRRay()
slug: Web/API/XRRay/XRRay
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`XRRay()`** Konstruktor erstellt ein neues [`XRRay`](/de/docs/Web/API/XRRay) Objekt, das durch einen geometrischen Strahl beschrieben wird, der aus einem Ursprungspunkt und einem Richtungsvektor besteht.

## Syntax

```js-nolint
new XRRay()
new XRRay(origin)
new XRRay(origin, direction)
new XRRay(transform)
```

### Parameter

- `origin` {{Optional_Inline}}
  - : Ein Punktobjekt, das den dreidimensionalen Punkt im Raum definiert, von dem der Strahl ausgeht, in Metern. Alle Dimensionen sind optional, jedoch muss, wenn angegeben, die `w`-Eigenschaft des Ursprungs 1.0 sein. Das Objekt wird standardmäßig mit `{ x: 0.0, y: 0.0, z: 0.0, w: 1.0 }` initialisiert.
- `direction` {{Optional_Inline}}
  - : Ein Vektorobjekt, das den dreidimensionalen Richtungsvektor des Strahls definiert. Alle Dimensionen sind optional, jedoch muss, wenn angegeben, die `w`-Eigenschaft der Richtung 0.0 sein. Das Objekt wird standardmäßig mit `{ x: 0.0, y: 0.0, z: -1.0, w: 0.0 }` initialisiert.
- `transform` {{Optional_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt, das die Position und Orientierung des Strahls darstellt.

### Rückgabewert

Ein neu erstelltes [`XRRay`](/de/docs/Web/API/XRRay) Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - alle `x`-, `y`- und `z`-Koordinaten von `direction` sind null.
    - die `w`-Koordinate von `direction` ist nicht 0.0.
    - die `w`-Koordinate von `origin` ist nicht 1.0.

## Beispiele

### Erstellen von `XRRay` Objekten

Der `XRRay()` Konstruktor ermöglicht es Ihnen, neue Strahlen zu erstellen, indem Sie entweder einen `origin` Punkt und einen `direction` Vektor angeben oder ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt übergeben.

```js
// Default configuration
let ray1 = new XRRay();

// Specifying origin, leaving direction as default
let ray2 = new XRRay({ y: 0.5 });

// Specifying both, origin and direction
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray3 = new XRRay(origin, direction);

// Using DOMPoint.fromPoint
let ray4 = new XRRay(DOMPoint.fromPoint(origin), DOMPoint.fromPoint(direction));

// Using rigid transform
let rigidTransform = new XRRigidTransform(
  DOMPoint.fromPoint(origin),
  DOMPoint.fromPoint(direction),
);
let ray5 = new XRRay(rigidTransform);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static)
