---
title: "AudioContext: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/AudioContext/sinkId
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt die Sink-ID des aktuellen Ausgabegeräts für Audio zurück.

## Wert

Diese Eigenschaft gibt je nach Einstellung der Sink-ID einen der folgenden Werte zurück:

- Ein leerer String
  - : Wenn keine explizite Sink-ID gesetzt wurde, wird das standardmäßige System-Audioausgabegerät verwendet, und `sinkId` gibt einen leeren String zurück.
- Ein String
  - : Wenn die Sink-ID als String-Wert gesetzt ist (unter Verwendung von [`setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) oder der `sinkId`-Option des [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktors), gibt `sinkId` denselben String-Wert zurück.
- Ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt
  - : Wenn die Sink-ID als Optionsobjekt gesetzt ist (unter Verwendung von [`setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) oder der `sinkId`-Option des [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktors), gibt `sinkId` ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt zurück, das dieselben Werte widerspiegelt, die im ursprünglichen Optionsobjekt festgelegt wurden.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) erstellen wir einen Audiografen, der einen dreisekündigen Rauschstoß von Weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) generiert, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) schicken, um die Lautstärke etwas zu reduzieren. Wir bieten dem Benutzer auch ein Dropdown-Menü, um das Audioausgabegerät zu ändern.

Wenn die Wiedergabetaste geklickt wird, bauen wir den Audiografen zusammen und starten ihn, und wir protokollieren auch Informationen über das aktuelle Gerät in der Konsole basierend auf dem Wert von `sinkId`:

- Ein leerer String bedeutet, dass das Standardgerät weiterhin verwendet wird.
- Wenn der Wert ein Objekt ist, wird das Audio auf keinem Gerät abgespielt, da wir ein Optionsobjekt mit `type: 'none'` gesetzt haben.
- Andernfalls wird der Wert eine Sink-ID-Zeichenfolge sein, die wir protokollieren.

```js
playBtn.addEventListener("click", () => {
  const source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer;
  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();

  if (audioCtx.sinkId === "") {
    console.log("Audio playing on default device");
  } else if (
    typeof audioCtx.sinkId === "object" &&
    audioCtx.sinkId.type === "none"
  ) {
    console.log("Audio not playing on any device");
  } else {
    console.log(`Audio playing on device ${audioCtx.sinkId}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Änderung des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
