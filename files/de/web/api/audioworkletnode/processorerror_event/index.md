---
title: "AudioWorkletNode: processorerror-Ereignis"
short-title: processorerror
slug: Web/API/AudioWorkletNode/processorerror_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{ APIRef("Web Audio API") }}{{SecureContext_Header}}

Das `processorerror`-Ereignis wird ausgelöst, wenn die zugrunde liegende [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) hinter dem Node in seinem Konstruktor, der [`process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode oder einer beliebigen benutzerdefinierten Klassenmethode eine Ausnahme wirft.

Sobald eine Ausnahme ausgelöst wird, gibt der Prozessor (und somit der Node) während seiner gesamten Lebensdauer Stille aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("processorerror", (event) => { })

onprocessorerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Um informiert zu werden, wenn der Prozessor eine Ausnahme auslöst, können Sie Ihrer [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Handler hinzufügen, wie folgt:

```js
whiteNoiseNode.addEventListener("processorerror", (event) => {
  console.error("There was an error!");
});
```

Alternativ können Sie die `onprocessorerror`-Ereignisbehandlungseigenschaft verwenden, um einen Handler für das `processorerror`-Ereignis festzulegen:

```js
whiteNoiseNode.onprocessorerror = (event) => {
  console.error("There was an error!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
