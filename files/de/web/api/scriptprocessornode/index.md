---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das `ScriptProcessorNode`-Interface ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

Das `ScriptProcessorNode`-Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioprozessormodul, das mit zwei Puffern verbunden ist: einem mit den Eingabedaten und einem mit den verarbeiteten Ausgabedaten. Jedes Mal, wenn der Eingabepuffer neue Daten enthält, wird ein Ereignis, das das [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Interface implementiert, an das Objekt gesendet, und der Ereignishandler endet, wenn der Ausgabepuffer mit Daten gefüllt ist.

![Das ScriptProcessorNode speichert die Eingabe in einem Puffer, sendet das audioprocess-Ereignis. Der EventHandler nimmt den Eingabepuffer und füllt den Ausgabepuffer, der vom ScriptProcessorNode an die Ausgabe gesendet wird.](webaudioscriptprocessingnode.png)

Die Größe der Ein- und Ausgabepuffer wird bei der Erstellung definiert, wenn die Methode [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) aufgerufen wird (beide werden durch den `bufferSize`-Parameter von [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert). Die Puffergröße muss eine Zweierpotenz zwischen `256` und `16384` sein, also `256`, `512`, `1024`, `2048`, `4096`, `8192` oder `16384`. Kleine Werte verringern die _Latenz_, aber große Werte können notwendig sein, um Audiounterbrechungen und -störungen zu vermeiden.

Wenn die Puffergröße nicht definiert ist, was empfohlen wird, wählt der Browser eine aus, die er nach seinen Heuristiken für geeignet hält.

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht im Standardanzahlmodus verwendet)</td>
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
  - : Gibt einen ganzzahligen Wert zurück, der sowohl die Eingabe- als auch die Ausgabepuffergröße darstellt. Sein Wert kann eine Zweierpotenz im Bereich `256` – `16384` sein.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Events

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zu:

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn ein Eingabepuffer eines `ScriptProcessorNode` bereit zur Verarbeitung ist.
    Auch über die `onaudioprocess` Ereignishandler-Eigenschaft verfügbar.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

Seit der Veröffentlichung der [Web Audio API-Spezifikation](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) am 29. August 2014 ist dieses Feature veraltet. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Es wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
