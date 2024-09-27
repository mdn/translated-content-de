---
title: "AudioListener: Methode setOrientation()"
short-title: setOrientation()
slug: Web/API/AudioListener/setOrientation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}{{deprecated_header}}

Die `setOrientation()`-Methode des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces definiert die Orientierung des Hörers.

Sie besteht aus zwei Richtungsvektoren:

- Der _Frontvektor_, definiert durch die drei einheitslosen Parameter `x`, `y` und `z`, beschreibt die Richtung des Gesichts des Hörers, das heißt, die Richtung, in die die Nase einer Person zeigt. Der Standardwert des Frontvektors ist `(0, 0, -1)`.
- Der _Aufwärtsvektor_, definiert durch die drei einheitslosen Parameter `xUp`, `yUp` und `zUp`, beschreibt die Richtung der Oberseite des Kopfes des Hörers. Der Standardwert des Aufwärtsvektors ist `(0, 1, 0)`.

Die beiden Vektoren müssen durch einen Winkel von 90° getrennt sein — in der linearen Analyse müssen sie senkrecht zueinander stehen.

## Syntax

```js-nolint
setOrientation(x, y, z, xUp, yUp, zUp)
```

### Parameter

- `x`
  - : Der x-Wert des Frontvektors des Hörers.
- `y`
  - : Der y-Wert des Frontvektors des Hörers.
- `z`
  - : Der z-Wert des Frontvektors des Hörers.
- `xUp`
  - : Der x-Wert des Aufwärtsvektors des Hörers.
- `yUp`
  - : Der y-Wert des Aufwärtsvektors des Hörers.
- `zUp`
  - : Der z-Wert des Aufwärtsvektors des Hörers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
