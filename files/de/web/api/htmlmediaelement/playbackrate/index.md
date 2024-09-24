---
title: "HTMLMediaElement: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.playbackRate`**-Eigenschaft legt die Wiedergabegeschwindigkeit der Medien fest. Diese wird verwendet, um Benutzersteuerungen für Vorlauf, Zeitlupe usw. zu implementieren. Die normale Wiedergabegeschwindigkeit wird mit diesem Wert multipliziert, um die aktuelle Geschwindigkeit zu erhalten, wobei ein Wert von 1.0 normale Geschwindigkeit angibt.

Ein negativer `playbackRate`-Wert gibt an, dass die Medien rückwärts abgespielt werden sollen, jedoch ist die Unterstützung dafür noch nicht weit verbreitet. (Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.)

Der Ton wird stummgeschaltet, wenn die Vorlauf- oder Zeitlupengeschwindigkeit außerhalb eines nützlichen Bereichs liegt (zum Beispiel stummschaltet Gecko den Ton außerhalb des Bereichs von `0.25` bis `4.0`).

Die Tonhöhe wird standardmäßig korrigiert. Sie können die Tonhöhenkorrektur mit der [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)-Eigenschaft deaktivieren.

## Wert

Ein [`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). `1.0` bedeutet "normale Geschwindigkeit". Werte unter `1.0` lassen die Medien langsamer als normal abspielen, höhere Werte lassen sie schneller abspielen. (**Standard:** `1.0`)

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.playbackRate); // Expected Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.playbackRate`-Eigenschaft
- Browser-Fehlermeldungen zur Unterstützung negativer `playbackRate` in [Firefox](https://bugzil.la/1468019) und [Blink](https://crbug.com/40410591) (Chrome, etc.)
- Das Web Hypertext Application Technology Working Group (WHATWG) [Issue zur Unterstützung von negativen `playbackRate`](https://github.com/whatwg/html/issues/3754)
