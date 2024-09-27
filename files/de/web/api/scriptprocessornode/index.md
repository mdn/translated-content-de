---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Die `ScriptProcessorNode`-Schnittstelle ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mit JavaScript.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

Die `ScriptProcessorNode`-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das mit zwei Puffern verbunden ist, einem für die Eingabe-Audiodaten und einem für die verarbeiteten Ausgangs-Audiodaten. Jedes Mal, wenn der Eingabepuffer neue Daten enthält, wird ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, an das Objekt gesendet, und der Ereignishandler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.

![Der ScriptProcessorNode speichert die Eingabe in einem Puffer und sendet das audioprocess-Ereignis. Der EventHandler nimmt den Eingabepuffer und füllt den Ausgabepuffer, der vom ScriptProcessorNode an den Ausgang gesendet wird.](webaudioscriptprocessingnode.png)

Die Größe des Eingabe- und Ausgabepuffers wird bei der Erstellung definiert, wenn die Methode [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) aufgerufen wird (beide werden durch den `bufferSize`-Parameter von [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert). Die Puffergröße muss eine Potenz von 2 zwischen `256` und `16384` sein, also `256`, `512`, `1024`, `2048`, `4096`, `8192` oder `16384`. Kleine Zahlen verringern die _Latenz_, aber große Zahlen können notwendig sein, um Audioabbrüche und Störungen zu vermeiden.

Wenn die Puffergröße nicht definiert ist, was empfohlen wird, wählt der Browser eine, die sein Heuristik für angemessen hält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalzähmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code> (nicht verwendet im Standardzähmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ScriptProcessorNode.bufferSize`](/de/docs/Web/API/ScriptProcessorNode/bufferSize) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt eine Ganzzahl zurück, die sowohl die Eingabe- als auch die Ausgabe-Puffergröße darstellt. Der Wert kann eine Potenz von 2 im Bereich von `256` bis `16384` sein.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle an:

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn ein Eingabepuffer eines `ScriptProcessorNode` bereit zur Verarbeitung ist. Auch über die `onaudioprocess`-Ereignishandler-Eigenschaft verfügbar.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

Seit der Veröffentlichung der [Web Audio API-Spezifikation](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) am 29. August 2014 ist diese Funktion veraltet. Sie wird nicht mehr weiterentwickelt, um ein Standard zu werden.

Sie wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle ersetzt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
