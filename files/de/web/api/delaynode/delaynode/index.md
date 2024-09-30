---
title: "DelayNode: DelayNode() Konstruktor"
short-title: DelayNode()
slug: Web/API/DelayNode/DelayNode
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Web Audio API")}}

Der **`DelayNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API)
erstellt ein neues [`DelayNode`](/de/docs/Web/API/DelayNode)-Objekt mit einer Verzögerungsleitung; ein AudioNode-Audio-Verarbeitungsmodul, das eine Verzögerung zwischen dem Eingang von Daten und deren Weiterleitung an den Ausgang verursacht.

## Syntax

```js-nolint
new DelayNode(context)
new DelayNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext) oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt, das die Optionen des Verzögerungsknotens angibt. Kann die folgenden Mitglieder enthalten:

    - `delayTime`
      - : Die anfängliche Verzögerungszeit für den Knoten in Sekunden. Der Standardwert ist `0`.
    - `maxDelayTime`
      - : Die maximale Verzögerungszeit für den Knoten in Sekunden.
        Standardmäßig `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) der Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden sollen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das Audio [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
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
