---
title: XRHand
slug: Web/API/XRHand
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Das **`XRHand`**-Interface ist ein Paariterator (eine geordnete Zuordnung), bei dem der Schlüssel die Handgelenke und der Wert ein [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) ist.

`XRHand` wird durch [`XRInputSource.hand`](/de/docs/Web/API/XRInputSource/hand) zurückgegeben.

## Instanzeigenschaften

- `size` {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `25` zurück, die Größe des Paariterators.

## Instanzmethoden

Das `XRHand`-Objekt ist ein Paariterator und kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden. `for (const joint of myHand)` ist gleichwertig zu `for (const joint of myHand.entries())`.
Es ist jedoch kein map-ähnliches Objekt, daher gibt es keine `clear()`, `delete()`, `has()` und `set()` Methoden.

- `entries()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit den Handgelenk-/[`XRJointSpace`](/de/docs/Web/API/XRJointSpace)-Paaren für jedes Element zurück.
    Siehe {{jsxref("Map.prototype.entries()")}} für weitere Details.
- `forEach()` {{Experimental_Inline}}
  - : Führt eine bereitgestellte Funktion für jedes Handgelenk-/[`XRJointSpace`](/de/docs/Web/API/XRJointSpace)-Paar einmal aus.
    Siehe {{jsxref("Map.prototype.forEach()")}} für weitere Details.
- `get()` {{Experimental_Inline}}
  - : Gibt einen [`XRJointSpace`](/de/docs/Web/API/XRJointSpace) für ein bestimmtes Handgelenk zurück oder {{jsxref("undefined")}}, wenn kein solcher Handgelenkschlüssel in der Map vorhanden ist.
    Siehe {{jsxref("Map.prototype.get()")}} für weitere Details.
- `keys()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen Handgelenkschlüsseln zurück.
    Siehe {{jsxref("Map.prototype.keys()")}} für weitere Details.
- `values()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)-Werten zurück.
    Siehe {{jsxref("Map.prototype.values()")}} für weitere Details.

## Handgelenke

Das `XRHand`-Objekt enthält die folgenden Handgelenke:

![Hand](hand.svg)

| Handgelenk                         | Index |
| ---------------------------------- | ----- |
| wrist                              | 0     |
| thumb-metacarpal                   | 1     |
| thumb-phalanx-proximal             | 2     |
| thumb-phalanx-distal               | 3     |
| thumb-tip                          | 4     |
| index-finger-metacarpal            | 5     |
| index-finger-phalanx-proximal      | 6     |
| index-finger-phalanx-intermediate  | 7     |
| index-finger-phalanx-distal        | 8     |
| index-finger-tip                   | 9     |
| middle-finger-metacarpal           | 10    |
| middle-finger-phalanx-proximal     | 11    |
| middle-finger-phalanx-intermediate | 12    |
| middle-finger-phalanx-distal       | 13    |
| middle-finger-tip                  | 14    |
| ring-finger-metacarpal             | 15    |
| ring-finger-phalanx-proximal       | 16    |
| ring-finger-phalanx-intermediate   | 17    |
| ring-finger-phalanx-distal         | 18    |
| ring-finger-tip                    | 19    |
| pinky-finger-metacarpal            | 20    |
| pinky-finger-phalanx-proximal      | 21    |
| pinky-finger-phalanx-intermediate  | 22    |
| pinky-finger-phalanx-distal        | 23    |
| pinky-finger-tip                   | 24    |

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
