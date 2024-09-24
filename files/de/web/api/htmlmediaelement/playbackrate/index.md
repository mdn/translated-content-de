---
title: "HTMLMediaElement: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.playbackRate`**-Eigenschaft legt die Geschwindigkeit fest, mit der die Medien wiedergegeben werden. Dies wird verwendet, um Nutzersteuerungen für schnelles Vor- oder langsames Zurückspulen usw. zu implementieren. Die normale Wiedergaberate wird mit diesem Wert multipliziert, um die aktuelle Geschwindigkeit zu erhalten, sodass ein Wert von 1,0 normale Geschwindigkeit anzeigt.

Ein negativer `playbackRate`-Wert zeigt an, dass die Medien rückwärts abgespielt werden sollen, jedoch ist die Unterstützung dafür noch nicht weit verbreitet. (Siehe [Browserkompatibilität](#browserkompatibilität) für Details.)

Der Ton wird stummgeschaltet, wenn das schnelle Vor- oder langsame Zurückspulen außerhalb eines nützlichen Bereichs liegt (zum Beispiel schaltet Gecko den Ton außerhalb des Bereichs von `0.25` bis `4.0` stumm).

Die Tonhöhe des Audios wird standardmäßig korrigiert. Sie können die Tonhöhenkorrektur mit der {{domxref("HTMLMediaElement.preservesPitch")}}-Eigenschaft deaktivieren.

## Wert

Ein [`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). `1.0` ist "normale Geschwindigkeit", Werte unter `1.0` lassen die Medien langsamer als normal abspielen, höhere Werte lassen sie schneller abspielen. (**Standard:** `1.0`)

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.playbackRate); // Erwartete Ausgabe: 1
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.playbackRate`-Eigenschaft
- Browser-Fehlerberichte zur Unterstützung negativer `playbackRate` in [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1468019) und [Blink](https://issues.chromium.org/issues/40410591) (Chrome, etc.)
- Der Web Hypertext Application Technology Working Group (WHATWG) [Issue zur Anforderung der Unterstützung für negative `playbackRate`](https://github.com/whatwg/html/issues/3754)
