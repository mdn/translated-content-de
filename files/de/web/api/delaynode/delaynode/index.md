---
title: "DelayNode: DelayNode() Konstruktor"
short-title: DelayNode()
slug: Web/API/DelayNode/DelayNode
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Web Audio API")}}

Der **`DelayNode()`**
Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API)
erstellt ein neues {{domxref("DelayNode")}}-Objekt mit einer Verzögerungsleitung; ein AudioNode
Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und
deren Weiterleitung an den Ausgang verursacht.

## Syntax

```js-nolint
new DelayNode(context)
new DelayNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen {{domxref("AudioContext")}} oder {{domxref("OfflineAudioContext")}}.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Optionen des Verzögerungsknotens angibt. Kann die folgenden Mitglieder enthalten:

    - `delayTime`
      - : Die anfängliche Verzögerungszeit für den Knoten in Sekunden. Der
        Standard ist `0`.
    - `maxDelayTime`
      - : Die maximale Verzögerungszeit für den Knoten in Sekunden.
        Standardmäßig `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um festzulegen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) in Verbindungen zu allen Eingängen des Knotens verwendet werden. (Weitere Informationen finden Sie unter
        {{domxref("AudioNode.channelCount")}}.) Seine Verwendung und genaue
        Definition hängen vom Wert des `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen
        den Eingängen und Ausgängen des Knotens übereinstimmen müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der
        Standardwerte.)

### Rückgabewert

Eine neue {{domxref("DelayNode")}} Objektinstanz.

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
