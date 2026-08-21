---
title: "AudioListener: setOrientation()-Methode"
short-title: setOrientation()
slug: Web/API/AudioListener/setOrientation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("Web Audio API") }}

Die `setOrientation()`-Methode der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle definiert die Orientierung des Zuhörers.

Sie besteht aus zwei Richtungsvektoren:

- Der _Frontvektor_, definiert durch die drei einheitslosen Parameter `x`, `y` und `z`, beschreibt die Richtung des Gesichts des Zuhörers, also die Richtung, in die die Nase der Person zeigt. Der Standardwert des Frontvektors ist `(0, 0, -1)`.
- Der _Aufwärtsvektor_, definiert durch drei einheitslose Parameter `xUp`, `yUp` und `zUp`, beschreibt die Richtung der Oberseite des Kopfes des Zuhörers. Der Standardwert des Aufwärtsvektors ist `(0, 1, 0)`.

Die beiden Vektoren müssen durch einen Winkel von 90° getrennt sein — in der linearen Analyse müssen sie senkrecht zueinander stehen.

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
  - : Der x-Wert des Aufwärtsvektors des Zuhörers.
- `yUp`
  - : Der y-Wert des Aufwärtsvektors des Zuhörers.
- `zUp`
  - : Der z-Wert des Aufwärtsvektors des Zuhörers.

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
