---
title: XRHand
slug: Web/API/XRHand
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}

Die **`XRHand`** Schnittstelle ist ein Paar-Iterator (eine geordnete Map), bei dem der Schlüssel die Handgelenke und der Wert ein {{domxref("XRJointSpace")}} ist.

`XRHand` wird von {{domxref("XRInputSource.hand")}} zurückgegeben.

## Instanz-Eigenschaften

- `size` {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `25` zurück, die Größe des Paar-Iterators.

## Instanz-Methoden

Das `XRhand`-Objekt ist ein Paar-Iterator. Es kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden. `for (const joint of myHand)` ist gleichbedeutend mit `for (const joint of myHand.entries())`.
Es ist jedoch kein Map-ähnliches Objekt, daher stehen die Methoden `clear()`, `delete()`, `has()` und `set()` nicht zur Verfügung.

- `entries()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit den Paaren Handgelenk/{{domxref("XRJointSpace")}} für jedes Element zurück.
    Siehe {{jsxref("Map.prototype.entries()")}} für weitere Details.
- `forEach()` {{Experimental_Inline}}
  - : Führt eine bereitgestellte Funktion einmal pro Handgelenk/{{domxref("XRJointSpace")}} Paar aus.
    Siehe {{jsxref("Map.prototype.forEach()")}} für weitere Details.
- `get()` {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRJointSpace")}} für ein gegebenes Handgelenk zurück oder {{jsxref("undefined")}}, wenn kein solcher Handgelenk-Schlüssel in der Map vorhanden ist.
    Siehe {{jsxref("Map.prototype.get()")}} für weitere Details.
- `keys()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen Handgelenk-Schlüsseln zurück.
    Siehe {{jsxref("Map.prototype.keys()")}} für weitere Details.
- `values()` {{Experimental_Inline}}
  - : Gibt einen Iterator mit allen {{domxref("XRJointSpace")}} Werten zurück.
    Siehe {{jsxref("Map.prototype.values()")}} für weitere Details.

## Handgelenke

Das `XRHand`-Objekt enthält die folgenden Handgelenke:

![Hand](hand.svg)

| Handgelenk                        | Index |
| --------------------------------- | ----- |
| wrist                             | 0     |
| thumb-metacarpal                  | 1     |
| thumb-phalanx-proximal            | 2     |
| thumb-phalanx-distal              | 3     |
| thumb-tip                         | 4     |
| index-finger-metacarpal           | 5     |
| index-finger-phalanx-proximal     | 6     |
| index-finger-phalanx-intermediate | 7     |
| index-finger-phalanx-distal       | 8     |
| index-finger-tip                  | 9     |
| middle-finger-metacarpal          | 10    |
| middle-finger-phalanx-proximal    | 11    |
| middle-finger-phalanx-intermediate| 12    |
| middle-finger-phalanx-distal      | 13    |
| middle-finger-tip                 | 14    |
| ring-finger-metacarpal            | 15    |
| ring-finger-phalanx-proximal      | 16    |
| ring-finger-phalanx-intermediate  | 17    |
| ring-finger-phalanx-distal        | 18    |
| ring-finger-tip                   | 19    |
| pinky-finger-metacarpal           | 20    |
| pinky-finger-phalanx-proximal     | 21    |
| pinky-finger-phalanx-intermediate | 22    |
| pinky-finger-phalanx-distal       | 23    |
| pinky-finger-tip                  | 24    |

## Beispiele

### Verwendung von `XRHand` Objekten

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

- {{domxref("XRInputSource.hand")}}
