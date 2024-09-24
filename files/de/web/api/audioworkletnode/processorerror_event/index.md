---
title: "AudioWorkletNode: processorerror-Ereignis"
short-title: processorerror
slug: Web/API/AudioWorkletNode/processorerror_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{ APIRef("Web Audio API") }}{{SecureContext_Header}}

Das `processorerror`-Ereignis wird ausgelöst, wenn der zugrunde liegende {{domxref("AudioWorkletProcessor")}} hinter dem Node eine Ausnahme in seinem Konstruktor, der {{domxref("AudioWorkletProcessor.process", "process")}}-Methode oder in einer benutzerdefinierten Klassenmethode wirft.

Sobald eine Ausnahme ausgelöst wird, gibt der Prozessor (und somit der Node) während seiner gesamten Lebensdauer Stille aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("processorerror", (event) => { })

onprocessorerror = (event) => { }
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Um informiert zu werden, wenn der Prozessor eine Ausnahme wirft, können Sie einen Handler zu Ihrer {{domxref("AudioWorkletNode")}}-Instanz hinzufügen, indem Sie {{domxref("EventTarget.addEventListener", "addEventListener()")}} wie folgt verwenden:

```js
whiteNoiseNode.addEventListener("processorerror", (event) => {
  console.error("There was an error!");
});
```

Alternativ können Sie die `onprocessorerror`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `processorerror`-Ereignis festzulegen:

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
