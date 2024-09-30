---
title: "AudioListener: setOrientation()-Methode"
short-title: setOrientation()
slug: Web/API/AudioListener/setOrientation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}{{deprecated_header}}

Die `setOrientation()`-Methode der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle definiert die Orientierung des Zuhörers.

Sie besteht aus zwei Richtungsvektoren:

- Der _Frontvektor_, definiert durch die drei einheitslosen Parameter `x`, `y` und `z`, beschreibt die Richtung des Gesichts des Zuhörers, also die Richtung, in die die Nase der Person zeigt. Der Standardwert des Frontvektors ist `(0, 0, -1)`.
- Der _Up-Vektor_, definiert durch die drei einheitslosen Parameter `xUp`, `yUp` und `zUp`, beschreibt die Richtung des oberen Teils des Kopfes des Zuhörers. Der Standardwert des Up-Vektors ist `(0, 1, 0)`.

Die beiden Vektoren müssen durch einen Winkel von 90° getrennt sein – in der linearen Analyse müssen sie zueinander senkrecht sein.

## Syntax

```js-nolint
setOrientation(x, y, z, xUp, yUp, zUp)
```

### Parameter

- `x`
  - : Der x-Wert des Frontvektors des Zuhörers.
- `y`
  - : Der y-Wert des Frontvektors des Zuhörers.
- `z`
  - : Der z-Wert des Frontvektors des Zuhörers.
- `xUp`
  - : Der x-Wert des Up-Vektors des Zuhörers.
- `yUp`
  - : Der y-Wert des Up-Vektors des Zuhörers.
- `zUp`
  - : Der z-Wert des Up-Vektors des Zuhörers.

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
