---
title: XRHand
slug: Web/API/XRHand
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Das **`XRHand`**-Interface ist ein Paar-Iterator (eine geordnete Map), wobei der Schlüssel die Handgelenke und der Wert ein [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) ist.

`XRHand` wird durch [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand) zurückgegeben.

## Instanzeigenschaften

- `size` {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `25` zurück, die Größe des Paar-Iterators.

## Instanzmethoden

Das `XRHand`-Objekt ist ein Paar-Iterator. Es kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden. `for (const joint of myHand)` entspricht `for (const joint of myHand.entries())`.
Es ist jedoch nicht objekthaft wie eine Map, daher gibt es keine `clear()`, `delete()`, `has()`, und `set()`-Methoden.

- `entries()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit den Handgelenk/`XRJointSpace`-Paaren für jedes Element zurück.
    Siehe {{jsxref("Map.prototype.entries()")}} für weitere Details.
- `forEach()` {{Experimental_Inline}}
  - : Führt eine übergebene Funktion einmal pro Handgelenk/`XRJointSpace`-Paar aus.
    Siehe {{jsxref("Map.prototype.forEach()")}} für weitere Details.
- `get()` {{Experimental_Inline}}
  - : Gibt ein [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) für ein gegebenes Handgelenk zurück oder {{jsxref("undefined")}}, wenn kein solcher Schlüssel im Map vorhanden ist.
    Siehe {{jsxref("Map.prototype.get()")}} für weitere Details.
- `keys()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen Handgelenk-Schlüsseln zurück.
    Siehe {{jsxref("Map.prototype.keys()")}} für weitere Details.
- `values()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)-Werten zurück.
    Siehe {{jsxref("Map.prototype.values()")}} für weitere Details.

## Handgelenke

Das `XRHand`-Objekt enthält die folgenden Handgelenke:

![Hand](hand.svg)

| Handgelenk                        | Index |
| --------------------------------- | ----- |
| Handgelenk                        | 0     |
| Daumen-Metakarpal                 | 1     |
| Daumen-Phalanx-Proximal           | 2     |
| Daumen-Phalanx-Distal             | 3     |
| Daumen-Spitze                     | 4     |
| Zeigefinger-Metakarpal            | 5     |
| Zeigefinger-Phalanx-Proximal      | 6     |
| Zeigefinger-Phalanx-Intermedial   | 7     |
| Zeigefinger-Phalanx-Distal        | 8     |
| Zeigefinger-Spitze                | 9     |
| Mittelfinger-Metakarpal           | 10    |
| Mittelfinger-Phalanx-Proximal     | 11    |
| Mittelfinger-Phalanx-Intermedial  | 12    |
| Mittelfinger-Phalanx-Distal       | 13    |
| Mittelfinger-Spitze               | 14    |
| Ringfinger-Metakarpal             | 15    |
| Ringfinger-Phalanx-Proximal       | 16    |
| Ringfinger-Phalanx-Intermedial    | 17    |
| Ringfinger-Phalanx-Distal         | 18    |
| Ringfinger-Spitze                 | 19    |
| Kleinerfinger-Metakarpal          | 20    |
| Kleinerfinger-Phalanx-Proximal    | 21    |
| Kleinerfinger-Phalanx-Intermedial | 22    |
| Kleinerfinger-Phalanx-Distal      | 23    |
| Kleinerfinger-Spitze              | 24    |

## Beispiele

### Verwendung von `XRHand`-Objekten

```js
const wristJoint = inputSource.hand.get("wrist");
const indexFingerTipJoint = inputSource.hand.get("index-finger-tip");

for (const [joint, jointSpace] of inputSource.hand) {
  console.log(joint);
  console.log(jointSpace);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand)
