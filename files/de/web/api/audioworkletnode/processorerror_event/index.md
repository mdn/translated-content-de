---
title: "AudioWorkletNode: processorerror-Ereignis"
short-title: processorerror
slug: Web/API/AudioWorkletNode/processorerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{ APIRef("Web Audio API") }}{{SecureContext_Header}}

Das `processorerror`-Ereignis wird ausgelöst, wenn der dem Knoten zugrunde liegende [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) in seinem Konstruktor, in der Methode [`process`](/de/docs/Web/API/AudioWorkletProcessor/process) oder in einer benutzerdefinierten Klassenmethode eine Ausnahme auslöst.

Sobald eine Ausnahme ausgelöst wurde, geben der Prozessor und damit auch der Knoten für ihre gesamte verbleibende Lebensdauer Stille aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("processorerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onprocessorerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Damit Sie benachrichtigt werden, wenn der Prozessor eine Ausnahme auslöst, können Sie Ihrer [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Event-Handler hinzufügen:

```js
whiteNoiseNode.addEventListener("processorerror", (event) => {
  console.error("There was an error!");
});
```

Alternativ können Sie über die Event-Handler-Eigenschaft `onprocessorerror` einen Event-Handler für das `processorerror`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch ein zuvor über `onprocessorerror` festgelegter Event-Handler ersetzt wird:

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
