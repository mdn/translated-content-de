---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das `AudioScheduledSourceNode` Interface—Teil der Web Audio API—ist ein übergeordnetes Interface für mehrere Typen von Audioquellknoten-Interfaces, die die Fähigkeit teilen, gestartet und gestoppt zu werden, optional zu angegebenen Zeiten. Insbesondere definiert dieses Interface die Methoden [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sowie das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis.

> [!NOTE]
> Sie können kein `AudioScheduledSourceNode` Objekt direkt erstellen. Verwenden Sie stattdessen ein Interface, das es erweitert, wie zum Beispiel [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

Sofern nicht anders angegeben, geben Knoten, die auf `AudioScheduledSourceNode` basieren, Stille aus, wenn sie nicht spielen (das heißt, bevor `start()` aufgerufen wird und nachdem `stop()` aufgerufen wurde). Stille wird, wie immer, durch einen Strom von Samples mit dem Wert null (0) dargestellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`AudioNode`](/de/docs/Web/API/AudioNode), und fügt die folgenden Methoden hinzu:_

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant, dass der Knoten den konstanten Ton zu der angegebenen Zeit zu spielen beginnt. Wenn keine Zeit angegeben ist, beginnt der Knoten sofort zu spielen.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant, dass der Knoten zu der angegebenen Zeit aufhört zu spielen. Wenn keine Zeit angegeben ist, hört der Knoten sofort auf zu spielen.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der `oneventname` Eigenschaft dieses Interfaces zuweisen:

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, wenn der Quellknoten aufgehört hat zu spielen, entweder weil eine vorher festgelegte Stoppzeit erreicht wurde, die gesamte Dauer des Audios abgespielt wurde oder weil der gesamte Buffer abgespielt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
