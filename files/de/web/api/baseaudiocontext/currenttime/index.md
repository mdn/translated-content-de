---
title: "BaseAudioContext: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/BaseAudioContext/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `currentTime` der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt eine Gleitkommazahl zurück, die die verstrichene Zeit in der Audiotimeline des Kontextes in Sekunden darstellt. Diese kann verwendet werden, um die Audiowiedergabe zu planen, Timelines zu visualisieren usw. Sie beginnt bei 0.

Während der Kontext läuft, erhöht sich dieser Wert in Schritten eines Audio-Rendering-Blocks bzw. _Render-Quantums_ und repräsentiert den Beginn des nächsten zu verarbeitenden Blocks. Für einen Block von 128 Beispiel-Frames sind dies ungefähr 2,9 ms bei einer [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) von 44,1 kHz oder 2,7 ms bei 48 kHz. Bei wiederholten Lesevorgängen kann derselbe Wert zurückgegeben werden, bis der nächste Block verarbeitet wird.

Diese Audiotimeline ist getrennt von der Systemuhr, die von {{jsxref("Date.now()")}} verwendet wird. Sie hört auf zu laufen, während der Kontext ausgesetzt ist. Bei einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wird sie unabhängig von der verstrichenen Echtzeit weitergeführt, während Audio gerendert wird.

## Wert

Eine Gleitkommazahl, die die aktuelle Zeit in Sekunden darstellt.

## Beispiele

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.currentTime);
```

## Reduzierte Zeitgenauigkeit

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit von `audioCtx.currentTime` je nach Browsereinstellungen reduziert werden.

Der Wert von `audioCtx.currentTime` basiert auf der Anzahl der verarbeiteten Audio-Beispielframes. In Chrome und Safari wendet der Browser auf diesen Wert keine zusätzliche Timer-Rundung an.

In Firefox ist die Voreinstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und verwendet ein Rundungsintervall von 1 ms oder 0,02 ms in kontextübergreifend isolierten Umgebungen. Firefox vergleicht jedoch zuerst die Dauer eines 128-Frame-Audioblocks mit dem durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfigurierten Intervall (standardmäßig 1 ms), unabhängig von der kontextübergreifenden Isolation. Ist die Blockdauer größer, überspringt Firefox die Timer-Rundung. Bei gängigen Sample-Raten wie 44,1 kHz und 48 kHz folgt der Standardwert daher dem Audio-Block-Timing, anstatt gerundet zu werden.

Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16,667 ms oder das durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfigurierte Intervall, je nachdem, welches größer ist. In diesem Fall verwendet die Audioblock-Dauerprüfung auch dieses größere Intervall.

Zum Beispiel sind dies mögliche Werte in Firefox:

```js
// Audio block timing at 48 kHz with default settings
audioCtx.currentTime;
// Might be:
// 0.0026666666666666666
// 0.005333333333333333
// 0.008
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
audioCtx.currentTime;
// Might be:
// 0.050001
// 0.066668
// 0.083335
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
