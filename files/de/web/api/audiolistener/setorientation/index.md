---
title: "AudioListener: setOrientation()-Methode"
short-title: setOrientation()
slug: Web/API/AudioListener/setOrientation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}{{deprecated_header}}

Die `setOrientation()`-Methode des {{ domxref("AudioListener") }}-Interfaces definiert die Orientierung des Hörers.

Sie besteht aus zwei Richtungsvektoren:

- Der _vordere Vektor_, definiert durch die drei einheitslosen Parameter `x`, `y` und `z`, beschreibt die Blickrichtung des Hörers, also die Richtung, in die die Nase der Person zeigt. Der Standardwert des vorderen Vektors ist `(0, 0, -1)`.
- Der _obere Vektor_, definiert durch die drei einheitslosen Parameter `xUp`, `yUp` und `zUp`, beschreibt die Richtung des oberen Teils des Kopfs des Hörers. Der Standardwert des oberen Vektors ist `(0, 1, 0)`.

Die beiden Vektoren müssen in einem Winkel von 90° zueinander stehen - in linearer Analyseterminologie müssen sie senkrecht zueinander sein.

## Syntax

```js-nolint
setOrientation(x, y, z, xUp, yUp, zUp)
```

### Parameter

- `x`
  - : Der x-Wert des vorderen Vektors des Hörers.
- `y`
  - : Der y-Wert des vorderen Vektors des Hörers.
- `z`
  - : Der z-Wert des vorderen Vektors des Hörers.
- `xUp`
  - : Der x-Wert des oberen Vektors des Hörers.
- `yUp`
  - : Der y-Wert des oberen Vektors des Hörers.
- `zUp`
  - : Der z-Wert des oberen Vektors des Hörers.

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
