---
title: AudioScheduledSourceNode
slug: Web/API/AudioScheduledSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die `AudioScheduledSourceNode`-Schnittstelle—Teil der Web Audio API—ist eine übergeordnete Schnittstelle für mehrere Arten von Audio-Quellknotenschnittstellen, die die Fähigkeit teilen, gestartet und gestoppt zu werden, optional zu angegebenen Zeiten. Diese Schnittstelle definiert speziell die Methoden {{domxref("AudioScheduledSourceNode.start", "start()")}} und {{domxref("AudioScheduledSourceNode.stop", "stop()")}}, sowie das Ereignis {{domxref("AudioScheduledSourceNode.ended_event", "ended")}}.

> [!NOTE]
> Sie können kein `AudioScheduledSourceNode`-Objekt direkt erstellen. Verwenden Sie stattdessen eine Schnittstelle, die es erweitert, wie zum Beispiel {{domxref("AudioBufferSourceNode")}}, {{domxref("OscillatorNode")}} oder {{domxref("ConstantSourceNode")}}.

Sofern nicht anders angegeben, geben Knoten, die auf `AudioScheduledSourceNode` basieren, Stille aus, wenn sie nicht spielen (das heißt, bevor `start()` aufgerufen wird und nachdem `stop()` aufgerufen wurde). Stille wird, wie immer, durch einen Strom von Abtastwerten mit dem Wert Null (0) dargestellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("AudioNode")}}._

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, {{domxref("AudioNode")}}, und fügt die folgenden Methoden hinzu:_

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : Plant den Knoten so, dass er den konstanten Klang zu der angegebenen Zeit zu spielen beginnt. Wenn keine Zeit angegeben ist, beginnt der Knoten sofort zu spielen.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : Plant den Knoten so, dass er zu der angegebenen Zeit aufhört zu spielen. Wenn keine Zeit angegeben ist, stoppt der Knoten sofort das Spielen.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, wenn der Quellknoten das Abspielen beendet hat, entweder weil eine vorbestimmte Stoppzeit erreicht wurde, die gesamte Dauer des Audios abgespielt wurde oder weil der gesamte Puffer abgespielt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
