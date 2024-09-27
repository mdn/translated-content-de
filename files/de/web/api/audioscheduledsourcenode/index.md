---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das `AudioScheduledSourceNode`-Interface – Teil der Web Audio API – ist ein übergeordnetes Interface für mehrere Arten von Audiosourcen-Node-Interfaces, die die Fähigkeit teilen, gestartet und gestoppt zu werden, optional zu angegebenen Zeiten. Dieses Interface definiert insbesondere die Methoden [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sowie das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis.

> [!NOTE]
> Sie können kein `AudioScheduledSourceNode`-Objekt direkt erstellen. Stattdessen verwenden Sie ein Interface, das es erweitert, wie zum Beispiel [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

Sofern nicht anders angegeben, geben Nodes, die auf `AudioScheduledSourceNode` basieren, Stille aus, wenn sie nicht spielen (das heißt, bevor `start()` aufgerufen wird und nachdem `stop()` aufgerufen wurde). Stille wird, wie immer, durch einen Strom von Proben mit dem Wert Null (0) dargestellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface, [`AudioNode`](/de/docs/Web/API/AudioNode), und fügt die folgenden Methoden hinzu:_

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant den Node so, dass er den konstanten Ton zur angegebenen Zeit zu spielen beginnt. Wenn keine Zeit angegeben ist, beginnt der Node sofort zu spielen.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant den Node so, dass er zur angegebenen Zeit aufhört zu spielen. Wenn keine Zeit angegeben ist, stoppt der Node sofort das Spielen.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Ausgelöst, wenn der Sourcen-Node das Abspielen beendet hat, entweder weil er eine vordefinierte Stoppzeit erreicht hat, die volle Dauer des Audios abgespielt wurde oder weil der gesamte Puffer abgespielt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
