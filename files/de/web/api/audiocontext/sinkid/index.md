---
title: "AudioContext: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/AudioContext/sinkId
l10n:
  sourceCommit: 29d7119ff6b46801a0e5a2ce69b734b668812035
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt die Sink-ID des aktuellen Ausgabe-Audiogeräts zurück.

## Wert

Diese Eigenschaft gibt einen der folgenden Werte zurück, abhängig davon, wie die Sink-ID gesetzt wurde:

- Ein leerer String
  - : Wenn eine Sink-ID nicht explizit gesetzt wurde, wird das standardmäßige System-Audioausgabegerät verwendet, und `sinkId` gibt einen leeren String zurück.
- Ein String
  - : Ist die Sink-ID als String-Wert gesetzt (mit [`setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) oder der `sinkId`-Option im [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor), gibt `sinkId` diesen gleichen String-Wert zurück.
- Ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt
  - : Ist die Sink-ID als Optionsobjekt gesetzt (mit [`setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) oder der `sinkId`-Option im [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor), gibt `sinkId` ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt zurück, das die gleichen in dem ursprünglichen Optionsobjekt gesetzten Werte widerspiegelt.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an) erstellen wir einen Audio-Graphen, der eine drei Sekunden lange Folge von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) leiten, um die Lautstärke etwas zu reduzieren. Wir bieten dem Benutzer außerdem ein Dropdown-Menü an, um das Audioausgabegerät zu ändern.

Wenn die Wiedergabe-Taste gedrückt wird, bauen wir den Audio-Graphen zusammen und starten die Wiedergabe. Außerdem protokollieren wir Informationen über das aktuelle Gerät in der Konsole basierend auf dem Wert von `sinkId`:

- Ein leerer String bedeutet, dass das Standardgerät weiterhin verwendet wird.
- Wenn der Wert ein Objekt ist, wird das Audio auf keinem Gerät abgespielt, da wir ein Optionsobjekt mit `type: 'none'` gesetzt haben.
- Andernfalls wird der Wert eine Sink-ID-String sein, und wir protokollieren diese.

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

- [Ändern des Ziel-Ausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
