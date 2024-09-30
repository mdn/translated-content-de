---
title: "DelayNode: delayTime-Eigenschaft"
short-title: delayTime
slug: Web/API/DelayNode/delayTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `delayTime`-Eigenschaft der [`DelayNode`](/de/docs/Web/API/DelayNode)-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verzögerungsmenge darstellt, die angewendet werden soll.

`delayTime` wird in Sekunden ausgedrückt, der minimale Wert ist `0` und der maximale Wert wird durch das `maxDelayTime`-Argument der [`BaseAudioContext.createDelay`](/de/docs/Web/API/BaseAudioContext/createDelay)-Methode definiert, die es erstellt hat.

> [!NOTE]
> Obwohl das zurückgegebene [`AudioParam`](/de/docs/Web/API/AudioParam) schreibgeschützt ist, ist der Wert, den es darstellt, es nicht.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

## Beispiele

Siehe [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
