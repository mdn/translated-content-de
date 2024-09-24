---
title: "AudioContext: sinkId Eigenschaft"
short-title: sinkId
slug: Web/API/AudioContext/sinkId
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`sinkId`** der
{{domxref("AudioContext")}}-Schnittstelle gibt die Sink-ID des aktuellen Audio-Ausgabegeräts zurück.

## Wert

Diese Eigenschaft gibt einen der folgenden Werte zurück, je nachdem, wie die Sink-ID festgelegt wurde:

- Ein leerer String
  - : Wenn keine Sink-ID explizit festgelegt wurde, wird das standardmäßige System-Audio-Ausgabegerät verwendet, und `sinkId` gibt einen leeren String zurück.
- Ein String
  - : Wenn die Sink-ID als Stringwert festgelegt ist (mithilfe von {{domxref("AudioContext.setSinkId", "setSinkId()")}} oder der `sinkId` {{domxref("AudioContext.AudioContext", "AudioContext()")}} Konstruktoroption), gibt `sinkId` denselben Stringwert zurück.
- Ein {{domxref("AudioSinkInfo")}}-Objekt
  - : Wenn die Sink-ID als Optionsobjekt festgelegt ist (mithilfe von {{domxref("AudioContext.setSinkId", "setSinkId()")}} oder der `sinkId` {{domxref("AudioContext.AudioContext", "AudioContext()")}} Konstruktoroption), gibt `sinkId` ein {{domxref("AudioSinkInfo")}}-Objekt zurück, das die gleichen Werte widerspiegelt, die im ursprünglichen Optionsobjekt festgelegt wurden.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) erstellen wir einen Audiographen, der ein dreisekündiges Rauschen über einen {{domxref("AudioBufferSourceNode")}} erzeugt, das wir auch durch einen {{domxref("GainNode")}} leiten, um die Lautstärke etwas zu reduzieren. Zudem bieten wir dem Benutzer ein Dropdown-Menü, um das Audio-Ausgabegerät zu ändern.

Wenn die Play-Taste gedrückt wird, setzen wir den Audiographen zusammen und starten ihn, und wir protokollieren auch Informationen über das aktuelle Gerät in die Konsole basierend auf dem Wert von `sinkId`:

- Ein leerer String bedeutet, dass das Standardgerät weiterhin verwendet wird.
- Wenn der Wert ein Objekt ist, wird das Audio auf keinem Gerät abgespielt, da wir ein Optionsobjekt mit `type: 'none'` gesetzt haben.
- Andernfalls ist der Wert eine Sink-ID als String, die wir protokollieren.

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
- [Ändern des Zielausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
