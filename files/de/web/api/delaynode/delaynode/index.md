---
title: "DelayNode: DelayNode() Konstruktor"
short-title: DelayNode()
slug: Web/API/DelayNode/DelayNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`DelayNode()`**
Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API)
erstellt ein neues [`DelayNode`](/de/docs/Web/API/DelayNode)-Objekt mit einer Verzögerungsstrecke; ein AudioNode
Audioverarbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und
deren Weiterleitung an die Ausgabe bewirkt.

## Syntax

```js-nolint
new DelayNode(context)
new DelayNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext) oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext).
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen des Delay-Nodes spezifiziert. Kann die folgenden Mitglieder enthalten:
    - `delayTime`
      - : Die anfängliche Verzögerungszeit für den Node, in Sekunden. Der Standardwert ist `0`.
    - `maxDelayTime`
      - : Die maximale Verzögerungszeit für den Node, in Sekunden.
        Der Standardwert ist `1`.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu den Eingängen des Nodes [hoch- und runtergemixt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Nodes angeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das Audio [hoch- und runtergemixt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`DelayNode`](/de/docs/Web/API/DelayNode)-Objekts.

## Beispiele

```js
const audioCtx = new AudioContext();
const delayNode = new DelayNode(audioCtx, {
  delayTime: 0.5,
  maxDelayTime: 2,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
