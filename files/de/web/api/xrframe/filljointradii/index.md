---
title: "XRFrame: fillJointRadii()-Methode"
short-title: fillJointRadii()
slug: Web/API/XRFrame/fillJointRadii
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fillJointRadii()`**-Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle füllt ein {{jsxref("Float32Array")}} mit Radien für eine Liste von Handgelenkbereichen und gibt `true` zurück, wenn dies für alle Bereiche erfolgreich war.

## Syntax

```js-nolint
fillJointRadii(jointSpaces, radii)
```

### Parameter

- `jointSpaces`
  - : Ein Array von [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)-Objekten, für das die Radien bestimmt werden sollen.
- `radii`
  - : Ein {{jsxref("Float32Array")}}, das mit den Radien der `jointSpaces` gefüllt wird.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob alle Bereiche eine gültige Pose haben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Länge von `jointSpaces` größer ist als die Anzahl der Elemente in `radii`.

## Beispiele

### Radien für alle Gelenke einer Hand erhalten

Um effizient Radien für alle 25 Gelenke jeder [`XRHand`](/de/docs/Web/API/XRHand) zu erhalten, können Sie die `fillJointRadii()`-Methode verwenden.

```js
let radii1 = new Float32Array(25);
let radii2 = new Float32Array(25);

function onXRFrame(xrFrame, renderer) {
  let hand1 = xrFrame.session.inputSources[0].hand;
  xrFrame.fillJointRadii(hand1.values(), radii1);
  let hand2 = xrFrame.session.inputSources[1].hand;
  xrFrame.fillJointRadii(hand2.values(), radii2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRHand`](/de/docs/Web/API/XRHand)
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)
- {{jsxref("Float32Array")}}
