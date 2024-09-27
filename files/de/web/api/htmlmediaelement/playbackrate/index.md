---
title: "HTMLMediaElement: playbackRate Eigenschaft"
short-title: playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.playbackRate`**-Eigenschaft legt die Rate fest, mit der die Medienwiedergabe erfolgt. Diese wird verwendet, um Benutzersteuerungen für Schnellvorlauf, Zeitlupe usw. zu implementieren. Die normale Wiedergaberate wird mit diesem Wert multipliziert, um die aktuelle Rate zu erhalten. Ein Wert von 1,0 gibt normale Geschwindigkeit an.

Ein negativer `playbackRate`-Wert zeigt an, dass die Medien rückwärts abgespielt werden sollen, aber die Unterstützung dafür ist noch nicht weit verbreitet. (Details siehe [Browser-Kompatibilität](#browser-kompatibilität)).

Der Ton wird stummgeschaltet, wenn der Schnellvorlauf oder die Zeitlupe außerhalb eines nützlichen Bereichs liegt (zum Beispiel schaltet Gecko den Ton außerhalb des Bereichs von `0.25` bis `4.0` stumm).

Die Tonhöhe des Audios wird standardmäßig korrigiert. Sie können die Tonhöhenkorrektur über die [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)-Eigenschaft deaktivieren.

## Wert

Ein [`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). `1.0` ist "normale Geschwindigkeit", Werte unter `1.0` lassen das Medium langsamer als normal abspielen, höhere Werte lassen es schneller abspielen. (**Standard:** `1.0`)

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
- Browser-Fehlerberichte zur Unterstützung negativer `playbackRate` in [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1468019) und [Blink](https://issues.chromium.org/issues/40410591) (Chrome, etc.)
- Das Web Hypertext Application Technology Working Group (WHATWG) [Problem, um Unterstützung für negative `playbackRate` zu verlangen](https://github.com/whatwg/html/issues/3754)
